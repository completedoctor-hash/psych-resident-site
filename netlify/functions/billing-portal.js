/* Opens Stripe's own page where a subscriber can change their card or cancel.
   Copies of the small helpers are kept here on purpose (see create-checkout.js). */
var SK = process.env.STRIPE_SECRET_KEY || "";
function form(obj, prefix, out) {
  out = out || [];
  for (var k in obj) {
    var v = obj[k];
    var key = prefix ? prefix + "[" + k + "]" : k;
    if (v === null || v === undefined) continue;
    if (typeof v === "object") form(v, key, out);
    else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(v)));
  }
  return out;
}

function stripe(path, body, method) {
  if (!SK) return Promise.reject(new Error("no-stripe-key"));
  var opts = { method: method || (body ? "POST" : "GET"),
               headers: { Authorization: "Bearer " + SK } };
  if (body) {
    opts.headers["Content-Type"] = "application/x-www-form-urlencoded";
    opts.body = form(body).join("&");
  }
  return fetch("https://api.stripe.com/v1" + path, opts).then(function (r) {
    return r.json().then(function (j) {
      if (!r.ok) {
        var e = new Error((j && j.error && j.error.message) || ("stripe " + r.status));
        e.status = r.status; throw e;
      }
      return j;
    });
  });
}

/* The signed-in person, proved by asking Identity about their own token.
   An email address sent up from a browser is never trusted. */
function whoami(event) {
  var h = event.headers || {};
  var auth = h.authorization || h.Authorization || "";
  if (!/^Bearer\s+\S/i.test(auth)) return Promise.resolve(null);
  var host = h["x-forwarded-host"] || h.host;
  return fetch("https://" + host + "/.netlify/identity/user", { headers: { Authorization: auth } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .catch(function () { return null; });
}

function json(code, obj) {
  return { statusCode: code,
           headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
           body: JSON.stringify(obj) };
}

function siteUrl(event) {
  var h = event.headers || {};
  return "https://" + (h["x-forwarded-host"] || h.host);
}


exports.handler = function (event) {
  if (event.httpMethod !== "POST") return Promise.resolve(json(405, { error: "method" }));
  if (!SK) return Promise.resolve(json(503, { error: "not-set-up" }));
  return whoami(event).then(function (user) {
    if (!user || !user.id) return json(401, { error: "signin" });
    var subs = (user.app_metadata && user.app_metadata.tpr_subs) || {};
    var sid = null; for (var r in subs) { if (subs[r] && subs[r].id) { sid = subs[r].id; break; } }
    var find = sid ? stripe("/subscriptions/" + encodeURIComponent(sid)).then(function (s) { return s.customer; })
                   : stripe("/customers?limit=1&email=" + encodeURIComponent(user.email)).then(function (c) { return c.data && c.data[0] && c.data[0].id; });
    return find.then(function (cus) {
      if (!cus) return json(404, { error: "no-subscription", message: "There is no subscription on this account." });
      return stripe("/billing_portal/sessions", { customer: cus, return_url: siteUrl(event) + "/account.html" })
        .then(function (p) { return json(200, { url: p.url }); });
    }).catch(function (e) {
      return json(502, { error: "stripe", message: e.message || "Stripe did not answer." });
    });
  });
};

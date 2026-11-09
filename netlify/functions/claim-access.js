/* ---------- shared, kept inside each function on purpose ----------
   This site is deployed by dragging a folder onto Netlify. Nothing here may
   depend on an npm package or on a file next to it, so each function carries
   its own copy of these few helpers. ------------------------------------- */

var SK = process.env.STRIPE_SECRET_KEY || "";

/* Prices and lengths. From PRICING AND PAYMENT, decided 2 October 2026.
   Amounts in pence. One-off payments: access runs for `days` and stops. */
var PLANS = {
  "res-m": { pence: 1999, role: "res-sub", days: 31, sub: "month", name: "Psychiatry for Residents: every specialty, monthly subscription" },
  "res-audio": { pence: 13999, role: "res-audio", days: 90, name: "Clinical Communication Skills audio course (all specialties), 3 months" },
  m1:     { pence: 5900,  role: "paper-a", days: 30,  name: "MRCPsych Paper A course, 1 month" },
  m2:     { pence: 10900, role: "paper-a", days: 60,  name: "MRCPsych Paper A course, 2 months" },
  m3:     { pence: 16900, role: "paper-a", days: 90,  name: "MRCPsych Paper A course, 3 months" },
  m6:     { pence: 29900, role: "paper-a", days: 180, name: "MRCPsych Paper A course, 6 months" },
  b1:     { pence: 5900,  role: "paper-b", days: 30,  name: "MRCPsych Paper B course, 1 month" },
  b2:     { pence: 10900, role: "paper-b", days: 60,  name: "MRCPsych Paper B course, 2 months" },
  b3:     { pence: 16900, role: "paper-b", days: 90,  name: "MRCPsych Paper B course, 3 months" },
  ca3:    { pence: 5900,  role: "critical-appraisal", days: 90,  name: "Introduction to Critical Appraisal (with flashcards), 3 months" },
  ca6:    { pence: 9900,  role: "critical-appraisal", days: 180, name: "Introduction to Critical Appraisal (with flashcards), 6 months" },
  fa3:    { pence: 5900,  role: "flashcards", days: 90,  name: "Paper A Flashcard Revision Course, 3 months" },
  fa6:    { pence: 9900,  role: "flashcards", days: 180, name: "Paper A Flashcard Revision Course, 6 months" },
  cf1:    { pence: 5900,  role: "ca-full", days: 30,  name: "Full Critical Appraisal Course, 1 month" },
  cf2:    { pence: 10900, role: "ca-full", days: 60,  name: "Full Critical Appraisal Course, 2 months" },
  cf3:    { pence: 16900, role: "ca-full", days: 90,  name: "Full Critical Appraisal Course, 3 months" },
  cf6:    { pence: 29900, role: "ca-full", days: 180, name: "Full Critical Appraisal Course, 6 months" },
  "live-b": { pence: 35000, role: "live-b", days: 90, name: "Paper B Critical Appraisal Live Course (8 weeks) with 3 months Critical Appraisal Course access" },
  "bo-pa-neuro": { pence: 2999, role: "book-pa-neuro", days: 365, name: "Neuroscience Essentials book: online interactive + Box copy, 12 months" },
  "bd-pa-neuro": { pence: 1999, role: "dl-pa-neuro", days: 365, name: "Neuroscience Essentials book: Box copy only (view only, 12 months)" },
  "bo-pa-ca": { pence: 2999, role: "book-pa-ca", days: 365, name: "Classification & Assessment book: online interactive + Box copy, 12 months" },
  "bd-pa-ca": { pence: 1999, role: "dl-pa-ca", days: 365, name: "Classification & Assessment book: Box copy only (view only, 12 months)" },
  "bo-pa-psych": { pence: 2999, role: "book-pa-psych", days: 365, name: "Psychology & Human Development book: online interactive + Box copy, 12 months" },
  "bd-pa-psych": { pence: 1999, role: "dl-pa-psych", days: 365, name: "Psychology & Human Development book: Box copy only (view only, 12 months)" },
  "bo-pa-pharm": { pence: 2999, role: "book-pa-pharm", days: 365, name: "Clinical Psychopharmacology book: online interactive + Box copy, 12 months" },
  "bd-pa-pharm": { pence: 1999, role: "dl-pa-pharm", days: 365, name: "Clinical Psychopharmacology book: Box copy only (view only, 12 months)" },
  "bo-pb-ebm": { pence: 2999, role: "book-pb-ebm", days: 365, name: "Evidence-Based Medicine book: online interactive + Box copy, 12 months" },
  "bd-pb-ebm": { pence: 1999, role: "dl-pb-ebm", days: 365, name: "Evidence-Based Medicine book: Box copy only (view only, 12 months)" },
  "bo-pb-rm": { pence: 2999, role: "book-pb-rm", days: 365, name: "Research Methods book: online interactive + Box copy, 12 months" },
  "bd-pb-rm": { pence: 1999, role: "dl-pb-rm", days: 365, name: "Research Methods book: Box copy only (view only, 12 months)" },
  "bo-pb-stats": { pence: 2999, role: "book-pb-stats", days: 365, name: "Statistics book: online interactive + Box copy, 12 months" },
  "bd-pb-stats": { pence: 1999, role: "dl-pb-stats", days: 365, name: "Statistics book: Box copy only (view only, 12 months)" },
  "bo-pb-econ": { pence: 2999, role: "book-pb-econ", days: 365, name: "Economics, QI & Governance book: online interactive + Box copy, 12 months" },
  "bd-pb-econ": { pence: 1999, role: "dl-pb-econ", days: 365, name: "Economics, QI & Governance book: Box copy only (view only, 12 months)" },
  b6:     { pence: 29900, role: "paper-b", days: 180, name: "MRCPsych Paper B course, 6 months" }
};
/* Only used for a payment that carries no labels of ours, for example one made
   by hand in the Stripe dashboard. Paper A and Paper B cost the same, so an
   unlabelled payment is read as Paper A. Anything bought through the site
   carries its own label and never reaches this. */
function byAmount(pence) {
  for (var k in PLANS) if (PLANS[k].pence === pence) return PLANS[k];
  return null;
}

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

/* ---------------- Opens the access a person has paid for ----------------
   Stripe is the only record of what was bought. This asks Stripe, never the
   browser, and writes the answer onto the Identity account.

   Safe to call as often as you like: it recomputes the same answer and counts
   each payment once, so one payment cannot open two accounts and pressing the
   button twice cannot add two months. */

var DAY = 86400000;

function planFor(sess) {
  var m = sess.metadata || {};
  if (m.role && m.days) return { role: String(m.role), days: parseInt(m.days, 10) || 0 };
  var guess = byAmount(sess.amount_total);
  return guess ? { role: guess.role, days: guess.days } : null;
}

function isPaid(s) {
  return s && (s.payment_status === "paid" || s.payment_status === "no_payment_required");
}

/* Every paid checkout that belongs to this person. */
function sessionsFor(user, oneId) {
  var email = String(user.email || "").toLowerCase();
  var got = {}, list = [];

  function keep(s) {
    if (!s || !s.id || got[s.id] || !isPaid(s)) return;
    var ref = s.client_reference_id === user.id;
    var mine = ((s.customer_details && s.customer_details.email) || s.customer_email || "").toLowerCase() === email;
    if (!ref && !mine) return;
    got[s.id] = 1; list.push(s);
  }

  var jobs = [];
  if (oneId) jobs.push(stripe("/checkout/sessions/" + encodeURIComponent(oneId)).then(keep, function () {}));

  jobs.push(
    stripe("/checkout/sessions?limit=100&customer_details[email]=" + encodeURIComponent(email))
      .then(function (r) { (r.data || []).forEach(keep); },
            function () {
              /* Older API versions cannot filter on the email address. Read the
                 recent checkouts and sort them out here instead. */
              return stripe("/checkout/sessions?limit=100")
                .then(function (r) { (r.data || []).forEach(keep); }, function () {});
            })
  );

  return Promise.all(jobs).then(function () {
    list.sort(function (a, b) { return (a.created || 0) - (b.created || 0); });
    return list;
  });
}

exports.handler = function (event, context) {
  if (event.httpMethod !== "POST") return Promise.resolve(json(405, { error: "method" }));
  if (!SK) return Promise.resolve(json(503, { error: "not-set-up" }));

  var body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) {}

  return whoami(event).then(function (user) {
    if (!user || !user.id) return json(401, { error: "signin" });

    var id = context && context.clientContext && context.clientContext.identity;
    if (!id || !id.url || !id.token) {
      return json(500, { error: "no-admin",
        message: "The site could not update the account automatically." });
    }

    var meta = user.app_metadata || {};
    var roles = (meta.roles || []).slice();
    var plans = Object.assign({}, meta.tpr_plans || {});
    var claims = (meta.tpr_claims || []).slice();
    var now = Date.now();
    var added = [];

    var subs = Object.assign({}, meta.tpr_subs || {});
    return sessionsFor(user, body.s).then(function (list) {
      /* Subscriptions: read each one from Stripe every time. While it is active
         (or a renewal payment is being retried) access runs to the end of the
         paid month plus two days' grace. Once cancelled, it simply runs out. */
      var subJobs = list.filter(function (s) { return s.mode === "subscription" && s.subscription; }).map(function (s) {
        var sid = typeof s.subscription === "string" ? s.subscription : s.subscription.id;
        return stripe("/subscriptions/" + encodeURIComponent(sid)).then(function (sub) {
          var p = planFor(s); if (!p || !p.role) return;
          var end = sub.current_period_end || (sub.items && sub.items.data && sub.items.data[0] && sub.items.data[0].current_period_end) || 0;
          var live = ["active", "trialing", "past_due"].indexOf(sub.status) !== -1;
          subs[p.role] = { id: sid, status: sub.status, cancel_at_period_end: !!sub.cancel_at_period_end };
          if (end) {
            var until = end * 1000 + (live ? 2 * DAY : 0);
            if (!plans[p.role] || Date.parse(plans[p.role]) < until || !live) plans[p.role] = new Date(until).toISOString();
          }
          if (claims.indexOf(s.id) === -1) { claims.push(s.id); added.push({ role: p.role, sub: true, amount: s.amount_total }); }
        }, function () {});
      });
      return Promise.all(subJobs).then(function () { return list.filter(function (s) { return s.mode !== "subscription"; }); });
    }).then(function (list) {
      list.forEach(function (s) {
        if (claims.indexOf(s.id) !== -1) return;
        var p = planFor(s);
        if (!p || !p.role || !p.days) return;
        var from = Math.max(now, Date.parse(plans[p.role] || 0) || 0);
        plans[p.role] = new Date(from + p.days * DAY).toISOString();
        claims.push(s.id);
        added.push({ role: p.role, days: p.days, amount: s.amount_total });
      });

      /* A role that was bought is kept only while it is in date. A role given
         by hand has no end date here and is never touched. */
      var keep = [], seen = {};
      roles.forEach(function (r) {
        r = String(r).toLowerCase();
        if (seen[r]) return;
        if (plans[r] && Date.parse(plans[r]) <= now) return;
        seen[r] = 1; keep.push(r);
      });
      Object.keys(plans).forEach(function (r) {
        if (Date.parse(plans[r]) > now && !seen[r]) { seen[r] = 1; keep.push(r); }
      });
      if (!seen.free) keep.push("free");

      var next = Object.assign({}, meta, {
        roles: keep, tpr_plans: plans, tpr_subs: subs, tpr_claims: claims.slice(-200)
      });

      return fetch(id.url + "/admin/users/" + user.id, {
        method: "PUT",
        headers: { Authorization: "Bearer " + id.token, "Content-Type": "application/json" },
        body: JSON.stringify({ app_metadata: next })
      }).then(function (r) {
        if (!r.ok) return r.text().then(function (t) {
          return json(502, { error: "write-failed", status: r.status, detail: String(t).slice(0, 300) });
        });
        return json(200, { ok: true, roles: keep, plans: plans, added: added, paid: list.length });
      });
    }).catch(function (e) {
      return json(502, { error: "stripe", message: e.message || "Stripe did not answer." });
    });
  });
};

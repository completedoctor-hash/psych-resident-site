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

/* ---------------- Starts a card payment ----------------
   The person must be signed in first, so the payment is tied to the account
   that will receive the access. One-off: Stripe stores no card and charges
   nothing again. */

exports.handler = function (event) {
  if (event.httpMethod !== "POST") return Promise.resolve(json(405, { error: "method" }));
  if (!SK) return Promise.resolve(json(503, { error: "not-set-up",
    message: "Card payment is not switched on yet." }));

  var body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) {}
  var plan = PLANS[String(body.plan || "")];
  if (!plan) return Promise.resolve(json(400, { error: "bad-plan" }));

  return whoami(event).then(function (user) {
    if (!user || !user.id) return json(401, { error: "signin",
      message: "Please sign in first, so the course opens on your own account." });

    var site = siteUrl(event);
    var meta = { uid: user.id, plan: String(body.plan), role: plan.role, days: plan.days };
    var req = {
      mode: plan.sub ? "subscription" : "payment",
      customer_email: user.email,
      client_reference_id: user.id,
      allow_promotion_codes: "true",
      success_url: site + "/thanks.html?s={CHECKOUT_SESSION_ID}",
      cancel_url: site + "/buy.html?cancelled=1",
      metadata: meta,
      line_items: { 0: { quantity: 1, price_data: {
        currency: "gbp", unit_amount: plan.pence, product_data: { name: plan.name } } } }
    };
    /* A subscription renews every month until the person cancels. Stripe keeps
       the card for that; claim-access reads the subscription to extend access. */
    if (plan.sub) {
      req.line_items[0].price_data.recurring = { interval: plan.sub };
      req.subscription_data = { metadata: meta, description: plan.name };
    } else {
      req.payment_intent_data = { description: plan.name };
    }
    return stripe("/checkout/sessions", req).then(function (s) {
      return json(200, { url: s.url });
    }).catch(function (e) {
      return json(502, { error: "stripe", message: e.message || "Stripe refused the request." });
    });
  });
};

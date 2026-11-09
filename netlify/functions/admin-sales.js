/* Admin dashboard data: recent paid checkouts from Stripe and registered users from Identity.
   Only answers for a signed-in account holding the "admin" role. Read-only. */
var SK = process.env.STRIPE_SECRET_KEY || "";
function json(code, obj) { return { statusCode: code, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }, body: JSON.stringify(obj) }; }
function whoami(event) {
  var h = event.headers || {}, auth = h.authorization || h.Authorization || "";
  if (!/^Bearer\s+\S/i.test(auth)) return Promise.resolve(null);
  var host = h["x-forwarded-host"] || h.host;
  return fetch("https://" + host + "/.netlify/identity/user", { headers: { Authorization: auth } })
    .then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
}
exports.handler = async function (event, context) {
  var me = await whoami(event);
  var roles = (me && me.app_metadata && me.app_metadata.roles) || [];
  if (!me || roles.indexOf("admin") === -1) return json(403, { error: "admin-only" });
  var out = { mode: /^sk_live_/.test(SK) ? "live" : (/^sk_test_/.test(SK) ? "test" : "none"), sales: [], users: [] };
  if (SK) {
    var r = await fetch("https://api.stripe.com/v1/checkout/sessions?limit=100&status=complete", { headers: { Authorization: "Bearer " + SK } });
    var j = await r.json().catch(function () { return {}; });
    (j.data || []).forEach(function (s) {
      if (s.payment_status !== "paid") return;
      out.sales.push({ when: s.created * 1000, email: (s.customer_details && s.customer_details.email) || s.customer_email || "",
        amount: (s.amount_total || 0) / 100, currency: (s.currency || "").toUpperCase(),
        plan: (s.metadata && s.metadata.plan) || "", role: (s.metadata && s.metadata.role) || "", id: s.id });
    });
  }
  var id = context && context.clientContext && context.clientContext.identity;
  if (id && id.url && id.token) {
    var u = await fetch(id.url + "/admin/users?per_page=500", { headers: { Authorization: "Bearer " + id.token } });
    var uj = await u.json().catch(function () { return {}; });
    (uj.users || []).forEach(function (x) {
      var m = x.app_metadata || {};
      out.users.push({ email: x.email, joined: x.created_at, confirmed: !!x.confirmed_at, roles: m.roles || [], plans: m.tpr_plans || {} });
    });
  }
  return json(200, out);
};

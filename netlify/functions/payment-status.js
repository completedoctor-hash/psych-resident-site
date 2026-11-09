/* A one-line health check for card payment.
   Open https://thepsychiatricresident.world/.netlify/functions/payment-status
   in a browser. It never reveals the key itself, only whether one has arrived,
   whether it is a test key or a live key, and whether Stripe still accepts it. */

exports.handler = async function () {
  var k = process.env.STRIPE_SECRET_KEY || "";
  var mode = /^sk_live_/.test(k) ? "live" : (/^sk_test_/.test(k) ? "test" : (k ? "unrecognised" : "none"));

  var accepted = null, detail = "";
  if (k && mode !== "unrecognised") {
    try {
      /* A read-only call. It changes nothing and charges nothing. */
      var r = await fetch("https://api.stripe.com/v1/balance", {
        headers: { Authorization: "Bearer " + k }
      });
      accepted = r.ok;
      if (!r.ok) {
        var j = await r.json().catch(function () { return {}; });
        detail = (j && j.error && j.error.message) || ("Stripe answered " + r.status);
      }
    } catch (e) {
      accepted = null;
      detail = "Could not reach Stripe just now, so the key could not be checked.";
    }
  }

  var says;
  if (!k) says = "No Stripe key has reached the site. Add STRIPE_SECRET_KEY in Netlify, under Site configuration, Environment variables, then deploy the folder again.";
  else if (mode === "unrecognised") says = "A key is set but it does not look like a Stripe secret key. It should begin sk_test_ or sk_live_.";
  else if (accepted === null && detail) says = "The key is in place but Stripe could not be reached just now, so it could not be checked. Try this page again in a minute.";
  else if (accepted === false) says = "The key has reached the site but Stripe refuses it. It has probably been deleted or rolled. Create a new one in Stripe, put it in Netlify, and deploy again. Card payment is NOT working.";
  else if (mode === "test") says = "Test mode, and Stripe accepts the key. Card 4242 4242 4242 4242 will work and no real money moves.";
  else says = "Live, and Stripe accepts the key. Real cards are being charged.";

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify({
      cardPaymentWorking: !!k && mode !== "unrecognised" && accepted === true,
      mode: mode,
      stripeAcceptsTheKey: accepted,
      stripeSaid: detail || undefined,
      keyLength: k.length,          /* the length only, never the key */
      says: says
    }, null, 2)
  };
};

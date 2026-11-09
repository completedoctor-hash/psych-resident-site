/* ---------------------------------------------------------------------
   Runs on this site automatically, the instant somebody registers.
   Nobody approves anybody and nobody waits for an email.

   Two things happen here:
     1. The new account is marked as confirmed straight away, so the
        person can sign in immediately. This is what removes the
        dependence on a confirmation email arriving.
     2. The account is given the "free" role, which is the open tier.
        When card payment is connected it will add the paid role to
        the same account in exactly the same automatic way.
   --------------------------------------------------------------------- */
exports.handler = async function (event, context) {
  let user = {};
  try { user = JSON.parse(event.body || "{}").user || {}; } catch (e) {}

  const existing = (user.app_metadata && user.app_metadata.roles) || [];
  const roles = existing.indexOf("free") >= 0 ? existing : existing.concat(["free"]);

  /* Confirm the address on the person's behalf. */
  try {
    const identity = context && context.clientContext && context.clientContext.identity;
    if (identity && identity.url && identity.token && user.id) {
      await fetch(identity.url + "/admin/users/" + user.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + identity.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ confirm: true })
      });
    }
  } catch (e) {
    /* If this is not possible the person simply uses the email link
       instead. Nothing breaks. */
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { roles: roles } })
  };
};

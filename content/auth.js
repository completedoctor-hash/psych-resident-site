/* ===================================================================
   THE PSYCHIATRIC RESIDENT — SIGN IN AND ACCESS
   One login system only: Netlify Identity. Nothing else.

   How it works, in plain words:
     1. Anyone can register. A new account gets the role "free".
     2. Free accounts read the free material. Paid rooms stay locked.
     3. When someone pays, you give their account a role in Netlify
        (Identity > the person > Edit settings > Roles):
          paper-a             the Paper A course and question banks
          paper-b             the Paper B course
          curriculum          the full curriculum teaching
          flashcards          pharmacology flashcards
          neuroscience        neuroscience flashcards
          critical-appraisal  the critical appraisal drills
          facts               the organisation of psychiatry facts
          member              shorthand for paper-a + paper-b + curriculum
          admin               everything (the owner)
     4. That is all. No lists to edit, no keys, no approval files.
        The person does NOT need to sign out: the new role is picked
        up on the next page they open.
   =================================================================== */

(function () {

  var BUILD = "2026.10.30-A \u00b7 only the courses are paid";
  window.TPR_BUILD = BUILD;

  var API = "/.netlify/identity";
  var TOKKEY = "tpr-nid";
  var SUPPORT = "completedoctor@gmail.com";

  /* Only two things are sold: the Paper A course and the Paper B course.
     Everything else on the site, the syllabus, the flashcards, the notebooks,
     the lessons and the stories, is free to everyone. OPEN_TO_ALL is what that
     means in code, and it must agree with the Role= rules in _redirects. */
  var OPEN_TO_ALL = ["curriculum", "facts"];   /* flashcards and critical appraisal are now paid courses */
  var MEMBER_COVERS = OPEN_TO_ALL;
  var EVERYTHING = ["live-b", "paper-a", "paper-b", "curriculum", "flashcards", "neuroscience",
                    "critical-appraisal", "ca-full", "book-pa-neuro", "book-pa-ca", "book-pa-psych", "book-pa-pharm", "book-pb-ebm", "book-pb-rm", "book-pb-stats", "book-pb-econ", "facts", "res-sub", "res-audio", "member", "admin"];
  var NICE = {
    "paper-a": "the Paper A course", "paper-b": "the Paper B course",
    "curriculum": "the curriculum teaching", "flashcards": "the pharmacology flashcards",
    "neuroscience": "the neuroscience flashcards", "critical-appraisal": "the critical appraisal drills",
    "facts": "the organisation of psychiatry facts", "res-sub": "Psychiatry for Residents (every specialty)", "res-audio": "the Clinical Communication Skills audio course", "member": "membership", "admin": "everything (owner)"
  };

  var USER = null;
  var READY = false;
  var WAITING = [];

  /* ---------------- tokens (the key card) ---------------- */

  function getTok() {
    try { return JSON.parse(localStorage.getItem(TOKKEY) || "null"); } catch (e) { return null; }
  }
  function setCookie(access) {
    try {
      var secure = location.protocol === "https:" ? "; Secure" : "";
      if (access) document.cookie = "nf_jwt=" + access + "; Path=/; Max-Age=2592000; SameSite=Lax" + secure;
      else document.cookie = "nf_jwt=; Path=/; Max-Age=0; SameSite=Lax" + secure;
    } catch (e) {}
  }
  function saveTok(t) {
    if (t && t.access_token) {
      if (!t.expires_at) t.expires_at = Date.now() + ((t.expires_in || 3600) * 1000);
      try { localStorage.setItem(TOKKEY, JSON.stringify(t)); } catch (e) {}
      setCookie(t.access_token);
    } else {
      try { localStorage.removeItem(TOKKEY); } catch (e) {}
      setCookie(null);
    }
  }
  function jwtRoles(access) {
    try {
      var p = String(access).split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      while (p.length % 4) p += "=";
      var j = JSON.parse(decodeURIComponent(escape(atob(p))));
      return (j.app_metadata && j.app_metadata.roles) || [];
    } catch (e) { return []; }
  }
  function sameList(a, b) {
    return (a || []).slice().sort().join(",") === (b || []).slice().sort().join(",");
  }

  function post(path, body, form) {
    return fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": form ? "application/x-www-form-urlencoded" : "application/json" },
      body: form ? body : JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; })
        .then(function (j) { return { ok: r.ok, status: r.status, body: j || {} }; });
    });
  }
  function errText(res, fallback) {
    var b = (res && res.body) || {};
    var m = String(b.error_description || b.msg || b.error || "");
    if (/email not confirmed/i.test(m)) return "not confirmed";
    if (/already.*registered|already exists/i.test(m)) return "already registered";
    if (/invalid.*(grant|credentials)|no user found|invalid login|user not found/i.test(m))
      return "That email address and password do not match. Check both, or press Forgot password.";
    if (/signups? not allowed/i.test(m))
      return "Registration is switched off in Netlify. Write to " + SUPPORT + ".";
    if (res && res.status === 404)
      return "Accounts are not switched on for this site yet. Write to " + SUPPORT + ".";
    return m || fallback || "Something went wrong. Please try again.";
  }

  function refresh(cb) {
    var t = getTok();
    if (!t || !t.refresh_token) { cb(false); return; }
    post("/token", "grant_type=refresh_token&refresh_token=" + encodeURIComponent(t.refresh_token), true)
      .then(function (res) {
        if (res.ok && res.body.access_token) { saveTok(res.body); cb(true); }
        else { saveTok(null); cb(false); }
      }).catch(function () { cb(false); });
  }

  function loadUser(cb, tried) {
    var t = getTok();
    if (!t || !t.access_token) { cb(null); return; }
    fetch(API + "/user", { headers: { Authorization: "Bearer " + t.access_token } })
      .then(function (r) {
        if (r.ok) { r.json().then(function (u) { cb(u); }, function () { cb(null); }); return; }
        if (!tried) { refresh(function (ok) { if (ok) loadUser(cb, true); else cb(null); }); return; }
        saveTok(null); cb(null);
      }).catch(function () { cb(null); });
  }

  /* ---------------- what this person may open ---------------- */

  function plans() {
    return (USER && USER.app_metadata && USER.app_metadata.tpr_plans) || {};
  }
  function runOut(role) {
    var p = plans()[role];
    return !!p && (Date.parse(p) || 0) <= Date.now();
  }

  function grants() {
    var raw = (USER && USER.app_metadata && USER.app_metadata.roles) || [];
    var out = [], seen = {};
    function add(x) {
      x = String(x).toLowerCase().trim();
      if (x && x !== "free" && !seen[x] && !runOut(x)) { seen[x] = 1; out.push(x); }
    }
    raw.forEach(add);
    OPEN_TO_ALL.forEach(add);                /* free for everyone, signed in or not */
    if (seen.admin) EVERYTHING.forEach(add);
    try { localStorage.setItem("tpr-adm", (seen.admin && USER) ? "1" : (USER ? "0" : (localStorage.getItem("tpr-adm") || "0"))); } catch (e) {}
    if (seen["live-b"]) add("ca-full");
    /* The £350 live course includes the four Paper B textbooks, online only, for the life of the course. */
    if (seen["live-b"]) ["pb-ebm", "pb-rm", "pb-stats", "pb-econ"].forEach(function (b) { add("book-" + b); });
    if (seen["res-audio"]) add("res-sub");
    if (seen.member) MEMBER_COVERS.forEach(add);
    return out;
  }

  /* True only for a role bought in its own right (not one included with another course). */
  window.tprOwns = function (role) {
    var raw = (USER && USER.app_metadata && USER.app_metadata.roles) || [];
    return raw.indexOf(role) !== -1 && !runOut(role);
  };
  window.hasAccess = function (thing) { return grants().indexOf(String(thing).toLowerCase().trim()) !== -1; };
  window.userGrants = grants;
  window.userRoles = grants;
  window.hasRole = window.hasAccess;
  window.hasCourse = window.hasAccess;
  window.isMember = function () { return window.hasAccess("member"); };
  window.isApproved = function () { return window.hasAccess("flashcards"); };
  window.currentUser = function () { return USER ? { email: USER.email, roles: grants() } : null; };
  window.userEmail = function () { return (USER && USER.email) || ""; };
  window.tprIdentityUser = function () { return USER; };
  window.tprToken = function () { var t = getTok(); return (t && t.access_token) || ""; };
  window.awaitingApproval = function () { return !!USER && grants().length === 0; };
  window.accountsOn = function () { return true; };
  window.tprNiceGrants = function (list) {
    list = list || [];
    if (!list.length) return "nothing yet";
    return list.map(function (x) { return NICE[x] || x; }).join(", ");
  };

  /* Older pages still call these names. They now go to the right page. */
  window.openAuth = function (mode) { location.href = (mode === "signup") ? "register.html" : "account.html"; };
  window.openApproval = function () { location.href = "account.html"; };
  window.tprAskToBeApproved = function () { location.href = "paper-a-courses.html"; };
  window.tprLeaveFlashcards = function () { window.tprSignOut(); };
  window.checkIdentity = function (cb) { cb(true); };
  window.identityUnavailable = function () { location.href = "account.html"; };

  window.TPR_AUTH = window.TPR_AUTH || {};
  window.TPR_AUTH.can = window.hasAccess;
  window.TPR_AUTH.supportEmail = SUPPORT;

  /* ---------------- actions ---------------- */

  window.tprSignIn = function (email, pw, cb, rescued) {
    post("/token", "grant_type=password&username=" + encodeURIComponent(email) +
         "&password=" + encodeURIComponent(pw), true)
      .then(function (res) {
        if (res.ok && res.body.access_token) { saveTok(res.body); try { localStorage.setItem("tpr-login-at", String(Date.now())); } catch (e) {} cb({ ok: true }); return; }
        var why = errText(res, "That did not work. Please try again.");
        /* Registered but never confirmed: the site confirms it (the password
           has already been checked by Netlify) and signs straight in. */
        if (why === "not confirmed" && !rescued) {
          fetch("/.netlify/functions/confirm-account", { method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: pw }) })
            .then(function (r) { return r.json().catch(function () { return {}; }); })
            .then(function (j) {
              if (j && j.ok) { window.tprSignIn(email, pw, cb, true); return; }
              cb({ error: "not confirmed" });
            }).catch(function () { cb({ error: "not confirmed" }); });
          return;
        }
        cb({ error: why });
      }).catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };

  window.tprSignUp = function (email, pw, data, cb) {
    post("/signup", { email: email, password: pw, data: data || {} })
      .then(function (res) {
        if (!res.ok) {
          var why = errText(res, "Registration did not go through.");
          if (why === "already registered") {
            window.tprSignIn(email, pw, function (r) { cb(r.ok ? { ok: true, signedIn: true, existing: true } : { error: why }); });
            return;
          }
          cb({ error: why }); return;
        }
        function attempt(n) {
          window.tprSignIn(email, pw, function (r) {
            if (r.ok) { cb({ ok: true, signedIn: true }); return; }
            if (n > 0) { setTimeout(function () { attempt(n - 1); }, 1800); return; }
            cb({ ok: true, signedIn: false });
          });
        }
        attempt(2);
      }).catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };

  window.tprForgotPassword = function (email, cb) {
    post("/recover", { email: email }).then(function (res) {
      if (res.ok) { cb({ ok: true }); return; }
      var m = errText(res, "");
      if (res.status === 404 || /not found|do not match/i.test(m)) {
        cb({ error: "There is no account with that email address. Check the spelling, or register free." });
        return;
      }
      cb({ error: m || "The email could not be sent." });
    }).catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };
  window.tprResendConfirmation = window.tprForgotPassword;

  window.tprSetPassword = function (pw, cb) {
    var t = getTok();
    if (!t || !t.access_token) { cb({ error: "You are not signed in. Press Forgot password to get a new link." }); return; }
    fetch(API + "/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + t.access_token },
      body: JSON.stringify({ password: pw })
    }).then(function (r) {
      if (r.ok) { cb({ ok: true }); return; }
      r.json().catch(function () { return {}; }).then(function (j) {
        cb({ error: (j && (j.msg || j.error_description)) || "That password was not accepted." });
      });
    }).catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };

  /* Save the person's own details (name, deanery, country) on their account. */
  window.tprUpdateDetails = function (data, cb) {
    var t = getTok();
    if (!t || !t.access_token) { cb({ error: "signin" }); return; }
    fetch(API + "/user", { method: "PUT", headers: { "Content-Type": "application/json", Authorization: "Bearer " + t.access_token },
      body: JSON.stringify({ data: data }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { cb(r.ok ? { ok: true, user: j } : { error: (j && j.msg) || "Not saved." }); }); })
      .catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };

  window.tprAcceptInvite = function (token, pw, cb) {
    post("/verify", { token: token, type: "signup", password: pw }).then(function (res) {
      if (res.ok && res.body.access_token) { saveTok(res.body); cb({ ok: true }); }
      else cb({ error: "That invite link has expired or been used. Press Forgot password on the sign in box instead." });
    }).catch(function () { cb({ error: "The connection failed. Please try again." }); });
  };

  window.tprSignOut = function () {
    var t = getTok();
    if (t && t.access_token) {
      try { fetch(API + "/logout", { method: "POST", headers: { Authorization: "Bearer " + t.access_token } }); } catch (e) {}
    }
    saveTok(null); USER = null;
    try { localStorage.removeItem("tpr-login-at"); } catch (e) {}
    location.href = "index.html";
  };

  /* ---------------- the button in the corner ---------------- */

  window.paintAccountButtons = function () {
    var els = document.querySelectorAll("[data-account]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (!el.getAttribute("data-label")) el.setAttribute("data-label", (el.textContent || "").trim() || "Sign in");
      el.textContent = USER ? "My account" : el.getAttribute("data-label");
      el.onclick = function () { location.href = "account.html"; };
    }
  };

  /* ---------------- links that arrive from an email ---------------- */

  function hashBits() {
    var h = (location.hash || "").replace(/^#\/?/, "");
    if (!h || h.indexOf("=") < 0) return null;
    var out = {};
    h.split("&").forEach(function (p) {
      var i = p.indexOf("=");
      if (i > 0) out[decodeURIComponent(p.slice(0, i))] = decodeURIComponent(p.slice(i + 1).replace(/\+/g, " "));
    });
    return out;
  }
  function clearHash() {
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) { location.hash = ""; }
  }
  function verify(type, token, ok, bad) {
    post("/verify", { token: token, type: type }).then(function (res) {
      if (res.ok && res.body.access_token) { saveTok(res.body); location.replace(ok); }
      else location.replace("account.html?problem=" + encodeURIComponent(bad));
    }).catch(function () {
      location.replace("account.html?problem=" + encodeURIComponent("The connection failed. Open the link in your email again."));
    });
  }
  function handleEmailLink() {
    var b = hashBits();
    if (!b) return false;
    if (b.error || b.error_description) {
      clearHash();
      location.replace("account.html?problem=" + encodeURIComponent(b.error_description || b.error));
      return true;
    }
    if (b.confirmation_token) {
      clearHash();
      verify("signup", b.confirmation_token, "account.html?welcome=1",
             "That confirmation link has already been used or has expired. Just sign in below.");
      return true;
    }
    if (b.recovery_token) {
      clearHash();
      verify("recovery", b.recovery_token, "account.html?setpassword=1",
             "That reset link has already been used or has expired. Ask for a new one below.");
      return true;
    }
    if (b.invite_token) {
      clearHash();
      location.replace("account.html?invite=" + encodeURIComponent(b.invite_token));
      return true;
    }
    return false;
  }

  /* ---------------- paying ---------------- */

  window.tprPlans = plans;

  window.tprPlanEnds = function (role) {
    var p = plans()[role];
    if (!p) return "";
    var d = new Date(p);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  };

  window.tprDaysLeft = function (role) {
    var p = plans()[role];
    if (!p) return null;
    var ms = (Date.parse(p) || 0) - Date.now();
    return ms <= 0 ? 0 : Math.ceil(ms / 86400000);
  };

  function callFn(name, payload, cb) {
    var t = getTok();
    if (!t || !t.access_token) { cb({ error: "signin" }); return; }
    fetch("/.netlify/functions/" + name, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + t.access_token },
      body: JSON.stringify(payload || {})
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        j = j || {}; if (!r.ok && !j.error) j.error = "failed";
        cb(j);
      });
    }).catch(function () { cb({ error: "connection" }); });
  }

  window.tprCallFn = callFn;

  /* Send someone to Stripe to pay. */
  window.tprBuy = function (plan, cb) {
    callFn("create-checkout", { plan: plan }, function (r) {
      if (r && r.url) { location.href = r.url; return; }
      cb(r || { error: "failed" });
    });
  };

  /* Ask Stripe what this person has paid for and open it.
     Then fetch a fresh key card so the locked pages open at once. */
  window.tprClaim = function (sessionId, cb) {
    callFn("claim-access", sessionId ? { s: sessionId } : {}, function (r) {
      if (!r || r.error) { cb(r || { error: "failed" }); return; }
      refresh(function () {
        loadUser(function (u) { if (u) USER = u; cb(r); });
      });
    });
  };

  /* ---------------- start up ---------------- */

  function finish() {
    READY = true;
    try { window.paintAccountButtons(); } catch (e) {}
    var els = document.querySelectorAll("[data-build]");
    for (var i = 0; i < els.length; i++) els[i].textContent = "Build " + BUILD;
    var w = WAITING; WAITING = [];
    for (var k = 0; k < w.length; k++) { try { w[k](); } catch (e) {} }
    try { document.dispatchEvent(new CustomEvent("tpr-auth", { detail: window.currentUser() })); } catch (e) {}
  }

  window.onAuthReady = function (cb) {
    if (READY) { try { cb(); } catch (e) {} return; }
    WAITING.push(cb);
  };

  function boot() {
    if (handleEmailLink()) return;
    var t = getTok();
    if (!t || !t.access_token) { setCookie(null); finish(); return; }

    function go() {
      loadUser(function (u) {
        USER = u;
        if (!u) { finish(); return; }
        /* A monthly subscription renews in Stripe. When the paid month is close
           to its end, ask Stripe again (at most twice a day) so access carries on. */
        try {
          var md = u.app_metadata || {}, sb = md.tpr_subs || {}, pl = md.tpr_plans || {}, due = false;
          (md.roles || []).forEach(function (r0) { var e0 = Date.parse(pl[r0] || 0); if (e0 && e0 < Date.now()) due = true; });
          for (var r in sb) { var end = Date.parse(pl[r] || 0) || 0; if (sb[r] && end - Date.now() < 3 * 86400000) due = true; }
          var last = +localStorage.getItem("tpr-subcheck") || 0;
          if (due && Date.now() - last > 6 * 3600000) {
            localStorage.setItem("tpr-subcheck", String(Date.now()));
            setTimeout(function () { try { window.tprClaim(null, function () {}); } catch (e) {} }, 1500);
          }
        } catch (e) {}
        var now = getTok();
        var roles = (u.app_metadata && u.app_metadata.roles) || [];
        /* Roles changed in Netlify since sign in: fetch a fresh key card
           so the locked rooms open without signing out. */
        if (now && !sameList(jwtRoles(now.access_token), roles)) refresh(function () { finish(); });
        else { setCookie(now && now.access_token); finish(); }
      });
    }
    /* Key cards last one hour. Renew quietly when close to running out. */
    if (!t.expires_at || t.expires_at - Date.now() < 10 * 60 * 1000) refresh(function () { go(); });
    else go();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  /* Automatic sign-out 4 hours after signing in, on every device. */
  var MAX_SESSION = 4 * 60 * 60 * 1000;
  function sessionCheck() {
    if (!USER) return;
    var t = 0;
    try { t = +localStorage.getItem("tpr-login-at") || 0; } catch (e) { return; }
    if (!t) { try { localStorage.setItem("tpr-login-at", String(Date.now())); } catch (e) {} return; }
    if (Date.now() - t > MAX_SESSION) {
      try { localStorage.removeItem("tpr-login-at"); sessionStorage.setItem("tpr-timed-out", "1"); } catch (e) {}
      window.tprSignOut();
    }
  }
  setTimeout(sessionCheck, 1500);
  setInterval(sessionCheck, 60 * 1000);
  document.addEventListener("visibilitychange", function () { if (!document.hidden) sessionCheck(); });

})();

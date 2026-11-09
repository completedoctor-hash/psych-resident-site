/* Psychiatry for Residents: interactive challenge viewer.
   Four steps: Recognition · How to do it · Practicalities A–Z · Keeping it sharp. Original content. */
(function () {
  var I = {
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
    check: '<path d="M4 12l5 5L20 6"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    flag: '<path d="M5 21V4h11l-2 4 2 4H5"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2c3 .3 5.5 2.6 5.5 5.8"/>',
    door: '<path d="M4 21h16M6 21V4h9v17"/><circle cx="12.5" cy="12.5" r=".8"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    num: '<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>'
  };
  function ic(n, c) { return '<svg class="ic' + (c ? ' ' + c : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (I[n] || '') + '</svg>'; }
  function e(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function head(t) {
    t = String(t || "");
    var m = t.match(/^(.{6,70}?)(:|\s[–—-]\s|;)\s+(.+)$/);
    if (m) return [m[1], m[3]];
    var s = t.match(/^(.{10,90}?[.?!])\s+(.+)$/);
    if (s) return [s[1], s[2]];
    var w = t.split(/\s+/);
    if (w.length > 11) return [w.slice(0, 8).join(" ") + "…", "…" + w.slice(8).join(" ")];
    return [t, ""];
  }
  var CSS = '' +
  '.wv{--n:#14243A;--g:#B8932C;--gl:#FFF7E3;--r:#A33A3A;--gr:#2E7D5B;--mut:#5B6474;--ln:#E1E4EA;font-family:Georgia,serif}' +
  '.wv .ic{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}' +
  '.wv .sans{font-family:Helvetica Neue,Arial,sans-serif}' +
  '.wv .kick{font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--g)}' +
  '.wv h2.tt{font:800 32px/1.2 Playfair Display,Georgia,serif;margin:6px 0 18px}' +
  '.wv .scene{display:grid;grid-template-columns:1.4fr 1fr;gap:16px;margin:0 0 22px}' +
  '.wv .bleep2{background:var(--n);color:#fff;padding:18px 20px;border-left:6px solid var(--g);position:relative}' +
  '.wv .bleep2 .w{display:flex;gap:10px;align-items:center;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--g);margin-bottom:8px}' +
  '.wv .bleep2 p{margin:0;font-size:16.5px;line-height:1.6}' +
  '.wv .job{border:2px solid var(--n);padding:18px 20px;background:#fff}' +
  '.wv .job .w{display:flex;gap:10px;align-items:center;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--n);margin-bottom:8px}' +
  '.wv .job p{margin:0;font-size:16.5px}.wv .ttype{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:0 0 10px}.wv .ttype span{background:#2E7D5B;color:#fff;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:6px 12px}.wv .ttype i{font-style:normal;color:#2E7D5B;font-weight:700}.wv .job p.tdo{font:700 17px/1.4 Georgia,serif;color:#14243A;margin:0 0 8px;padding-bottom:8px;border-bottom:1px solid #E1E4EA}' +
  '.wv .steps{display:none;grid-template-columns:repeat(5,1fr);gap:0;margin:8px 0 0;position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid var(--ln)}' +
  '.wv .st{all:unset;cursor:pointer;display:flex;gap:12px;align-items:center;padding:14px 16px;border-bottom:4px solid transparent;color:var(--mut);font:700 14px Helvetica Neue,Arial,sans-serif;transition:.2s}' +
  '.wv .st b{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;border:2px solid currentColor;font-size:15px;flex:none}' +
  '.wv .st small{display:block;font-weight:400;font-size:12px;color:var(--mut)}' +
  '.wv .st:hover{color:var(--n)}.wv .st.on{color:var(--n);border-bottom-color:var(--g)}.wv .st.on b{background:var(--n);color:#fff;border-color:var(--n)}' +
  '.wv .st.seen b{border-color:var(--g)}.wv .st.seen:not(.on) b{color:var(--g)}' +
  '.wv .pane{display:none;padding:22px 0 10px;animation:wvf .35s ease}.wv .pane.on{display:block}@keyframes wvf{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}' +
  '.wv .ph{display:flex;gap:14px;align-items:center;margin:0 0 6px}.wv .ph .bigi{width:52px;height:52px;border-radius:14px;background:var(--n);color:var(--g);display:grid;place-items:center}.wv .ph .bigi .ic{width:28px;height:28px}' +
  '.wv .ph h3{font:800 26px Playfair Display,Georgia,serif;margin:0}.wv .ph p{margin:2px 0 0;color:var(--mut);font:15px Helvetica Neue,Arial,sans-serif}' +
  '.wv h4.sub{display:flex;gap:10px;align-items:center;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--n);margin:28px 0 12px;padding-bottom:8px;border-bottom:2px solid var(--ln)}.wv h4.sub .ic{color:var(--g)}' +
  '.wv .chips{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}' +
  '.wv .chip{all:unset;cursor:pointer;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.06em;padding:8px 14px;border:1px solid var(--n);border-radius:999px;display:inline-flex;gap:6px;align-items:center}' +
  '.wv .chip .ic{width:16px;height:16px}.wv .chip.on{background:var(--n);color:#fff}.wv .chip i{font-style:normal;opacity:.7}' +
  '.wv .cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}' +
  '.wv .cd{all:unset;box-sizing:border-box;cursor:pointer;display:block;border:1px solid var(--ln);border-top:4px solid var(--cc,var(--n));background:#fff;padding:14px 16px;transition:.2s;position:relative}' +
  '.wv .cd:hover{box-shadow:0 6px 18px rgba(20,36,58,.10);transform:translateY(-2px)}' +
  '.wv .cd .tg{display:flex;gap:6px;align-items:center;font:700 10.5px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--cc,var(--n));margin-bottom:6px}.wv .cd .tg .ic{width:15px;height:15px}' +
  '.wv .cd .h{font:700 16.5px/1.35 Georgia,serif;color:var(--n)}' +
  '.wv .cd .x{max-height:0;overflow:hidden;transition:max-height .35s ease;font-size:15.5px;color:#2A3546}.wv .cd.op .x{max-height:600px;margin-top:8px}' +
  '.wv .cd .more{font:700 11px Helvetica Neue,Arial,sans-serif;color:var(--g);margin-top:8px;letter-spacing:.06em}.wv .cd.op .more{display:none}' +
  '.wv .flow{display:flex;gap:0;overflow-x:auto;padding:6px 2px 14px;scroll-snap-type:x mandatory}' +
  '.wv .fs{scroll-snap-align:start;flex:0 0 230px;position:relative;padding:0 14px 0 0}' +
  '.wv .fs:after{content:"";position:absolute;top:22px;left:44px;right:0;height:2px;background:var(--g)}.wv .fs:last-child:after{display:none}' +
  '.wv .fs .dot{width:44px;height:44px;border-radius:50%;background:var(--g);color:var(--n);display:grid;place-items:center;font:800 18px Helvetica Neue,Arial,sans-serif;position:relative;z-index:1}' +
  '.wv .fs .box{margin-top:10px;border:1px solid var(--ln);background:#fff;padding:12px 14px;font-size:15px;min-height:96px}.wv .fs .box b{display:block;color:var(--n);margin-bottom:4px;font-size:15.5px}' +
  '.wv .band{border:1px solid var(--ln);margin:0 0 12px;background:#fff}' +
  '.wv .band>button{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:flex;gap:12px;align-items:center;padding:12px 16px;background:var(--bc,var(--n));color:#fff;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase}' +
  '.wv .band>button .ic{color:#fff}.wv .band>button i{margin-left:auto;font-style:normal;font-weight:400;letter-spacing:0;text-transform:none;opacity:.85}.wv .band>button .car{transition:transform .2s}.wv .band.shut>button .car{transform:rotate(-90deg)}' +
  '.wv .band .rows{padding:6px 0}.wv .band.shut .rows{display:none}' +
  '.wv .qr{display:grid;grid-template-columns:150px 1fr;gap:14px;padding:10px 16px;border-bottom:1px dashed var(--ln);align-items:start}.wv .qr:last-child{border-bottom:0}' +
  '.wv .qr .who{font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--bc,var(--n));padding-top:4px}' +
  '.wv .qr .q{position:relative;background:#F7F8FA;border-radius:4px 14px 14px 14px;padding:10px 14px;font-size:16px}' +
  '.wv .says{display:grid;gap:12px}' +
  '.wv .sy{display:grid;grid-template-columns:46px 1fr;gap:12px;align-items:start}' +
  '.wv .sy .av{width:46px;height:46px;border-radius:50%;background:var(--n);color:var(--g);display:grid;place-items:center;font:800 15px Helvetica Neue,Arial,sans-serif}' +
  '.wv .sy .bub{border:1px solid var(--ln);border-left:4px solid var(--g);background:#fff;padding:12px 16px}.wv .sy .bub small{display:block;font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--g);margin-bottom:4px}' +
  '.wv .dc{display:grid;gap:10px}' +
  '.wv .opt{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:40px 1fr;gap:12px;border:2px solid var(--ln);padding:14px 16px;background:#fff;transition:.2s}' +
  '.wv .opt:hover{border-color:var(--n)}.wv .opt .l{width:34px;height:34px;border-radius:50%;border:2px solid var(--n);display:grid;place-items:center;font:800 14px Helvetica Neue,Arial,sans-serif}' +
  '.wv .opt .r{display:none;margin-top:8px;font-size:15px}.wv .opt.sh .r{display:block}' +
  '.wv .opt.ok{border-color:var(--gr);background:#F1F8F4}.wv .opt.ok .l{background:var(--gr);border-color:var(--gr);color:#fff}' +
  '.wv .opt.no{border-color:var(--r);background:#FBF1F1}.wv .opt.no .l{background:var(--r);border-color:var(--r);color:#fff}' +
  '.wv .az{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}' +
  '.wv .tile{all:unset;box-sizing:border-box;cursor:pointer;display:grid;grid-template-columns:48px 1fr;gap:12px;border:1px solid var(--ln);background:#fff;padding:14px;transition:.2s}' +
  '.wv .tile:hover{border-color:var(--g)}.wv .tile .L{width:48px;height:48px;background:var(--tc,var(--n));color:#fff;display:grid;place-items:center;font:800 22px Playfair Display,Georgia,serif;border-radius:8px}' +
  '.wv .tile .tg{font:700 10.5px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--tc,var(--n))}' +
  '.wv .tile .h{font:700 15.5px/1.35 Georgia,serif}.wv .tile .x{max-height:0;overflow:hidden;transition:max-height .35s;font-size:15px}.wv .tile.op .x{max-height:600px;margin-top:6px}' +
  '.wv .tile.dn{background:#F1F8F4;border-color:var(--gr)}.wv .tile.dn .L{background:var(--gr)}' +
  '.wv .note2{background:#FFFDF6;border:1px solid #E8DDBF;box-shadow:0 2px 0 #E8DDBF;padding:18px 22px;font:15px/1.7 "Courier New",monospace;white-space:pre-wrap;background-image:repeating-linear-gradient(transparent 0 26px,#F0E6CC 26px 27px)}' +
  '.wv .uk{display:flex;gap:14px;align-items:flex-start;background:var(--gl);border:1px solid #EBD9A6;padding:14px 18px;margin-top:16px}.wv .uk .ic{color:var(--g);width:28px;height:28px}' +
  '.wv .sharp{display:grid;grid-template-columns:240px 1fr;gap:24px;align-items:start}' +
  '.wv .ring{position:relative;width:200px;height:200px;margin:auto}.wv .ring svg{width:200px;height:200px;transform:rotate(-90deg)}' +
  '.wv .ring .v{position:absolute;inset:0;display:grid;place-items:center;text-align:center;font:800 36px Playfair Display,Georgia,serif;color:var(--n)}.wv .ring .v small{display:block;font:12px Helvetica Neue,Arial,sans-serif;color:var(--mut)}' +
  '.wv .ck{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:grid;grid-template-columns:30px 1fr;gap:12px;align-items:start;padding:11px 14px;border:1px solid var(--ln);background:#fff;margin-bottom:8px;font-size:15.5px}' +
  '.wv .ck .bx{width:26px;height:26px;border:2px solid var(--n);border-radius:6px;display:grid;place-items:center;color:transparent}.wv .ck.on{border-color:var(--gr);background:#F1F8F4}.wv .ck.on .bx{background:var(--gr);border-color:var(--gr);color:#fff}' +
  '.wv .trap{--cc:var(--r)}.wv .twist{border:2px dashed var(--g);padding:18px 20px;background:#fff}.wv .twist .hid{filter:blur(6px);user-select:none;transition:filter .3s}.wv .twist.op .hid{filter:none}' +
  '.wv .pn{display:flex;justify-content:space-between;gap:10px;margin:30px 0 10px;flex-wrap:wrap}' +
  '.wv .bt{all:unset;cursor:pointer;display:inline-flex;gap:8px;align-items:center;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:12px 20px;border:1px solid var(--n);background:#fff;color:var(--n)}' +
  '.wv .bt.p{background:var(--n);color:#fff}.wv .bt.g{background:var(--g);border-color:var(--g);color:var(--n)}.wv .bt:hover{filter:brightness(1.08)}' +
  '.wv .refs2{font:13.5px Helvetica Neue,Arial,sans-serif;color:var(--mut)}.wv details summary{cursor:pointer;font:700 13px Helvetica Neue,Arial,sans-serif;color:var(--n)}' +
  '.wv .lay2{display:grid;grid-template-columns:250px minmax(0,1fr);gap:28px;align-items:start}.wv .lay2>div{min-width:0}' +
  '.wv .lnav{position:sticky;top:10px;max-height:calc(100vh - 20px);overflow:auto;border:1px solid var(--ln);background:#fff}' +
  '.wv .lnav .lh{background:var(--n);color:#fff;padding:12px 14px;font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase}' +
  '.wv .lnav .ls{all:unset;box-sizing:border-box;cursor:pointer;display:flex;gap:10px;align-items:center;width:100%;padding:11px 14px;font:700 13.5px Helvetica Neue,Arial,sans-serif;color:var(--n);border-top:1px solid var(--ln)}' +
  '.wv .lnav .ls b{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;border:2px solid var(--n);font-size:12px;flex:none}' +
  '.wv .lnav .ls.on{background:#F7F8FA;box-shadow:inset 4px 0 0 var(--g)}.wv .lnav .ls.on b{background:var(--n);color:#fff}.wv .lnav .ls.seen b{border-color:var(--gr);color:var(--gr)}.wv .lnav .ls.on.seen b{color:#fff}' +
  '.wv .lnav .lk{all:unset;box-sizing:border-box;cursor:pointer;display:block;width:100%;padding:6px 14px 6px 50px;font:13px Helvetica Neue,Arial,sans-serif;color:var(--mut)}.wv .lnav .lk:hover{color:var(--g)}' +
  '.wv .lnav .lgrp{display:none;padding-bottom:6px}.wv .lnav .ls.on+.lgrp{display:block}' +
  '.wv .objs{border:1px solid var(--n);border-left:6px solid var(--gr);background:#fff;padding:14px 18px;margin:0 0 22px}.wv .objs .w{display:flex;gap:10px;align-items:center;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--gr);margin-bottom:6px}' +
  '.wv .objs ol{margin:0;padding:0;list-style:none;display:grid;gap:6px}.wv .objs li{display:grid;grid-template-columns:24px 1fr;gap:10px;font-size:15.5px}.wv .objs li i{font-style:normal;width:22px;height:22px;border-radius:50%;background:var(--gr);color:#fff;display:grid;place-items:center;font:700 11px Helvetica Neue,Arial,sans-serif}' +
  '.wv .snips{display:grid;gap:12px}.wv .sn{border:1px solid var(--ln);background:#fff;padding:14px 16px}' +
  '.wv .sn .snq{display:grid;grid-template-columns:40px 1fr;gap:12px;align-items:start}.wv .sn .pa{width:40px;height:40px;border-radius:50%;background:#E1E4EA;color:var(--n);display:grid;place-items:center}' +
  '.wv .sn .pb{background:#F2F4F7;border-radius:4px 16px 16px 16px;padding:10px 14px;font-style:italic}.wv .sn .tag{display:inline-block;font:700 10px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--g);margin-bottom:4px}' +
  '.wv .sn .rb{all:unset;cursor:pointer;margin:10px 0 0 52px;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.06em;color:var(--n);border-bottom:2px solid var(--g)}' +
  '.wv .sn .yr{display:none;grid-template-columns:1fr 40px;gap:12px;margin-top:10px}.wv .sn.op .yr{display:grid}.wv .sn.op .rb{display:none}' +
  '.wv .sn .yb{background:var(--n);color:#fff;border-radius:16px 4px 16px 16px;padding:10px 14px}.wv .sn .ya{width:40px;height:40px;border-radius:50%;background:var(--g);color:var(--n);display:grid;place-items:center;font:800 12px Helvetica Neue,Arial,sans-serif}' +
  '.wv .bps{border:2px solid var(--n);background:#fff;margin:6px 0 10px}.wv .bps .bh{background:var(--n);color:#fff;padding:12px 16px;display:flex;gap:10px;align-items:center;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase}.wv .bps .bh .ic{color:var(--g)}' +
  '.wv .bps .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.wv .bps .col{border-right:1px solid var(--ln);padding:0 0 10px}.wv .bps .col:last-child{border-right:0}' +
  '.wv .bps .ch2{padding:10px 14px;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--k)}' +
  '.wv .bps .it{padding:8px 14px;font-size:14.5px;border-bottom:1px dashed var(--ln)}.wv .bps .it:last-child{border-bottom:0}' +
  '.wv .kc{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px}' +
  '.wv .fc2{all:unset;box-sizing:border-box;cursor:pointer;perspective:900px;min-height:132px;display:block}.wv .fc2 .in2{position:relative;width:100%;height:100%;min-height:132px;transition:transform .5s;transform-style:preserve-3d}' +
  '.wv .fc2.op .in2{transform:rotateY(180deg)}.wv .fc2 .f,.wv .fc2 .b{position:absolute;inset:0;backface-visibility:hidden;padding:14px 16px;border:1px solid var(--ln);display:flex;flex-direction:column;justify-content:center}' +
  '.wv .fc2 .f{background:var(--n);color:#fff;font:700 16.5px/1.35 Georgia,serif}.wv .fc2 .f small{font:700 10px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;color:var(--g);margin-bottom:6px}' +
  '.wv .fc2 .b{background:#F1F8F4;border-color:var(--gr);transform:rotateY(180deg);font-size:14.5px;overflow:auto}' +
  '@media(max-width:900px){.wv .lay2{grid-template-columns:1fr}.wv .lnav{position:static;max-height:none}.wv .lnav .lk{display:none}}' +
  '.wv .run{position:relative;margin-top:18px}.wv .run:before{content:"";position:absolute;left:23px;top:10px;bottom:10px;width:3px;background:linear-gradient(#B8932C,#2E7D5B)}' +
  '.wv .rs{display:grid;grid-template-columns:48px 1fr;gap:16px;margin-bottom:18px;position:relative}' +
  '.wv .rd{width:48px;height:48px;border-radius:50%;background:var(--n);color:var(--g);display:grid;place-items:center;z-index:1;border:3px solid #fff;box-shadow:0 0 0 1px var(--ln)}' +
  '.wv .rt{font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--n);margin:12px 0 8px}' +
  '.wv .rk{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start;padding:9px 12px;border:1px solid var(--ln);background:#fff;margin-bottom:6px;font-size:15px}' +
  '.wv .rk .bx{width:24px;height:24px;border:2px solid var(--n);border-radius:6px;display:grid;place-items:center;color:transparent}.wv .rk.on{border-color:var(--gr);background:#F1F8F4}.wv .rk.on .bx{background:var(--gr);border-color:var(--gr);color:#fff}' +
  '.wv .flaw{display:flex;gap:14px;align-items:center;background:var(--n);color:#fff;padding:16px 20px;margin-top:10px;border-left:6px solid var(--g)}.wv .flaw .ic{color:var(--g);width:30px;height:30px}' +
  '.wv .fdg{display:flex;gap:10px;align-items:center;margin:8px auto;max-width:86%;background:#F1F8F4;border:1px dashed var(--gr);color:#1F5A40;padding:8px 14px;font:14px Helvetica Neue,Arial,sans-serif}.wv .fdg .ic{color:var(--gr)}' +
  '.wv .ostep{all:unset;cursor:pointer;margin-left:6px;font:700 11px Helvetica Neue,Arial,sans-serif;color:var(--gr);border:1px solid var(--gr);padding:1px 7px;border-radius:999px}.wv .ostep:hover{background:var(--gr);color:#fff}.wv .mst.flash .mbody{box-shadow:0 0 0 3px var(--g);transition:box-shadow .3s}' +
  '.wv .mname{font:800 22px Playfair Display,Georgia,serif;color:var(--n);margin:16px 0 8px}.wv .mframe{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:0 0 16px}.wv .mframe span{font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--mut)}.wv .mframe b{background:var(--g);color:var(--n);font:700 12px Helvetica Neue,Arial,sans-serif;padding:6px 12px;border-radius:999px}' +
  '.wv .msteps{position:relative}.wv .msteps:before{content:"";position:absolute;left:21px;top:8px;bottom:8px;width:3px;background:linear-gradient(var(--n),var(--g),var(--gr))}' +
  '.wv .mst{display:grid;grid-template-columns:44px 1fr;gap:16px;margin-bottom:18px;position:relative}.wv .mnum{width:44px;height:44px;border-radius:50%;background:var(--n);color:var(--g);display:grid;place-items:center;font:800 18px Playfair Display,Georgia,serif;z-index:1;border:3px solid #fff;box-shadow:0 0 0 1px var(--ln)}' +
  '.wv .mbody{border:1px solid var(--ln);background:#fff;padding:12px 16px}.wv .mh{font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--n);margin-bottom:8px}' +
  '.wv .msay{background:var(--n);color:#fff;border-radius:14px 4px 14px 14px;padding:9px 14px;margin:6px 0 6px 12%;font-size:15.5px}.wv .msay span,.wv .mhear span{display:block;font:700 10px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;opacity:.7;margin-bottom:2px}' +
  '.wv .mhear{background:#F2F4F7;border-radius:4px 14px 14px 14px;padding:9px 14px;margin:6px 12% 6px 0;font-style:italic;font-size:15.5px}.wv .mhear span{font-style:normal}' +
  '.wv .mmark{display:inline-flex;gap:8px;align-items:center;margin-top:6px;background:#FFF7E3;border:1px solid var(--g);color:#6B5310;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:6px 12px}.wv .mmark .ic{color:var(--gr);width:18px;height:18px}' +
  '.wv .mtab{overflow-x:auto}.wv .mtab table{width:100%;border-collapse:collapse;font-size:15px;background:#fff}.wv .mtab th,.wv .mtab td{border:1px solid var(--ln);padding:9px 12px;text-align:left;vertical-align:top}.wv .mtab thead th{background:var(--n);color:#fff;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}.wv .mtab tbody th{color:var(--n);background:#FFF7E3;width:22%}' +
  '.wv .mkey{display:flex;gap:14px;align-items:flex-start;background:#F1F8F4;border-left:6px solid var(--gr);padding:14px 18px;margin:18px 0}.wv .mkey .ic{color:var(--gr);width:26px;height:26px}.wv .mkey b{display:block;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--gr);margin-bottom:4px}' +
  '.wv .bpsl{margin:22px 0 6px;border:1px solid var(--ln);background:#fff}.wv .bpsl summary{cursor:pointer;display:flex;gap:10px;align-items:center;padding:12px 16px;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--n)}.wv .bpsl summary i{font-style:normal;font-weight:400;letter-spacing:0;text-transform:none;color:var(--mut)}.wv .bpsl summary .ic{color:var(--g)}.wv .bpsl .bps{margin:0;border-width:2px 0 0}' +
  '.wv .ps{border:1px solid var(--n);border-left:6px solid var(--g);background:#fff;padding:14px 18px;margin:14px 0}.wv .ps b{display:flex;gap:8px;align-items:center;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--g)}.wv .ps p{margin:6px 0 0;font-size:16px}.wv .ps .pw{font:14px Helvetica Neue,Arial,sans-serif;color:var(--mut)}.wv .ps .pw b{display:inline;color:var(--n);letter-spacing:0;text-transform:none;font-size:14px}' +
  '.wv .ptab{display:flex;gap:0;border-bottom:2px solid var(--n);margin:18px 0 14px}.wv .pt2{all:unset;cursor:pointer;display:flex;gap:8px;align-items:center;padding:12px 18px;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--n)}.wv .pt2.on{background:var(--n);color:#fff}.wv .pt2.on .ic{color:var(--g)}' +
  '.wv .mlay{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:20px;align-items:start}.wv .mtool{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}' +
  '.wv .mb{display:flex;gap:10px;align-items:center;margin:16px 0 8px;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--g)}.wv .mb span{background:var(--n);color:#fff;padding:3px 8px;letter-spacing:.04em}' +
  '.wv .ml,.wv .cm{max-width:86%;margin:8px 0;transition:background .2s}.wv .ml.d,.wv .cm.d{margin-left:auto}.wv .mw{font:700 11px Helvetica Neue,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--mut);margin-bottom:3px}.wv .mw i{font-style:normal;font-weight:400;opacity:.8}' +
  '.wv .ml.d .mw,.wv .cm.d .mw{text-align:right}.wv .ms{padding:10px 14px;font-size:15.5px;position:relative}.wv .ml.p .ms,.wv .cm.p .ms{background:#F2F4F7;border-radius:4px 16px 16px 16px;font-style:italic}.wv .ml.d .ms,.wv .cm.d .ms{background:var(--n);color:#fff;border-radius:16px 4px 16px 16px}' +
  '.wv .mm{display:flex;gap:4px;justify-content:flex-end;margin-top:6px}.wv .mm b{background:var(--g);color:var(--n);font:700 10px Helvetica Neue,Arial,sans-serif;width:20px;height:20px;border-radius:50%;display:grid;place-items:center}' +
  '.wv #mlines.stepmode>*{display:none}.wv #mlines.stepmode>.shown{display:block}.wv #mlines.stepmode>.mb.shown{display:flex}.wv .ml.hit .ms{box-shadow:0 0 0 3px var(--g)}' +
  '.wv .mside{position:sticky;top:10px;border:1px solid var(--ln);background:#fff;max-height:calc(100vh - 20px);overflow:auto}.wv .mh{background:var(--n);color:#fff;padding:10px 14px;font:700 12px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase}.wv .mhint{font:13px Helvetica Neue,Arial,sans-serif;color:var(--mut);margin:8px 14px}' +
  '.wv .mc{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:grid;grid-template-columns:26px 1fr;gap:8px;padding:8px 14px;border-top:1px solid var(--ln);font-size:14px}.wv .mc b{width:22px;height:22px;border-radius:50%;background:var(--g);color:var(--n);display:grid;place-items:center;font:700 11px Helvetica Neue,Arial,sans-serif}.wv .mc small{display:block;font:11px Helvetica Neue,Arial,sans-serif;color:var(--gr);text-transform:uppercase;letter-spacing:.08em}.wv .mc.on{background:#FFF7E3}' +
  '.wv .mg{padding:10px 14px;border-top:2px solid var(--n);font-size:13.5px;display:grid;gap:6px}.wv .mg b{font:700 10px Helvetica Neue,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;padding:2px 6px;color:#fff}.wv .gp{background:var(--gr)}.wv .gb{background:var(--g)}.wv .gf{background:var(--r)}' +
  '.wv .tbar{display:flex;gap:16px;align-items:center;flex-wrap:wrap;background:var(--n);color:#fff;padding:12px 16px}.wv .clock{font:800 34px Playfair Display,Georgia,serif;color:var(--g);min-width:110px}.wv .clock.amber{color:#F2C14E}.wv .clock.red{color:#FF8A80}.wv .tbtn{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.wv .tbar .bt{border-color:#fff}.wv .tts{font:13px Helvetica Neue,Arial,sans-serif;display:flex;gap:6px;align-items:center}' +
  '.wv .tnote{font:14px Helvetica Neue,Arial,sans-serif;color:var(--mut);margin:10px 0}.wv .chat{min-height:180px;max-height:52vh;overflow:auto;border:1px solid var(--ln);padding:8px 14px;background:#FCFCFD}.wv .cm.typing .ms{opacity:.6}' +
  '.wv .tin{display:grid;grid-template-columns:1fr auto auto;gap:8px;margin-top:8px}.wv .tin textarea{font:16px Georgia,serif;padding:10px;border:1px solid var(--n);resize:vertical}.wv #mic.on{background:var(--r);color:#fff;border-color:var(--r)}' +
  '.wv .rh{display:flex;gap:8px;align-items:center;margin:22px 0 10px;font:700 13px Helvetica Neue,Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--n)}.wv .gl{display:inline-block;font:800 20px Playfair Display,Georgia,serif;color:#fff;padding:6px 16px;margin-bottom:10px}.wv .gl.gp{background:var(--gr)}.wv .gl.gb{background:var(--g)}.wv .gl.gf{background:var(--r)}' +
  '.wv .ar{display:grid;grid-template-columns:30px 1fr;gap:10px;padding:8px 0;border-bottom:1px dashed var(--ln);font-size:15px}.wv .ar .dot{width:26px;height:26px;border-radius:50%;color:#fff;display:grid;place-items:center;font:700 12px Helvetica Neue,Arial,sans-serif}.wv .ar small{color:var(--mut)}.wv .ab{margin-top:10px;border-left:4px solid var(--g);padding:6px 12px;background:#fff}' +
  '.wv .selfm{margin-top:16px}.wv .sh2{display:flex;justify-content:space-between;font:700 13px Helvetica Neue,Arial,sans-serif;color:var(--n);margin-bottom:8px}.wv .sk{all:unset;box-sizing:border-box;cursor:pointer;width:100%;display:grid;grid-template-columns:30px 1fr;gap:10px;padding:9px 12px;border:1px solid var(--ln);margin-bottom:6px;background:#fff;font-size:15px}.wv .sk .bx{width:24px;height:24px;border:2px solid var(--n);border-radius:6px;display:grid;place-items:center;color:transparent}.wv .sk.on{border-color:var(--gr);background:#F1F8F4}.wv .sk.on .bx{background:var(--gr);border-color:var(--gr);color:#fff}' +
  '@media(max-width:900px){.wv .mlay{grid-template-columns:1fr}.wv .mside{position:static;max-height:none}.wv .ml,.wv .cm{max-width:100%}.wv .tin{grid-template-columns:1fr}}' +
  '@media(max-width:800px){.wv .scene{grid-template-columns:1fr}.wv .steps{grid-template-columns:repeat(4,1fr)}.wv .st{flex-direction:column;gap:4px;padding:10px 4px;text-align:center;font-size:11px}.wv .st small{display:none}.wv .qr{grid-template-columns:1fr;gap:4px}.wv .sharp{grid-template-columns:1fr}}';

  var RC = [
    ["look", "What it looks like", "eye", "#14243A", null],
    ["why", "Why it happens", "gear", "#3B6EA8", /\bcause|caus(ed|ing)|because|model|gene|trigger|due to|factor|mechanis|vulnerab/i],
    ["num", "Numbers to know", "num", "#2A8C8C", /\d/],
    ["red", "Red flags and risk", "alert", "#A33A3A", /red flag|risk|danger|urgent|emergenc|suicid|self-harm|harm|toxic|NMS|serotonin|sepsis|delirium|warning|escalat|unsafe|safety|collapse/i],
    ["law", "Law, duty and guidance", "shield", "#6B4FA0", /\bAct\b|Section \d|\bs\.?\s?\d|MHA|MCA|DoLS|LPS|duty|CQC|consent|capacity|legal|Regulation|GMC|NICE|Code of Practice|safeguard/i]
  ];
  function rcat(t) { for (var k = RC.length - 1; k > 0; k--) if (RC[k][4].test(t)) return RC[k]; return RC[0]; }

  var QB = [
    ["open", "Open and orient", "door", "#14243A"],
    ["explore", "Explore the story", "search", "#3B6EA8"],
    ["worry", "Worries and what matters", "heart", "#B8732C"],
    ["safe", "Safety and risk", "alert", "#A33A3A"],
    ["team", "Ask the team", "users", "#2A8C8C"],
    ["close", "Check, agree and close", "check", "#2E7D5B"]
  ];
  function qcat(t) {
    if (/^\s*(to|ask) (the |your |a |an )?[^:'"‘“]{2,45}:/i.test(t)) return "team";
    if (/harm|suicid|kill|\bsafe|risk|weapon|hurt|ligature|danger|abuse|violen|overdose|neglect|alone with/i.test(t)) return "safe";
    if (/already (know|understand)|what have you heard|what do you know|what happened|how (are|can) |introduc|who (is|are) here|what should I call|okay to talk|happy for/i.test(t)) return "open";
    if (/worr|concern|fear|afraid|expect|hope|helpful|matter|important to you|priorit|most like|scared|upset/i.test(t)) return "worry";
    if (/check|understood|understand|explain|questions|describe|summar|repeat|anything else|clear|agree|plan|next step|follow/i.test(t)) return "close";
    return "explore";
  }
  function who(t) {
    var m = t.match(/^\s*(?:to|ask) ((?:the |your |a |an )?[^:'"‘“]{2,45}):\s*(.*)$/i);
    return m ? [m[1].replace(/^(the|your|a|an)\s+/i, ""), m[2]] : ["", t];
  }
  function initials(s) { s = String(s || "").replace(/[^A-Za-z ]/g, "").trim().split(/\s+/); return ((s[0] || "?")[0] + ((s[1] || "")[0] || "")).toUpperCase(); }
  var LET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  window.WARD_RENDER = function (c, PG, view, markDone) {
    var X = (window.TPR_X && window.TPR_X[c.id]) || {}; c = Object.assign({}, c, X); if (window.TPR_SIM && window.TPR_SIM[c.id]) c.sim = window.TPR_SIM[c.id]; if (window.TPR_METH && window.TPR_METH[c.id]) { c.method = window.TPR_METH[c.id]; if (c.method.objmap) c.objmap = c.method.objmap; }
    if (!document.getElementById("wvcss")) { var st = document.createElement("style"); st.id = "wvcss"; st.textContent = CSS; document.head.appendChild(st); }
    var K = "tpr-wv-" + c.id, S = {};
    try { S = JSON.parse(localStorage.getItem(K) || "{}"); } catch (x) {}
    function save() { try { localStorage.setItem(K, JSON.stringify(S)); } catch (x) {} }
    S.ck = S.ck || {}; S.seen = S.seen || {}; S.az = S.az || {};

    /* 1 Recognition */
    var rec = (c.recognise || []).map(function (t) { var k = rcat(t); return { t: t, k: k }; });
    var used = RC.filter(function (r) { return rec.some(function (x) { return x.k === r; }); });
    var p1 = '<div class="ph"><div class="bigi">' + ic("eye") + '</div><div><h3>Recognition</h3><p>Spot what is really going on before you act. Tap any card to open it.</p></div></div>' +
      '<div class="chips" data-f="rec"><button class="chip on" data-k="*">All <i>' + rec.length + '</i></button>' +
      used.map(function (r) { return '<button class="chip" data-k="' + r[0] + '">' + ic(r[2]) + e(r[1]) + ' <i>' + rec.filter(function (x) { return x.k === r; }).length + '</i></button>'; }).join("") + '</div>' +
      '<div class="cards" id="recC" data-a="a-rec">' + rec.map(function (x) { var h = head(x.t); return '<button class="cd" data-k="' + x.k[0] + '" style="--cc:' + x.k[3] + '"><div class="tg">' + ic(x.k[2]) + e(x.k[1]) + '</div><div class="h">' + e(h[0]) + '</div>' + (h[1] ? '<div class="x">' + e(h[1]) + '</div><div class="more">TAP TO OPEN</div>' : '') + '</button>'; }).join("") + '</div>';

    /* 2 How to do it */
    var f60 = (c.first60 || []).map(function (t, i) { var h = head(t); return '<div class="fs"><div class="dot">' + (i + 1) + '</div><div class="box"><b>' + e(h[0]) + '</b>' + e(h[1]) + '</div></div>'; }).join("");
    var groups = {}; (c.ask || []).forEach(function (t) { var k = qcat(t); (groups[k] = groups[k] || []).push(t); });
    var bands = QB.filter(function (b) { return groups[b[0]]; }).map(function (b, bi) {
      return '<div class="band' + (bi > 1 ? ' shut' : '') + '" style="--bc:' + b[3] + '"><button>' + ic(b[2]) + e(b[1]) + '<i>' + groups[b[0]].length + ' question' + (groups[b[0]].length > 1 ? 's' : '') + '</i>' + ic("chev", "car") + '</button><div class="rows">' +
        groups[b[0]].map(function (t) { var w = who(t); return '<div class="qr"><div class="who">' + e(w[0] || (b[0] === "team" ? "Colleague" : "Patient or family")) + '</div><div class="q">' + e(w[1].replace(/^['‘“"]|['’”"]$/g, "")) + '</div></div>'; }).join("") + '</div></div>';
    }).join("");
    var says = (c.say || []).map(function (s) { return '<div class="sy"><div class="av">' + e(initials(s.to)) + '</div><div class="bub"><small>To: ' + e(s.to) + '</small>' + e(s.s) + '</div></div>'; }).join("");
    var dec = (c.decide || []).map(function (d, i) { return '<button class="opt" data-b="' + (d.best ? 1 : 0) + '"><span class="l">' + LET[i] + '</span><span>' + e(d.c) + '<span class="r"><b>' + (d.best ? "Best choice. " : "Not the best. ") + '</b>' + e(d.r) + '</span></span></button>'; }).join("");
    var snipH = (c.snip || []).length ? '<h4 class="sub" id="a-snip">' + ic("chat") + 'When they say… you say</h4><p class="sans" style="font-size:14px;color:#5B6474;margin:-4px 0 12px">Read what the person says. Decide your reply, then tap to see a reply that validates first and then moves forward.</p><div class="snips">' +
      c.snip.map(function (x) { return '<div class="sn"><div class="snq"><div class="pa">' + ic("users") + '</div><div><span class="tag">' + e(x.tag || "They say") + '</span><div class="pb">“' + e(String(x.p || "").replace(/^['‘“"]+|['’”"]+$/g, "")) + '”</div></div></div><button class="rb">How would you respond? →</button><div class="yr"><div class="yb">' + e(x.r) + '</div><div class="ya">YOU</div></div></div>'; }).join("") + '</div>' : '';
    var B = c.bps || {}, BC = [["bio", "Biological", "#14243A"], ["psych", "Psychological", "#B8932C"], ["social", "Social", "#2E7D5B"], ["safety", "Safety", "#A33A3A"]];
    var MG = /Management plan|Explain a treatment|Medication review|Emergency management|Safety plan|Therapy assessment/.test(c.type || "");
    var bpsH = BC.some(function (k) { return (B[k[0]] || []).length; }) ? (MG ? '<h4 class="sub" id="a-bps">' + ic("gear") + 'Management in brief</h4>' : '<details class="bpsl" id="a-bps"><summary>' + ic("gear") + 'Management in brief <i>(not the focus of this task, tap to open)</i></summary>') + '<div class="bps"><div class="bh">' + ic("gear") + 'Biopsychosocial plan: who does what</div><div class="cols">' +
      BC.filter(function (k) { return (B[k[0]] || []).length; }).map(function (k) { return '<div class="col" style="--k:' + k[2] + '"><div class="ch2">' + k[1] + '</div>' + B[k[0]].map(function (t) { return '<div class="it">' + e(t) + '</div>'; }).join("") + '</div>'; }).join("") + '</div></div>' + (MG ? '' : '</details>') : '';
    var factsH = (c.facts || []).length ? '<h4 class="sub" id="a-facts">' + ic("star") + 'Know it cold</h4><p class="sans" style="font-size:14px;color:#5B6474;margin:-4px 0 12px">Say the fact before you flip the card.</p><div class="kc">' +
      c.facts.map(function (x) { return '<button class="fc2"><div class="in2"><div class="f"><small>KNOW IT COLD</small>' + e(x.h) + '</div><div class="b">' + e(x.x) + '</div></div></button>'; }).join("") + '</div>' : '';
    var p2 = '<div class="ph"><div class="bigi">' + ic("compass") + '</div><div><h3>How to do it</h3><p>Prepare, ask in a clear order, use words that work, then make the call.</p></div></div>' +
      (f60 ? '<h4 class="sub" id="a-f60">' + ic("route") + 'Before you say a word</h4><div class="flow">' + f60 + '</div>' : '') +
      (bands ? '<h4 class="sub" id="a-q">' + ic("chat") + 'The questioning, grouped</h4><p class="sans" style="font-size:14px;color:#5B6474;margin:-4px 0 12px">Work through the groups in order. Tap a group to open or close it.</p>' + bands : '') +
      snipH + (says ? '<h4 class="sub" id="a-say">' + ic("chat") + 'Words that work</h4><div class="says">' + says + '</div>' : '') +
      (dec ? '<h4 class="sub" id="a-dec">' + ic("flag") + 'Make the call</h4><p class="sans" style="font-size:14px;color:#5B6474;margin:-4px 0 12px">Pick what you would do. Then see what happens.</p><div class="dc">' + dec + '</div>' : '');

    /* 3 Practicalities A–Z */
    var L = 0, tiles = [];
    (c.make || []).forEach(function (t) { tiles.push(["Get it done", "#14243A", t]); });
    (c.law || []).forEach(function (t) { tiles.push(["Law and safety net", "#6B4FA0", t]); });
    var az = tiles.slice(0, 26).map(function (x) { var h = head(x[2]), l = LET[L++]; return '<button class="tile' + (S.az[l] ? ' dn' : '') + '" data-l="' + l + '" style="--tc:' + x[1] + '"><span class="L">' + l + '</span><span><span class="tg">' + e(x[0]) + '</span><div class="h">' + e(h[0]) + '</div>' + (h[1] ? '<div class="x">' + e(h[1]) + '</div>' : '') + '</span></button>'; }).join("");
    var p3 = '<div class="ph"><div class="bigi">' + ic("tool") + '</div><div><h3>Practicalities A to Z</h3><p>The nuts and bolts that make it happen on a UK ward. Tap a tile to open it; tap again to tick it off.</p></div></div>' +
      bpsH + factsH + '<h4 class="sub" id="a-az">' + ic("tool") + 'Practicalities A to Z</h4><div class="az">' + az + '</div>' +
      (c.write ? '<h4 class="sub" id="a-note">' + ic("pen") + 'Write it down: a model note</h4><div class="note2">' + e(c.write) + '</div>' : '') +
      (c.img ? '<div class="uk">' + ic("star") + '<div><b class="sans" style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#B8932C">On a UK ward</b><br>' + e(String(c.img).replace(/^Tip for IMGs:\s*/i, "").replace(/^./, function (m) { return m.toUpperCase(); })) + '</div></div>' : '');

    /* 4 Keeping it sharp */
    var mk = (c.marks || []);
    var traps = (c.pitfalls || []).map(function (t) { var h = head(t); return '<button class="cd trap"><div class="tg">' + ic("alert") + 'Trap</div><div class="h">' + e(h[0]) + '</div>' + (h[1] ? '<div class="x">' + e(h[1]) + '</div><div class="more">TAP TO OPEN</div>' : '') + '</button>'; }).join("");
    var p4 = '<div class="ph"><div class="bigi">' + ic("bolt") + '</div><div><h3>Keeping it sharp</h3><p>Check yourself honestly, learn the traps, and see what happened next.</p></div></div>' +
      (mk.length ? '<h4 class="sub" id="a-self">' + ic("check") + 'Self-check: did you…</h4><div class="sharp"><div class="ring"><svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="86" fill="none" stroke="#E1E4EA" stroke-width="16"/><circle id="rg" cx="100" cy="100" r="86" fill="none" stroke="#B8932C" stroke-width="16" stroke-linecap="round" stroke-dasharray="540.4" stroke-dashoffset="540.4" style="transition:stroke-dashoffset .5s"/></svg><div class="v"><div><span id="rv">0</span>/' + mk.length + '<small>done well</small></div></div></div><div>' +
        mk.map(function (m, i) { return '<button class="ck' + (S.ck[i] ? ' on' : '') + '" data-i="' + i + '"><span class="bx">' + ic("check") + '</span><span>' + e(m) + '</span></button>'; }).join("") + '</div></div>' : '') +
      (traps ? '<h4 class="sub" id="a-traps">' + ic("alert") + 'Traps to avoid</h4><div class="cards">' + traps + '</div>' : '') +
      (c.next ? '<h4 class="sub" id="a-next">' + ic("route") + 'What happened next</h4><div class="twist" id="tw"><div class="hid">' + e(c.next) + '</div><p style="margin:12px 0 0"><button class="bt" id="twb">Reveal what happened</button></p></div>' : '') +
      ((c.refs || []).length ? '<h4 class="sub">' + ic("book") + 'Sources</h4><details><summary>Show the ' + c.refs.length + ' sources (guidance checked ' + e(c.checked) + ')</summary><div class="refs2">' + c.refs.map(e).join("<br>") + '</div></details>' : '') +
      '<div class="pn"><span></span><button class="bt g" id="dn2">' + ic("check") + 'Mark this challenge as done</button></div>';

    var best = (c.decide || []).filter(function (d) { return d.best; })[0];
    var B2 = c.bps || {};
    var RUN = [
      ["door", "Arrive and prepare", (c.first60 || []).slice()],
      ["search", "Ask, in order", QB.filter(function (b) { return groups[b[0]]; }).map(function (b) { var q = who(groups[b[0]][0]); return b[1] + ": “" + q[1].replace(/^['‘“"]+|['’”"]+$/g, "") + "”"; })],
      ["chat", "Say it", (c.say || []).slice(0, 2).map(function (x) { return x.to + ": “" + x.s + "”"; })],
      ["flag", "Make the call", best ? [best.c] : []],
      ["tool", "Do it", (c.make || []).slice().concat((B2.bio || []).slice(0, 2))],
      ["shield", "Keep everyone safe", (B2.safety || []).slice(0, 3)],
      ["pen", "Write it down", c.write ? ["Model note ready: dated, timed, signed, with your bleep."] : []],
      ["route", "Hand over and follow up", (B2.social || []).slice(0, 3)]
    ].filter(function (r) { return r[2].length; });
    var p5 = '<div class="ph"><div class="bigi">' + ic("route") + '</div><div><h3>Start to finish</h3><p>The flawless run: every step a consultant would want to see, in order. Tick each one as you do it.</p></div></div>' +
      '<div class="run">' + RUN.map(function (r, i) { return '<div class="rs"><div class="rd">' + ic(r[0]) + '</div><div class="rb2"><div class="rt">' + (i + 1) + ' · ' + e(r[1]) + '</div>' + r[2].map(function (t, j) { var k = "r" + i + "_" + j; return '<button class="rk' + (S.run && S.run[k] ? ' on' : '') + '" data-k="' + k + '"><span class="bx">' + ic("check") + '</span><span>' + e(t) + '</span></button>'; }).join("") + '</div></div>'; }).join("") + '</div>' +
      '<div class="flaw" id="flaw" hidden>' + ic("star") + '<div><b>Flawless.</b> Every step done, in the right order. A consultant would not have done anything differently.</div></div>' +
      '<div class="pn"><span></span><button class="bt g" id="dn3">' + ic("check") + 'Mark this challenge as done</button></div>';
    var MT = c.method || null, pM = '';
    if (MT) {
      pM = '<div class="ph"><div class="bigi">' + ic("route") + '</div><div><h3>The method</h3><p>' + e(MT.why || "Exactly how to do this task, step by step.") + '</p></div></div>' +
        '<div class="mname">' + e(MT.name) + '</div>' +
        ((MT.frame || []).length ? '<div class="mframe"><span>It turns on</span>' + MT.frame.map(function (f) { return '<b>' + e(f) + '</b>'; }).join("") + '</div>' : '') +
        '<div class="msteps" id="a-meth">' + (MT.steps || []).map(function (st, i) {
          return '<div class="mst"><div class="mnum">' + (i + 1) + '</div><div class="mbody"><div class="mh">Step ' + (i + 1) + ' · ' + e(st.h) + '</div>' +
            (st.say || []).map(function (x) { return '<div class="msay"><span>You say</span>' + e(String(x).replace(/^['‘“"]+|['’”"]+$/g, "")) + '</div>'; }).join("") +
            (st.hear ? '<div class="mhear"><span>They might say</span>“' + e(String(st.hear).replace(/^['‘“"]+|['’”"]+$/g, "")) + '”</div>' : '') +
            (st.mark ? '<div class="mmark">' + ic("check") + e(st.mark) + '</div>' : '') + '</div></div>';
        }).join("") + '</div>' +
        (MT.table && (MT.table.rows || []).length ? '<h4 class="sub" id="a-tab">' + ic("book") + 'What you heard, and what it means</h4><div class="mtab"><table><thead><tr>' + (MT.table.cols || []).map(function (h) { return '<th>' + e(h) + '</th>'; }).join("") + '</tr></thead><tbody>' + MT.table.rows.map(function (r) { return '<tr>' + r.map(function (x, j) { return j ? '<td>' + e(x) + '</td>' : '<th>' + e(x) + '</th>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>' : '') +
        (MT.key ? '<div class="mkey">' + ic("star") + '<div><b>The key distinction</b>' + e(MT.key) + '</div></div>' : '');
    }
    var SIM = c.sim || null, p6 = '';
    if (SIM) {
      var MK = SIM.marks || [], R0 = SIM.role || {};
      var bands6 = [], lastB = null;
      (SIM.run || []).forEach(function (t, i) {
        if (t.w !== "D" && /^\(\s*finding/i.test(String(t.s || ""))) { bands6.push('<div class="fdg">' + ic("search") + '<span>' + e(String(t.s).replace(/^\(\s*|\)\s*$/g, "")) + '</span></div>'); return; }
        if (t.w !== "D" && !t.who) { var mm2 = String(t.s || "").match(/^\(([^)]{2,40})\)\s*|^([A-Z][A-Za-z' ]{1,30}):\s+/); if (mm2) { t = Object.assign({}, t, { who: mm2[1] || mm2[2], s: String(t.s).slice(mm2[0].length) }); } }
        if (t.band && t.band !== lastB) { bands6.push('<div class="mb"><span>' + e(t.t || "") + '</span>' + e(t.band) + '</div>'); lastB = t.band; }
        var dd = t.w === "D";
        bands6.push('<div class="ml ' + (dd ? "d" : "p") + '" data-m="' + (t.m || []).join(",") + '"><div class="mw">' + (dd ? "You" : e(t.who || String(R0.who || "Them").split(",")[0])) + (t.t ? ' <i>' + e(t.t) + '</i>' : '') + '</div><div class="ms">' + e(t.s) + (dd && (t.m || []).length ? '<span class="mm">' + t.m.map(function (n) { return '<b>' + n + '</b>'; }).join("") + '</span>' : '') + '</div></div>');
      });
      var crit = MK.map(function (m, i) { return '<button class="mc" data-n="' + (i + 1) + '"><b>' + (i + 1) + '</b><span>' + e(m.c) + '<small>' + e(m.d || "") + '</small></span></button>'; }).join("");
      var G = SIM.global || {};
      p6 = '<div class="ph"><div class="bigi">' + ic("users") + '</div><div><h3>Practice run</h3><p>Put it all together in one real conversation: about 7 minutes, never more than 9.</p></div></div>' +
        '<div class="ps"><b>' + ic("bell") + ' The set-up</b><p>' + e(SIM.setup) + '</p><p class="pw">You are speaking to: <b>' + e(R0.who) + '</b></p></div>' +
        '<div class="ptab"><button class="pt2 on" data-v="watch">' + ic("eye") + 'Watch the model run</button><button class="pt2" data-v="try">' + ic("chat") + 'Practise it</button></div>' +
        '<div class="pv" data-v="watch"><div class="mlay"><div class="mrun"><div class="mtool"><button class="bt" id="mstep">Reveal line by line</button><button class="bt" id="mall">Show the whole conversation</button></div><div id="mlines">' + bands6.join("") + '</div><button class="bt p" id="mnext" hidden>Next line &rarr;</button></div>' +
        '<aside class="mside"><div class="mh">How it is marked</div><p class="mhint">Tap a criterion to light up the lines that earn it. Gold numbers on each of your lines show what it earns.</p>' + crit +
        '<div class="mg"><div><b class="gp">Pass</b> ' + e(G.pass) + '</div><div><b class="gb">Borderline</b> ' + e(G.borderline) + '</div><div><b class="gf">Fail</b> ' + e(G.fail) + '</div></div></aside></div></div>' +
        '<div class="pv" data-v="try" hidden>' +
          '<div class="tbar"><div class="clock" id="clk">7:00</div><div class="tbtn"><button class="bt p" id="tgo">' + ic("bolt") + 'Start the 7 minutes</button><button class="bt" id="tend" hidden>Finish and mark</button><label class="tts"><input type="checkbox" id="tsp"> Read their replies aloud</label></div></div>' +
          '<div class="tnote" id="tnote">You type (or speak) as the doctor. They answer in character. At 7 minutes the clock turns amber; at 9 it stops and you are marked.</div>' +
          '<div class="chat" id="chat"></div>' +
          '<div class="tin"><textarea id="tx" rows="2" placeholder="Say what you would say…" disabled></textarea><button class="bt" id="mic" title="Speak" disabled>' + ic("chat") + 'Speak</button><button class="bt p" id="send" disabled>Send</button></div>' +
          '<div id="tres"></div>' +
        '</div>';
    }
    var P = (MT ? [pM] : []).concat([p1, p2, p3, p4, p5]).concat(SIM ? [p6] : []);
    var STEPS = (MT ? [["route", "The method", "Exactly how to do it"]] : []).concat([["eye", "Recognition", "What is going on"], ["compass", "How to do it", "Prepare, ask, say, decide"], ["tool", "Practicalities A–Z", "Make it happen"], ["bolt", "Keeping it sharp", "Check and learn"], ["route", "Start to finish", "The flawless run"], ["users", "Practice run", "7 minutes, real conversation"]]);
    var SUBS = (MT ? [[["a-meth", "The steps", 1], ["a-tab", "What you heard", MT.table], ["a-key", "", 0]]] : []).concat([
      [["a-rec", "What is going on", 1]],
      [["a-f60", "Before you say a word", f60], ["a-q", "The questioning", bands], ["a-snip", "When they say… you say", snipH], ["a-say", "Words that work", says], ["a-dec", "Make the call", dec]],
      [["a-bps", "Management in brief", bpsH], ["a-facts", "Know it cold", factsH], ["a-az", "A to Z", az], ["a-note", "Model note", c.write]],
      [["a-self", "Self-check", mk.length], ["a-traps", "Traps", traps], ["a-next", "What happened next", c.next]],
      [],
      [["a-watch","Watch the model run",1],["a-try","Practise it",1]]
    ]);
    view.innerHTML = '<div class="wv">' +
      '<p style="margin-top:26px"><a href="#p=' + PG.id + '" class="b2">&larr; ' + e(PG.name) + '</a></p>' +
      '<div class="kick" style="margin-top:20px">' + e(c.prog) + '</div><h2 class="tt">' + e(c.icon) + ' ' + e(c.title) + '</h2>' +
      '<div class="scene"><div class="bleep2"><div class="w">' + ic("bell") + e(c.moment && c.moment.when) + ' · ' + e(c.moment && c.moment.where) + '</div><p>' + e(c.moment && c.moment.text) + '</p></div>' +
      '<div class="job"><div class="w">' + ic("flag") + 'Your job</div>' + (c.type ? '<div class="ttype">' + c.type.split(" + ").map(function (x) { return '<span>' + e(x) + '</span>'; }).join('<i>+</i>') + '</div>' : '') + (c.do ? '<p class="tdo" style="border:0;padding:0;margin:0">' + e(c.do) + '</p>' : '<p>' + e(c.task) + '</p>') + '</div></div>' +
      ((c.obj || []).length ? '<div class="objs" id="a-obj"><div class="w">' + ic("flag") + 'What you must achieve</div><ol>' + c.obj.map(function (o, i) { var mp = (c.objmap || [])[i] || []; return '<li><i>' + (i + 1) + '</i><span>' + e(o) + (mp.length && c.method ? ' ' + mp.map(function (n) { return '<button class="ostep" data-st="' + n + '">→ Step ' + n + '</button>'; }).join("") : '') + '</span></li>'; }).join("") + '</ol></div>' : '') + '<nav class="steps">' + STEPS.map(function (s, i) { return '<button class="st" data-s="' + i + '"><b>' + (i + 1) + '</b><span>' + e(s[1]) + '<small>' + e(s[2]) + '</small></span></button>'; }).join("") + '</nav>' +
      '<div class="lay2"><aside class="lnav"><div class="lh">This challenge</div>' + STEPS.slice(0, P.length).map(function (st, i) { return '<button class="ls" data-s="' + i + '"><b>' + (i + 1) + '</b>' + e(st[1]) + '</button><div class="lgrp">' + (SUBS[i] || []).filter(function (x) { return x[2]; }).map(function (x) { return '<button class="lk" data-s="' + i + '" data-a="' + x[0] + '">' + e(x[1]) + '</button>'; }).join("") + '</div>'; }).join("") + '</aside><div>' +
      P.map(function (p, i) { return '<section class="pane" data-p="' + i + '">' + p + '<div class="pn">' + (i ? '<button class="bt" data-go="' + (i - 1) + '">&larr; ' + STEPS[i - 1][1] + '</button>' : '<span></span>') + (i < P.length - 1 ? '<button class="bt p" data-go="' + (i + 1) + '">Next: ' + STEPS[i + 1][1] + ' &rarr;</button>' : '') + '</div></section>'; }).join("") +
      '</div></div></div>';
    var W = view.querySelector(".wv");
    function go(i, scroll) {
      [].forEach.call(W.querySelectorAll(".ls"), function (b) { b.classList.toggle("on", +b.dataset.s === i); b.classList.toggle("seen", !!S.seen[b.dataset.s]); });
      [].forEach.call(W.querySelectorAll(".st"), function (b) { b.classList.toggle("on", +b.dataset.s === i); b.classList.toggle("seen", !!S.seen[b.dataset.s]); });
      [].forEach.call(W.querySelectorAll(".pane"), function (p) { p.classList.toggle("on", +p.dataset.p === i); });
      S.seen[i] = 1; S.at = i; save();
      if (scroll) { var n = W.querySelector(".lay2"); var y = n.getBoundingClientRect().top + window.scrollY - 4; if (window.scrollY > y) window.scrollTo({ top: y, behavior: "smooth" }); }
    }
    W.addEventListener("click", function (ev) {
      var t = ev.target.closest("button"); if (!t || !W.contains(t)) return;
      if (t.classList.contains("st")) return go(+t.dataset.s, true);
      if (t.classList.contains("ls")) return go(+t.dataset.s, true);
      if (t.classList.contains("lk")) { go(+t.dataset.s, false); var el = W.querySelector("#" + t.dataset.a) || W.querySelector("[data-a='" + t.dataset.a + "']"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 12, behavior: "smooth" }); return; }
      if (t.classList.contains("rb")) { t.parentNode.classList.add("op"); return; }
      if (t.classList.contains("fc2")) return t.classList.toggle("op");
      if (t.dataset.go != null) return go(+t.dataset.go, true);
      if (t.classList.contains("chip")) {
        [].forEach.call(t.parentNode.querySelectorAll(".chip"), function (x) { x.classList.toggle("on", x === t); });
        [].forEach.call(W.querySelectorAll("#recC .cd"), function (x) { x.hidden = !(t.dataset.k === "*" || x.dataset.k === t.dataset.k); });
        return;
      }
      if (t.classList.contains("cd")) return t.classList.toggle("op");
      if (t.parentNode.classList.contains("band")) return t.parentNode.classList.toggle("shut");
      if (t.classList.contains("opt")) { t.classList.add("sh", t.dataset.b == "1" ? "ok" : "no"); return; }
      if (t.classList.contains("tile")) {
        if (!t.classList.contains("op")) t.classList.add("op");
        else { t.classList.toggle("dn"); S.az[t.dataset.l] = t.classList.contains("dn") ? 1 : 0; save(); }
        return;
      }
      if (t.classList.contains("ck")) { t.classList.toggle("on"); S.ck[t.dataset.i] = t.classList.contains("on") ? 1 : 0; save(); ring(); return; }
      if (t.id === "twb") { W.querySelector("#tw").classList.add("op"); t.remove(); return; }
      if (t.classList.contains("rk")) { t.classList.toggle("on"); S.run = S.run || {}; S.run[t.dataset.k] = t.classList.contains("on") ? 1 : 0; save(); var all = W.querySelectorAll(".rk"), on = W.querySelectorAll(".rk.on"); W.querySelector("#flaw").hidden = !(all.length && all.length === on.length); return; }
      if (t.id === "dn3") { try { markDone(c.id); } catch (x) {} t.innerHTML = ic("check") + "Done"; return; }
      if (t.classList.contains("lk") && /^a-(watch|try)$/.test(t.dataset.a)) { var tb = W.querySelector('.pt2[data-v="' + t.dataset.a.slice(2) + '"]'); if (tb) tb.click(); return; }
      if (t.classList.contains("pt2")) { [].forEach.call(W.querySelectorAll(".pt2"), function (x) { x.classList.toggle("on", x === t); }); [].forEach.call(W.querySelectorAll(".pv"), function (v) { v.hidden = v.dataset.v !== t.dataset.v; }); return; }
      if (t.id === "mstep") { var L = W.querySelector("#mlines"); L.classList.add("stepmode"); [].forEach.call(L.children, function (x, i) { x.classList.toggle("shown", i < 2); }); W.querySelector("#mnext").hidden = false; return; }
      if (t.id === "mall") { var L2 = W.querySelector("#mlines"); L2.classList.remove("stepmode"); W.querySelector("#mnext").hidden = true; return; }
      if (t.id === "mnext") { var hid = W.querySelector("#mlines > :not(.shown)"); if (hid) { hid.classList.add("shown"); if (hid.classList.contains("mb")) { var nx = hid.nextElementSibling; if (nx) nx.classList.add("shown"); } hid.scrollIntoView({ block: "nearest", behavior: "smooth" }); } if (!W.querySelector("#mlines > :not(.shown)")) t.hidden = true; return; }
      if (t.classList.contains("mc")) { var on = !t.classList.contains("on"); [].forEach.call(W.querySelectorAll(".mc"), function (x) { x.classList.remove("on"); }); [].forEach.call(W.querySelectorAll(".ml"), function (x) { x.classList.remove("hit"); }); if (on) { t.classList.add("on"); var L3 = W.querySelector("#mlines"); L3.classList.remove("stepmode"); W.querySelector("#mnext").hidden = true; var first = null; [].forEach.call(W.querySelectorAll(".ml"), function (x) { if (("," + x.dataset.m + ",").indexOf("," + t.dataset.n + ",") >= 0) { x.classList.add("hit"); first = first || x; } }); if (first) first.scrollIntoView({ block: "center", behavior: "smooth" }); } return; }
      if (t.id === "tgo") return PR.start();
      if (t.id === "send") return PR.send();
      if (t.id === "tend") return PR.finish();
      if (t.id === "mic") return PR.mic();
      if (t.classList.contains("sk")) { t.classList.toggle("on"); PR.selfScore(); return; }
      if (t.classList.contains("ostep")) { go(0, false); var ms = W.querySelectorAll(".mst")[(+t.dataset.st) - 1]; if (ms) { ms.scrollIntoView({ behavior: "smooth", block: "center" }); ms.classList.add("flash"); setTimeout(function () { ms.classList.remove("flash"); }, 1600); } return; }
      if (t.id === "dn2") { try { markDone(c.id); } catch (x) {} t.innerHTML = ic("check") + "Done"; return; }
    });
    function ring() {
      var n = 0; for (var k in S.ck) if (S.ck[k]) n++;
      var r = W.querySelector("#rg"), v = W.querySelector("#rv"); if (!r) return;
      r.style.strokeDashoffset = 540.4 * (1 - (mk.length ? n / mk.length : 0)); v.textContent = n;
    }
    var PR = (function () {
      var turns = [], t0 = 0, tick = null, live = false, scripted = false, si = 0, rec = null;
      function el(id) { return W.querySelector("#" + id); }
      function fmt(sec) { sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2); }
      function add(w, txt, cls) { var d = document.createElement("div"); d.className = "cm " + (w === "D" ? "d" : "p") + (cls ? " " + cls : ""); d.innerHTML = '<div class="mw">' + (w === "D" ? "You" : e(String((SIM.role || {}).who || "Them").split(",")[0])) + ' <i>' + fmt((Date.now() - t0) / 1000) + '</i></div><div class="ms">' + e(txt) + '</div>'; el("chat").appendChild(d); d.scrollIntoView({ block: "nearest", behavior: "smooth" }); return d; }
      function say(txt) { if (!el("tsp").checked || !window.speechSynthesis) return; try { var u = new SpeechSynthesisUtterance(txt); var SC = function(v){var n=v.name+" "+(v.voiceURI||""),s=0;if(!/^en/i.test(v.lang))return -1;if(/Natural|Neural|Premium|Enhanced|Online|network/i.test(n))s+=100;if(/Sonia/i.test(n))s+=60;else if(/Libby|Maisie|Abbi|Bella|Hollie|Olivia|Serena/i.test(n))s+=45;else if(/Ryan|Thomas|Alfie|Elliot|Ethan|Noah|Oliver|Daniel/i.test(n))s+=35;if(/en-GB/i.test(v.lang))s+=30;else if(/en-US/i.test(v.lang))s+=6;if(/Google UK English Female/i.test(n))s+=25;if(/eSpeak|compact|Fred|Albert|Zarvox|Whisper|Bells|Boing|Bubbles|Jester|Organ|Trinoids|Wobble/i.test(n))s-=200;return s}; var v = speechSynthesis.getVoices().filter(function (x) { return SC(x) >= 0; }).sort(function (a, b) { return SC(b) - SC(a); })[0]; if (v) u.voice = v; u.rate = 0.97; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch (x) {} }
      function token() { try { return window.tprToken ? window.tprToken() : ""; } catch (x) { return ""; } }
      function api(body) { return fetch("/.netlify/functions/sim-chat", { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + token() }, body: JSON.stringify(Object.assign({ sim: SIM, ch: { where: c.moment && c.moment.where } }, body)) }).then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; return j; }); }); }
      function scriptedReply() { var run = SIM.run || []; while (si < run.length && run[si].w !== "P") si++; var r = run[si]; si++; return r ? r.s : "I think that's everything. Thank you, doctor."; }
      function clock() { var sec = (Date.now() - t0) / 1000, left = 420 - sec, k = el("clk"); k.textContent = left >= 0 ? fmt(left) : "+" + fmt(-left); k.className = "clock" + (sec >= 420 ? " amber" : "") + (sec >= 510 ? " red" : ""); if (sec >= 540) finish(); }
      function start() {
        turns = []; si = 0; el("chat").innerHTML = ""; el("tres").innerHTML = ""; t0 = Date.now(); live = true;
        el("tgo").hidden = true; el("tend").hidden = false; el("tx").disabled = false; el("send").disabled = false; el("mic").disabled = !(window.SpeechRecognition || window.webkitSpeechRecognition);
        el("tnote").textContent = "The clock is running. Open the conversation as you would on the ward.";
        clearInterval(tick); tick = setInterval(clock, 500); el("tx").focus();
        if ((SIM.role || {}).open) { var o = SIM.role.open; turns.push({ w: "P", s: o }); add("P", o); say(o); }
      }
      function send() {
        var tx = el("tx"), v = tx.value.trim(); if (!live || !v) return; tx.value = ""; turns.push({ w: "D", s: v }); add("D", v);
        var wait = add("P", "…", "typing");
        var done = function (txt) { wait.remove(); turns.push({ w: "P", s: txt }); add("P", txt); say(txt); };
        if (scripted) return setTimeout(function () { done(scriptedReply()); }, 500);
        api({ mode: "chat", turns: turns }).then(function (j) { done(j.reply || "…"); }).catch(function (err) {
          scripted = true; var why = err && err.error === "signin" ? "Sign in to practise with the AI partner." : err && err.error === "role" ? "The AI partner is for members." : "The AI partner is not available right now.";
          el("tnote").textContent = why + " You are practising with the scripted replies from the model run instead.";
          done(scriptedReply());
        });
      }
      function mic() {
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition; if (!SR) return;
        if (rec) { try { rec.stop(); } catch (x) {} rec = null; el("mic").classList.remove("on"); return; }
        rec = new SR(); rec.lang = "en-GB"; rec.interimResults = false; rec.continuous = false; el("mic").classList.add("on");
        rec.onresult = function (ev) { el("tx").value = (el("tx").value + " " + ev.results[0][0].transcript).trim(); };
        rec.onend = function () { el("mic").classList.remove("on"); rec = null; if (el("tx").value.trim()) send(); };
        try { rec.start(); } catch (x) {}
      }
      function selfScore() { var n = W.querySelectorAll(".sk.on").length; var o = el("sks"); if (o) o.textContent = n + " / " + (SIM.marks || []).length; S.best = Math.max(S.best || 0, n); save(); }
      function finish() {
        if (!live) return; live = false; clearInterval(tick); el("tx").disabled = true; el("send").disabled = true; el("mic").disabled = true; el("tend").hidden = true; el("tgo").hidden = false; el("tgo").innerHTML = ic("bolt") + "Try again";
        var mins = ((Date.now() - t0) / 60000).toFixed(1);
        var box = el("tres");
        box.innerHTML = '<div class="rh">' + ic("check") + 'Your marking · ' + mins + ' minutes</div><div id="aim" class="aim2">' + (scripted ? '' : 'Marking your conversation…') + '</div>' +
          '<div class="selfm"><div class="sh2">Mark yourself honestly against each criterion <span id="sks">0 / ' + (SIM.marks || []).length + '</span></div>' + (SIM.marks || []).map(function (m, i) { return '<button class="sk"><span class="bx">' + ic("check") + '</span><span><b>' + (i + 1) + '.</b> ' + e(m.c) + '</span></button>'; }).join("") + '</div>' +
          '<p class="sans" style="font-size:14px;color:#5B6474">Then open <b>Watch the model run</b> and compare your lines with the model.</p>';
        box.scrollIntoView({ behavior: "smooth" });
        if (scripted || turns.filter(function (x) { return x.w === "D"; }).length < 2) { el("aim").innerHTML = scripted ? "" : "Too short to mark. Try again and take the conversation through to a close."; return; }
        api({ mode: "mark", turns: turns, mins: mins }).then(function (j) {
          var M = j.mark; if (!M) throw 0;
          var col = { yes: "#2E7D5B", partly: "#B8932C", no: "#A33A3A" };
          el("aim").innerHTML = '<div class="gl g' + String(M.global || "").toLowerCase().charAt(0) + '">' + e(M.global || "") + '</div>' +
            (M.criteria || []).map(function (r) { var m = (SIM.marks || [])[r.n - 1] || {}; return '<div class="ar"><span class="dot" style="background:' + (col[r.met] || "#8A93A3") + '">' + r.n + '</span><div><b>' + e(m.c || "") + '</b><br><small>' + e(r.met) + ' · ' + e(r.why) + '</small></div></div>'; }).join("") +
            ((M.strengths || []).length ? '<div class="ab"><b>What went well</b><ul>' + M.strengths.map(function (x) { return '<li>' + e(x) + '</li>'; }).join("") + '</ul></div>' : '') +
            ((M.improve || []).length ? '<div class="ab"><b>Next time</b><ul>' + M.improve.map(function (x) { return '<li>' + e(x) + '</li>'; }).join("") + '</ul></div>' : '');
        }).catch(function () { el("aim").innerHTML = '<p class="sans" style="color:#5B6474">Automatic marking is not available right now. Use the self-marking below.</p>'; });
      }
      W.addEventListener("keydown", function (ev) { if (ev.target && ev.target.id === "tx" && ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); send(); } });
      return { start: start, send: send, finish: finish, mic: mic, selfScore: selfScore };
    })();
    ring(); go(S.at || 0, false);
  };
})();

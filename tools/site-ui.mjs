// Page templates and styles for the generated index pages.
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const urlPath = (p) => p.split("/").map(encodeURIComponent).join("/");

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const prettyDate = (d) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

export const SUBJECTS = {
  "Polity":  { icon: "🏛️", paper: "GS II", color: "#7c3aed", blurb: "Constitution, institutions and governance." },
  "Indian Economy": { icon: "📈", paper: "GS III", color: "#059669", blurb: "Concepts, data, policy and trends." },
  "Indian Geography": { icon: "🗺️", paper: "GS I", color: "#d97706", blurb: "Physical and human geography of India, with maps." },
  "World Geography": { icon: "🌍", paper: "GS I", color: "#0891b2", blurb: "Physical and regional geography of the world." },
  "Modern History": { icon: "📜", paper: "GS I", color: "#b45309", blurb: "Modern Indian history and its world context." },
  "Modern World History": { icon: "🌐", paper: "GS I", color: "#2563eb", blurb: "Revolutions, industrialisation, empires and ideologies." },
  "Internal Security": { icon: "🛡️", paper: "GS III", color: "#dc2626", blurb: "Security challenges, agencies, laws and case studies." },
  "Science and Technology": { icon: "🔬", paper: "GS III", color: "#db2777", blurb: "Energy, space, physics and Indian programmes." },
};
const PALETTE = ["#0d9488", "#4f46e5", "#c026d3", "#65a30d", "#ea580c", "#0284c7", "#be123c"];
export const subjectMeta = (s) => {
  if (SUBJECTS[s]) return SUBJECTS[s];
  const hash = [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  return { icon: "📘", paper: "", color: PALETTE[hash % PALETTE.length], blurb: "" };
};

export const CSS = `
:root{--bg:#f4f6fb;--card:#fff;--ink:#1b2333;--muted:#5b6880;--line:#e2e8f2;--brand:#2563eb;--soft:#eef3ff;--shadow:0 1px 2px rgba(16,24,40,.06),0 4px 14px rgba(16,24,40,.06)}
@media(prefers-color-scheme:dark){:root{--bg:#0e131f;--card:#161d2d;--ink:#e8edf7;--muted:#97a6c0;--line:#25304a;--brand:#8aaeff;--soft:#1b2540;--shadow:0 1px 2px rgba(0,0,0,.4),0 4px 14px rgba(0,0,0,.3)}}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 "Segoe UI",Calibri,system-ui,-apple-system,Arial,sans-serif}
a{color:var(--brand);text-decoration:none}a:hover{text-decoration:underline}
.wrap{max-width:1040px;margin:0 auto;padding:0 20px}
.hero{background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 55%,#7c3aed 100%);color:#fff;padding:44px 0 56px}
.hero h1{margin:0 0 6px;font-size:clamp(28px,5vw,42px);letter-spacing:-.02em;border:0;padding:0;color:#fff}
.hero p{margin:0;max-width:640px;color:rgba(255,255,255,.88);font-size:17px}
.hero a{color:#fff}
.crumb{font-size:14px;margin-bottom:14px;opacity:.9}
.badge{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.04em;padding:2px 9px;border-radius:999px;background:rgba(255,255,255,.2);color:#fff}
.stats{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.stat{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.22);border-radius:12px;padding:8px 16px}
.stat b{display:block;font-size:22px;line-height:1.2}.stat span{font-size:12.5px;opacity:.85}
.actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.btn{display:inline-block;padding:9px 18px;border-radius:10px;font-weight:600;background:#fff;color:#1e3a8a!important;text-decoration:none!important;box-shadow:0 2px 8px rgba(0,0,0,.15)}
.btn.ghost{background:rgba(255,255,255,.15);color:#fff!important;box-shadow:none;border:1px solid rgba(255,255,255,.35)}
.search{margin:-26px auto 0;position:relative;z-index:2}
.search input{width:100%;padding:15px 18px 15px 48px;font:inherit;border:1px solid var(--line);border-radius:14px;background:var(--card) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2397a6c0' stroke-width='2.2' stroke-linecap='round'%3E%3Ccircle cx='11' cy='11' r='7'/%3E%3Cpath d='m20 20-3.5-3.5'/%3E%3C/svg%3E") no-repeat 16px center;color:var(--ink);box-shadow:var(--shadow)}
.search input:focus{outline:2px solid var(--brand)}
main{padding:30px 0 50px}
h2.sec{font-size:13px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin:34px 0 14px;border:0;padding:0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;padding:0;margin:0;list-style:none}
.card{background:var(--card);border:1px solid var(--line);border-top:4px solid var(--c,var(--brand));border-radius:14px;box-shadow:var(--shadow);padding:18px;display:flex;flex-direction:column;gap:8px;transition:transform .12s,box-shadow .12s}
.card:hover{transform:translateY(-2px)}
.card h3{margin:0;font-size:19px}.card h3 a{color:var(--ink)}
.card .top{display:flex;align-items:center;gap:10px}
.ico{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;font-size:22px;background:color-mix(in srgb,var(--c) 14%,transparent)}
.gs{margin-left:auto;font-size:12px;font-weight:700;color:var(--c);border:1px solid var(--c);border-radius:999px;padding:1px 9px}
.muted{color:var(--muted);font-size:14px}
.card .foot{margin-top:auto;padding-top:8px;display:flex;justify-content:space-between;gap:10px;font-size:14px;border-top:1px dashed var(--line)}
.recent{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.rcard{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--c);border-radius:12px;padding:12px 14px;box-shadow:var(--shadow)}
.rcard .s{font-size:12px;font-weight:700;color:var(--c);text-transform:uppercase;letter-spacing:.05em}
.rcard a.t{display:block;color:var(--ink);font-weight:600;margin:2px 0 4px}
.month{font-size:15px;font-weight:700;margin:30px 0 12px;color:var(--muted);display:flex;align-items:center;gap:12px}
.month:after{content:"";flex:1;height:1px;background:var(--line)}
.class{display:flex;gap:16px;background:var(--card);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);padding:14px 16px;margin-bottom:12px}
.date{flex:0 0 66px;text-align:center;border-radius:12px;padding:8px 0;background:color-mix(in srgb,var(--c) 12%,transparent);color:var(--c)!important;text-decoration:none!important;align-self:flex-start}
.date .d{display:block;font-size:26px;font-weight:800;line-height:1}.date .m{display:block;font-size:12px;font-weight:700;text-transform:uppercase;margin-top:3px}.date .w{display:block;font-size:11px;opacity:.8}
.class .body{min-width:0;flex:1}
.class h3{margin:0 0 6px;font-size:17px}.class h3 a{color:var(--ink)}.class h3 small{color:var(--muted);font-weight:500;margin-left:6px}
.topics{display:flex;flex-wrap:wrap;gap:6px;list-style:none;padding:0;margin:0}
.topics li{margin:0;min-width:0;max-width:100%}
.chip,.topics a{display:inline-block;max-width:100%;font-size:13px;padding:3px 10px;border-radius:999px;background:var(--soft);color:var(--ink);border:1px solid var(--line);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-decoration:none!important;vertical-align:top}
.topics a:hover{border-color:var(--c,var(--brand));color:var(--c,var(--brand))}
details.more{margin-top:6px}details.more summary{cursor:pointer;font-size:13px;color:var(--brand);list-style:none;display:inline-block;margin-bottom:6px}
details.more summary::-webkit-details-marker{display:none}details.more[open] summary{margin-bottom:8px}
.empty{padding:26px;text-align:center;color:var(--muted)}
.results .hit{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:12px 16px;margin-bottom:10px;box-shadow:var(--shadow)}
.results .hit b a{color:var(--ink)}.results .sub{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em}
footer{border-top:1px solid var(--line);padding:22px 0;color:var(--muted);font-size:14px;text-align:center}
[hidden]{display:none!important}
@media(max-width:560px){.class{flex-direction:column;gap:10px}.date{flex-basis:auto;display:flex;gap:8px;justify-content:center;align-items:baseline;padding:6px 10px;align-self:flex-start}.date span{display:inline!important}.date .d{font-size:18px}}
`;

const layout = ({ title, prefix, body, script = "" }) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><link rel="stylesheet" href="${prefix}assets/site.css"></head><body>
${body}
<footer><div class="wrap">UPSC study notes &middot; <a href="https://github.com/yeshwanth371/Personal">Source on GitHub</a></div></footer>
${script ? `<script>${script}</script>` : ""}
</body></html>
`;

const topicList = (topics, href, limit = 4) => {
  const li = (t) => `<li><a href="${href(t)}" title="${esc(t.text)}">${esc(t.text)}</a></li>`;
  if (!topics.length) return "";
  const shown = topics.slice(0, limit).map(li).join("");
  const rest = topics.slice(limit);
  const more = rest.length
    ? `<details class="more"><summary>+${rest.length} more topic${rest.length === 1 ? "" : "s"}</summary><ul class="topics">${rest.map(li).join("")}</ul></details>`
    : "";
  return `<ul class="topics">${shown}</ul>${more}`;
};

const noteHref = (n) => urlPath(`Notes/${n.rel}`);

export function renderHome({ subjects, bySubject, notes }) {
  const classes = notes.filter((n) => n.kind === "class" && n.date);
  const dates = classes.map((n) => n.date).sort((a, b) => a - b);
  const topicCount = notes.reduce((a, n) => a + n.topics.length, 0);

  const cards = subjects.map((s) => {
    const m = subjectMeta(s);
    const seq = bySubject.get(s).filter((n) => n.kind === "class" && n.date).sort((a, b) => a.date - b.date);
    const last = seq[seq.length - 1];
    return `<li class="card" style="--c:${m.color}">
<div class="top"><span class="ico">${m.icon}</span><h3><a href="${urlPath(`Notes/${s}/index.html`)}">${esc(s)}</a></h3>${m.paper ? `<span class="gs">${m.paper}</span>` : ""}</div>
<div class="muted">${esc(m.blurb)}</div>
<div class="muted">${seq.length} classes${last ? ` &middot; latest ${prettyDate(last.date)}` : ""}</div>
<div class="foot"><a href="${urlPath(`Notes/${s}/index.html`)}">All classes &rarr;</a>${last ? `<a href="${noteHref(last)}">Latest note &rarr;</a>` : ""}</div></li>`;
  }).join("");

  const recent = [...classes].sort((a, b) => b.date - a.date || a.subject.localeCompare(b.subject)).slice(0, 8).map((n) => {
    const m = subjectMeta(n.subject);
    const t = n.topics.slice(0, 2).map((x) => esc(x.text)).join(" &middot; ");
    return `<div class="rcard" style="--c:${m.color}"><div class="s">${m.icon} ${esc(n.subject)}</div>
<a class="t" href="${noteHref(n)}">${prettyDate(n.date)}</a><div class="muted">${t}</div></div>`;
  }).join("");

  const data = notes.map((n) => ({
    s: n.subject,
    n: n.kind === "class" && n.date ? prettyDate(n.date) : n.name.replace(/\.html$/, ""),
    u: noteHref(n),
    c: subjectMeta(n.subject).color,
    t: n.topics.map((t) => [t.text, `${noteHref(n)}#${t.id}`]),
  }));

  const body = `<header class="hero"><div class="wrap">
<h1>UPSC Study Notes</h1>
<p>Class-by-class notes with fact-checked content, maps, Mains points and previous year questions. Pick a subject, then read each class in order.</p>
<div class="stats">
<div class="stat"><b>${subjects.length}</b><span>subjects</span></div>
<div class="stat"><b>${classes.length}</b><span>class notes</span></div>
<div class="stat"><b>${topicCount}</b><span>topics</span></div>
${dates.length ? `<div class="stat"><b>${prettyDate(dates[0]).replace(/ \d{4}$/, "")} &ndash; ${prettyDate(dates[dates.length - 1]).replace(/ \d{4}$/, "")}</b><span>${dates[dates.length - 1].getUTCFullYear()} classes covered</span></div>` : ""}
</div></div></header>
<div class="wrap search"><input id="q" type="search" placeholder="Search topics across all notes, e.g. Higgs, Governor, Mughal" aria-label="Search topics" autocomplete="off"></div>
<main class="wrap">
<div id="results" class="results" hidden></div>
<div id="browse">
<h2 class="sec">Subjects</h2><ul class="grid">${cards}</ul>
<h2 class="sec">Recently added</h2><div class="recent">${recent}</div>
</div></main>`;

  const script = `const DATA=${JSON.stringify(data).replace(/</g, "\\u003c")};
const q=document.getElementById('q'),res=document.getElementById('results'),browse=document.getElementById('browse');
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();
if(v.length<2){res.hidden=true;browse.hidden=false;return}
const hits=[];for(const n of DATA){const own=(n.s+' '+n.n).toLowerCase().includes(v);const t=n.t.filter(x=>x[0].toLowerCase().includes(v));
if(own||t.length)hits.push({n,t:own&&!t.length?n.t.slice(0,3):t})}
browse.hidden=true;res.hidden=false;
res.innerHTML=hits.length?'<h2 class="sec">'+hits.length+' note'+(hits.length>1?'s':'')+' match</h2>'+hits.slice(0,60).map(h=>'<div class="hit" style="--c:'+h.n.c+'"><div class="sub" style="color:'+h.n.c+'">'+esc(h.n.s)+'</div><b><a href="'+h.n.u+'">'+esc(h.n.n)+'</a></b><ul class="topics" style="margin-top:6px">'+h.t.slice(0,6).map(x=>'<li><a href="'+x[1]+'">'+esc(x[0])+'</a></li>').join('')+'</ul></div>').join(''):'<div class="empty">No topics match &ldquo;'+esc(q.value)+'&rdquo;.</div>'});`;

  return layout({ title: "UPSC Study Notes", prefix: "", body, script });
}

export function renderSubject({ subject, notes }) {
  const m = subjectMeta(subject);
  const seq = notes.filter((n) => n.kind === "class" && n.date).sort((a, b) => a.date - b.date);
  const extras = notes.filter((n) => !seq.includes(n)).sort((a, b) => a.rel.localeCompare(b.rel));
  const topicCount = notes.reduce((a, n) => a + n.topics.length, 0);
  const href = (n) => urlPath(n.rel.slice(subject.length + 1));
  const tHref = (n) => (t) => `${href(n)}#${t.id}`;
  const q = (n, label) => esc([label, ...n.topics.map((t) => t.text)].join(" ").toLowerCase());

  const months = new Map();
  seq.forEach((n, i) => {
    const k = `${MONTHS[n.date.getUTCMonth()]} ${n.date.getUTCFullYear()}`;
    if (!months.has(k)) months.set(k, []);
    months.get(k).push({ n, i });
  });

  const classCard = ({ n, i }) => `<article class="class" data-q="${q(n, prettyDate(n.date))}">
<a class="date" href="${href(n)}" aria-label="Open ${prettyDate(n.date)} note"><span class="d">${n.date.getUTCDate()}</span><span class="m">${MONTHS[n.date.getUTCMonth()].slice(0, 3)}</span><span class="w">${WEEKDAYS[n.date.getUTCDay()]}</span></a>
<div class="body"><h3><a href="${href(n)}">Class ${i + 1}</a><small>${prettyDate(n.date)}</small></h3>${topicList(n.topics, tHref(n))}</div></article>`;

  const monthHtml = [...months].map(([k, list]) =>
    `<section class="grp"><div class="month">${k}</div>${list.map(classCard).join("")}</section>`).join("");

  const extraHtml = extras.length ? `<section class="grp"><div class="month">Additional &amp; consolidated notes</div>${extras.map((n) => {
    const label = n.rel.slice(subject.length + 1).replace(/\.html$/, "").replace(/^.*\//, "");
    return `<article class="class" data-q="${q(n, label)}"><span class="date" aria-hidden="true"><span class="d">&#9733;</span><span class="m">Revise</span></span>
<div class="body"><h3><a href="${href(n)}">${esc(label)}</a></h3>${topicList(n.topics, tHref(n))}</div></article>`;
  }).join("")}</section>` : "";

  const body = `<header class="hero" style="background:linear-gradient(135deg,${m.color},#1e293b)"><div class="wrap">
<div class="crumb"><a href="../../index.html">&larr; All subjects</a></div>
<h1>${m.icon} ${esc(subject)} ${m.paper ? `<span class="badge">${m.paper}</span>` : ""}</h1>
<p>${esc(m.blurb)}</p>
<div class="stats">
<div class="stat"><b>${seq.length}</b><span>classes</span></div>
<div class="stat"><b>${topicCount}</b><span>topics</span></div>
${extras.length ? `<div class="stat"><b>${extras.length}</b><span>consolidated / extra</span></div>` : ""}
${seq.length ? `<div class="stat"><b>${prettyDate(seq[0].date).replace(/ \d{4}$/, "")} &ndash; ${prettyDate(seq[seq.length - 1].date).replace(/ \d{4}$/, "")}</b><span>${seq[seq.length - 1].date.getUTCFullYear()}</span></div>` : ""}
</div>
${seq.length ? `<div class="actions"><a class="btn" href="${href(seq[0])}">Start from Class 1 &rarr;</a><a class="btn ghost" href="${href(seq[seq.length - 1])}">Jump to latest &rarr;</a></div>` : ""}
</div></header>
<div class="wrap search"><input id="q" type="search" placeholder="Filter this subject by date or topic" aria-label="Filter classes" autocomplete="off"></div>
<main class="wrap" style="--c:${m.color}">${monthHtml}${extraHtml}<div id="none" class="empty" hidden>No classes match your filter.</div></main>`;

  const script = `const q=document.getElementById('q'),cards=[...document.querySelectorAll('.class')],grps=[...document.querySelectorAll('.grp')],none=document.getElementById('none');
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();let any=false;
cards.forEach(c=>{const ok=!v||c.dataset.q.includes(v);c.hidden=!ok;any=any||ok});
grps.forEach(g=>{g.hidden=![...g.querySelectorAll('.class')].some(c=>!c.hidden)});none.hidden=any});`;

  return layout({ title: `${subject} - Notes`, prefix: "../../", body, script });
}

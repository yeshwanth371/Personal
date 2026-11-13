// Builds the GitHub Pages site into ./_site without modifying the source notes.
// Usage: node tools/build-site.mjs   (set STRICT_LINKS=1 to fail on broken links)
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NOTES = path.join(ROOT, "Notes");
const OUT = path.join(ROOT, "_site");

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const urlPath = (p) => p.split("/").map(encodeURIComponent).join("/");

async function walk(dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue; // skips .github prompt folders
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(full));
    else if (e.name.toLowerCase().endsWith(".html")) out.push(full);
  }
  return out;
}

function classify(file) {
  const base = path.basename(file, ".html");
  const m = base.match(/(\d{2})-(\d{2})-(\d{4})$/);
  const date = m ? new Date(Date.UTC(+m[3], +m[1] - 1, +m[2])) : null;
  const kind = / - Class \d{2}-\d{2}-\d{4}$/.test(base) ? "class" : "extra";
  return { date, kind, base };
}

const prettyDate = (d) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

function extractTitle(html, fallback) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/\s+/g, " ").trim() : fallback;
}

const CSS = `
.site-nav{font:14px/1.4 Calibri,Arial,sans-serif;max-width:900px;margin:12px auto;padding:8px 12px;background:#f5f9fd;border:1px solid #c9dcef;border-radius:6px;display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between;box-sizing:border-box}
.site-nav a{color:#005ea6;text-decoration:none;font-weight:600}
.site-nav a:hover{text-decoration:underline}
.site-nav .crumbs{display:flex;flex-wrap:wrap;gap:4px 12px}
.site-nav .pn{display:flex;gap:16px}
.site-nav .off{color:#999}
@media print{.site-nav{display:none}}
`;

const PAGE_CSS = `
body{font-family:Calibri,Arial,sans-serif;font-size:12pt;line-height:1.6;max-width:900px;margin:0 auto;padding:20px;color:#202124}
h1{border-bottom:2px solid #333;padding-bottom:4px}h2{margin-top:28px;border-bottom:1px solid #ddd}
a{color:#005ea6}ul{padding-left:22px}li{margin:4px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;padding:0;list-style:none}
.grid li{border:1px solid #c9dcef;border-radius:6px;background:#f5f9fd;padding:10px 14px;margin:0}
.grid a{font-weight:700;text-decoration:none}.muted{color:#666;font-size:10.5pt}
`;

function navBar({ homeHref, subjectHref, subject, prev, next, sequenced }) {
  const side = (n, label, arrow) =>
    n ? `<a href="${n.href}" title="${esc(n.title)}">${arrow(label)}</a>` : `<span class="off">${arrow(label)}</span>`;
  const pn = sequenced
    ? `<div class="pn">${side(prev, "Previous class", (t) => "&larr; " + t)}${side(next, "Next class", (t) => t + " &rarr;")}</div>`
    : "";
  return `<nav class="site-nav" aria-label="Reading navigation">
<div class="crumbs"><a href="${homeHref}">Home</a><a href="${subjectHref}">${esc(subject)}</a></div>
${pn}
</nav>`;
}

function inject(html, top, bottom) {
  let out = html.replace(/<\/head>/i, `<style>${CSS}</style>\n</head>`);
  out = out.replace(/<body[^>]*>/i, (m) => `${m}\n${top}`);
  out = out.replace(/<\/body>/i, `${bottom}\n</body>`);
  if (!/name=["']viewport["']/i.test(out)) {
    out = out.replace(/<head[^>]*>/i, (m) => `${m}\n<meta name="viewport" content="width=device-width, initial-scale=1">`);
  }
  return out;
}

const page = (title, body) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><style>${PAGE_CSS}</style></head><body>
${body}
</body></html>
`;

async function main() {
  await fs.rm(OUT, { recursive: true, force: true });
  const files = (await walk(NOTES)).sort();

  const notes = [];
  for (const file of files) {
    const rel = path.relative(NOTES, file).split(path.sep);
    const html = await fs.readFile(file, "utf8");
    const { date, kind, base } = classify(file);
    notes.push({ rel: rel.join("/"), subject: rel[0], name: rel[rel.length - 1], html, date, kind,
      title: extractTitle(html, base) });
  }

  const subjects = [...new Set(notes.map((n) => n.subject))].sort();
  const bySubject = new Map(subjects.map((s) => [s, notes.filter((n) => n.subject === s)]));
  const classesOf = (s) => bySubject.get(s).filter((n) => n.kind === "class" && n.date).sort((a, b) => a.date - b.date);

  // previous/next: dated class notes only, ordered by date within the subject
  for (const s of subjects) {
    const seq = classesOf(s);
    seq.forEach((n, i) => { n.prev = seq[i - 1]; n.next = seq[i + 1]; });
  }

  for (const n of notes) {
    const from = `Notes/${n.rel}`;
    const depth = n.rel.split("/").length; // levels below Notes/ including the file
    const link = (t) => t && { href: urlPath(path.posix.relative(path.posix.dirname(from), `Notes/${t.rel}`)), title: t.title };
    const bar = navBar({
      homeHref: `${"../".repeat(depth)}index.html`,
      subjectHref: `${"../".repeat(depth - 2)}index.html`,
      subject: n.subject,
      prev: link(n.prev),
      next: link(n.next),
      sequenced: n.kind === "class" && !!n.date,
    });
    const dest = path.join(OUT, "Notes", ...n.rel.split("/"));
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, inject(n.html, bar, bar));
  }

  for (const s of subjects) {
    const classes = classesOf(s);
    const extras = bySubject.get(s).filter((n) => !classes.includes(n)).sort((a, b) => a.rel.localeCompare(b.rel));
    const href = (n) => urlPath(n.rel.slice(s.length + 1));
    const item = (n, label) => `<li><a href="${href(n)}">${esc(label)}</a></li>`;
    let body = `<p><a href="../../index.html">&larr; Home</a></p><h1>${esc(s)}</h1>
<p class="muted">${classes.length} class note${classes.length === 1 ? "" : "s"}${extras.length ? `, ${extras.length} additional/consolidated` : ""}.</p>`;
    if (classes.length) {
      body += `<p><a href="${href(classes[0])}"><strong>Start reading from the first class &rarr;</strong></a></p>
<h2>Classes (in order)</h2><ul>${classes.map((n) => item(n, prettyDate(n.date))).join("")}</ul>`;
    }
    if (extras.length) {
      body += `<h2>Additional &amp; consolidated notes</h2><ul>${extras.map((n) => item(n, n.rel.slice(s.length + 1).replace(/\.html$/, ""))).join("")}</ul>`;
    }
    await fs.writeFile(path.join(OUT, "Notes", s, "index.html"), page(`${s} - Notes`, body));
  }

  const cards = subjects.map((s) => {
    const classes = classesOf(s);
    const last = classes[classes.length - 1];
    return `<li><a href="${urlPath(`Notes/${s}/index.html`)}">${esc(s)}</a><div class="muted">${classes.length} classes${last ? ` &middot; latest ${prettyDate(last.date)}` : ""}</div></li>`;
  }).join("");
  const recent = notes.filter((n) => n.date).sort((a, b) => b.date - a.date || a.name.localeCompare(b.name)).slice(0, 10)
    .map((n) => `<li><a href="${urlPath(`Notes/${n.rel}`)}">${esc(n.title)}</a></li>`).join("");
  const home = `<h1>Personal Notes</h1>
<p>UPSC Civil Services study notes, one dated note per class. Pick a subject and read the classes in order using the Previous/Next links.</p>
<h2>Subjects</h2><ul class="grid">${cards}</ul>
<h2>Recently added</h2><ul>${recent}</ul>`;
  await fs.writeFile(path.join(OUT, "index.html"), page("Personal Notes", home));
  await fs.writeFile(path.join(OUT, ".nojekyll"), "");

  console.log(`Built ${notes.length} notes, ${subjects.length} subjects -> ${path.relative(ROOT, OUT)}`);
  await validate();
}

// Checks every relative href/src and #fragment in the output.
async function validate() {
  const pages = await walk(OUT);
  const idCache = new Map();
  const idsOf = async (f) => {
    if (!idCache.has(f)) {
      const h = await fs.readFile(f, "utf8");
      idCache.set(f, new Set([...h.matchAll(/\b(?:id|name)\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1])));
    }
    return idCache.get(f);
  };
  const problems = new Set();
  for (const f of pages) {
    const html = await fs.readFile(f, "utf8");
    const rel = path.relative(OUT, f);
    for (const m of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
      const url = m[1].replace(/&amp;/g, "&");
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) continue;
      const [rawPath, frag] = url.split("#");
      let target = f;
      if (rawPath) {
        try { target = path.resolve(path.dirname(f), decodeURIComponent(rawPath.split("?")[0])); }
        catch { problems.add(`${rel}: bad URL ${url}`); continue; }
      }
      let stat = await fs.stat(target).catch(() => null);
      if (stat?.isDirectory()) { target = path.join(target, "index.html"); stat = await fs.stat(target).catch(() => null); }
      if (!stat) { problems.add(`${rel}: missing file -> ${url}`); continue; }
      if (frag && target.endsWith(".html") && !(await idsOf(target)).has(decodeURIComponent(frag))) {
        problems.add(`${rel}: missing anchor -> ${url}`);
      }
    }
  }
  if (problems.size) {
    console.warn(`\n${problems.size} link problem(s) found:`);
    for (const p of problems) console.warn("  " + p);
    if (process.env.STRICT_LINKS === "1") process.exit(1);
  } else console.log("Link check passed.");
}

await main();

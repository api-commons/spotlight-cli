#!/usr/bin/env node
// Pull all issues + discussions from stoplightio/spectral and store as markdown
// under planning/spectral/feedback/{issues,discussions}/. Read-only against the
// upstream repo; uses the gh CLI for auth + pagination.
const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const ISSUES_DIR = path.join(ROOT, 'feedback', 'issues');
const DISC_DIR = path.join(ROOT, 'feedback', 'discussions');
fs.mkdirSync(ISSUES_DIR, { recursive: true });
fs.mkdirSync(DISC_DIR, { recursive: true });

const gh = (args, max = 64) =>
  execSync(`gh ${args}`, { encoding: 'utf8', maxBuffer: max * 1024 * 1024 });

const slug = (s) =>
  (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'untitled';

const fm = (obj) => {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (Array.isArray(v)) lines.push(`${k}: [${v.map((x) => JSON.stringify(x)).join(', ')}]`);
    else lines.push(`${k}: ${typeof v === 'string' ? JSON.stringify(v) : v}`);
  }
  lines.push('---');
  return lines.join('\n');
};

// ---------- Issues (REST, paginated) ----------
const issueIndex = [];
let page = 1;
let issueCount = 0;
for (;;) {
  const arr = JSON.parse(
    gh(`api "repos/stoplightio/spectral/issues?state=all&per_page=100&page=${page}&direction=asc"`),
  );
  if (arr.length === 0) break;
  for (const it of arr) {
    if (it.pull_request) continue; // skip PRs
    issueCount++;
    const labels = (it.labels || []).map((l) => (typeof l === 'string' ? l : l.name));
    const r = it.reactions || {};
    const file = `${it.number}-${slug(it.title)}.md`;
    const front = fm({
      number: it.number,
      title: it.title,
      state: it.state,
      labels,
      author: it.user ? it.user.login : null,
      created: it.created_at,
      updated: it.updated_at,
      comments: it.comments,
      reactions_total: r.total_count || 0,
      thumbs_up: r['+1'] || 0,
      url: it.html_url,
    });
    const body = (it.body || '').trim() || '_(no description)_';
    fs.writeFileSync(
      path.join(ISSUES_DIR, file),
      `${front}\n\n# ${it.title}\n\n${body}\n`,
    );
    issueIndex.push({
      number: it.number,
      title: it.title,
      state: it.state,
      labels,
      up: r['+1'] || 0,
      comments: it.comments,
      file: `issues/${file}`,
    });
  }
  process.stdout.write(`issues page ${page}: ${arr.length} items (kept ${issueCount} total)\n`);
  page++;
}

// ---------- Discussions (GraphQL, cursor paginated) ----------
const discIndex = [];
let cursor = null;
let discCount = 0;
for (;;) {
  const after = cursor ? `, after: "${cursor}"` : '';
  const q = `{ repository(owner:"stoplightio", name:"spectral"){ discussions(first: 50${after}){ pageInfo{ hasNextPage endCursor } nodes{ number title body createdAt url upvoteCount comments{ totalCount } category{ name } author{ login } answer{ body author{ login } } } } } }`;
  const res = JSON.parse(gh(`api graphql -f query='${q}'`));
  const d = res.data.repository.discussions;
  for (const n of d.nodes) {
    discCount++;
    const file = `${n.number}-${slug(n.title)}.md`;
    const front = fm({
      number: n.number,
      title: n.title,
      category: n.category ? n.category.name : null,
      author: n.author ? n.author.login : null,
      created: n.createdAt,
      upvotes: n.upvoteCount,
      comments: n.comments.totalCount,
      answered: !!n.answer,
      url: n.url,
    });
    let md = `${front}\n\n# ${n.title}\n\n${(n.body || '').trim() || '_(no body)_'}\n`;
    if (n.answer) {
      md += `\n## ✅ Accepted answer${n.answer.author ? ` — @${n.answer.author.login}` : ''}\n\n${(n.answer.body || '').trim()}\n`;
    }
    fs.writeFileSync(path.join(DISC_DIR, file), md);
    discIndex.push({
      number: n.number,
      title: n.title,
      category: n.category ? n.category.name : null,
      up: n.upvoteCount,
      comments: n.comments.totalCount,
      answered: !!n.answer,
      file: `discussions/${file}`,
    });
  }
  process.stdout.write(`discussions: +${d.nodes.length} (total ${discCount})\n`);
  if (!d.pageInfo.hasNextPage) break;
  cursor = d.pageInfo.endCursor;
}

fs.writeFileSync(path.join(ROOT, 'feedback', 'issues-index.json'), JSON.stringify(issueIndex, null, 2));
fs.writeFileSync(path.join(ROOT, 'feedback', 'discussions-index.json'), JSON.stringify(discIndex, null, 2));
process.stdout.write(`\nDONE: ${issueCount} issues, ${discCount} discussions written.\n`);

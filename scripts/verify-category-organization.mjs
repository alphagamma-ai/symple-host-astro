import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createApp } from '../server/index.mjs';

const redirects = JSON.parse(readFileSync(new URL('../src/lib/category-redirects.json', import.meta.url)));
const files = readdirSync('src/content/articles').filter(name => name.endsWith('.md'));
for (const file of files) {
  const body = readFileSync(`src/content/articles/${file}`, 'utf8');
  const category = body.match(/^category: (.+)$/m)?.[1];
  assert(['getting-started', 'platform-guides', 'articles'].includes(category), file);
  if (category !== 'getting-started') assert(/^section: .+/m.test(body), `${file}: missing topic group`);
}
const app = createApp();
const server = app.listen(0, '127.0.0.1');
await new Promise(resolve => server.once('listening', resolve));
try {
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const [from, to] of Object.entries(redirects)) {
    const response = await fetch(base + from + '/', { redirect: 'manual' });
    assert.equal(response.status, 301, from);
    assert.equal(response.headers.get('location'), to, from);
    const [pathname, anchor] = to.split('#');
    const output = `dist${pathname}index.html`;
    assert(existsSync(output), output);
    const html = readFileSync(output, 'utf8');
    assert(!html.includes('http-equiv="refresh"'), `Redirect loop at ${to}`);
    if (anchor) assert(html.includes(`id="${anchor}"`), to);
    if (!anchor && pathname.split('/').filter(Boolean).length >= 2 && !from.endsWith('/articles')) {
      const md = await fetch(base + from + '.md', { redirect: 'manual' });
      assert.equal(md.status, 301, from);
      assert(existsSync(`dist${pathname.slice(0,-1)}.md`));
    }
  }
  console.log(`Verified article categories, topic groups, and ${Object.keys(redirects).length} legacy redirects.`);
} finally { server.close(); }

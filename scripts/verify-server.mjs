#!/usr/bin/env node
// Boots server/index.mjs against dist/ and asserts the acceptmarkdown.com
// negotiation contract plus static-serving parity with the old render.yaml
// header rules. Run after `pnpm run build`:  node scripts/verify-server.mjs

import process from 'node:process';
import { createApp } from '../server/index.mjs';

const app = createApp();
const server = app.listen(0);
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;

const failures = [];
async function check(label, fn) {
  try {
    await fn();
    console.log(`✓ ${label}`);
  } catch (err) {
    console.error(`✗ ${label} — ${err.message}`);
    failures.push(label);
  }
}

const get = (path, headers = {}) => fetch(base + path, { headers, redirect: 'manual' });
const expect = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

await check('homepage negotiates to markdown', async () => {
  const res = await get('/', { Accept: 'text/markdown' });
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/markdown'), res.headers.get('content-type'));
  expect(/accept/i.test(res.headers.get('vary') || ''), `Vary: ${res.headers.get('vary')}`);
  expect((await res.text()).length > 100, 'markdown body too small');
});

await check('article URL negotiates to markdown (no .md in URL)', async () => {
  const res = await get('/platform-guides/setting-up-autopilot', { Accept: 'text/markdown' });
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/markdown'), res.headers.get('content-type'));
});

await check('trailing-slash URL negotiates too', async () => {
  const res = await get('/platform-guides/setting-up-autopilot/', { Accept: 'text/markdown' });
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/markdown'), res.headers.get('content-type'));
});

await check('plain request still gets HTML, with Vary: Accept', async () => {
  const res = await get('/', { Accept: 'text/html,application/xhtml+xml,*/*;q=0.8' });
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/html'), res.headers.get('content-type'));
  expect(/accept/i.test(res.headers.get('vary') || ''), `Vary: ${res.headers.get('vary')}`);
});

await check('curl-style */* Accept gets HTML, not markdown', async () => {
  const res = await get('/', { Accept: '*/*' });
  expect(res.headers.get('content-type').includes('text/html'), res.headers.get('content-type'));
});

await check('explicit .md path serves markdown for any client', async () => {
  const res = await get('/index.md');
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/markdown'), res.headers.get('content-type'));
});

await check('missing page: HTML client gets 404 page', async () => {
  const res = await get('/this/does/not/exist');
  expect(res.status === 404, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/html'), res.headers.get('content-type'));
});

await check('missing page: markdown client gets 404 + markdown pointers', async () => {
  const res = await get('/this/does/not/exist', { Accept: 'text/markdown' });
  expect(res.status === 404, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/markdown'), res.headers.get('content-type'));
  expect((await res.text()).includes('llms.txt'), 'body lacks recovery pointer');
});

await check('llms.txt is text/plain', async () => {
  const res = await get('/llms.txt');
  expect(res.status === 200, `status ${res.status}`);
  expect(res.headers.get('content-type').includes('text/plain'), res.headers.get('content-type'));
});

await check('hashed assets get immutable cache header', async () => {
  const home = await (await get('/')).text();
  const m = home.match(/\/(_astro|assets)\/[^"' )]+/);
  expect(m, 'no hashed asset referenced on homepage');
  const res = await get(m[0]);
  expect(res.status === 200, `status ${res.status} for ${m[0]}`);
  expect((res.headers.get('cache-control') || '').includes('immutable'), res.headers.get('cache-control'));
});

await check('videos support Range requests', async () => {
  const res = await get('/videos/symplehost-booth-loop.mp4', { Range: 'bytes=0-99' });
  expect(res.status === 206, `status ${res.status} (need 206 Partial Content)`);
});

await check('security headers present', async () => {
  const res = await get('/');
  expect(res.headers.get('x-content-type-options') === 'nosniff', 'nosniff missing');
  expect(res.headers.get('x-frame-options') === 'SAMEORIGIN', 'x-frame-options missing');
});

server.close();
if (failures.length) {
  console.error(`\n${failures.length} check(s) failed`);
  process.exit(1);
}
console.log('\nall server checks passed');

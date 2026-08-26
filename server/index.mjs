// Origin server for the knowledge base on Render.
//
// Replaces the static-site runtime so `Accept: text/markdown` content
// negotiation (acceptmarkdown.com) happens at the origin — the same logic the
// retired Cloudflare worker in cloudflare/markdown-negotiation-worker.js was
// meant to run at the edge, minus the DNS migration that would have required.
//
// Serves `dist/` (build first: `pnpm run build`). Everything else — Range
// requests for the walkthrough videos, ETags, conditional GETs — is delegated
// to express.static.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import compression from 'compression';

const MARKDOWN_TYPE = 'text/markdown; charset=utf-8';
const FALLBACK_404_MD = '# Page not found\n\nSee https://help.symplehost.ai/llms.txt\n';

/** Mirror of the worker's Accept test: an explicit text/markdown wins, but a
 * bare `*` / `*` first entry (curl's default) must keep getting HTML. */
function wantsMarkdown(req) {
  const accept = req.headers.accept || '';
  return (
    /\btext\/markdown\b/i.test(accept) &&
    !/^\s*\*\/\*\s*$/.test((accept.split(',')[0] || '').trim())
  );
}

/** `/` → `/index.md`, `/guides/x/` and `/guides/x` → `/guides/x.md`.
 * Paths that already carry an extension are left to the static handler. */
function markdownTwin(pathname) {
  if (pathname === '/' || pathname === '') return '/index.md';
  if (pathname.endsWith('/')) return pathname.slice(0, -1) + '.md';
  if (!/\.[a-z0-9]+$/i.test(pathname)) return pathname + '.md';
  return null;
}

/** Resolve a URL path to a file inside `root`, or null on traversal/decode failure. */
function resolveInside(root, pathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return null;
  }
  const file = path.normalize(path.join(root, decoded));
  return file.startsWith(root + path.sep) || file === root ? file : null;
}

export function createApp(dist = fileURLToPath(new URL('../dist', import.meta.url))) {
  const app = express();
  app.disable('x-powered-by');

  const notFoundMd = existsSync(path.join(dist, '404.md'))
    ? readFileSync(path.join(dist, '404.md'), 'utf8')
    : FALLBACK_404_MD;

  app.use(compression());

  app.use((req, res, next) => {
    res.set('X-Frame-Options', 'SAMEORIGIN');
    res.set('X-Content-Type-Options', 'nosniff');
    next();
  });

  // Markdown content negotiation — before the static handler so /guides/x with
  // Accept: text/markdown serves /guides/x.md from the same URL.
  app.use((req, res, next) => {
    if ((req.method !== 'GET' && req.method !== 'HEAD') || !wantsMarkdown(req)) return next();
    const twin = markdownTwin(req.path);
    if (!twin) return next();

    const file = twin && resolveInside(dist, twin);
    res.set('Vary', 'Accept, Accept-Encoding');
    res.type(MARKDOWN_TYPE);
    if (file && existsSync(file)) {
      res.set('Cache-Control', 'public, max-age=0, s-maxage=300');
      return res.sendFile(file, { headers: { 'Content-Type': MARKDOWN_TYPE } });
    }
    return res.status(404).send(notFoundMd);
  });

  app.use(
    express.static(dist, {
      setHeaders(res, filePath) {
        if (filePath.endsWith('.md')) {
          res.set('Content-Type', MARKDOWN_TYPE);
          res.set('Vary', 'Accept, Accept-Encoding');
        } else if (filePath.endsWith('.html')) {
          // Negotiated URLs have two variants per URL; caches must key on Accept.
          res.set('Vary', 'Accept, Accept-Encoding');
          res.set('Cache-Control', 'public, max-age=0, s-maxage=300');
        } else if (filePath.endsWith(`${path.sep}llms.txt`)) {
          res.set('Content-Type', 'text/plain; charset=utf-8');
          res.set('Vary', 'Accept, Accept-Encoding');
        } else if (/[\\/](_astro|assets)[\\/]/.test(filePath)) {
          res.set('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    }),
  );

  // Nothing matched: real 404 status, with a recoverable body in the format
  // the client asked for (agents get markdown pointers, browsers get the page).
  app.use((req, res) => {
    res.status(404);
    res.set('Vary', 'Accept, Accept-Encoding');
    if (wantsMarkdown(req)) {
      return res.type(MARKDOWN_TYPE).send(notFoundMd);
    }
    const page = path.join(dist, '404.html');
    if (existsSync(page)) return res.sendFile(page);
    return res.type('text/plain; charset=utf-8').send('Not found\n');
  });

  return app;
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  const port = Number(process.env.PORT) || 10000;
  createApp().listen(port, '0.0.0.0', () => {
    console.log(`knowledge base origin listening on :${port}`);
  });
}

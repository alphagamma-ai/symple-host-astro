// @ts-check
import { createReadStream, existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

const PAGEFIND_MIME = {
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
};

/**
 * Serves the Pagefind index and search UI bundle in `astro dev`.
 *
 * Pagefind runs against `dist/` after `astro build`, so /pagefind/ only exists
 * once the site has been built. This maps that directory into the dev server so
 * search works locally: run `pnpm build` once, and re-run it after adding
 * content to refresh the index. Production serves these files straight out of
 * `dist/`, untouched by this integration.
 *
 * @returns {import('astro').AstroIntegration}
 */

function frontmatterValue(markdown, key) {
  const match = markdown.match(new RegExp(`^${key}:\\s*['\"]?([^'\"\\n]+)['\"]?`, 'm'));
  return match?.[1]?.trim();
}

function collectContentLastmod() {
  const map = new Map();
  const root = fileURLToPath(new URL('.', import.meta.url));
  const locales = ['', '/id', '/jp'];

  const add = (urlPath, date) => {
    if (!date) return;
    const normalized = urlPath.replace(/\/$/, '') || '/';
    map.set(normalized, date);
    map.set(`${normalized}.md`, date);
  };

  const readEntries = (dir, visitor) => {
    const fullDir = join(root, dir);
    if (!existsSync(fullDir)) return;
    for (const filename of readdirSync(fullDir)) {
      if (!filename.endsWith('.md')) continue;
      const file = join(fullDir, filename);
      const markdown = readFileSync(file, 'utf8');
      const slug = filename.replace(/\.md$/, '');
      visitor({ file, markdown, slug });
    }
  };

  readEntries('src/content/articles', ({ file, markdown, slug }) => {
    const category = frontmatterValue(markdown, 'category');
    if (!category) return;
    const date = frontmatterValue(markdown, 'date') || statSync(file).mtime.toISOString().slice(0, 10);
    for (const localePrefix of locales) add(`${localePrefix}/${category}/${slug}/`, date);
  });

  readEntries('src/content/events', ({ file, markdown, slug }) => {
    const date = frontmatterValue(markdown, 'date') || statSync(file).mtime.toISOString().slice(0, 10);
    add(`/webinars/${slug}/`, date);
    add(`/webinars-and-videos/${slug}/`, date);
    if (frontmatterValue(markdown, 'eventType') === 'tutorial') add(`/videos/${slug}/`, date);
  });

  readEntries('src/content/walkthroughs', ({ file, markdown, slug }) => {
    const date = frontmatterValue(markdown, 'date') || statSync(file).mtime.toISOString().slice(0, 10);
    add(`/videos/${slug}/`, date);
    add(`/webinars-and-videos/${slug}/`, date);
  });

  return map;
}

const CONTENT_LASTMOD = collectContentLastmod();

function pagefindDevServer() {
  const root = fileURLToPath(new URL('./dist/pagefind', import.meta.url));

  return {
    name: 'pagefind-dev-server',
    hooks: {
      'astro:server:setup': ({ server, logger }) => {
        if (!existsSync(root)) {
          logger.warn('dist/pagefind not found — run `pnpm build` once to enable search in dev.');
        }

        server.middlewares.use('/pagefind', (req, res, next) => {
          const requested = normalize(decodeURIComponent((req.url ?? '/').split('?')[0]));
          const file = join(root, requested);
          // `normalize` collapses `..`, so anything still outside the Pagefind
          // directory is a traversal attempt.
          if (!file.startsWith(root + sep)) return next();
          if (!existsSync(file) || !statSync(file).isFile()) return next();

          res.setHeader(
            'Content-Type',
            PAGEFIND_MIME[extname(file)] ?? 'application/octet-stream',
          );
          res.setHeader('Cache-Control', 'no-store');
          createReadStream(file).pipe(res);
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://help.symplehost.ai',
  integrations: [
    react(),
    markdoc(),
    pagefindDevServer(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/\/$/, '') || '/';
        const lastmod = CONTENT_LASTMOD.get(path);
        if (lastmod) item.lastmod = lastmod;

        if (/\/(getting-started|platform-guides|faqs|integrations|marketing-for-hosts|str-market-trends)\//.test(path)) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.8;
        }

        if (/\/(videos|webinars|webinars-and-videos)\//.test(path)) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.7;
        }

        return item;
      },
    }),
  ],
});

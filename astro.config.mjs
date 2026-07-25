// @ts-check
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

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
  integrations: [react(), markdoc(), pagefindDevServer()],
});

#!/usr/bin/env node
// Post-build smoke checks for site search (Pagefind index, search UI, index
// scoping) and the raw-markdown endpoints. Runs against `dist/` after
// `pnpm run build`.
//
// Exits non-zero and logs every failing check.

import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const DIST = resolve(process.cwd(), "dist");
const failures = [];

async function check(label, fn) {
  try {
    await fn();
    console.log(`✓ ${label}`);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`✗ ${label} — ${msg}`);
    failures.push(label);
  }
}

async function fileExistsNonEmpty(path, minBytes = 1) {
  const info = await stat(path);
  if (!info.isFile()) throw new Error(`not a file: ${path}`);
  if (info.size < minBytes) throw new Error(`too small (${info.size}B < ${minBytes}B): ${path}`);
}

await check("dist/pagefind/pagefind.js exists + > 1 KB", async () => {
  await fileExistsNonEmpty(resolve(DIST, "pagefind/pagefind.js"), 1024);
});

await check("Pagefind Component UI bundle emitted", async () => {
  await fileExistsNonEmpty(resolve(DIST, "pagefind/pagefind-component-ui.js"), 1024);
  await fileExistsNonEmpty(resolve(DIST, "pagefind/pagefind-component-ui.css"), 1024);
});

await check("search index covers all three locales", async () => {
  const entry = JSON.parse(await readFile(resolve(DIST, "pagefind/pagefind-entry.json"), "utf8"));
  for (const lang of ["en", "ja", "id"]) {
    const pages = entry.languages?.[lang]?.page_count ?? 0;
    // 50 articles per locale is the floor; en also carries events and walkthroughs.
    if (pages < 50) throw new Error(`${lang}: ${pages} pages indexed (expected >= 50)`);
  }
});

await check(
  "index is scoped: articles in, listing and duplicate routes out",
  async () => {
    const indexed = [
      "platform-guides/setting-up-autopilot/index.html",
      "jp/platform-guides/setting-up-autopilot/index.html",
      "videos/walkthroughs/index.html",
    ];
    for (const page of indexed) {
      const html = await readFile(resolve(DIST, page), "utf8");
      if (!html.includes("data-pagefind-body")) {
        throw new Error(`missing data-pagefind-body: ${page}`);
      }
    }

    const notIndexed = [
      "index.html", // homepage — a listing, its articles are indexed individually
      "platform-guides/index.html", // category listing
      "webinars-and-videos/walkthroughs/index.html", // legacy duplicate of /videos/walkthroughs/
    ];
    for (const page of notIndexed) {
      const html = await readFile(resolve(DIST, page), "utf8");
      if (html.includes("data-pagefind-body")) {
        throw new Error(`unexpected data-pagefind-body: ${page}`);
      }
    }
  },
);

await check("article pages carry the category search filter", async () => {
  const html = await readFile(
    resolve(DIST, "platform-guides/setting-up-autopilot/index.html"),
    "utf8",
  );
  if (!html.includes('data-pagefind-filter="category:SympleHost Platform Guides"')) {
    throw new Error("category filter attribute missing from article page");
  }
});

await check("search UI is mounted in the site header", async () => {
  const html = await readFile(resolve(DIST, "index.html"), "utf8");
  for (const needle of [
    "/pagefind/pagefind-component-ui.css",
    "/pagefind/pagefind-component-ui.js",
    "<pagefind-modal-trigger",
    "<pagefind-searchbox",
  ]) {
    if (!html.includes(needle)) throw new Error(`homepage is missing ${needle}`);
  }
});

await check("dist/platform-guides/setting-up-autopilot.md exists", async () => {
  await fileExistsNonEmpty(resolve(DIST, "platform-guides/setting-up-autopilot.md"));
});

await check(
  "setting-up-autopilot.md has H1 title first, no frontmatter",
  async () => {
    const body = await readFile(
      resolve(DIST, "platform-guides/setting-up-autopilot.md"),
      "utf8",
    );
    const firstNonBlank = body.split("\n").find((l) => l.trim().length > 0);
    if (!firstNonBlank) throw new Error("empty body");
    if (!firstNonBlank.startsWith("# ")) {
      throw new Error(
        `first non-blank line must start with "# " (H1 title); got: ${firstNonBlank.slice(0, 60)}`,
      );
    }
    // Frontmatter should be stripped — crude check for the tell-tale `category:` key
    // sitting at column 0 early in the file.
    const head = body.slice(0, 500);
    if (/^category:\s/m.test(head)) {
      throw new Error("frontmatter key `category:` found in body head — should be stripped");
    }
  },
);

if (failures.length > 0) {
  console.error(`\n${failures.length} check(s) failed`);
  process.exit(1);
}
console.log("\nAll build smoke checks passed.");

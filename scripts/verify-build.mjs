#!/usr/bin/env node
// Post-build smoke checks for the Pagefind + raw-markdown endpoint work landed by
// story 003 (implementations/stories/003-copilot-help-docs-search.md). Runs against
// `dist/` after `pnpm run build`.
//
// Exits non-zero and logs the first failing check. Order matches the AC list so
// failure mode is obvious.

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

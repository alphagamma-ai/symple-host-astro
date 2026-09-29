#!/usr/bin/env node
// Mirror the Partner API OpenAPI contract into public/.
//
// The canonical spec lives in the platform monorepo
// (apps/frontend/public/partner-api/openapi.yaml) and is served at
// https://app.symplehost.ai/partner-api/openapi.yaml. This site republishes it
// at four paths that partners and agents already use, so they are regenerated
// here rather than edited by hand:
//
//   public/partner-api/openapi.yaml   (Scalar viewer source)
//   public/openapi.yaml
//   public/openapi.json               (primary JSON contract, api-catalog)
//   public/api/openapi.json           (alternate path)
//
// Usage:
//   pnpm run sync:spec                 # fetch from app.symplehost.ai
//   pnpm run sync:spec <path-or-url>   # e.g. a local monorepo checkout

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";
import { parse } from "yaml";

const DEFAULT_SOURCE = "https://app.symplehost.ai/partner-api/openapi.yaml";
const PUBLIC = resolve(process.cwd(), "public");
const YAML_TARGETS = ["partner-api/openapi.yaml", "openapi.yaml"];
const JSON_TARGETS = ["openapi.json", "api/openapi.json"];

const source = process.argv[2] ?? DEFAULT_SOURCE;

async function load(src) {
  if (/^https?:\/\//.test(src)) {
    const res = await fetch(src);
    if (!res.ok) throw new Error(`GET ${src} → ${res.status}`);
    return res.text();
  }
  return readFile(resolve(src), "utf8");
}

const text = await load(source);
const spec = parse(text);

if (!/^3\./.test(String(spec?.openapi))) throw new Error(`not an OpenAPI 3.x document: ${source}`);
if (!spec.info?.version) throw new Error("spec has no info.version");
const pathCount = Object.keys(spec.paths ?? {}).length;
if (pathCount === 0) throw new Error("spec has no paths");

for (const target of YAML_TARGETS) {
  await writeFile(resolve(PUBLIC, target), text);
}
const json = `${JSON.stringify(spec, null, 2)}\n`;
for (const target of JSON_TARGETS) {
  await writeFile(resolve(PUBLIC, target), json);
}

console.log(`Synced Partner API ${spec.info.version} (${pathCount} paths) from ${source}`);

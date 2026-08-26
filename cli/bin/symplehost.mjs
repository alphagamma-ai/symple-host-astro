#!/usr/bin/env node
// Official SympleHost CLI — a thin, dependency-free client for the
// SympleHost Partner API. Docs: https://help.symplehost.ai/developers
//
// Auth: HTTP Basic with a partner key (read-only non-sensitive scopes).
//   export SYMPLEHOST_KEY_ID=...   SYMPLEHOST_SECRET=...
// Sensitive scopes require HMAC signing — use the API directly for those;
// see https://help.symplehost.ai/partner-api.html

import process from 'node:process';

const BASE = process.env.SYMPLEHOST_API_BASE || 'https://platform.symplehost.ai';
const ACCEPT = 'application/vnd.symplehost.partner.v1+json';
const VERSION = '0.1.0';

const RESOURCES = ['reservations', 'transactions', 'properties', 'conversations'];

const HELP = `symplehost v${VERSION} — official SympleHost Partner API CLI

Usage:
  symplehost <resource> [id] [--cursor <c>] [--limit <n>]
  symplehost openapi          Print the OpenAPI 3.1 contract (JSON)
  symplehost docs             Print developer documentation links
  symplehost --help | --version

Resources: ${RESOURCES.join(', ')}

Auth (HTTP Basic, read scopes):
  SYMPLEHOST_KEY_ID     partner key id
  SYMPLEHOST_SECRET     partner key secret
  SYMPLEHOST_API_BASE   default ${BASE}

Examples:
  symplehost reservations
  symplehost reservations res_123
  symplehost transactions --cursor eyJpZCI6NDJ9 --limit 50

Paginate with the opaque cursor from meta.next_cursor in each response.
Docs: https://help.symplehost.ai/developers`;

const DOCS = `SympleHost developer resources:
  Developer hub:    https://help.symplehost.ai/developers
  Partner API docs: https://help.symplehost.ai/partner-api.html
  OpenAPI (JSON):   https://help.symplehost.ai/openapi.json
  OpenAPI (YAML):   https://help.symplehost.ai/partner-api/openapi.yaml
  Knowledge base:   https://help.symplehost.ai/ (agents: /llms.txt)
  Contact:          partners@symplehost.ai`;

function fail(message, hint) {
  console.error(`error: ${message}`);
  if (hint) console.error(hint);
  process.exit(1);
}

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--help' || a === '-h') flags.help = true;
    else if (a === '--version' || a === '-v') flags.version = true;
    else if (a.startsWith('--')) {
      const key = a.slice(2);
      const value = argv[i + 1];
      if (value === undefined || value.startsWith('--')) fail(`--${key} needs a value`);
      flags[key] = value;
      i++;
    } else positional.push(a);
  }
  return { positional, flags };
}

async function request(path, params = {}) {
  const keyId = process.env.SYMPLEHOST_KEY_ID;
  const secret = process.env.SYMPLEHOST_SECRET;
  if (!keyId || !secret) {
    fail(
      'SYMPLEHOST_KEY_ID and SYMPLEHOST_SECRET must be set.',
      'Get partner keys via partners@symplehost.ai — docs: https://help.symplehost.ai/developers',
    );
  }
  const url = new URL(path, BASE);
  for (const [k, v] of Object.entries(params)) if (v !== undefined) url.searchParams.set(k, v);

  const res = await fetch(url, {
    headers: {
      Accept: ACCEPT,
      Authorization: `Basic ${Buffer.from(`${keyId}:${secret}`).toString('base64')}`,
      'User-Agent': `symplehost-cli/${VERSION}`,
    },
  });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    fail(`API returned non-JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
  }
  if (!res.ok) {
    const err = body?.errors?.[0];
    fail(
      err
        ? `HTTP ${res.status} ${err.code}: ${err.detail || err.title}`
        : `HTTP ${res.status}`,
      'Docs: https://help.symplehost.ai/partner-api.html',
    );
  }
  return body;
}

const { positional, flags } = parseArgs(process.argv.slice(2));
const [command, id] = positional;

if (flags.version) {
  console.log(VERSION);
} else if (flags.help || !command) {
  console.log(HELP);
  if (!command && !flags.help) process.exit(1);
} else if (command === 'docs') {
  console.log(DOCS);
} else if (command === 'openapi') {
  const res = await fetch('https://help.symplehost.ai/openapi.json');
  if (!res.ok) fail(`could not fetch OpenAPI spec (HTTP ${res.status})`);
  console.log(JSON.stringify(await res.json(), null, 2));
} else if (RESOURCES.includes(command)) {
  const path = id
    ? `/api/v1/partner/${command}/${encodeURIComponent(id)}`
    : `/api/v1/partner/${command}`;
  const body = await request(path, { cursor: flags.cursor, limit: flags.limit });
  console.log(JSON.stringify(body, null, 2));
} else {
  fail(`unknown command "${command}"`, HELP);
}

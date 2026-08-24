/**
 * Cloudflare Worker: Accept: text/markdown content negotiation
 * for help.symplehost.ai (required for is-agentic essential check).
 *
 * Deploy on route help.symplehost.ai/* in front of the Render origin.
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';
    const wantsMarkdown =
      /\btext\/markdown\b/i.test(accept) &&
      !/^\s*\*\/\*\s*$/.test((accept.split(',')[0] || '').trim());

    if (!wantsMarkdown || request.method !== 'GET') {
      const res = await fetch(request);
      // Ensure HTML responses advertise negotiation possibility
      const headers = new Headers(res.headers);
      if (!headers.get('Vary')?.includes('Accept')) {
        headers.append('Vary', 'Accept');
      }
      return new Response(res.body, { status: res.status, statusText: res.statusText, headers });
    }

    let mdPath = url.pathname;
    if (mdPath === '/' || mdPath === '') mdPath = '/index.md';
    else if (mdPath.endsWith('/')) mdPath = mdPath.slice(0, -1) + '.md';
    else if (!mdPath.endsWith('.md') && !/\.[a-z0-9]+$/i.test(mdPath)) mdPath = mdPath + '.md';

    const mdRes = await fetch(new URL(mdPath, url.origin), {
      cf: { cacheTtl: 300 },
    });

    if (mdRes.ok) {
      return new Response(await mdRes.text(), {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept, Accept-Encoding',
          'Cache-Control': 'public, max-age=0, s-maxage=300',
        },
      });
    }

    const nf = await fetch(new URL('/404.md', url.origin));
    const body = nf.ok
      ? await nf.text()
      : '# Page not found\n\nSee https://help.symplehost.ai/llms.txt\n';
    return new Response(body, {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept, Accept-Encoding',
      },
    });
  },
};

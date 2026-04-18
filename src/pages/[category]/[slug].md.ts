// Pre-rendered raw-markdown endpoint per article. Consumed by `fetch_help_doc`
// in symple-host-agents (see implementations/stories/003-copilot-help-docs-search.md).
//
// URL shape: /<category>/<slug>.md — e.g. /platform-guides/setting-up-autopilot.md
// Body shape: "# <Title>\n\n<body with frontmatter stripped>\n"
//
// Frontmatter is intentionally stripped to keep LLM token usage minimal; the H1 title
// is prepended from the collection entry's `data.title` so the caller always has a
// human-readable heading even when fetched standalone.

import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getCollection("articles", (entry) => !entry.data.draft);
  return articles.map((article) => ({
    params: { category: article.data.category, slug: article.id },
    props: { article },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { article } = props as { article: Awaited<ReturnType<typeof getCollection<"articles">>>[number] };

  // `entry.body` contains the post-frontmatter markdown body for content-collection
  // md entries. If Astro ever changes this, the smoke check in scripts/verify-build.mjs
  // will catch frontmatter leakage.
  const rawBody = (article.body ?? "").trimStart();
  const titleLine = `# ${article.data.title}\n`;
  const body = `${titleLine}\n${rawBody}${rawBody.endsWith("\n") ? "" : "\n"}`;

  // With prerender=true, Astro writes only the body to a static .md file. Response
  // headers are discarded — Render serves the file and derives Content-Type from the
  // .md extension. Cache-Control is set in Render dashboard / render.yaml, not here.
  return new Response(body);
};

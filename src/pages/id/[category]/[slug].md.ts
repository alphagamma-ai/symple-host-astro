import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { localizeArticleData } from '../../../lib/content-localization';
import { getLocalizedArticleBody } from '../../../lib/localized-article-bodies';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getCollection('articles', (entry) => !entry.data.draft);
  return articles.map((article) => ({
    params: { category: article.data.category, slug: article.id },
    props: { article },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { article } = props as { article: Awaited<ReturnType<typeof getCollection<'articles'>>>[number] };
  const localizedArticleBody = await getLocalizedArticleBody(article.id, 'id');
  const rawBody = (localizedArticleBody?.body ?? article.body ?? '').trimStart();
  const data = localizeArticleData(article, 'id');
  const titleLine = `# ${data.title}\n`;
  const body = `${titleLine}\n${rawBody}${rawBody.endsWith('\n') ? '' : '\n'}`;

  return new Response(body);
};

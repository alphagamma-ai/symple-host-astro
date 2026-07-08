import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { localizeArticleData } from '../../../lib/content-localization';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getCollection('articles', (entry) => !entry.data.draft);
  return articles.map((article) => ({
    params: { category: article.data.category, slug: article.id },
    props: { article },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { article } = props as { article: Awaited<ReturnType<typeof getCollection<'articles'>>>[number] };
  const rawBody = (article.body ?? '').trimStart();
  const data = localizeArticleData(article, 'jp');
  const titleLine = `# ${data.title}\n`;
  const body = `${titleLine}\n${rawBody}${rawBody.endsWith('\n') ? '' : '\n'}`;

  return new Response(body);
};

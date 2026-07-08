import type { CollectionEntry } from 'astro:content';
import { getArticleDescription, getArticleTitle, type Locale } from './locales';

export type ArticleEntry = CollectionEntry<'articles'>;

export function localizeArticleData(article: ArticleEntry, locale: Locale): ArticleEntry['data'] {
  return {
    ...article.data,
    title: getArticleTitle(article, locale),
    description: getArticleDescription(article, locale),
  };
}

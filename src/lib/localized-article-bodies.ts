import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from './locales';

export type LocalizedArticleEntry = CollectionEntry<'localizedArticles'>;

export async function getLocalizedArticleBody(
  sourceId: string,
  locale: Locale,
): Promise<LocalizedArticleEntry | undefined> {
  if (locale === DEFAULT_LOCALE) return undefined;

  const localizedArticles = await getCollection('localizedArticles');
  return localizedArticles.find(
    (entry) => entry.data.sourceId === sourceId && entry.data.locale === locale,
  );
}

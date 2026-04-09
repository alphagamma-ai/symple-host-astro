import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const categories = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    emoji: z.string().optional(),
    order: z.number().optional().default(0),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional().default([]),
    date: z.union([z.string(), z.date()]).optional().transform(val =>
      val instanceof Date ? val.toISOString().split('T')[0] : val
    ),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { categories, articles };

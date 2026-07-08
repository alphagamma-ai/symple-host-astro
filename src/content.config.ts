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
    section: z.string().optional(),
    sectionOrder: z.number().optional(),
    tags: z.array(z.string()).optional().default([]),
    date: z.union([z.string(), z.date()]).optional().transform(val =>
      val instanceof Date ? val.toISOString().split('T')[0] : val
    ),
    draft: z.boolean().optional().default(false),
  }),
});

const localizedArticles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/localized-articles' }),
  schema: z.object({
    sourceId: z.string(),
    locale: z.enum(['jp', 'id']),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    eventType: z.enum(['webinar', 'customer-success-hour', 'meet-up', 'tutorial']),
    eventDate: z.coerce.date(),
    dateTbd: z.boolean().optional().default(false),
    duration: z.number().optional(),
    timezoneDisplay: z.object({
      primary: z.string(),
      secondary: z.array(z.string()).optional().default([]),
    }).optional(),
    youtubeId: z.string().optional(),
    videoFile: z.string().optional(),
    registerUrl: z.string().url().optional(),
    attendeeOffer: z.object({
      title: z.string(),
      description: z.string(),
      url: z.string().url().optional(),
    }).optional(),
    thumbnail: z.string().optional(),
    speakers: z.array(z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
      topic: z.string().optional(),
      bio: z.string().optional(),
      url: z.string().url().optional(),
    })).optional().default([]),
    cohosts: z.array(z.object({
      name: z.string(),
      logo: z.string(),
      url: z.string().url().optional(),
      // True when the logo artwork already contains the brand name —
      // suppresses the text label next to the logo to avoid duplication.
      nameInLogo: z.boolean().optional().default(false),
    })).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const walkthroughs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/walkthroughs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    youtubeId: z.string().optional(),
    videoFile: z.string().optional(),
    poster: z.string().optional(),
    duration: z.string().optional(),
    order: z.number().optional().default(0),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { categories, articles, localizedArticles, events, walkthroughs };

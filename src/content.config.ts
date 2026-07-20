import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['insights', 'research', 'events']).default('insights'),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    locale: z.enum(['zh', 'en']).default('zh'),
  }),
});

export const collections = { articles };

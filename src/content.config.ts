import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
    author: z.string(),
    name: z.string(),
    cover: image(),
  }),
});

export const collections = { blog };

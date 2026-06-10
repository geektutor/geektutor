import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    tags: z.array(z.string()),
    year: z.union([z.number(), z.string()]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const speaking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    role: z.string(),
    location: z.string(),
    year: z.number(),
    topic: z.string(),
  }),
});

export const collections = { projects, speaking };

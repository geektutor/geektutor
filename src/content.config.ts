import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    tags: z.array(z.string()),
    year: z.union([z.number(), z.string()]),
    featured: z.boolean().default(false),
  }),
});

const speaking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/speaking' }),
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

import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blogs' }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
    }),
});

export const collections = { blogs, pages };

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        coverImage: z.string().optional(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        readingTime: z.string().optional(),
        category: z.string().optional(),
        featured: z.boolean().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
}; 
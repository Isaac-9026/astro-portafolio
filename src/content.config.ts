import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    tier: z.enum(["serio", "academico", "practica"]),
    featured: z.boolean().default(false),
    image: z.string(),
    stack: z.array(z.string()),
    role: z.string().optional(),
    impact: z.string().optional(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url(),
    date: z.date(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };

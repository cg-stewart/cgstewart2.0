import * as z from 'zod'

export const profileSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  about: z.string().min(1, 'About section is required'),
  photo: z.string().url('Photo must be a valid URL'),
  links: z.object({
    github: z.string().url('GitHub must be a valid URL'),
    twitter: z.string().url('Twitter must be a valid URL'),
    linkedin: z.string().url('LinkedIn must be a valid URL'),
  }),
})

export const workHistorySchema = z.object({
  id: z.string().optional(),
  company: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  period: z.string().min(1, 'Time period is required'),
  description: z.string().min(1, 'Description is required'),
  order: z.number().int().positive('Order must be a positive number'),
})

export const projectSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  techStack: z.array(z.string()).min(1, 'At least one technology is required'),
  image: z.string().url('Image must be a valid URL'),
  isCurrent: z.boolean().default(false),
  slug: z.string().min(1, 'Slug is required'),
  viewCount: z.number().int().default(0),
})

export const postSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  author: z.string().min(1, 'Author is required'),
  publishedAt: z.date().optional(),
  isDraft: z.boolean().default(true),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  category: z.string().min(1, 'Category is required'),
  slug: z.string().min(1, 'Slug is required'),
  viewCount: z.number().int().default(0),
})

export const videoSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  youtubeUrl: z.string().url('YouTube URL must be valid'),
  keywords: z.array(z.string()).min(1, 'At least one keyword is required'),
  slug: z.string().min(1, 'Slug is required'),
  viewCount: z.number().int().default(0),
})

export type Profile = z.infer<typeof profileSchema>
export type WorkHistory = z.infer<typeof workHistorySchema>
export type Project = z.infer<typeof projectSchema>
export type Post = z.infer<typeof postSchema>
export type Video = z.infer<typeof videoSchema>

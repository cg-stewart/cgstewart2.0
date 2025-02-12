import { relations } from 'drizzle-orm';
import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
  serial,
} from 'drizzle-orm/pg-core';

export const profiles = pgTable('profiles', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  about: text('about').notNull(),
  photo: text('photo').notNull(),
  links: jsonb('links').$type<{
    github: string;
    twitter: string;
    linkedin: string;
  }>().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const workHistory = pgTable('work_history', {
  id: text('id').primaryKey(),
  company: text('company').notNull(),
  position: text('position').notNull(),
  period: text('period').notNull(),
  description: text('description').notNull(),
  order: integer('order').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projects = pgTable('projects', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  techStack: text('tech_stack').array().notNull(),
  image: text('image').notNull(),
  isCurrent: boolean('is_current').default(false).notNull(),
  slug: text('slug').unique().notNull(),
  viewCount: integer('view_count').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  author: text('author').notNull(),
  publishedAt: timestamp('published_at'),
  isDraft: boolean('is_draft').default(true).notNull(),
  tags: text('tags').array().notNull(),
  category: text('category').notNull(),
  slug: text('slug').unique().notNull(),
  viewCount: integer('view_count').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const videos = pgTable('videos', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  youtubeUrl: text('youtube_url').notNull(),
  keywords: text('keywords').array().notNull(),
  slug: text('slug').unique().notNull(),
  viewCount: integer('view_count').default(0).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const comments = pgTable('comments', {
  id: text('id').primaryKey(),
  content: text('content').notNull(),
  postId: text('post_id').notNull().references(() => posts.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull(), // Clerk user ID
  userEmail: text('user_email').notNull(), // Clerk user email
  userName: text('user_name').notNull(), // Clerk user name
  userImage: text('user_image'), // Optional Clerk user image
  isApproved: boolean('is_approved').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Relations
export const postsRelations = relations(posts, ({ many }) => ({
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id],
  }),
}));
'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { db } from '@/db/drizzle'
import { profiles, workHistory, projects, posts, videos } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { nanoid } from 'nanoid'
import { revalidatePath } from 'next/cache'
import {
  profileSchema,
  workHistorySchema,
  projectSchema,
  postSchema,
  videoSchema,
  type Profile,
  type WorkHistory,
  type Project,
  type Post,
  type Video,
} from '@/lib/validations/portfolio'

async function verifyAdmin() {
  const { userId } = await auth()
  if (!userId) throw new Error('Not authenticated')

  const user = await currentUser()
  const githubAccount = user?.externalAccounts?.find(
    (account: { provider: string; username: string }) => 
      account.provider === "github" && 
      account.username === "cg-stewart"
  )

  if (!githubAccount) throw new Error('Not authorized')
}

// Profile Actions
export async function updateProfile(input: unknown) {
  await verifyAdmin()
  const data = profileSchema.parse(input)
  
  await db.insert(profiles).values({
    ...data,
    id: data.id || nanoid(),
  }).onConflictDoUpdate({
    target: profiles.id,
    set: data,
  })
  revalidatePath('/dashboard/profile')
  revalidatePath('/')
}

export async function getProfile() {
  const profile = await db.query.profiles.findFirst()
  return profile
}

// Work History Actions
export async function createWorkHistory(input: unknown) {
  await verifyAdmin()
  const data = workHistorySchema.parse(input)
  
  await db.insert(workHistory).values({
    ...data,
    id: nanoid(),
  })
  revalidatePath('/dashboard/work-history')
  revalidatePath('/')
}

export async function updateWorkHistory(id: string, input: unknown) {
  await verifyAdmin()
  const data = workHistorySchema.partial().parse(input)
  
  await db.update(workHistory)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(workHistory.id, id))
  revalidatePath('/dashboard/work-history')
  revalidatePath('/')
}

export async function deleteWorkHistory(id: string) {
  await verifyAdmin()
  await db.delete(workHistory).where(eq(workHistory.id, id))
  revalidatePath('/dashboard/work-history')
  revalidatePath('/')
}

export async function getAllWorkHistory() {
  return db.query.workHistory.findMany({
    orderBy: (workHistory, { asc }) => [asc(workHistory.order)]
  })
}

// Project Actions
export async function createProject(input: unknown) {
  await verifyAdmin()
  const data = projectSchema.parse(input)
  
  await db.insert(projects).values({
    ...data,
    id: nanoid(),
  })
  revalidatePath('/dashboard/projects')
  revalidatePath('/projects')
}

export async function updateProject(id: string, input: unknown) {
  await verifyAdmin()
  const data = projectSchema.partial().parse(input)
  
  await db.update(projects)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(projects.id, id))
  revalidatePath('/dashboard/projects')
  revalidatePath('/projects')
}

export async function deleteProject(id: string) {
  await verifyAdmin()
  await db.delete(projects).where(eq(projects.id, id))
  revalidatePath('/dashboard/projects')
  revalidatePath('/projects')
}

export async function getAllProjects() {
  return db.query.projects.findMany()
}

// Post Actions
export async function createPost(input: unknown) {
  await verifyAdmin()
  const data = postSchema.parse(input)
  
  await db.insert(posts).values({
    ...data,
    id: nanoid(),
  })
  revalidatePath('/dashboard/posts')
  revalidatePath('/blog')
}

export async function updatePost(id: string, input: unknown) {
  await verifyAdmin()
  const data = postSchema.partial().parse(input)
  
  await db.update(posts)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(posts.id, id))
  revalidatePath('/dashboard/posts')
  revalidatePath('/blog')
}

export async function deletePost(id: string) {
  await verifyAdmin()
  await db.delete(posts).where(eq(posts.id, id))
  revalidatePath('/dashboard/posts')
  revalidatePath('/blog')
}

export async function getAllPosts() {
  return db.query.posts.findMany({
    orderBy: (posts, { desc }) => [desc(posts.createdAt)]
  })
}

// Video Actions
export async function createVideo(input: unknown) {
  await verifyAdmin()
  const data = videoSchema.parse(input)
  
  await db.insert(videos).values({
    ...data,
    id: nanoid(),
  })
  revalidatePath('/dashboard/videos')
  revalidatePath('/videos')
}

export async function updateVideo(id: string, input: unknown) {
  await verifyAdmin()
  const data = videoSchema.partial().parse(input)
  
  await db.update(videos)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(videos.id, id))
  revalidatePath('/dashboard/videos')
  revalidatePath('/videos')
}

export async function deleteVideo(id: string) {
  await verifyAdmin()
  await db.delete(videos).where(eq(videos.id, id))
  revalidatePath('/dashboard/videos')
  revalidatePath('/videos')
}

export async function getAllVideos() {
  return db.query.videos.findMany({
    orderBy: (videos, { desc }) => [desc(videos.createdAt)]
  })
}

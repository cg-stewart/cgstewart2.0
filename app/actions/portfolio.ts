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

} from '@/lib/validations/portfolio'

async function verifyAdmin() {
  const { userId } = await auth()
  if (!userId) throw new Error('Not authenticated')

  const user = await currentUser()
  const githubAccount = user?.externalAccounts?.find(
    (account) => 
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
    links: JSON.stringify(data.links),
  }).onConflictDoUpdate({
    target: profiles.id,
    set: {
      ...data,
      links: JSON.stringify(data.links)
    },
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
  
  const insertData = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'techStack')
    ),
    id: nanoid(),
    techStack: JSON.stringify(data.techStack)
  }
  
  await db.insert(projects).values(insertData as any)
  revalidatePath('/dashboard/projects')
  revalidatePath('/projects')
}

export async function updateProject(id: string, input: unknown) {
  await verifyAdmin()
  const data = projectSchema.partial().parse(input)
  
  const updateData: Record<string, unknown> = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'techStack')
    ),
    updatedAt: new Date(),
  }
  
  if ('techStack' in data && data.techStack) {
    updateData.techStack = JSON.stringify(data.techStack)
  }
  
  await db.update(projects)
    .set(updateData as any)
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
  
  const insertData = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'tags')
    ),
    id: nanoid(),
    tags: JSON.stringify(data.tags)
  }
  
  await db.insert(posts).values(insertData as any)
  revalidatePath('/dashboard/posts')
  revalidatePath('/blog')
}

export async function updatePost(id: string, input: unknown) {
  await verifyAdmin()
  const data = postSchema.partial().parse(input)
  
  const updateData: Record<string, unknown> = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'tags')
    ),
    updatedAt: new Date(),
  }
  
  if ('tags' in data && data.tags) {
    updateData.tags = JSON.stringify(data.tags)
  }
  
  await db.update(posts)
    .set(updateData as any)
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
  
  const insertData = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'keywords')
    ),
    id: nanoid(),
    keywords: JSON.stringify(data.keywords)
  }
  
  await db.insert(videos).values(insertData as any)
  revalidatePath('/dashboard/videos')
  revalidatePath('/videos')
}

export async function updateVideo(id: string, input: unknown) {
  await verifyAdmin()
  const data = videoSchema.partial().parse(input)
  
  const updateData: Record<string, unknown> = {
    ...Object.fromEntries(
      Object.entries(data).filter(([key]) => key !== 'keywords')
    ),
    updatedAt: new Date(),
  }
  
  if ('keywords' in data && data.keywords) {
    updateData.keywords = JSON.stringify(data.keywords)
  }
  
  await db.update(videos)
    .set(updateData as any)
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

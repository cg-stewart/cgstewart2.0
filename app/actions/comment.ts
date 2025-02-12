'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { db } from '@/db/drizzle'
import { comments } from '@/db/schema'
import { revalidatePath } from 'next/cache'
import { createCommentSchema, moderateCommentSchema } from '@/lib/validations/comment'
import { eq } from 'drizzle-orm'

export async function createComment(input: unknown) {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('You must be signed in to comment')
  }

  const user = await currentUser()
  if (!user) {
    throw new Error('User not found')
  }

  const validatedFields = createCommentSchema.parse(input)

  await db.insert(comments).values({
    ...validatedFields,
    id: crypto.randomUUID(),
    userId: user.id,
    userEmail: user.emailAddresses[0].emailAddress,
    userName: `${user.firstName} ${user.lastName}`,
    userImage: user.imageUrl,
  })

  revalidatePath(`/blog/${validatedFields.postId}`)
}

export async function moderateComment(input: unknown) {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('Not authenticated')
  }

  // Get user's GitHub account to verify admin status
  const user = await currentUser()
  const githubAccount = user?.externalAccounts?.find(
    (account: { provider: string; username: string }) => 
      account.provider === "github" && 
      account.username === "cg-stewart"
  )

  if (!githubAccount) {
    throw new Error('Not authorized to moderate comments')
  }

  const validatedFields = moderateCommentSchema.parse(input)

  await db.update(comments)
    .set({ isApproved: validatedFields.isApproved })
    .where(eq(comments.id, validatedFields.id))

  revalidatePath('/admin/comments')
  revalidatePath('/blog')
}

export async function getComments(postId: string) {
  return await db.query.comments.findMany({
    where: eq(comments.postId, postId),
    orderBy: (comments, { desc }) => [desc(comments.createdAt)],
  })
}

export async function getPendingComments() {
  const { userId } = await auth()
  
  if (!userId) {
    throw new Error('Not authenticated')
  }

  // Verify admin status
  const user = await currentUser()
  const githubAccount = user?.externalAccounts?.find(
    (account: { provider: string; username: string }) => 
      account.provider === "github" && 
      account.username === "cg-stewart"
  )

  if (!githubAccount) {
    throw new Error('Not authorized to view pending comments')
  }

  return await db.query.comments.findMany({
    where: eq(comments.isApproved, false),
    orderBy: (comments, { desc }) => [desc(comments.createdAt)],
  })
}

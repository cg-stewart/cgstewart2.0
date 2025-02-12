import * as z from 'zod'

export const commentSchema = z.object({
  id: z.string().optional(),
  content: z.string()
    .min(1, 'Comment cannot be empty')
    .max(1000, 'Comment cannot be longer than 1000 characters'),
  postId: z.string().min(1, 'Post ID is required'),
  userId: z.string().min(1, 'User ID is required'),
  userEmail: z.string().email('Invalid email address'),
  userName: z.string().min(1, 'User name is required'),
  userImage: z.string().url('User image must be a valid URL').optional(),
  isApproved: z.boolean().default(false),
})

export type Comment = z.infer<typeof commentSchema>

// For comment creation by users (subset of fields)
export const createCommentSchema = commentSchema.pick({
  content: true,
  postId: true,
})

// For comment moderation by admin
export const moderateCommentSchema = z.object({
  id: z.string().min(1, 'Comment ID is required'),
  isApproved: z.boolean(),
})

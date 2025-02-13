import { z } from "zod";
import { nanoid } from "nanoid";
import { db } from "@/db/drizzle";
import { subscribers } from "@/db/schema";
import { eq } from "drizzle-orm";

const subscriptionSchema = z.object({
  email: z.string().email(),
  preferences: z.object({
    videos: z.boolean(),
    articles: z.boolean(),
  }),
});

export type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export async function subscribe(input: unknown) {
  const data = subscriptionSchema.parse(input);

  try {
    // Check if email already exists
    const existingSubscriber = await db
      .select()
      .from(subscribers)
      .where(eq(subscribers.email, data.email))
      .limit(1);

    if (existingSubscriber.length > 0) {
      // Update preferences if subscriber exists
      await db
        .update(subscribers)
        .set({
          preferences: data.preferences,
          updatedAt: new Date(),
        })
        .where(eq(subscribers.email, data.email));

      return {
        success: true,
        message: "Subscription preferences updated successfully!",
      };
    }

    // Create new subscriber
    await db.insert(subscribers).values({
      id: nanoid(),
      email: data.email,
      preferences: data.preferences,
    });

    return {
      success: true,
      message: "Subscribed successfully!",
    };
  } catch (error) {
    console.error("Error in subscribe action:", error);
    return {
      success: false,
      message: "Failed to subscribe. Please try again later.",
    };
  }
}

export async function unsubscribe(email: string) {
  try {
    await db.delete(subscribers).where(eq(subscribers.email, email));
    return {
      success: true,
      message: "Unsubscribed successfully!",
    };
  } catch (error) {
    console.error("Error in unsubscribe action:", error);
    return {
      success: false,
      message: "Failed to unsubscribe. Please try again later.",
    };
  }
}

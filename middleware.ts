import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*?)",
  "/",
  "/blog(.*)",
  "/projects(.*)",
  "/videos(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isAdminRoute(req)) {
    const userId = auth.userId;
    if (!userId) {
      return Response.redirect(new URL("/", req.url));
    }

    // Get user's GitHub username from their OAuth accounts
    const user = await auth.user;
    const githubAccount = user?.externalAccounts?.find(
      (account: { provider: string; username: string }) =>
        account.provider === "github"
    );

    // Only allow access if the GitHub username matches
    if (!githubAccount || githubAccount.username !== "cg-stewart") {
      return Response.redirect(new URL("/blog", req.url));
    }
  } else if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

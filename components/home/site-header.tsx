import { ThemeToggle } from "@/components/theme/theme-toggle";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import MainNav from "./main-nav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sign Up
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Home, BookOpen, Briefcase, Video } from "lucide-react";

export function MainNav() {
  return (
    <nav className="hidden sm:flex items-center space-x-4 lg:space-x-6 m-4">
      <Link
        href="/"
        className="flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <Link
        href="/blog"
        className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <BookOpen className="h-4 w-4" />
        <span>Blog</span>
      </Link>
      <Link
        href="/projects"
        className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Briefcase className="h-4 w-4" />
        <span>Projects</span>
      </Link>
      <Link
        href="/videos"
        className="flex items-center space-x-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Video className="h-4 w-4" />
        <span>Videos</span>
      </Link>
    </nav>
  );
}

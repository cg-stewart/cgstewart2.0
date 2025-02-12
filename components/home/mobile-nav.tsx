import Link from "next/link";
import { Home, BookOpen, Briefcase, Video } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="sm:hidden flex justify-around items-center bg-background border-t border-gray-200 py-2 fixed bottom-0 left-0 right-0 z-50">
      <Link href="/" className="flex flex-col items-center">
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </Link>
      <Link href="/blog" className="flex flex-col items-center">
        <BookOpen className="h-6 w-6" />
        <span className="text-xs mt-1">Blog</span>
      </Link>
      <Link href="/projects" className="flex flex-col items-center">
        <Briefcase className="h-6 w-6" />
        <span className="text-xs mt-1">Projects</span>
      </Link>
      <Link href="/videos" className="flex flex-col items-center">
        <Video className="h-6 w-6" />
        <span className="text-xs mt-1">Videos</span>
      </Link>
    </nav>
  );
}

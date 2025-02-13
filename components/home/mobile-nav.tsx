import Link from "next/link";
import { Home, BookOpen, Briefcase, Video } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: BookOpen,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: Briefcase,
  },
  {
    href: "/videos",
    label: "Videos",
    icon: Video,
  },
];

export default function MobileNav() {
  return (
    <nav className="sm:hidden flex justify-around items-center bg-background border-t border-gray-200 py-2 fixed bottom-0 left-0 right-0 z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link 
            key={item.href} 
            href={item.href} 
            className="flex flex-col items-center"
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

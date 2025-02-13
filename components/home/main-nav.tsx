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

export default function MainNav() {
  return (
    <nav className="hidden sm:flex items-center space-x-4 lg:space-x-6 m-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary ${item.href === "/" ? "" : "text-muted-foreground"}`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

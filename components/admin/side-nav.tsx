import Link from "next/link";
import { Home, FileText, Briefcase, Video, Image, User } from "lucide-react";

const navItems = [
  { href: "/admin", icon: Home, label: "Dashboard" },
  { href: "/admin/my-blog", icon: FileText, label: "Blog" },
  { href: "/admin/my-projects", icon: Briefcase, label: "Projects" },
  { href: "/admin/my-videos", icon: Video, label: "Videos" },
  { href: "/admin/my-media", icon: Image, label: "Media" },
  { href: "/admin/my-profile", icon: User, label: "Profile" },
];

export function SideNav() {
  return (
    <nav className="bg-gray-800 w-64 min-h-screen px-4 py-6">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md"
            >
              <item.icon className="mr-3 h-6 w-6" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

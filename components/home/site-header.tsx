import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-3">
      <div className="container flex h-16 items-center justify-between">
        <MainNav />
        <ThemeToggle />
      </div>
    </header>
  );
}

import { MobileNav } from "@/components/home/mobile-nav";
import { BackToTopButton } from "@/components/home/back-to-top-button";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16 m-4">{children}</main>
      <footer className="border-t border-gray-200 pt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {currentYear} CG Stewart. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
      <div className="sm:hidden">
        <MobileNav />
      </div>
      <BackToTopButton />
    </div>
  );
}

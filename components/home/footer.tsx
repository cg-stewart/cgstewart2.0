"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">© {year} CG Stewart. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/privacy" className="text-sm text-blue-600">Privacy Policy</Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="text-sm text-blue-600">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

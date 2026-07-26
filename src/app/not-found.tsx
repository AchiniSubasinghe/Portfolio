import Link from "next/link";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Achini Subasinghe",
};

export default function NotFound() {
  return (
    <div className="text-center">
      <Section>
        <h1 className="text-4xl md:text-5xl mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-6">Page not found</p>
        <Link
          href="/"
          className="border-2 border-white rounded-full px-6 py-2 text-lg inline-block"
        >
          Go back home
        </Link>
      </Section>
    </div>
  );
}

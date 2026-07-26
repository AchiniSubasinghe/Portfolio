import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Achini Subasinghe",
  description:
    "Education, tools, and technologies — Achini Subasinghe, software engineer at NSBM Green University.",
};

export default function AboutPage() {
  return (
    <div>
      <header className="mb-8 space-y-2 sm:mb-10 sm:space-y-3 lg:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Who I am
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          About me
        </h1>
      </header>
      <AboutContent />
    </div>
  );
}

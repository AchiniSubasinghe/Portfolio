import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Me | Achini Subasinghe",
  description: "Learn more about Achini Subasinghe — education, tools, and technologies",
};

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mb-10">About Me</h1>
      <AboutContent />
    </div>
  );
}

import type { Metadata } from "next";
import { achievementsIntro } from "@/data/achievements";
import { AchievementGrid } from "@/components/AchievementGrid";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Achievements | Achini Subasinghe",
  description: "Achievements and recognition of Achini Subasinghe",
};

export default function AchievementsPage() {
  return (
    <div>
      <header className="mb-8 space-y-2 sm:mb-10 sm:space-y-3 lg:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Recognition
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          Achievements
        </h1>
      </header>
      <Section className="mb-8 sm:mb-10 lg:mb-12">
        <p className="max-w-prose text-base leading-relaxed text-foreground/90 md:text-lg lg:max-w-[60ch]">
          {achievementsIntro}
        </p>
      </Section>
      <AchievementGrid />
    </div>
  );
}

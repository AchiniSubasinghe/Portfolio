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
      <h1 className="text-3xl md:text-4xl mb-10">Achievements</h1>
      <Section className="mb-10">
        <p className="text-lg leading-relaxed">{achievementsIntro}</p>
      </Section>
      <AchievementGrid />
    </div>
  );
}

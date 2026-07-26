import type { Metadata } from "next";
import { workEntries } from "@/data/workExperience";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Work Experience | Achini Subasinghe",
  description: "Work experience of Achini Subasinghe",
};

export default function WorkExperiencePage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Work Experience section */}
      <div>
        <h1 className="text-3xl md:text-4xl mb-10">Work Experience</h1>
        <div className="flex flex-col gap-8">
          {workEntries.map((entry) => (
            <Section key={entry.title}>
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl">{entry.title}</h2>
                <p className="text-xl text-gray-400">{entry.company}</p>
                <p className="text-base text-gray-400">{entry.period}</p>
                <p className="text-lg leading-relaxed mt-2">{entry.description}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}

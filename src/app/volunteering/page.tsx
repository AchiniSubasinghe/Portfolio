import type { Metadata } from "next";
import Image from "next/image";
import { volunteeringExperiences } from "@/data/volunteering";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Volunteering | Achini Subasinghe",
  description: "Volunteering experiences of Achini Subasinghe",
};

export default function VolunteeringPage() {
  return (
    <div>
      <header className="mb-8 space-y-2 sm:mb-10 sm:space-y-3 lg:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Community
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          Volunteering
        </h1>
      </header>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
        {volunteeringExperiences.map((exp, index) => (
          <Section key={exp.title}>
            <div
              className={[
                "flex flex-col gap-6 sm:gap-8 lg:items-center lg:gap-10 xl:gap-12",
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row",
              ].join(" ")}
            >
              <div className="flex w-full min-w-0 flex-col gap-3 lg:w-1/2">
                <h2 className="text-xl font-medium tracking-tight sm:text-2xl lg:text-3xl">
                  {exp.title.trim()}
                </h2>
                <p className="text-base font-medium text-accent-muted">
                  {exp.organization}
                </p>
                <p className="text-sm tabular-nums text-muted">{exp.period}</p>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-foreground/90 lg:text-lg">
                  {exp.description}
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-2 sm:gap-3 lg:w-1/2 lg:gap-4">
                <div className="aspect-square overflow-hidden rounded-lg border border-border">
                  <Image
                    src={exp.image1}
                    alt={`${exp.title.trim()} — photo 1`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg border border-border">
                  <Image
                    src={exp.image2}
                    alt={`${exp.title.trim()} — photo 2`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
}

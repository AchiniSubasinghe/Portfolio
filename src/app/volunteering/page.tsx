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
      <h1 className="text-3xl md:text-4xl mb-10">Volunteering</h1>
      <div className="flex flex-col gap-10">
        {volunteeringExperiences.map((exp) => (
          <Section key={exp.title}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left — details */}
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h2 className="text-2xl">{exp.title}</h2>
                <p className="text-xl text-gray-400">{exp.organization}</p>
                <p className="text-base text-gray-400">{exp.period}</p>
                <p className="text-lg leading-relaxed mt-2">{exp.description}</p>
              </div>

              {/* Right — two images */}
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                <div className="aspect-square w-full">
                  <Image
                    src={exp.image1}
                    alt={`${exp.title} image 1`}
                    width={250}
                    height={250}
                    className="rounded-2xl border-2 border-white object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square w-full">
                  <Image
                    src={exp.image2}
                    alt={`${exp.title} image 2`}
                    width={250}
                    height={250}
                    className="rounded-2xl border-2 border-white object-cover w-full h-full"
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

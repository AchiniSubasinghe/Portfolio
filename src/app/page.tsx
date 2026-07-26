import Image from "next/image";
import { personal } from "@/data/personal";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left column — portrait image */}
      <div className="w-full md:w-2/5 flex justify-center">
        <Image
          src="/images/achini.jpeg"
          alt={personal.name}
          width={425}
          height={588}
          priority
        />
      </div>

      {/* Right column — text content */}
      <div className="w-full md:w-3/5 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl">{personal.name}</h1>
        <p className="text-2xl text-gray-400">{personal.role}</p>
        <div>
          <Button as="a" href={personal.cvPath} download="Achini-CV.pdf">
            Download CV
          </Button>
        </div>
        <Section>
          <p className="text-lg leading-relaxed">{personal.intro}</p>
        </Section>
      </div>
    </div>
  );
}

import Image from "next/image";
import { personal } from "@/data/personal";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function Home() {
  const shortName = "Achini Subasinghe";

  return (
    <div className="flex min-h-[min(70dvh,720px)] flex-col items-center gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12 lg:min-h-[min(75dvh,800px)] lg:gap-16 xl:gap-20">
      {/* Portrait */}
      <div className="animate-fade-up flex w-full justify-center md:w-2/5 md:justify-start lg:w-[38%]">
        <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[360px] xl:max-w-[400px]">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/achini.jpeg"
              alt={personal.name}
              width={425}
              height={588}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 280px, (max-width: 1280px) 360px, 400px"
            />
          </div>
        </div>
      </div>

      {/* Intro copy */}
      <div className="flex w-full min-w-0 flex-col items-center gap-5 text-center sm:gap-6 md:w-3/5 md:items-start md:text-left lg:w-[62%] lg:gap-7">
        <div className="animate-fade-up-delay-1 w-full space-y-2 sm:space-y-3">
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:max-w-[14ch] md:text-5xl lg:text-6xl xl:text-7xl">
            {shortName}
          </h1>
          <p className="font-handwritten text-xl text-accent-muted sm:text-2xl md:text-3xl xl:text-4xl">
            {personal.role}
          </p>
        </div>

        <div className="animate-fade-up-delay-2 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap md:justify-start">
          <Button
            as="a"
            href={personal.cvPath}
            download="Achini-CV.pdf"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Download CV
          </Button>
          <Button as="a" href="/projects" variant="secondary" className="w-full sm:w-auto">
            View projects
          </Button>
        </div>

        <Section className="animate-fade-up-delay-3 w-full text-left">
          <p className="max-w-prose text-base leading-relaxed text-foreground/90 md:text-lg lg:max-w-[48ch] xl:text-xl">
            {personal.intro}
          </p>
        </Section>
      </div>
    </div>
  );
}

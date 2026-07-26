import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects | Achini Subasinghe",
  description: "Projects by Achini Subasinghe — Project Approval System, Uni Life Reborn, Enerlytics",
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  liveDemoUrl: string;
  techStack: string[];
}

function ProjectCard({ title, description, image, repoUrl, liveDemoUrl, techStack }: ProjectCardProps) {
  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/5">
          <div className="overflow-hidden rounded-2xl border-2 border-white bg-surface aspect-[4/3] md:h-full">
            <Image
              src={image}
              alt={`${title} thumbnail`}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col gap-4">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border-2 border-white rounded-full px-3 py-0.5 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white rounded-full px-6 py-2 text-lg w-fit"
            >
              View on GitHub
            </a>
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white rounded-full px-6 py-2 text-lg w-fit"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl mb-10">Projects</h1>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.repoUrl} {...project} />
        ))}
      </div>
    </div>
  );
}

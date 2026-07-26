export interface Project {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  liveDemoUrl: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Canyon",
    description:
      "A project management platform provides RBAC-protected project/task/user management, with a role-aware AI chat agent at /agent that safely uses server-side, signed-in-user tool calling to perform authorized actions.",
    image: "/images/canyon.png",
    repoUrl: "https://github.com/achinisubasinghe/canyon.git",
    liveDemoUrl: "https://canyon.achini.space", 
    techStack: ["Next.js", "Node.js", "Express", "MariaDB", "Bun"],
  },
  {
    title: "Uni Life ",
    description:
      "UniLife is a full-stack platform that connects university students with verified nearby businesses via a searchable directory, provider onboarding, admin moderation, and an AI campus guide that answers student questions.",
    image: "/images/unilife.png",
    repoUrl: "https://github.com/achinisubasinghe/uni-life-reborn.git",
    liveDemoUrl: "https://unilife.achini.space",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Enerlytics",
    description:
      "Enerlytics is a Next.js/MySQL/Tailwind utility management and analytics platform that offers role-based portals and workflows for admins, staff, meter readers, cashiers, managers, and customers—covering everything from onboarding and meter readings to billing, payments, analytics, and self-service support.",
    image: "/images/enerlytics.png",
    repoUrl: "https://github.com/achinisubasinghe/enerlytics.git",
    liveDemoUrl: "https://enerlytics.achini.space",
    techStack: ["Next.js", "React", "MariaDB", "Chart.js"],
  },
];

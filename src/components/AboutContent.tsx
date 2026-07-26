"use client";

import { useState } from "react";
import Image from "next/image";
import { aboutTabs } from "@/data/about";
import { TabGroup, type Tab } from "@/components/TabGroup";
import { Section } from "@/components/Section";

const tabImages: Record<string, { src: string; width: number; height: number; alt: string }> = {
  education: {
    src: "/images/vice.jpeg",
    width: 1145,
    height: 764,
    alt: "Achini at university",
  },
  tools: {
    src: "/images/lap.jpeg",
    width: 1280,
    height: 1145,
    alt: "Laptop and workspace",
  },
  technologies: {
    src: "/images/work.jpeg",
    width: 3024,
    height: 4032,
    alt: "Working on software projects",
  },
};

function groupByCategory(items: { name: string; category?: string }[]) {
  return items.reduce(
    (acc, item) => {
      const cat = item.category || "Other";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item.name);
      return acc;
    },
    {} as Record<string, string[]>
  );
}

function ToolPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-elevated/80 px-2.5 py-1 text-xs font-medium tracking-wide text-foreground/90">
      {name}
    </span>
  );
}

function renderToolsContent(content: { name: string; category?: string }[]) {
  const grouped = groupByCategory(content);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Object.entries(grouped).map(([category, names]) => (
        <div
          key={category}
          className="flex flex-col gap-3 rounded-lg border border-border bg-background/40 p-4"
        >
          <h3 className="border-b border-border pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <ToolPill key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderTabContent(
  tabId: string,
  content: string[] | { name: string; category?: string }[]
) {
  const items = content;

  if (typeof items[0] === "string") {
    return (
      <ul className="space-y-4 text-base leading-relaxed text-foreground/90">
        {(items as string[]).map((item, i) => (
          <li key={i} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (tabId === "tools") {
    return renderToolsContent(items as { name: string; category?: string }[]);
  }

  const grouped = groupByCategory(items as { name: string; category?: string }[]);

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([category, names]) => (
        <div key={category}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {names.map((name) => (
              <ToolPill key={name} name={name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function AboutContent() {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);

  const tabs: Tab[] = aboutTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: <Section>{renderTabContent(tab.id, tab.content)}</Section>,
  }));

  const image = tabImages[activeTab] ?? tabImages.education;

  return (
    <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
      <div className="w-full min-w-0 lg:w-3/5">
        <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="flex w-full justify-center lg:sticky lg:top-28 lg:w-2/5 lg:self-start">
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-border shadow-[var(--shadow-soft)] lg:max-w-none">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto max-h-[min(50vh,420px)] w-full object-cover transition-opacity duration-300 lg:max-h-[min(70vh,560px)] xl:max-h-[min(72vh,640px)]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </div>
  );
}

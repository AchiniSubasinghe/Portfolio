"use client";

import { useState } from "react";

const tabs = [
  { id: "education", label: "Education" },
  { id: "tools", label: "Tools" },
  { id: "technologies", label: "Technologies" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function AboutCard() {
  const [active, setActive] = useState<TabId>("education");

  return (
    <div className="flex flex-col gap-8 px-8 py-8 md:px-10">
      <div>
        <h2 className="text-3xl tracking-[-0.02em]">Notes on the work</h2>
        <div className="border-rule mt-4 border-t" />
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              aria-pressed={selected}
              className={`font-mono rounded-sm border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase ${
                selected
                  ? "bg-ink text-page border-ink"
                  : "border-ink/40 text-ink"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

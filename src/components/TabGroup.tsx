"use client";

import { useState, type ReactNode } from "react";

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function TabGroup({ tabs, activeTab: controlledTab, onTabChange }: TabGroupProps) {
  const [internalTab, setInternalTab] = useState(tabs[0].id);
  const activeTab = controlledTab ?? internalTab;

  function handleTabClick(tabId: string) {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalTab(tabId);
    }
  }

  return (
    <div>
      <div
        className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1 sm:mb-8 sm:flex-wrap sm:overflow-visible lg:mb-10 lg:gap-3"
        role="tablist"
        aria-label="About sections"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabClick(tab.id)}
              className={[
                "interactive-surface shrink-0 rounded-full px-4 py-2 text-sm font-medium tracking-wide sm:px-5",
                "min-h-10",
                isActive
                  ? "border border-accent/40 bg-accent text-background shadow-[0_0_20px_rgba(196,168,130,0.18)]"
                  : "border border-border-strong bg-transparent text-muted hover:border-accent/40 hover:bg-accent-soft hover:text-accent",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel">{tabs.find((t) => t.id === activeTab)?.content}</div>
    </div>
  );
}

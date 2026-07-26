import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  /** When false, no default padding (useful for media edge-to-edge cards). */
  padded?: boolean;
}

export function Section({
  children,
  className = "",
  padded = true,
}: SectionProps) {
  return (
    <section
      className={[
        "rounded-xl border border-border bg-surface/80",
        "shadow-[var(--shadow-soft)] backdrop-blur-sm",
        padded ? "p-4 sm:p-6 md:p-8 xl:p-10" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

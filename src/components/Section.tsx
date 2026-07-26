import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`border-2 border-white rounded-2xl p-6 md:p-8 ${className}`}>
      {children}
    </section>
  );
}

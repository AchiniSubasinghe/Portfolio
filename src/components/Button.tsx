import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  download?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  className = "",
  as = "button",
  href,
  download,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-block border-2 border-white rounded-full px-6 py-2 text-lg font-handwritten ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} download={download} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClasses}>
      {children}
    </button>
  );
}

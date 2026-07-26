import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-3 py-8 sm:gap-8 sm:px-4 sm:py-10 md:flex-row md:px-6 lg:gap-10 lg:px-8 lg:py-12 xl:max-w-7xl xl:px-10">
        <div className="text-center md:text-left">
          <p className="font-handwritten text-xl text-foreground sm:text-2xl">
            Achini Subasinghe
          </p>
          <p className="mt-1 text-sm font-medium tracking-wide text-muted">
            Software Engineer
          </p>
        </div>

        <SocialLinks />

        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Achini Subasinghe
          </p>
          <Link
            href="/contact"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  );
}

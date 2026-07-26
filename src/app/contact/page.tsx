import type { Metadata } from "next";
import { personal } from "@/data/personal";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Achini Subasinghe",
  description: "Get in touch with Achini Subasinghe",
};

export default function ContactPage() {
  return (
    <div>
      <header className="mb-8 space-y-2 sm:mb-10 sm:space-y-3 lg:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Say hello
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl">
          Contact
        </h1>
      </header>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 xl:gap-12">
        <div className="w-full min-w-0 lg:w-3/5">
          <ContactForm />
        </div>

        <div className="flex w-full min-w-0 flex-col gap-6 lg:w-2/5 lg:gap-8">
          <Section>
            <h2 className="mb-5 text-lg font-medium tracking-tight">Details</h2>
            <ul className="space-y-5 text-base">
              <li className="flex min-w-0 flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="break-all text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Phone
                </span>
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Location
                </span>
                <span>{personal.location}</span>
              </li>
            </ul>
          </Section>

          <div className="flex justify-center sm:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

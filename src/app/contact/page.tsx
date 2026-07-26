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
      <h1 className="text-3xl md:text-4xl mb-10">Contact</h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-3/5">
          <ContactForm />
        </div>

        <div className="w-full md:w-2/5 flex flex-col gap-6">
          <Section>
            <h3 className="text-2xl mb-4">Contact Details</h3>
            <ul className="space-y-4 text-lg">
              <li>
                <span className="text-gray-400">Email:</span>{" "}
                <a href={`mailto:${personal.email}`} className="underline">
                  {personal.email}
                </a>
              </li>
              <li>
                <span className="text-gray-400">Phone:</span> {personal.phone}
              </li>
              <li>
                <span className="text-gray-400">Location:</span> {personal.location}
              </li>
            </ul>
          </Section>

          <div className="flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

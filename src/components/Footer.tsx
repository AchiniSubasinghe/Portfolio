import { personal } from "@/data/personal";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t-2 border-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg">{personal.name}</p>
          <p className="text-gray-400 text-base">{personal.role}</p>
        </div>
        <SocialLinks />
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}

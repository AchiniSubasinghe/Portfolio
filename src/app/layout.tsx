import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Achini Subasinghe | Portfolio",
  description: "Personal portfolio website of Achini Subasinghe — Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body>
        <StarBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

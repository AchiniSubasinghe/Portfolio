import type { Metadata, Viewport } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StarBackground } from "@/components/StarBackground";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0e12",
};

export const metadata: Metadata = {
  title: "Achini Subasinghe | Portfolio",
  description:
    "Personal portfolio of Achini Subasinghe — software engineer building practical applications with clean code and creative thinking.",
  openGraph: {
    title: "Achini Subasinghe | Portfolio",
    description:
      "Software engineer and NSBM undergraduate. Projects, experience, and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="font-handwritten min-h-dvh">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <StarBackground />
        <div className="ambient-glow" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <div className="relative z-10 flex min-h-dvh flex-col">
          <Navbar />
          <main
            id="main-content"
            className="mx-auto w-full max-w-6xl flex-1 px-3 pt-4 pb-8 sm:px-4 sm:pt-5 sm:pb-10 md:px-6 md:pt-6 md:pb-14 lg:px-8 lg:pt-8 lg:pb-16 xl:max-w-7xl xl:px-10 xl:pt-10 xl:pb-20"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

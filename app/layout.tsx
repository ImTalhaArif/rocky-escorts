import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ContactBubble from "@/components/ContactBubble";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Rocky Escorts | Elite Companionship in Karachi",
  description:
    "Elite and discreet companionship in Karachi. Verified profiles, absolute privacy, premium experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-neutral-950 text-neutral-100 antialiased relative">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/premium-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-40 blur-sm"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-[var(--font-playfair)]">
              Rocky<span className="text-amber-400">Escorts</span>
            </div>

            <nav className="hidden md:flex gap-8 text-sm text-neutral-300">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/companions" className="hover:text-white">Companions</a>
              <a href="#privacy" className="hover:text-white">Discretion</a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Rocky Escorts — 18+ Only</p>
            <p className="md:text-right">Privacy • Consent • Discretion</p>
          </div>
        </footer>

        {/* Floating Chat */}
        <ContactBubble />
      </body>
    </html>
  );
}
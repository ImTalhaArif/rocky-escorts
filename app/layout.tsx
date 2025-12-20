"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Rocky Escorts | Elite & Discreet Companionship in Karachi",
  description:
    "Rocky Escorts offers elite and discreet companionship in Karachi. Verified profiles, private bookings, and absolute confidentiality.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello, I’m reaching out from the Rocky Escorts website. I’d like to get more information."
  );

  const whatsappLink = `https://wa.me/923161309183?text=${whatsappMessage}`;

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-neutral-950 text-neutral-100 antialiased relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/premium-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover blur-sm opacity-40"
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="text-xl md:text-2xl font-semibold tracking-wide font-[var(--font-playfair)]">
                Rocky<span className="text-amber-400">Escorts</span>
              </div>

              <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
                <a href="#profiles" className="hover:text-white">
                  Companions
                </a>
                <a href="#experience" className="hover:text-white">
                  Experience
                </a>
                <a href="#privacy" className="hover:text-white">
                  Discretion
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition"
                >
                  Book Privately
                </a>
              </nav>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-neutral-800 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 text-sm text-neutral-400">
              <div>
                <p className="font-medium text-neutral-200">Rocky Escorts</p>
                <p className="mt-2">
                  Elite companionship platform focused on privacy, consent, and
                  discretion.
                </p>
              </div>

              <div className="md:text-right space-y-2">
                <p>18+ Only • Companionship Services</p>
                <p>No explicit content • Respect & consent first</p>
                <p>© {new Date().getFullYear()} Rocky Escorts</p>
              </div>
            </div>
          </footer>
        </div>

        {/* ===== FLOATING CONTACT BUBBLE ===== */}
        <div className="fixed bottom-6 right-6 z-50">
          {open && (
            <div className="mb-4 w-80 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl overflow-hidden">
              <div className="p-4 border-b border-neutral-800">
                <p className="font-medium text-amber-400">
                  👋 Hello & Welcome
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  How can we assist you today?
                </p>
              </div>

              <div className="p-4 space-y-3 text-sm">
                <p className="text-neutral-300">Common questions:</p>
                <ul className="space-y-2 text-neutral-400">
                  <li>• Availability & booking process</li>
                  <li>• Privacy & discretion</li>
                  <li>• Companion profiles</li>
                  <li>• Location details</li>
                </ul>

                <div className="pt-3 flex gap-3">
                  <button
                    className="flex-1 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                    onClick={() => setOpen(false)}
                  >
                    Chat
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 font-bold shadow-lg hover:bg-amber-300 transition flex items-center justify-center"
          >
            {open ? "×" : "💬"}
          </button>
        </div>
      </body>
    </html>
  );
}
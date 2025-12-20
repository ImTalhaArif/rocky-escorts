"use client";

import { useState } from "react";

export default function ContactBubble() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"menu" | "chat">("menu");

  const whatsappMessage = encodeURIComponent(
    "Hello, I’m reaching out from the Rocky Escorts website. I’d like to get more information."
  );

  const whatsappLink = `https://wa.me/923161309183?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
            <div>
              <p className="font-medium text-amber-400">👋 Welcome</p>
              <p className="text-xs text-neutral-400">
                Rocky Escorts Assistance
              </p>
            </div>

            <button
              onClick={() => {
                setOpen(false);
                setMode("menu");
              }}
              className="text-neutral-400 hover:text-white text-lg"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-4 text-sm space-y-4">
            {mode === "menu" && (
              <>
                <p className="text-neutral-300">
                  How would you like to get in touch?
                </p>

                <button
                  onClick={() => setMode("chat")}
                  className="w-full px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                >
                  💬 Chat Here
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  className="block w-full px-4 py-2 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition text-center"
                >
                  📲 WhatsApp Us
                </a>
              </>
            )}

            {mode === "chat" && (
              <>
                <p className="text-neutral-200 font-medium">
                  💬 How can we help?
                </p>

                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition">
                    • How does booking work?
                  </button>

                  <button className="w-full text-left px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition">
                    • Are profiles verified?
                  </button>

                  <button className="w-full text-left px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition">
                    • Privacy & discretion policy
                  </button>

                  <button className="w-full text-left px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition">
                    • Availability today
                  </button>
                </div>

                <p className="text-xs text-neutral-500 pt-2">
                  For instant response, WhatsApp is recommended.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Bubble */}
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 font-bold shadow-lg hover:bg-amber-300 transition flex items-center justify-center"
      >
        💬
      </button>
    </div>
  );
}
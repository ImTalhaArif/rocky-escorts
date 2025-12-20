
"use client";

import { useState } from "react";

export default function ContactBubble() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello, I’m reaching out from the Rocky Escorts website. I’d like to get more information."
  );

  const whatsappLink = `https://wa.me/923161309183?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800">
            <p className="font-medium text-amber-400">👋 Hello & Welcome</p>
            <p className="text-sm text-neutral-400 mt-1">
              How can we assist you today?
            </p>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 text-sm">
            {!chatOpen ? (
              <>
                <p className="text-neutral-300">Common questions:</p>
                <ul className="space-y-2 text-neutral-400">
                  <li>• Availability & booking process</li>
                  <li>• Privacy & discretion</li>
                  <li>• Companion profiles</li>
                  <li>• Location details</li>
                </ul>

                <div className="pt-3 flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setChatOpen(true);
                    }}
                    className="flex-1 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                  >
                    💬 Chat
                  </button>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-full bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition text-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </>
            ) : (
              /* Chat UI */
              <div className="space-y-3">
                <p className="text-neutral-200 font-medium">
                  💬 Live Chat
                </p>
                <p className="text-neutral-400 text-sm">
                  Thank you for reaching out via Rocky Escorts. Please let us
                  know how we can assist you.
                </p>

                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li>• Booking & availability</li>
                  <li>• Companion preferences</li>
                  <li>• Discretion & privacy</li>
                  <li>• Pricing inquiries</li>
                </ul>

                <button
                  onClick={() => setChatOpen(false)}
                  className="w-full mt-2 px-4 py-2 rounded-full border border-neutral-700 hover:bg-neutral-800 transition"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setOpen(!open);
          if (open) setChatOpen(false);
        }}
        className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 font-bold shadow-lg hover:bg-amber-300 transition flex items-center justify-center"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
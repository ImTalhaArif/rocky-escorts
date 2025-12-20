"use client";

import { useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const RESPONSES: { keywords: string[]; reply: string }[] = [
  { keywords: ["price", "rates", "charges", "cost"], reply: "Rates vary depending on the companion and time. Please contact us for exact details." },
  { keywords: ["booking", "book"], reply: "Booking is simple. Choose a companion and contact us directly. Advance confirmation is required." },
  { keywords: ["availability", "available"], reply: "Availability changes daily. Please contact us for real-time confirmation." },
  { keywords: ["location", "area", "karachi"], reply: "We provide services across major areas of Karachi. Location is shared after confirmation." },
  { keywords: ["privacy", "confidential"], reply: "Your privacy is 100% protected. No personal information is ever shared." },
  { keywords: ["real", "verified"], reply: "All profiles are verified and carefully reviewed for authenticity." },
  { keywords: ["time", "hours"], reply: "Bookings are available hourly and for longer durations depending on the companion." },
  { keywords: ["payment"], reply: "Payment details are shared privately after booking confirmation." },
  { keywords: ["safe", "security"], reply: "Safety, respect, and consent are our top priorities." },
  { keywords: ["age"], reply: "All companions are 18+ and legally verified." },

  // --- Bulk realistic Q&A ---
  { keywords: ["hotel"], reply: "Hotel and private residence options are available depending on the booking." },
  { keywords: ["home"], reply: "Home visits may be available based on location and confirmation." },
  { keywords: ["couple"], reply: "Couple companionship can be arranged upon request." },
  { keywords: ["party"], reply: "Event and party companionship is available with advance notice." },
  { keywords: ["discreet"], reply: "Discretion is strictly maintained at all times." },
  { keywords: ["photos"], reply: "All photos on the website are genuine and recent." },
  { keywords: ["fake"], reply: "We do not use fake profiles. Authenticity is guaranteed." },
  { keywords: ["advance"], reply: "Advance booking is recommended to ensure availability." },
  { keywords: ["same day"], reply: "Same-day bookings may be possible depending on availability." },
  { keywords: ["long time"], reply: "Extended bookings are available upon request." },
  { keywords: ["overnight"], reply: "Overnight companionship can be discussed privately." },
  { keywords: ["dress"], reply: "Companions present themselves elegantly and professionally." },
  { keywords: ["language"], reply: "English and Urdu communication is available." },
  { keywords: ["respect"], reply: "Mutual respect and boundaries are strictly followed." },
  { keywords: ["meeting"], reply: "Meeting details are shared after booking confirmation." },
  { keywords: ["contact"], reply: "You can chat here or contact us directly on WhatsApp." },
  { keywords: ["manager"], reply: "A dedicated coordinator assists with all bookings." },
  { keywords: ["first time"], reply: "We guide first-time clients with complete professionalism." },
  { keywords: ["cancel"], reply: "Cancellation policies are explained during booking." },
  { keywords: ["delay"], reply: "We keep clients informed in case of delays." },
  { keywords: ["late"], reply: "Late-night bookings may be available." },
  { keywords: ["schedule"], reply: "Flexible scheduling options are available." },
  { keywords: ["city"], reply: "Services are limited to Karachi only." },
  { keywords: ["elite"], reply: "Our platform focuses on premium companionship." },
  { keywords: ["luxury"], reply: "Luxury experiences are available upon request." },
  { keywords: ["trust"], reply: "Client trust is our foundation." },
  { keywords: ["secure"], reply: "Secure and private communication is ensured." },
  { keywords: ["anonymous"], reply: "You may remain anonymous throughout the process." },
  { keywords: ["confirm"], reply: "Confirmation is shared once booking is finalized." },
  { keywords: ["today"], reply: "Please contact us for today’s availability." },
  { keywords: ["now"], reply: "Immediate assistance is available via WhatsApp." },
  { keywords: ["hi", "hello"], reply: "Hello 👋 How can I assist you today?" },
];

export default function ContactBubble() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"menu" | "chat">("menu");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hello 👋 Welcome to Rocky Escorts. How may I assist you?" },
  ]);
  const [input, setInput] = useState("");

  const whatsappLink =
    "https://wa.me/923161309183?text=" +
    encodeURIComponent("Hello, I’m reaching out from the Rocky Escorts website.");

  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();
    for (const r of RESPONSES) {
      if (r.keywords.some(k => lower.includes(k))) {
        return r.reply;
      }
    }
    return "Thank you for your message. For detailed assistance, please contact us on WhatsApp.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { from: "user", text: input };
    const botMsg: Message = { from: "bot", text: getBotReply(input) };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 h-[440px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
            <p className="font-medium text-amber-400">Rocky Escorts</p>
            <button onClick={() => setOpen(false)} className="text-xl">×</button>
          </div>

          {/* MENU */}
          {mode === "menu" && (
            <div className="flex-1 flex flex-col justify-center gap-4 p-6">
              <button
                onClick={() => setMode("chat")}
                className="w-full py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
              >
                💬 Instant Chat
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                className="w-full py-3 rounded-full bg-amber-400 text-neutral-900 font-medium text-center hover:bg-amber-300 transition"
              >
                📲 WhatsApp Us
              </a>
            </div>
          )}

          {/* CHAT */}
          {mode === "chat" && (
            <>
              <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] px-3 py-2 rounded-xl ${
                      m.from === "bot"
                        ? "bg-neutral-900 text-neutral-200"
                        : "bg-amber-400 text-neutral-900 ml-auto"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="p-3 border-t border-neutral-800">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100"
                  />
                  <button
                    onClick={sendMessage}
                    className="px-4 py-2 rounded-lg bg-amber-400 text-neutral-900 font-medium"
                  >
                    Send
                  </button>
                </div>

                <button
                  onClick={() => setMode("menu")}
                  className="mt-2 text-xs text-neutral-400 hover:underline"
                >
                  ← Back to options
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 shadow-lg hover:bg-amber-300 flex items-center justify-center"
      >
        💬
      </button>
    </div>
  );
}
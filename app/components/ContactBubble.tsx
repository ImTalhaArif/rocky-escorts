"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const RESPONSES: { keywords: string[]; reply: string }[] = [
  { keywords: ["price", "rate", "charges", "cost"], reply: "Rates vary depending on the companion and duration. Please contact us for exact details." },
  { keywords: ["booking", "book"], reply: "Booking is simple. Choose a companion and contact us directly. Advance confirmation is required." },
  { keywords: ["availability", "available"], reply: "Availability changes daily. Please contact us for real-time confirmation." },
  { keywords: ["location", "karachi", "area"], reply: "We provide services across major areas of Karachi. Location details are shared after confirmation." },
  { keywords: ["privacy", "confidential"], reply: "Your privacy is fully protected. No personal data is ever shared." },
  { keywords: ["verified", "real"], reply: "All profiles are verified and reviewed for authenticity." },
  { keywords: ["hotel"], reply: "Hotel and private residence options may be available depending on booking." },
  { keywords: ["home"], reply: "Home visits can be discussed privately based on location." },
  { keywords: ["time", "hours"], reply: "Hourly and extended bookings are available depending on the companion." },
  { keywords: ["payment"], reply: "Payment details are shared privately after booking confirmation." },
  { keywords: ["safe", "security"], reply: "Safety, respect, and consent are our top priorities." },
  { keywords: ["age"], reply: "All companions are 18+ and legally verified." },
  { keywords: ["hi", "hello", "hey"], reply: "Hello 👋 How may I assist you today?" },
];

export default function ContactBubble() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"menu" | "chat">("menu");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hello 👋 Welcome to Rocky Escorts. How may I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappLink =
    "https://wa.me/923161309183?text=" +
    encodeURIComponent("Hello, I’m reaching out from the Rocky Escorts website.");

  // 🔽 Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();
    for (const r of RESPONSES) {
      if (r.keywords.some(k => lower.includes(k))) {
        return r.reply;
      }
    }
    return "Thank you for your message. For detailed assistance, please contact us on WhatsApp.";
  };

  // ⌨️ Typing effect
  const typeBotMessage = (fullText: string) => {
    let index = 0;
    setTyping(true);

    const interval = setInterval(() => {
      index++;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.from === "bot" && last.text.endsWith("…")) {
          return [...prev.slice(0, -1), { from: "bot", text: fullText.slice(0, index) + "…" }];
        }
        return [...prev, { from: "bot", text: fullText.slice(0, index) + "…" }];
      });

      if (index >= fullText.length) {
        clearInterval(interval);
        setMessages(prev => [
          ...prev.slice(0, -1),
          { from: "bot", text: fullText },
        ]);
        setTyping(false);
      }
    }, 20);
  };

  const sendMessage = () => {
    if (!input.trim() || typing) return;

    const userText = input;
    setInput("");

    setMessages(prev => [...prev, { from: "user", text: userText }]);

    const reply = getBotReply(userText);

    setTimeout(() => {
      typeBotMessage(reply);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 h-[460px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-xl flex flex-col">
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
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-neutral-800">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendMessage()}
                    placeholder={typing ? "Bot is typing…" : "Type your message..."}
                    disabled={typing}
                    className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={typing}
                    className="px-4 py-2 rounded-lg bg-amber-400 text-neutral-900 font-medium disabled:opacity-50"
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
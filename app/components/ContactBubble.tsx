"use client";

import { useState } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function ContactBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hello 👋 Welcome to Rocky Escorts. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const whatsappMessage = encodeURIComponent(
    "Hello, I’m reaching out from the Rocky Escorts website. I’d like to get more information."
  );

  const whatsappLink = `https://wa.me/923161309183?text=${whatsappMessage}`;

  const botReply = (userText: string) => {
    const text = userText.toLowerCase();

    if (text.includes("price") || text.includes("rate")) {
      return "Our rates depend on the companion and duration. Please contact us on WhatsApp for exact details.";
    }

    if (text.includes("booking")) {
      return "Booking is simple. Choose a companion and contact us directly. We ensure privacy and discretion.";
    }

    if (text.includes("availability")) {
      return "Availability varies daily. For instant confirmation, WhatsApp is recommended.";
    }

    if (text.includes("privacy")) {
      return "Your privacy is our top priority. No personal data is shared with anyone.";
    }

    return "Thank you for your message. For faster assistance, you may also contact us on WhatsApp.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input };

    const reply: Message = {
      from: "bot",
      text: botReply(input),
    };

    setMessages((prev) => [...prev, userMessage, reply]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 h-[420px] rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
            <div>
              <p className="font-medium text-amber-400">Rocky Escorts</p>
              <p className="text-xs text-neutral-400">Live Assistance</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-white text-lg"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-xl ${
                  msg.from === "bot"
                    ? "bg-neutral-900 text-neutral-200 self-start"
                    : "bg-amber-400 text-neutral-900 self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-neutral-800">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded-lg bg-amber-400 text-neutral-900 font-medium hover:bg-amber-300 transition"
              >
                Send
              </button>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              className="block text-center text-xs text-amber-400 mt-2 hover:underline"
            >
              Prefer WhatsApp? Click here
            </a>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        onClick={() => setOpen(true)}
        className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 font-bold shadow-lg hover:bg-amber-300 transition flex items-center justify-center"
      >
        💬
      </button>
    </div>
  );
}
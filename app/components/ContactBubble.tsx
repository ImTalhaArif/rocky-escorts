"use client";

import { useEffect, useRef, useState } from "react";

type Message = { from: "bot" | "user"; text: string };

export const RESPONSES: { keywords: string[]; reply: string }[] = [
  { keywords: ["price", "rate", "charges", "cost", "pese", "paisay", "pesay"], reply: "Rates vary depending on the companion and duration. Please contact us for exact details." },
  { keywords: ["big ass", "booty", "curvy", "gaand", "gand"], reply: "We have verified companions matching your preference for curvy or big-ass profiles." },
  { keywords: ["slim", "skinny", "fit"], reply: "Slim and fit companions are available. Contact us for real-time availability." },
  { keywords: ["blonde", "fair hair"], reply: "Hair color preferences can be specified. We have companions with various hair shades." },
  { keywords: ["brunette", "dark hair"], reply: "Brunette companions are available. Choose your preference when booking." },
  { keywords: ["tall", "height"], reply: "Tall companions are available for clients with specific height preferences." },
  { keywords: ["short", "petite"], reply: "Petite companions are available. Contact us for details." },
  { keywords: ["busty", "big boobs", "big boobs", "mammay", "bade mammay", "bade mamme"], reply: "Busty companions are available. Profiles include verified images." },
  { keywords: ["ass", "butt"], reply: "Companions matching your preference for body type can be arranged." },
  { keywords: ["tight", "firm"], reply: "Firm and toned companions are available for bookings." },
  { keywords: ["curves", "body shape"], reply: "We cater to specific body shape preferences, including curves." },
  { keywords: ["blonde hair", "fair skin"], reply: "Blonde-haired and fair-skinned companions are available in Karachi." },
  { keywords: ["dark skin", "tan"], reply: "Tan or dark-skinned companions are available based on your preferences." },
  { keywords: ["lingerie", "underwear"], reply: "Companions can dress as per client requests including lingerie options." },
  { keywords: ["nude", "naked"], reply: "Private sessions are arranged discreetly. Please contact for details." },
  { keywords: ["oral", "blowjob"], reply: "Professional and verified companions provide adult services discreetly." },
  { keywords: ["anal", "backdoor"], reply: "Certain services are offered with discretion. Contact us to discuss preferences." },
  { keywords: ["sex", "intimate"], reply: "Intimate services are handled professionally and discreetly." },
  { keywords: ["fetish", "kink"], reply: "Fetish or kink-specific requests can be accommodated after discussion." },
  { keywords: ["dominant", "submissive"], reply: "Companions can match your preferred dynamic discreetly." },
  { keywords: ["roleplay", "costume"], reply: "Roleplay sessions can be arranged based on client requests." },
  { keywords: ["massage", "sensual"], reply: "Sensual massages and adult services are available with verified companions." },
  { keywords: ["oral sex", "blowjob"], reply: "Professional companions provide oral services discreetly." },
  { keywords: ["anal sex", "backdoor"], reply: "Anal services are arranged discreetly upon request." },
  { keywords: ["cum", "ejaculation"], reply: "Safe and professional services are provided respecting client privacy." },
  { keywords: ["escort near me", "local girl"], reply: "Verified local companions are available across Karachi." },
  { keywords: ["hot girl", "sexy girl"], reply: "Sexy and hot companions are available. Check profiles for verified images." },
  { keywords: ["adult", "18+"], reply: "All companions are 18+ and legally verified." },
  { keywords: ["fun", "playful"], reply: "Companions can provide a playful and enjoyable experience." },
  { keywords: ["bdsm", "bondage"], reply: "BDSM or bondage sessions can be arranged discreetly." },
  { keywords: ["feet", "foot fetish"], reply: "Foot fetish preferences can be accommodated with verified companions." },
  { keywords: ["roleplay", "fantasy"], reply: "Fantasy roleplay sessions can be discussed privately." },
  { keywords: ["massage parlor", "spa"], reply: "Sensual massages are available at discreet locations." },
  { keywords: ["hotel", "room service"], reply: "Hotel visits are arranged discreetly based on client preferences." },
  { keywords: ["couple", "threesome"], reply: "Couple-friendly bookings and threesomes can be arranged with prior confirmation." },
  { keywords: ["oral only", "no penetration"], reply: "You can specify service limits and preferences discreetly." },
  { keywords: ["fetish party", "adult event"], reply: "Companions can attend private adult events upon request." },
  { keywords: ["sexy outfit", "lingerie"], reply: "Companions can dress as per your request, including lingerie." },
  { keywords: ["erotic", "sensual"], reply: "Erotic experiences are arranged professionally and discreetly." },
  { keywords: ["horny", "desire"], reply: "Verified companions can provide discreet adult services." },
  { keywords: ["curvy body", "thick"], reply: "Curvy and thick companions are available for bookings." },
  { keywords: ["petite body", "slim"], reply: "Slim and petite companions are available." },
  { keywords: ["blonde beauty", "fair girl"], reply: "Blonde or fair companions are available." },
  { keywords: ["booking", "book", "reserve"], reply: "Booking is simple. Choose a companion and contact us directly. Advance confirmation is required." },
  { keywords: ["availability", "available", "free", "milegi"], reply: "Availability changes daily. Please contact us for real-time confirmation." },
  { keywords: ["location", "karachi", "area", "city"], reply: "We provide services across major areas of Karachi. Location details are shared after confirmation." },
  { keywords: ["privacy", "confidential", "secret"], reply: "Your privacy is fully protected. No personal data is ever shared." },
  { keywords: ["verified", "real", "authentic"], reply: "All profiles are verified and reviewed for authenticity." },
  { keywords: ["hotel"], reply: "Hotel and private residence options may be available depending on booking." },
  { keywords: ["home"], reply: "Home visits can be discussed privately based on location." },
  { keywords: ["time", "hours", "duration"], reply: "Hourly and extended bookings are available depending on the companion." },
  { keywords: ["payment", "pay", "fee"], reply: "Payment details are shared privately after booking confirmation." },
  { keywords: ["safe", "security", "secure"], reply: "Safety, respect, and consent are our top priorities." },
  { keywords: ["age"], reply: "All companions are 18+ and legally verified." },
  { keywords: ["hi", "hello", "hey", "salaam"], reply: "Hello 👋 How may I assist you today?" },
  { keywords: ["female", "girl", "lady"], reply: "We have a variety of verified female companions available in Karachi." },
  { keywords: ["male", "boy", "gentleman"], reply: "We also offer verified male companions. Please check the profiles for availability." },
  { keywords: ["couple", "both"], reply: "Couple bookings are available with prior confirmation." },
  { keywords: ["escort", "service"], reply: "Our companions provide professional, discreet services tailored to your preferences." },
  { keywords: ["evening", "night"], reply: "Evening and night bookings are available. Please contact us for scheduling." },
  { keywords: ["day", "morning"], reply: "Daytime bookings can be arranged based on companion availability." },
  { keywords: ["meeting", "session", "visit"], reply: "Private meetings are scheduled in a discreet manner." },
  { keywords: ["event", "party"], reply: "Event escorting services are available upon request." },
  { keywords: ["travel", "tour"], reply: "Travel companionship can be arranged with advance notice." },
  { keywords: ["hotel room"], reply: "Hotel details are shared only after booking confirmation for privacy." },
  { keywords: ["vip", "luxury"], reply: "We cater to VIP clients with refined, discreet experiences." },
  { keywords: ["preferences", "type"], reply: "You can specify your preferences when contacting us for bookings." },
  { keywords: ["repeat", "return"], reply: "Returning clients can enjoy priority bookings with familiar companions." },
  { keywords: ["language", "speak"], reply: "Many companions can communicate in English, Urdu, and local dialects." },
  { keywords: ["duration", "hours", "long"], reply: "Bookings can be customized for short or extended durations." },
  { keywords: ["last minute", "urgent"], reply: "Last-minute bookings may be possible, please contact immediately." },
  { keywords: ["rating", "reviews"], reply: "All companions are reviewed and verified for quality assurance." },
  { keywords: ["introduction", "profile"], reply: "Profiles include verified images and details for your reference." },
  { keywords: ["contact", "call"], reply: "You can contact us via WhatsApp for instant responses." },
  { keywords: ["questions", "faq"], reply: "Feel free to ask any questions. We are here to help you discreetly." },
  { keywords: ["special", "requests"], reply: "Special requests can be accommodated with prior discussion." },
  { keywords: ["discreet", "privacy"], reply: "All interactions are fully confidential and discreet." },
  { keywords: ["meeting place", "location"], reply: "We arrange safe and discreet meeting locations in Karachi." },
  { keywords: ["transport", "pickup"], reply: "Transport or pickup can be arranged privately if needed." },
  { keywords: ["availability today", "now"], reply: "Please contact us to check real-time availability for today." },
  { keywords: ["friend", "company"], reply: "Companions can also join for friendly or casual meetings as per your preference." },
  { keywords: ["luxury", "premium"], reply: "Premium and luxury experiences are available upon request." },
  { keywords: ["food", "dinner"], reply: "Companions can join for dinners or social events." },
  { keywords: ["airport", "pickup"], reply: "Airport pickups and drop-offs are arranged discreetly with prior notice." },
  { keywords: ["hotel visit", "private"], reply: "Private hotel visits are arranged with full discretion." },
  { keywords: ["safety", "rules"], reply: "Safety and consent are always prioritized in all interactions." },
  { keywords: ["preferences", "style"], reply: "Please specify your preferences so we can match you with the right companion." },
  { keywords: ["day rate", "price per day"], reply: "Day rate details vary by companion; please contact for specifics." },
  { keywords: ["night rate", "price per night"], reply: "Night rate details vary by companion; please contact for specifics." },
  { keywords: ["exclusive", "elite"], reply: "We offer exclusive and elite companionship for special clients." },
  { keywords: ["escort service", "agency"], reply: "We are a professional agency providing verified companionship in Karachi." },
  { keywords: ["meeting hours", "timing"], reply: "Meeting hours are flexible and arranged based on companion availability." },
  { keywords: ["home service", "home visit"], reply: "Home service visits are arranged privately and discreetly." },
  { keywords: ["couple friendly", "both partners"], reply: "We can accommodate couple-friendly bookings with mutual consent." },
  { keywords: ["real images", "photos"], reply: "All images in profiles are authentic and verified." },
  { keywords: ["verification", "verified"], reply: "Every companion is personally verified to ensure authenticity." },
  { keywords: ["introduction call", "chat"], reply: "You can initiate an introduction via chat or WhatsApp for privacy." },
  { keywords: ["reservation", "book now"], reply: "Advance reservations are recommended to secure your preferred companion." },
  { keywords: ["flexible", "timing"], reply: "Flexible timings can be arranged for meetings or events." },
  { keywords: ["hourly booking", "per hour"], reply: "Hourly bookings are available based on companion rates." },
  { keywords: ["overnight", "full night"], reply: "Overnight or full-night bookings are arranged with prior confirmation." },
  { keywords: ["confirmation", "approved"], reply: "Bookings are confirmed only after mutual agreement and privacy checks." },
  { keywords: ["intro", "message"], reply: "Send us a brief message to start the booking process." },
  { keywords: ["last minute booking", "urgent"], reply: "For urgent requests, contact us immediately via WhatsApp." },
  { keywords: ["special event", "party"], reply: "Companions are available for social events, parties, and gatherings." },
  { keywords: ["preferences", "choose"], reply: "You can choose based on age, appearance, and preferences." },
  { keywords: ["contact details", "info"], reply: "All contact details are shared privately after booking confirmation." },
  { keywords: ["vip service", "exclusive"], reply: "VIP services are available for premium clients." },
  { keywords: ["real-time availability", "now"], reply: "Please contact us to get the latest availability for companions in Karachi." },
  { keywords: ["escort", "call girl"], reply: "Our call girls are professional, discreet, and verified for your comfort." },
  { keywords: ["chat now", "talk"], reply: "You can chat with us instantly here or reach out on WhatsApp." },
  { keywords: ["general inquiry", "question"], reply: "Feel free to ask any general inquiries about our services." },
  { keywords: ["female companion", "lady"], reply: "Verified female companions are available based on your preferences." },
  { keywords: ["male companion", "gentleman"], reply: "Verified male companions are available for bookings." },
  { keywords: ["location details", "address"], reply: "Location details are shared discreetly only after confirmation." },
  { keywords: ["discreet meeting", "private"], reply: "All meetings are fully private and confidential." },
  { keywords: ["online booking", "app"], reply: "Online booking is available via WhatsApp or our contact forms." },
  { keywords: ["hotel booking", "room"], reply: "Hotel room visits are arranged discreetly and professionally." },
  { keywords: ["home visit", "private service"], reply: "Home visit services are arranged upon request with privacy guaranteed." },
  { keywords: ["escort agency", "service"], reply: "We are a trusted agency offering verified companions in Karachi." },
  { keywords: ["queries", "ask"], reply: "Please ask any questions you have; we are here to assist you discreetly." },
  { keywords: ["contact whatsapp", "message"], reply: "WhatsApp is the fastest way to get in touch with us." },
  { keywords: ["availability tomorrow", "future"], reply: "For future bookings, please contact us to reserve in advance." },
  { keywords: ["companions", "profiles"], reply: "All companion profiles are verified and updated regularly." },
  { keywords: ["rates today", "current price"], reply: "Current rates vary by companion; contact us for accurate information." },
  { keywords: ["escort types", "models"], reply: "We have different types of companions to suit your preferences." },
  { keywords: ["meeting options", "services"], reply: "Various meeting options are available including dinners, events, and travel companionship." },
  { keywords: ["instant booking", "quick"], reply: "You can book instantly via WhatsApp with your selected companion." },
  { keywords: ["availability now", "immediate"], reply: "Immediate availability requires contacting us directly for confirmation." },
  { keywords: ["verified images", "real photos"], reply: "All companion images are real and verified for authenticity." },
  { keywords: ["price list", "rate card"], reply: "Rate details are shared privately after inquiry." },
  { keywords: ["special requests", "custom"], reply: "Special requests can be accommodated after discussion." },
  { keywords: ["escort experience", "service quality"], reply: "We ensure high-quality, professional, and discreet experiences." },
  { keywords: ["safe meeting", "secure"], reply: "Safety is a priority for all meetings and bookings." },
  { keywords: ["female call girls", "girls"], reply: "Verified female call girls are available in Karachi." },
  { keywords: ["male escorts", "boys"], reply: "Male escorts are available upon request." },
  { keywords: ["couple bookings", "both"], reply: "We can arrange companion services for couples with prior confirmation." },
  { keywords: ["tour companion", "travel"], reply: "Travel companions can be arranged for trips across Karachi and beyond." },
  { keywords: ["full night", "overnight"], reply: "Overnight bookings are arranged discreetly and professionally." },
  { keywords: ["party escort", "event"], reply: "Companions can attend parties and events with discretion." },
  { keywords: ["booking confirmation", "approved"], reply: "Bookings are only confirmed after mutual agreement and privacy measures." },
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
    "https://wa.me/923708540579?text=" +
    encodeURIComponent("Hello, I’m reaching out from the Rocky Escorts website.");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getBotReply = (text: string) => {
    const lower = text.toLowerCase();
    for (const r of RESPONSES) {
      if (r.keywords.some(k => lower.includes(k))) return r.reply;
    }
    return "Thank you for your message. For detailed assistance, please contact us on WhatsApp.";
  };

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
        setMessages(prev => [...prev.slice(0, -1), { from: "bot", text: fullText }]);
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
    setTimeout(() => typeBotMessage(reply), 500);
  };

  return (
    <>
      {/* WhatsApp Bubble on the left */}
      <a
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-6 left-6 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-10 h-10" />
      </a>

      {/* Chat Bubble on the right */}
      <div className="fixed bottom-6 right-6 z-50">
        {open && (
          <div className="mb-4 w-80 h-[460px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-xl flex flex-col">
            <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
              <p className="font-medium text-amber-400">Rocky Escorts</p>
              <button onClick={() => setOpen(false)} className="text-xl">×</button>
            </div>

            {mode === "menu" && (
              <div className="flex-1 flex flex-col justify-center gap-4 p-6">
                <button
                  onClick={() => setMode("chat")}
                  className="w-full py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                >
                  💬 Instant Chat
                </button>
              </div>
            )}

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

        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-amber-400 text-neutral-900 shadow-lg hover:bg-amber-300 flex items-center justify-center"
        >
          💬
        </button>
      </div>
    </>
  );
}
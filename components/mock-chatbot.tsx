"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";

type Message = {
  id: number;
  role: "assistant" | "user";
  content: string;
};

const quickReplies = [
  "Show me properties",
  "How do I contact Mark?",
  "What is the price range?",
];

function getAssistantReply(message: string): string {
  const normalized = message.toLowerCase();

  if (normalized.includes("property") || normalized.includes("listing") || normalized.includes("home")) {
    return "I can help you explore featured listings like Sunset Residence, Harbor Terrace, and Greenview Estate. I can also guide you to the best fit for your budget and lifestyle.";
  }

  if (normalized.includes("contact") || normalized.includes("call") || normalized.includes("talk")) {
    return "You can reach out through the contact page or message Mark directly on Facebook Messenger for a quick consultation.";
  }

  if (normalized.includes("price") || normalized.includes("budget") || normalized.includes("cost")) {
    return "Our sample listings range from a starter investment condo to premium family homes, so there is usually a good starting point for different budgets.";
  }

  if (normalized.includes("buy") || normalized.includes("sell") || normalized.includes("invest")) {
    return "This mock assistant can help you start a conversation around buying, selling, or investing. I can also guide you to the right property type based on your goals.";
  }

  return "I am Mark’s mock assistant for this sample site. I can help you explore properties, learn about the service, or get started with a consultation.";
}

export function MockChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi! I’m Mark’s mock assistant. I can help you explore the sample listings and get started with a consultation.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const handleSend = (value?: string) => {
    const text = (value ?? input).trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: getAssistantReply(text),
      };

      setMessages((current) => [...current, reply]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-slate-800"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {isOpen ? (
        <div className="mt-3 w-[min(92vw,360px)] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-2xl">
          <div className="border-b border-slate-200 bg-slate-950 px-4 py-3 text-white">
            <p className="text-sm font-semibold">Mark Estrella Assistant</p>
            <p className="text-xs text-slate-300">Mock AI support for your preview</p>
          </div>

          <div className="flex h-72 flex-col gap-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "self-start bg-white text-slate-700"
                    : "ml-auto bg-amber-500 text-slate-950"
                }`}
              >
                {message.content}
              </div>
            ))}

            {isTyping ? (
              <div className="max-w-[85%] self-start rounded-2xl bg-white px-3 py-2 text-sm text-slate-700">
                Typing...
              </div>
            ) : null}

            <div ref={endRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => handleSend(reply)}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-amber-400 hover:text-amber-700"
                >
                  {reply}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about properties..."
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button type="submit" className="rounded-full bg-slate-950 p-2 text-white">
                <SendHorizontal size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  X, 
  Send, 
  MessageCircle, 
  Sparkles, 
  AlertCircle, 
  RefreshCcw, 
  ArrowRight,
  User,
  GraduationCap
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      role: "assistant",
      content: "Hello! I am **DV Krishna Sir's digital assistant**. Ask me anything about our offline/online classes in Guntur, C & Python coding tracks, B.Tech Core subjects, or Engineering Mathematics!",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  // Hide tooltip after some time
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text,
          history: history
        })
      });

      const data = await res.json();
      
      const assistantMsg: ChatMessage = {
        id: `ast-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I'm here to help you get ready for engineering!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: "Sorry about that! I am having trouble connecting right now. Please reach out to DV Krishna Sir directly on WhatsApp or register below to get custom assistance!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const suggestions = [
    "Tell me about C & Python classes",
    "Where is the Guntur branch located?",
    "Do you offer Maths M1 & M2?",
    "How do I join the course?"
  ];

  return (
    <>
      {/* LEFT SIDE: AI Assistant Widget */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start font-sans" id="ai-assistant-widget">
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              className="bg-brand-primary border border-[#00E5FF]/20 text-white text-xs px-3.5 py-2 rounded-2xl shadow-xl max-w-[200px] mb-3 text-left leading-relaxed relative pointer-events-none select-none"
            >
              <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-brand-primary border-r border-b border-[#00E5FF]/20 rotate-45" />
              <div className="flex items-center gap-1.5 font-bold text-[#00E5FF] mb-0.5">
                <Sparkles size={12} className="animate-pulse" />
                <span>Need help?</span>
              </div>
              <p className="text-gray-300">Ask DV Krishna Sir's AI about our courses!</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Float Action Assistant Toggle Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2.5 h-12 sm:h-14 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 border cursor-pointer border-white/10 ${
            isOpen 
              ? "bg-[#091522] text-white" 
              : "bg-gradient-to-r from-brand-primary to-[#00E5FF]/25 text-white hover:shadow-[#00E5FF]/10 hover:border-[#00E5FF]/30"
          }`}
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? (
            <X size={20} className="text-[#00E5FF]" />
          ) : (
            <span className="relative flex h-5 w-5 items-center justify-center">
              <Bot size={20} className="text-[#00E5FF] animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
            </span>
          )}
          <span className="font-display font-bold text-xs sm:text-sm tracking-wide">
            {isOpen ? "Close Assistant" : "Ask AI Assistant"}
          </span>
        </motion.button>

        {/* AI Assistant Conversation Window Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="absolute bottom-16 left-0 w-[calc(100vw-3rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-8rem)] rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col glass bg-brand-primary"
            >
              {/* Header section with space brand, mentor offline indicators */}
              <div className="p-4 sm:p-5 bg-black/40 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-secondary to-[#00E5FF] flex items-center justify-center text-white shadow-md">
                    <Bot size={18} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-display font-extrabold text-sm text-white tracking-wide flex items-center gap-1.5">
                      DV Krishna AI
                      <Sparkles size={11} className="text-[#00E5FF]" />
                    </h4>
                    <p className="text-[10px] text-gray-400 flex items-center gap-1.5 leading-none">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Mentor Assistant Agent
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 px-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Chat history list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left scrollbar-thin scrollbar-thumb-white/5">
                {messages.map((m) => (
                  <div 
                    key={m.id}
                    className={`flex items-start gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border select-none text-[10px] uppercase font-bold font-mono ${
                      m.role === "user" 
                        ? "bg-brand-secondary/30 text-brand-secondary border-brand-secondary/20" 
                        : "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/20"
                    }`}>
                      {m.role === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed font-sans ${
                      m.role === "user"
                        ? "bg-brand-secondary/20 text-white rounded-tr-none border border-brand-secondary/20"
                        : "bg-white/[0.03] text-gray-200 rounded-tl-none border border-white/5"
                    }`}>
                      {/* Simple custom markdown parsing support block */}
                      <p className="whitespace-pre-wrap">
                        {m.content.split("**").map((text, i) => {
                          if (i % 2 !== 0) return <strong key={i} className="text-[#00E5FF] font-bold">{text}</strong>;
                          
                          // Also handle single asterisks for italics
                          return text.split("*").map((subText, j) => {
                            if (j % 2 !== 0) return <em key={j} className="text-white italic">{subText}</em>;
                            return subText;
                          });
                        })}
                      </p>
                      <span className="block text-[8px] text-gray-500 mt-1.5 text-right uppercase tracking-wider font-mono select-none">
                        {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Live active typing/loading frame */}
                {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 flex items-center justify-center text-[10px] shrink-0">
                      <Bot size={12} />
                    </div>
                    <div className="bg-white/[0.03] border border-white/5 text-gray-300 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-bounce [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-bounce [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-bounce" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions row for frictionless UX clicking */}
              {messages.length === 1 && !isLoading && (
                <div className="p-3 bg-black/20 border-t border-white/5 flex flex-wrap gap-2 justify-start">
                  <p className="w-full text-left text-[9px] text-[#00E5FF] uppercase font-mono tracking-wider font-bold select-none p-1 pb-0 mb-1">
                    Suggested Questions:
                  </p>
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-white/5 hover:bg-[#00E5FF]/10 hover:border-[#00E5FF]/30 active:scale-95 text-left text-[11px] text-gray-300 hover:text-white px-2.5 py-1.5 rounded-xl border border-white/5 font-medium transition-all transition-colors cursor-pointer"
                    >
                      {suggestion} &rarr;
                    </button>
                  ))}
                </div>
              )}

              {/* Input Form Box Container */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="p-3 BG-brand-primary border-t border-white/10 flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask and learn coding/maths..."
                  className="flex-1 bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF]/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputText.trim()}
                  className="h-9 w-9 rounded-xl bg-gradient-to-r from-brand-secondary to-[#00E5FF] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:scale-100 disabled:pointer-events-none cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </form>
              <div className="py-2.5 bg-black/60 border-t border-white/10 text-center select-none">
                <p className="text-[9px] font-mono tracking-wider text-gray-500 flex items-center justify-center gap-1.5 leading-none font-bold uppercase">
                  <GraduationCap size={10} className="text-gray-500" />
                  Powered by Gemini 3.5 AI Assistant
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* RIGHT SIDE: WhatsApp floating action inquiry option */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans" id="whatsapp-widget">
        <motion.a
          href="https://wa.me/919704727292?text=Hi%20Krishna%20Sir%21%20I%20am%20interested%20in%20the%20B.Tech%20classes%20you%20offer.%20Could%20you%20please%20provide%20more%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white h-12 sm:h-14 px-4 sm:px-5 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.35)] border border-emerald-400/20 hover:shadow-emerald-500/20 hover:border-emerald-400/40 cursor-pointer"
          aria-label="Contact DV Krishna Sir on WhatsApp"
        >
          {/* Animated WhatsApp Pulse Dot indicator */}
          <span className="relative flex h-5 w-5 items-center justify-center">
            <MessageCircle size={22} className="text-white fill-white/10 animate-pulse" />
            <span className="absolute -top-1.5 -right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
            </span>
          </span>
          <span className="font-display font-medium text-xs sm:text-sm tracking-wide hidden xs:inline pl-0.5">
            Contact Sir on WhatsApp
          </span>
          <span className="font-display font-medium text-xs sm:text-sm tracking-wide inline xs:hidden pl-0.5">
            WhatsApp
          </span>
        </motion.a>
      </div>
    </>
  );
}

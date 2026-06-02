/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, Terminal, Code, Cpu } from "lucide-react";

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState<"c" | "java" | "python">("c");

  const codeSnippets = {
    c: `#include <stdio.h>

int main() {
    printf("🚀 Hello B.Tech Future Engineers!\\n");
    printf("🔥 Master C Fundamentals with Krishna Sir\\n");
    return 0;
}`,
    java: `public class FutureEngineer {
    public static void main(String[] args) {
        System.out.println("☕ Learning Java OOP Concepts");
        System.out.println("💪 Building Strong Foundation");
    }
}`,
    python: `def start_btech_journey():
    skills = ["C", "Java", "Python"]
    confidence = "HIGH"
    print(f"🐍 Learning {skills} is Awesome!")
    print("🌟 Enter College with coding superpowers")

start_btech_journey()`
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCodeTab((prev) => (prev === "c" ? "java" : prev === "java" ? "python" : "c"));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919704727292?text=Hi%20Krishna%20Sir%2C%20I%20have%20completed%20Intermediate%20and%20want%20to%20join%20the%20B.Tech%20solutions%20coding%20program.", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative z-10 w-full flex flex-col items-center">
      {/* Sticky-ish elegant header */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-secondary to-yellow-400 p-0.5 shadow-lg shadow-brand-secondary/20 flex items-center justify-center">
            <div className="w-full h-full bg-brand-dark rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-400 to-yellow-300 text-lg">K</span>
            </div>
          </div>
          <div>
            <h1 className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white">
              KRISHNA B.TECH
            </h1>
            <p className="font-mono text-[9px] text-[#00E5FF] tracking-widest uppercase">SOLUTIONS</p>
          </div>
        </motion.div>

        {/* Highlight badge for offline classes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hidden md:flex items-center gap-2 bg-brand-primary/60 border border-brand-accent-blue/20 rounded-full px-4 py-2 text-xs text-brand-accent-blue"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Offline Admissions Open (Pattabhipuram, Guntur)
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text copy & CTAs */}
        <motion.div 
          className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-secondary/10 border border-brand-secondary/30 text-brand-secondary text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
            <Sparkles size={14} className="animate-pulse" />
            Designed Specially for Intermediate Completed Students
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-yellow-400 to-[#00E5FF]">B.Tech Journey</span> Ahead of Others
          </h2>

          <p className="font-sans text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Learn <span className="text-white font-semibold underline decoration-brand-secondary decoration-2 decoration-solid">C, Java & Python</span> before college begins. Build solid confidence, develop critical coding habits, and enter engineering as a true topper.
          </p>

          {/* Key Value Pillows */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs text-gray-300">
              <ShieldCheck className="text-[#00E5FF] shrink-0" size={18} />
              <span>Guntur Offline Training</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300">
              <Code className="text-brand-secondary shrink-0" size={18} />
              <span>C, Java & Python</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300 col-span-2 md:col-span-1">
              <Cpu className="text-emerald-400 shrink-0" size={18} />
              <span>Full Practical Labs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              id="cta-join-now"
              onClick={scrollToRegistration}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(255, 122, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-brand-secondary to-amber-500 hover:to-orange-600 text-white font-display font-bold px-8 py-4 rounded-xl text-md shadow-lg shadow-brand-secondary/20 cursor-pointer flex items-center justify-center gap-2 group transition-all"
            >
              <span>Join Program Now</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              id="cta-whatsapp"
              onClick={openWhatsApp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-primary/60 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-brand-primary/80 text-white font-display font-semibold px-8 py-4 rounded-xl text-md cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="text-emerald-400 stroke-[2.5px]" size={18} />
              <span className="text-emerald-400">WhatsApp Us Directly</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right column: High-Tech IDE Code Simulator */}
        <motion.div 
          className="lg:col-span-5 relative w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Subtle Ambient Glow behind Simulator */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF]/20 to-brand-secondary/20 rounded-2xl blur-3xl opacity-30 select-none pointer-events-none" />

          <div className="w-full glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-left flex flex-col">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-brand-primary border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-dark/80 rounded-md border border-white/5">
                <Terminal size={12} className="text-[#00E5FF]" />
                <span className="font-mono text-[10px] text-gray-400 tracking-wide select-none">BTech_Blueprint.sh</span>
              </div>
              <div className="w-12" /> {/* alignment spacer */}
            </div>

            {/* Language Selection Tabs */}
            <div className="flex bg-brand-dark/50 border-b border-white/5 select-none text-xs font-semibold">
              <button
                onClick={() => setActiveCodeTab("c")}
                className={`px-4 py-2.5 flex items-center gap-1.5 border-r border-white/5 transition-all text-left font-mono ${
                  activeCodeTab === "c" 
                    ? "text-[#00E5FF] bg-brand-primary border-b-2 border-b-[#00E5FF]" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>C</span>
              </button>
              <button
                onClick={() => setActiveCodeTab("java")}
                className={`px-4 py-2.5 flex items-center gap-1.5 border-r border-white/5 transition-all text-left font-mono ${
                  activeCodeTab === "java" 
                    ? "text-brand-secondary bg-brand-primary border-b-2 border-b-brand-secondary" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Java</span>
              </button>
              <button
                onClick={() => setActiveCodeTab("python")}
                className={`px-4 py-2.5 flex items-center gap-1.5 transition-all text-left font-mono ${
                  activeCodeTab === "python" 
                    ? "text-emerald-400 bg-brand-primary border-b-2 border-b-emerald-400" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Python</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs overflow-x-auto min-h-[200px] h-[240px] bg-brand-dark/95 leading-relaxed relative flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeCodeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-pre text-gray-300"
                >
                  <code>{codeSnippets[activeCodeTab]}</code>
                </motion.pre>
              </AnimatePresence>

              {/* Status footer inside prompt */}
              <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Simulation</span>
                <span>CTRL + ENTER to execute</span>
              </div>
            </div>

            {/* Floating Premium Badge in the visual */}
            <div className="px-5 py-4 bg-brand-primary/40 border-t border-white/5 flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/coding/80/80"
                alt="BTech Coding Student"
                className="w-10 h-10 rounded-lg object-cover border border-white/10 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="text-white font-semibold text-xs">Unlock Practical Coding Habits</h4>
                <p className="text-[11px] text-gray-400 font-medium">Over 230+ students joined last season</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles, Terminal, Code, Cpu, Menu, X } from "lucide-react";

interface HeroProps {
  onCourseSelect?: (course: string) => void;
}

export default function Hero({ onCourseSelect }: HeroProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<"c" | "python">("c");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const codeSnippets = {
    c: `#include <stdio.h>

int main() {
    printf("🚀 Hello Future Engineers!\\n");
    printf("🔥 Learn programming with DV Krishna\\n");
    return 0;
}`,
    python: `def start_basic_python():
    skills = ["C", "Python"]
    print("🐍 Learn basic python variables & functions")

start_basic_python()`
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCodeTab((prev) => (prev === "c" ? "python" : "c"));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (courseName: string) => {
    onCourseSelect?.(courseName);
    setMobileMenuOpen(false);
    
    let targetId = "services";
    if (courseName.includes("Coding & Programming")) {
      targetId = "service-programming";
    } else if (courseName.includes("Engineering Mathematics")) {
      targetId = "service-maths";
    } else if (courseName.includes("B.Tech Core Subjects")) {
      targetId = "service-core";
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToRegistration();
    }
  };

  const handleJoinProgram = () => {
    onCourseSelect?.("Coding & Programming (C & Python)");
    scrollToRegistration();
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919704727292?text=Hi%20DV%20Krishna%20Sir%2C%20I%20have%20completed%20Intermediate%20and%20want%20to%20join%20the%20B.Tech%20solutions%20coding%20program.", "_blank", "noopener,noreferrer");
  };

  return (
    <header className="relative z-50 w-full flex flex-col items-center">
      {/* Alert Top Banner: Programming Batch Active */}
      <motion.div 
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 90, damping: 14 }}
        className="w-full bg-gradient-to-r from-teal-950 via-slate-900 to-[#121424] text-white py-3.5 px-4 sm:px-6 shadow-[0_4px_30px_rgba(0,229,255,0.12)] border-b border-[#00E5FF]/20 relative z-50 overflow-hidden font-sans"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            {/* Active Status Badge with premium motion pulse */}
            <motion.span 
              animate={{ 
                borderColor: ["rgba(0,229,255,0.2)", "rgba(0,229,255,0.6)", "rgba(0,229,255,0.2)"],
                boxShadow: [
                  "0 0 0px rgba(0,229,255,0)", 
                  "0 0 10px rgba(0,229,255,0.25)", 
                  "0 0 0px rgba(0,229,255,0)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-black/40 border px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#00E5FF] select-none shrink-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              OFFICIAL ANNOUNCEMENT
            </motion.span>

            <div className="space-y-0.5">
              <h4 className="text-sm sm:text-base font-black tracking-tight flex items-center justify-center sm:justify-start gap-1.5 uppercase text-white">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                Coding &amp; Programming Batch is Now Active!
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-300 font-medium">
                Bridge the gap before colleges begin. Real classroom instruction with DV Krishna. Limited seats available!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-xs font-bold text-teal-400 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20">
              🚀 Online &amp; Offline Admissions Open
            </span>
            <motion.button 
              onClick={scrollToRegistration}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,229,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00E5FF] to-cyan-500 text-brand-dark px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold hover:brightness-110 active:scale-95 transition-all uppercase tracking-wider cursor-pointer shadow-[0_8px_20px_rgba(0,184,212,0.15)] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] select-none whitespace-nowrap"
            >
              Get Started Now &rarr;
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Sticky-ish elegant header */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-brand-secondary/15 flex items-center justify-center bg-brand-primary">
              <img 
                src="https://i.ibb.co/9mdbvhzb/1.jpg"
                alt="Krishna B.Tech Solutions Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white">
                KRISHNA B.TECH
              </h1>
              <p className="font-mono text-[9px] text-[#00E5FF] tracking-widest uppercase">SOLUTIONS</p>
            </div>
          </motion.div>

          {/* Desktop Navigation Links in the Center */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-primary/40 border border-white/5 px-2.5 py-1.5 rounded-2xl select-none text-xs font-semibold">
            {/* Item 1: Before B.Tech */}
            <button
              onClick={() => handleNavClick("Coding & Programming (C & Python)")}
              className="flex flex-col text-left cursor-pointer group px-3 py-1.5 bg-brand-secondary/10 border border-brand-secondary/35 rounded-xl shadow-[0_0_15px_rgba(255,107,0,0.12)] transition-all"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[9px] text-brand-secondary tracking-wider font-extrabold uppercase leading-none">
                  Before B.Tech
                </span>
                <span className="inline-flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20 leading-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  RUNNING NOW
                </span>
              </div>
              <span className="text-white text-xs font-semibold group-hover:text-brand-secondary transition-colors">
                Programming Course, C & Python Batch
              </span>
              <span className="mt-1 w-fit text-[9px] bg-brand-secondary text-brand-dark px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Join Program &rarr;
              </span>
            </button>

            {/* Item 2: After Joining B.Tech */}
            <button
              onClick={() => handleNavClick("Engineering Mathematics (M1, M2, Probability, Discrete)")}
              className="flex flex-col text-left cursor-pointer group px-3 py-1.5 rounded-xl hover:bg-white/5 transition-all border-l border-white/5"
            >
              <span className="text-[9px] text-[#00E5FF] tracking-wider font-extrabold uppercase leading-none mb-1">
                After Joining B.Tech
              </span>
              <span className="text-white text-xs font-medium group-hover:text-[#00E5FF] transition-colors">
                Engineering Maths
              </span>
              <span className="mt-1 w-fit text-[9px] bg-[#00E5FF]/20 text-[#00E5FF] px-1.5 py-0.5 rounded-md opacity-80 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-wider">
                Join &rarr;
              </span>
            </button>

            {/* Item 3: B.Tech / Diploma */}
            <button
              onClick={() => handleNavClick("B.Tech Core Subjects (DSA, DBMS, OS, DLD)")}
              className="flex flex-col text-left cursor-pointer group group px-3 py-1.5 rounded-xl hover:bg-white/5 transition-all border-l border-white/5"
            >
              <span className="text-[9px] text-emerald-400 tracking-wider font-extrabold uppercase leading-none mb-1">
                B.Tech / Diploma
              </span>
              <span className="text-white text-xs font-medium group-hover:text-emerald-400 transition-colors">
                All Core Subjects
              </span>
              <span className="mt-1 w-fit text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-md opacity-80 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-wider">
                Join &rarr;
              </span>
            </button>
          </nav>

          {/* Right actions (Desktop: Quick CTA or Offline Badge) */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2 bg-brand-primary/60 border border-brand-accent-blue/10 rounded-full px-3 py-1.5 text-[11px] text-brand-accent-blue hover:border-brand-accent-blue/30 transition-all"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>Guntur Offline</span>
            </motion.div>
            <button
              onClick={handleJoinProgram}
              className="bg-brand-secondary hover:bg-orange-600 text-white font-display font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1 cursor-pointer transition-all shadow-md shadow-brand-secondary/10"
            >
              Join Program
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Mobile Navigator Hamburguer Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white bg-brand-primary/60 border border-white/5 rounded-xl cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 overflow-hidden bg-brand-primary/95 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl relative z-50 text-left"
            >
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest border-b border-white/5 pb-2">
                Course Tuitions & Core Tracks
              </div>
              <button
                onClick={() => handleNavClick("Coding & Programming (C & Python)")}
                className="w-full text-left py-3 px-3 bg-brand-secondary/10 border border-brand-secondary/35 rounded-xl flex flex-col gap-1.5 group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-brand-secondary font-extrabold uppercase tracking-wider">Before B.Tech</span>
                  <span className="inline-flex items-center gap-1 text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    RUNNING NOW
                  </span>
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold group-hover:text-brand-secondary transition-colors">Programming Course, C & Python Batch</span>
                <span className="mt-0.5 w-fit text-[9px] bg-brand-secondary text-brand-dark px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Join Program &rarr;</span>
              </button>
              <button
                onClick={() => handleNavClick("Engineering Mathematics (M1, M2, Probability, Discrete)")}
                className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/5 flex flex-col gap-1 group cursor-pointer border-t border-white/5 pt-2"
              >
                <span className="text-[10px] text-[#00E5FF] font-extrabold uppercase tracking-wider">After Joining B.Tech</span>
                <span className="text-white text-xs sm:text-sm font-semibold group-hover:text-[#00E5FF] transition-colors">Engineering Maths</span>
                <span className="mt-0.5 w-fit text-[9px] bg-[#00E5FF]/20 text-[#00E5FF] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Join &rarr;</span>
              </button>
              <button
                onClick={() => handleNavClick("B.Tech Core Subjects (DSA, DBMS, OS, DLD)")}
                className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/5 flex flex-col gap-1 group cursor-pointer border-t border-white/5 pt-2"
              >
                <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider">B.Tech / Diploma</span>
                <span className="text-white text-xs sm:text-sm font-semibold group-hover:text-emerald-400 transition-colors">All Core Subjects</span>
                <span className="mt-0.5 w-fit text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider">Join &rarr;</span>
              </button>
              <div className="border-t border-white/5 pt-2 flex justify-between items-center text-[10px] text-gray-400">
                <span>📍 Offline Pattabhipuram, Guntur</span>
                <button 
                  onClick={handleJoinProgram} 
                  className="font-bold text-brand-secondary uppercase tracking-wider"
                >
                  Join &rarr;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pricing & Duration Info Banner in between Navigation and Hero Block */}
      <div className="w-full max-w-7xl mx-auto px-4 -mt-2 mb-2 flex justify-start select-none">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 bg-brand-secondary/10 border border-brand-secondary/30 px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold text-brand-secondary shadow-[0_0_15px_rgba(255,107,0,0.06)]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-secondary"></span>
          </span>
          <span>Price for Programming is 3000/- and duration is 7 weeks</span>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left column: Text copy & CTAs */}
        <motion.div 
          className="lg:col-span-7 flex flex-col text-left space-y-4 md:space-y-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-1.5 bg-brand-secondary/10 border border-brand-secondary/35 text-brand-secondary text-[11px] font-semibold px-3 py-1 rounded-full w-fit">
            <Sparkles size={13} className="animate-pulse" />
            Designed Specially for Intermediate Completed Students
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight tracking-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-yellow-400 to-[#00E5FF]">B.Tech Journey</span> Ahead of Others
          </h2>

          <p className="font-sans text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            Learn <span className="text-white font-semibold underline decoration-brand-secondary decoration-2 decoration-solid">C, Python, & AI Tools</span> before college begins. Build solid confidence, develop college coding habits, and top your university scores.
          </p>

          {/* Key Value Pillows */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-1 bg-white/[0.02] border border-white/5 rounded-xl max-w-lg">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-300 px-2 py-0.5">
              <ShieldCheck className="text-[#00E5FF] shrink-0" size={15} />
              <span>Guntur Offline</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-300 px-2 py-0.5">
              <Code className="text-brand-secondary shrink-0" size={15} />
              <span>Maths, Core & Coding</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-gray-300 px-2 py-0.5 col-span-2 md:col-span-1">
              <Cpu className="text-emerald-400 shrink-0" size={15} />
              <span>Practical Labs</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <motion.button
              id="cta-join-now"
              onClick={handleJoinProgram}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 18px -4px rgba(255, 122, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-brand-secondary to-amber-500 hover:to-orange-600 text-white font-display font-bold px-5 py-3 rounded-xl text-sm shadow-md shadow-brand-secondary/15 cursor-pointer flex items-center justify-center gap-2 group transition-all"
            >
              <span>Join Program Now</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              id="cta-whatsapp"
              onClick={openWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-primary/60 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-brand-primary/80 text-white font-display font-semibold px-5 py-3 rounded-xl text-sm cursor-pointer flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="text-emerald-400 stroke-[2.5px]" size={16} />
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
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF]/20 to-brand-secondary/20 rounded-2xl blur-3xl opacity-20 select-none pointer-events-none" />

          <div className="w-full glass border border-white/10 rounded-2xl shadow-xl overflow-hidden text-left flex flex-col">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-brand-primary border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-0.5 bg-brand-dark/80 rounded-md border border-white/5">
                <Terminal size={11} className="text-[#00E5FF]" />
                <span className="font-mono text-[9px] text-gray-400 tracking-wide select-none">BTech_Blueprint.sh</span>
              </div>
              <div className="w-8" /> {/* alignment spacer */}
            </div>

            {/* Language Selection Tabs */}
            <div className="flex bg-brand-dark/50 border-b border-white/5 select-none text-[11px] font-semibold">
              <button
                onClick={() => setActiveCodeTab("c")}
                className={`px-3 py-2 flex items-center gap-1 border-r border-white/5 transition-all text-left font-mono ${
                  activeCodeTab === "c" 
                    ? "text-[#00E5FF] bg-brand-primary border-b-2 border-b-[#00E5FF]" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>C</span>
              </button>
              <button
                onClick={() => setActiveCodeTab("python")}
                className={`px-3 py-2 flex items-center gap-1 transition-all text-left font-mono ${
                  activeCodeTab === "python" 
                    ? "text-emerald-400 bg-brand-primary border-b-2 border-b-emerald-400" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Python</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 font-mono text-[11px] overflow-x-auto min-h-[140px] h-[160px] bg-brand-dark/95 leading-relaxed relative flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeCodeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="whitespace-pre text-gray-300"
                >
                  <code>{codeSnippets[activeCodeTab]}</code>
                </motion.pre>
              </AnimatePresence>

              {/* Status footer inside prompt */}
              <div className="mt-auto pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live Simulation</span>
                <span>CTRL + ENTER to execute</span>
              </div>
            </div>

            {/* Floating Premium Badge in the visual */}
            <div className="px-4 py-2.5 bg-brand-primary/40 border-t border-white/5 flex items-center gap-2.5">
              <img
                src="https://picsum.photos/seed/coding/80/80"
                alt="BTech Coding Student"
                className="w-8 h-8 rounded-lg object-cover border border-white/10 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="text-white font-semibold text-[11px] leading-none">Unlock Practical Coding Habits</h4>
                <p className="text-[10px] text-gray-400 font-medium">Over 230+ students joined last season</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

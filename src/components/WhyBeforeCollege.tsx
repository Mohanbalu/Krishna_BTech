/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, Shield, Bookmark, Cpu } from "lucide-react";

export default function WhyBeforeCollege() {
  const points = [
    {
      title: "Learn Before Your Classmates",
      description: "Get a proven headstart on complex programming concepts before stepping foot on your college campus. Be the student everyone looks up to.",
      icon: Zap,
      gradient: "from-[#00E5FF] to-cyan-500",
    },
    {
      title: "Build Coding Confidence",
      description: "Overcome the initial fear of coding. Master logic building and computer science concepts in an atmosphere designed specifically for beginners.",
      icon: Shield,
      gradient: "from-brand-secondary to-amber-500",
    },
    {
      title: "Strong Foundation For Engineering",
      description: "Your university exams, university labs, and future placement tests rely heavily on basic C & OOP foundations. Secure high CGPAs from Day 1.",
      icon: Cpu,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Practical Learning Approach",
      description: "No blank textbook definitions. At Krishna B.Tech Solutions, practice writing real projects with extensive line-by-line debugging on laptops.",
      icon: Bookmark,
      gradient: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#00E5FF] text-xs font-mono font-bold tracking-widest uppercase bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20"
        >
          Competitive Advantage
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Why Start <span className="text-brand-secondary font-bold">Before</span> College?
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Waiting for college to start wastes prime vacation time. Use this window to develop critical engineering logic ahead of time.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {points.map((point, index) => {
          const IconComponent = point.icon;
          return (
            <motion.div
              key={index}
              className="glass relative group overflow-hidden rounded-2xl p-5 sm:p-6 flex items-center gap-5 text-left hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Corner lights effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] group-hover:bg-brand-secondary/5 rounded-full blur-2xl transition-all" />

              {/* Icon container */}
              <div className={`p-4 rounded-xl shrink-0 bg-gradient-to-tr ${point.gradient} text-white shadow-md shadow-black/20`}>
                <IconComponent size={22} />
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-brand-secondary transition-colors leading-snug">
                  {point.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

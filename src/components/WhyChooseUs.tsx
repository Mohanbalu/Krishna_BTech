/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ListChecks, Flame, ShieldAlert, GraduationCap, MapPin, Compass } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Structured Learning",
      description: "Our syllabus takes you step-by-step from variables up to loops, arrays, and object fundamentals. No skipped steps, no sudden logic spikes.",
      icon: ListChecks,
      color: "from-blue-500/20 to-cyan-500/10",
      accent: "text-blue-400 group-hover:text-blue-300"
    },
    {
      title: "Beginner Friendly",
      description: "Crafted specifically for students coming from school with completely zero background. We assume you don't even know what a compiler is.",
      icon: Flame,
      color: "from-brand-secondary/20 to-amber-500/10",
      accent: "text-brand-secondary group-hover:text-orange-300"
    },
    {
      title: "Practical Labs",
      description: "We don't teach programming on blackboards. Every session is integrated with practical laptop classes, live error debugging, and problem analysis.",
      icon: ShieldAlert,
      color: "from-[#00E5FF]/20 to-cyan-500/10",
      accent: "text-[#00E5FF] group-hover:text-cyan-300"
    },
    {
      title: "Career Guidance",
      description: "Confused about CSE vs ECE vs AI/ML? We provide dedicated stream consulting to explain syllabus distributions, university systems, and future placement trends.",
      icon: Compass,
      color: "from-indigo-500/20 to-purple-500/10",
      accent: "text-indigo-400 group-hover:text-indigo-300"
    },
    {
      title: "Engineering Preparation Focus",
      description: "Enter your first-year labs with absolute confidence. Be prepared to crack internal university assignments and practical mid-term assessments with ease.",
      icon: GraduationCap,
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400 group-hover:text-emerald-300"
    }
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-white/5">
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#00E5FF] text-xs font-mono font-bold tracking-widest uppercase bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20"
        >
          Unique Value Propositions
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Why Students <span className="text-brand-secondary font-bold">Choose Us</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are not a boring textbook theoretical tuition center. We are designed from the ground up as a premier computer labs coding bootcamp.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, index) => {
          const IconComp = feat.icon;
          return (
            <motion.div
              key={index}
              className={`glass group relative rounded-2xl p-6 sm:p-8 border border-white/5 overflow-hidden text-left flex flex-col justify-between transition-all duration-300 ${
                index === 3 || index === 4 ? "md:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, border: "1px solid rgba(255, 255, 255, 0.15)" }}
            >
              {/* Soft colorful background glowing mesh in the corner */}
              <div className={`absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-tr ${feat.color} rounded-full blur-2xl group-hover:scale-125 transition-transform`} />

              <div className="space-y-4 relative z-10">
                <div className={`p-3 bg-white/5 rounded-xl w-fit ${feat.accent} transition-colors`}>
                  <IconComp size={22} />
                </div>
                
                <h3 className="font-display font-bold text-white text-lg">
                  {feat.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Decorative mini tab corner lines */}
              <div className="relative bottom-0 left-0 w-8 h-[2px] bg-brand-secondary/30 group-hover:bg-brand-secondary mt-6 transition-colors" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

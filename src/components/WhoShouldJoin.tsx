/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Hourglass, HelpCircle, HardHat } from "lucide-react";

export default function WhoShouldJoin() {
  const personas = [
    {
      title: "Intermediate Completed",
      desc: "Fresh MPC, MEC, or other group graduates who just finished college exams and want to productively bridge the massive gap before engineering classes begin.",
      icon: GraduationCap,
      color: "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/20"
    },
    {
      title: "Waiting To Join B.Tech",
      desc: "Students waiting for counseling results, seat allotments, or engineering college reopenings who want to bypass the typical academic shock of difficult coding semesters.",
      icon: Hourglass,
      color: "text-brand-secondary bg-brand-secondary/10 border-brand-secondary/20"
    },
    {
      title: "Complete Beginners",
      desc: "Absolutely zero prior computer science exposure? No worries! Our training is crafted starting from standard basic English terms. No prior coding is required.",
      icon: HelpCircle,
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-500/20"
    },
    {
      title: "Future Engineers",
      desc: "Whether joining CSE, IT, AI-ML, ECE, EEE, Civil, or Mechanical — coding is a standard mandatory subject in Semester 1. Be ahead of your peer group.",
      icon: HardHat,
      color: "text-indigo-400 bg-indigo-400/10 border-indigo-500/20"
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
          Target Audience
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Who Is This <span className="text-brand-secondary font-bold">Program</span> For?
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          This is specifically customized for school graduates waiting for college admissions. No experience is expected.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {personas.map((persona, index) => {
          const IconComponent = persona.icon;
          return (
            <motion.div
              key={index}
              className="glass border border-white/5 rounded-2xl p-6 text-left hover:border-white/10 transition-colors flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className={`p-3 rounded-lg border w-fit ${persona.color}`}>
                  <IconComponent size={20} />
                </div>
                
                <h3 className="font-display font-bold text-white text-lg">
                  {persona.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {persona.desc}
                </p>
              </div>

              {/* Decorative detail line */}
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent mt-6" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

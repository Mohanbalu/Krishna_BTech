/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, Coffee, Binary, Server, Check } from "lucide-react";

export default function WhatYouWillLearn() {
  const courses = [
    {
      title: "C Programming",
      tech: "THE MOTHER OF LANGUAGES",
      description: "Learn programming fundamentals, problem solving, loops, functions, arrays, and structured thinking which are universal to all engineering paths.",
      badge: "Highly Essential",
      icon: Code,
      accentColor: "border-[#00E5FF]/20 text-[#00E5FF] hover:-translate-y-2",
      iconBg: "bg-[#00E5FF]/10 text-[#00E5FF]",
      bullets: [
        "Variables & Primitive Data types",
        "Control Flow structures (If-Else, Switch)",
        "Loops breakdown (For, While, Do-While)",
        "Function parameters & memory structures",
        "Arrays, Strings & basic Logical dry-runs"
      ]
    },
    {
      title: "Java Object-Oriented",
      tech: "ENTERPRISE BACKBONE",
      description: "Learn robust Object-Oriented Programming (OOP) architectures, object instantiation, classes, and modular application development fundamentals.",
      badge: "Placement Star",
      icon: Coffee,
      accentColor: "border-brand-secondary/20 text-brand-secondary hover:-translate-y-2",
      iconBg: "bg-brand-secondary/10 text-brand-secondary",
      bullets: [
        "Classes, Objects & Object References",
        "The Four Pillars of OOP (Inheritance, Polymorphism)",
        "Encapsulation and Data Hiding methods",
        "Interfaces and Abstract design contracts",
        "Practical exception handlers & file scopes"
      ]
    },
    {
      title: "Python Programming",
      tech: "AI & NEXT-GEN SOFTWARE",
      description: "Learn one of the world's most popular programming languages today, extensively utilized in AI development, automation scripting, and scientific engineering.",
      badge: "Easiest to Learn",
      icon: Server,
      accentColor: "border-emerald-500/20 text-emerald-400 hover:-translate-y-2",
      iconBg: "bg-emerald-500/10 text-emerald-400",
      bullets: [
        "Clean, human-readable Pythonic syntax",
        "Data structures (Lists, Tuples, Dictionaries)",
        "Core functions, modules & pip packages",
        "Automating basic PC workflows & spreadsheets",
        "Intro to Data analysis & AI libraries (NumPy, Pandas)"
      ]
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
          className="inline-block text-brand-secondary text-xs font-mono font-bold tracking-widest uppercase bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/20"
        >
          Curriculum Overview
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What You Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-brand-secondary font-bold">Learn</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gain direct confidence in academic grading and campus placement prep by coding standard problems in Guntur's finest modern training environment.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => {
          const IconComponent = course.icon;
          return (
            <motion.div
              key={index}
              className={`glass flex flex-col justify-between rounded-3xl p-6 sm:p-8 border hover:shadow-2xl hover:shadow-indigo-950/10 transition-all duration-300 ${course.accentColor}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="space-y-6">
                {/* Header line & badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-400 tracking-wider font-semibold">
                    {course.tech}
                  </span>
                  <span className="bg-white/5 border border-white/10 text-white font-sans text-[11px] px-2.5 py-1 rounded-full font-medium">
                    {course.badge}
                  </span>
                </div>

                {/* Cover representation */}
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl ${course.iconBg}`}>
                    <IconComponent size={28} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    {course.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-left">
                  {course.description}
                </p>

                {/* Mini Syllabus checklist */}
                <div className="pt-4 border-t border-white/5 text-left space-y-2.5">
                  <p className="font-display text-gray-300 font-semibold text-xs tracking-wider uppercase select-none">
                    Core Concepts Covered:
                  </p>
                  <ul className="space-y-2">
                    {course.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action indicator inside visual card */}
              <div className="pt-8 text-left">
                <div className="text-[11px] font-mono text-gray-500 font-medium">
                  • 15 Dedicated sessions each
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

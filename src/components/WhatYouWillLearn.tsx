/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, Calculator, Cpu, Check, ArrowRight } from "lucide-react";

interface WhatYouWillLearnProps {
  onCourseSelect?: (courseName: string) => void;
}

export default function WhatYouWillLearn({ onCourseSelect }: WhatYouWillLearnProps) {
  const courses = [
    {
      id: "service-maths",
      registrationValue: "Engineering Mathematics (M1, M2, Probability, Discrete)",
      title: "Engineering Maths",
      tech: "UNIVERSITY ROADBLOCK DEMYSTIFIED",
      description: "Tackle tough engineering mathematics with clear step-by-step logic. Master the formula structures and theorems needed to score the highest GPAs.",
      badge: "Syllabus Buster",
      icon: Calculator,
      accentColor: "border-[#00E5FF]/20 text-[#00E5FF] hover:-translate-y-2",
      iconBg: "bg-[#00E5FF]/10 text-[#00E5FF]",
      ctaText: "Join Maths Course",
      bullets: [
        "Engineering Mathematics 1 (Calculus & Multi-variable)",
        "Engineering Mathematics 2 (Laplace, ODE & Differential)",
        "Probability & Statistics (P&S: Distributions & Sampling)",
        "Discrete Mathematical Structures (DM: Logic & Graphs)",
        "Numerical Methods & Linear Algebra simplifications"
      ]
    },
    {
      id: "service-core",
      registrationValue: "B.Tech Core Subjects (DSA, DBMS, OS, DLD)",
      title: "B.Tech Core Subjects",
      tech: "COMPUTER SCIENCE & CORE ACADEMICS",
      description: "Conquer complex technical university theory and lab papers with expert conceptual breakdowns and blueprint-focused guidance.",
      badge: "GPA Booster",
      icon: Cpu,
      accentColor: "border-brand-secondary/20 text-brand-secondary hover:-translate-y-2",
      iconBg: "bg-brand-secondary/10 text-brand-secondary",
      ctaText: "Join Core Subjects",
      bullets: [
        "Data Structures & Algorithms (DS & DSA basics)",
        "Database Management Systems (DBMS & SQL queries)",
        "Operating Systems (OS) & Process management logic",
        "Digital Electronics & Logic Design (DLD grids)",
        "Computer Networks (CN) & Software Engineering templates"
      ]
    },
    {
      id: "service-programming",
      registrationValue: "Coding & Programming (C, Java, Python)",
      title: "Coding & Programming",
      tech: "PRACTICAL LABS & LOGIC",
      description: "Go from absolute zero logic to compiling enterprise code. Gain immense confidence by programming live templates on real desktop machines.",
      badge: "Placement Ready",
      icon: Code,
      accentColor: "border-emerald-500/20 text-emerald-400 hover:-translate-y-2",
      iconBg: "bg-emerald-500/10 text-emerald-400",
      ctaText: "Join Programming Batch",
      bullets: [
        "C Programming (Problem-Solving & Core Fundamentals)",
        "Java OOPs (Classes, Inheritance & Polymorphism)",
        "Python (Automation, Libraries & clean syntax)",
        "Interactive error debugging on local terminals",
        "Dry-run practices for lab exams & future assessments"
      ]
    }
  ];

  const handleEnrollClick = (regVal: string) => {
    onCourseSelect?.(regVal);
    const registerEl = document.getElementById("register");
    if (registerEl) {
      registerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24 border-t border-white/5">
      <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-brand-secondary text-xs font-mono font-bold tracking-widest uppercase bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/20"
        >
          Curriculum & Services
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-brand-secondary font-bold">Services</span> & Tracks
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
              id={course.id}
              className={`glass flex flex-col justify-between rounded-3xl p-6 sm:p-8 border hover:shadow-2xl hover:shadow-indigo-950/10 transition-all duration-300 scroll-mt-24 ${course.accentColor}`}
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
              <div className="pt-8 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 mt-6">
                <div className="text-[11px] font-mono text-gray-500 font-medium select-none">
                  • 15 Dedicated sessions each
                </div>
                <button
                  onClick={() => handleEnrollClick(course.registrationValue)}
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 hover:border-white/20 text-white font-sans text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{course.ctaText}</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


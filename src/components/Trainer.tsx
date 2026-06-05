/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Trainer() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 md:py-14 border-t border-white/5 overflow-hidden">
      {/* Background glow specific to trainer */}
      <div className="absolute top-1/2 -left-1/4 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/5 blur-[80px] pointer-events-none select-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Professional image showcase frame */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Neon Borders Decoration */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-brand-secondary to-[#00E5FF] rounded-3xl blur opacity-25" />
          
          <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-brand-primary">
            <img
              src="https://i.ibb.co/Nd8Y5MQv/629335459-17861235021598369-4009158402246611811-n.jpg"
              alt="DV Krishna M.Tech - Director & Chief Mentor"
              className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
            
            {/* Absolute badge */}
            <div className="absolute bottom-4 left-4 right-4 glass px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2">
              <Star className="text-brand-secondary fill-brand-secondary shrink-0" size={16} />
              <div className="text-left">
                <p className="text-white font-display font-bold text-xs">DV Krishna, M.Tech</p>
                <p className="text-[10px] text-gray-300">Director & Chief Mentor</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Qualifications and description */}
        <motion.div 
          className="lg:col-span-7 text-left space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-2">
            <div className="inline-block text-brand-secondary text-xs font-mono font-bold tracking-widest uppercase bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/20">
              Expert Mentorship
            </div>
            
            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Meet Our <span className="text-[#00E5FF] font-bold">Director & Mentor</span>
            </h2>
          </div>

          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
            Hi, I am <strong className="text-white font-semibold">DV Krishna (M.Tech Computer Science)</strong>. For over a decade, I have served as the Director and Chief Mentor for engineering aspirants in Pattabhipuram, Guntur, simplifying software logic and mentoring tomorrow's top-performing university grads.
          </p>

          <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed">
            I believe that B.Tech is not about rote learning definitions but writing code that works. My classes focus strictly on step-by-step dry runs and structured lab sessions, solving the real-world foundational syllabus of university frameworks.
          </p>

          {/* Inspirational tagline */}
          <div className="p-4 rounded-xl bg-brand-primary/40 border-l-4 border-l-brand-secondary text-left text-xs sm:text-sm text-gray-300 italic">
            "Entering B.Tech without knowing a basic program is like walking onto a battlefield without a shield. Let me help you build that shield before class begins!"
          </div>
        </motion.div>
      </div>
    </section>
  );
}

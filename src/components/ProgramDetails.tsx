/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar, MonitorPlay, MapPin, ClipboardList, Clock } from "lucide-react";

export default function ProgramDetails() {
  const details = [
    {
      title: "Course Duration",
      value: "45 Days Program",
      subtitle: "Comprehensive, structured syllabus coverage",
      icon: Calendar,
      color: "border-brand-secondary/30 text-brand-secondary",
      iconBg: "bg-brand-secondary/10"
    },
    {
      title: "Interactive Mode",
      value: "100% Offline Laboratory",
      subtitle: "In-person programming feedback on desktops",
      icon: MonitorPlay,
      color: "border-[#00E5FF]/30 text-[#00E5FF]",
      iconBg: "bg-[#00E5FF]/10"
    },
    {
      title: "Strategic Location",
      value: "Pattabhipuram Main Rd, Guntur",
      subtitle: "Prime educational hub, easily accessible",
      icon: MapPin,
      color: "border-emerald-500/30 text-emerald-400",
      iconBg: "bg-emerald-500/10"
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
          Program Parameters
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-yellow-400 to-[#00E5FF] font-bold">Details</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check out the critical specifications of our foundation syllabus. Batches are organized for personalized attention.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {details.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className={`glass flex flex-col justify-between items-start text-left p-6 sm:p-8 rounded-2xl border ${item.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-4 w-full">
                <div className={`p-3.5 rounded-xl ${item.iconBg} w-fit`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className="font-sans text-xs uppercase tracking-wider text-gray-400 font-bold">
                  {item.title}
                </h3>
                
                <p className="font-display font-black text-white text-lg sm:text-xl">
                  {item.value}
                </p>
                
                <p className="text-gray-400 text-xs sm:text-sm">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bonus Banner details about batches and timers */}
      <motion.div 
        className="glass border border-[#00E5FF]/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 text-left">
          <div className="p-3 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="text-white font-display font-bold text-sm sm:text-base">Limited Batch Allocation (Max 25 Seats)</h4>
            <p className="text-xs text-gray-400">We keep intake low to guarantee individual coding machine tracking.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-brand-primary border border-white/5 rounded-xl text-center">
            <span className="block font-mono text-xs text-[#00E5FF] font-black uppercase">Schedule</span>
            <span className="text-xs text-white">Daily Batches</span>
          </div>
          <div className="px-4 py-2 bg-brand-primary border border-white/5 rounded-xl text-center">
            <span className="block font-mono text-xs text-brand-secondary font-black uppercase">Admissions</span>
            <span className="text-xs text-white">On First-Come Bus</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

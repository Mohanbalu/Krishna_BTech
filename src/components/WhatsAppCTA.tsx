/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquare, Phone, BadgeCheck, Zap } from "lucide-react";

export default function WhatsAppCTA() {
  const handleWhatsAppOpen = () => {
    window.open("https://wa.me/919704727292?text=Hi%20DV%20Krishna%20Sir%2C%20I%20have%20completed%20Intermediate%20and%20want%20to%20know%20more%20about%20your%20B.Tech%20tuitions%20program.", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 md:py-14 border-t border-white/5">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950/40 via-brand-primary/40 to-brand-dark border border-emerald-500/20 p-8 sm:p-12 md:p-16 text-center space-y-8">
        
        {/* Soft glowing backgrounds inside banner */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none select-none" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-[80px] pointer-events-none select-none" />

        <motion.div 
          className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/5"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <MessageSquare className="stroke-[2.5px]" size={28} />
        </motion.div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <motion.h2 
            className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready To Start Your <span className="text-emerald-400 font-extrabold">Engineering Journey?</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about timings, syllabus structures, or offline fee structures? Chat directly with Director DV Krishna Sir and clear all your doubts in seconds.
          </motion.p>
        </div>

        {/* Benefits bullets inline inside the block */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-2 text-xs sm:text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-emerald-400 shrink-0" /> Instant Callback</span>
          <span className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-emerald-400 shrink-0" /> Batch Timing Adjustments</span>
          <span className="flex items-center gap-1.5"><BadgeCheck size={16} className="text-emerald-400 shrink-0" /> Free Guidance Materials Included</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 pt-4"
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.button
            id="whatsapp-cta-direct"
            onClick={handleWhatsAppOpen}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px rgba(16, 185, 129, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-emerald-500 hover:bg-emerald-600 font-display font-extrabold text-white text-base px-10 py-5 rounded-2xl cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-3 transition-colors shrink-0 group"
          >
            <MessageSquare className="stroke-[2.5px] group-hover:rotate-12 transition-transform" size={20} />
            <span>Chat On WhatsApp Now</span>
          </motion.button>
          
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Phone size={12} />
            <span>Phone Inquiry Hotline: <strong className="text-gray-300 font-bold font-sans">9704727292</strong></span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

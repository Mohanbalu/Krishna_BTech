/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare } from "lucide-react";

interface Review {
  id: number;
  name: string;
  avatarUrl?: string;
  avatarBg?: string; // For initials fallback
  initial?: string;
  content: string;
  shortContent: string;
  timeAndDate: string;
}

export default function Reviews() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Waqas",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      content: "Krishna Engineering Tuitions offers exceptional coaching at reasonable prices, making it a top choice for aspiring engineers. The experienced faculty ensures comprehensive understanding, turning complex concepts into easily digestible lessons. Strongly recommended for anyone aiming high in university exams!",
      shortContent: "Krishna Engineering Tuitions offers exceptional coaching at reasonable prices, making it a top choice for aspiring engineers. The experienced fac",
      timeAndDate: "03:58 PM • 20 Dec, 2025"
    },
    {
      id: 2,
      name: "Abhinaya Raju",
      avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
      content: "I had a fantastic experience at Krishna Engineering Academy! The courses are highly specialized, covering all the important topics in depth. The personal interaction with DV Krishna sir cleared all my programming blockages and helped me gain strong logical confidence.",
      shortContent: "I had a fantastic experience at Krishna Engineering Academy! The courses are highly specialized, covering all the important topics in depth.",
      timeAndDate: "10:47 PM • 04 Nov, 2025"
    },
    {
      id: 3,
      name: "Md Ameenuddin",
      initial: "M",
      avatarBg: "bg-indigo-600",
      content: "The teachers are highly specialised and know their subjects very well. They help students understand difficult topics easily.",
      shortContent: "The teachers are highly specialised and know their subjects very well. They help students understand difficult topics easily.",
      timeAndDate: "06:52 AM • 25 Oct, 2025"
    },
    {
      id: 4,
      name: "goutham",
      avatarUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&auto=format&fit=crop&q=80",
      content: "Krishna Engineering Academy is excellent! The prices are reasonable, making it easy to join. The regular evaluations help me track my progress. The hands-on coding labs and test series were crucial to building my logical foundation from scratch.",
      shortContent: "Krishna Engineering Academy is excellent! The prices are reasonable, making it easy to join. The regular evaluations help me track my progress. T",
      timeAndDate: "06:48 AM • 08 Oct, 2025"
    }
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-12 border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none select-none" />

      <div className="text-center space-y-4 max-w-2xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[#00E5FF] text-xs font-mono font-bold tracking-widest uppercase bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20"
        >
          Student Feedback
        </motion.div>
        
        <motion.h2
          className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-yellow-400 to-[#00E5FF] font-bold">Happy Customers</span>
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real feedback from our pre-university students, university grads, and parents about their learning experience with us.
        </motion.p>
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {reviews.map((review, index) => {
          const isExpanded = expandedId === review.id;
          const hasMore = review.content !== review.shortContent;

          return (
            <motion.div
              key={review.id}
              layout="position"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden group hover:border-[#00E5FF]/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="space-y-4">
                {/* User Info Header */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-[#00E5FF] group-hover:text-white transition-colors duration-200">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <MessageSquare className="text-white/10 group-hover:text-[#00E5FF]/20 transition-colors duration-300" size={24} />
                </div>

                {/* Review Text */}
                <p className="font-sans text-gray-300 text-sm sm:text-[14.5px] leading-relaxed">
                  {isExpanded ? review.content : review.shortContent}
                  {hasMore && !isExpanded && (
                    <button
                      onClick={() => setExpandedId(review.id)}
                      className="text-[#00E5FF] hover:text-[#00E5FF]/80 hover:underline font-bold ml-1 inline-flex items-center gap-0.5 cursor-pointer focus:outline-none"
                    >
                      ...More
                    </button>
                  )}
                  {hasMore && isExpanded && (
                    <button
                      onClick={() => setExpandedId(null)}
                      className="text-brand-secondary hover:text-brand-secondary/80 hover:underline font-bold ml-1.5 inline-flex items-center gap-0.5 cursor-pointer focus:outline-none"
                    >
                      Show Less
                    </button>
                  )}
                </p>
              </div>

              {/* Timestamp & Date footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-gray-500 text-[11px] sm:text-xs">
                <span>Verified student feedback</span>
                <span className="font-mono">{review.timeAndDate}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

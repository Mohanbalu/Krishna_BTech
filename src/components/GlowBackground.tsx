/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-brand-dark">
      {/* Upper left blue glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-accent-blue/10 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mid right orange glow */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[150px]"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Bottom left subtle blue glow */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-accent-blue/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* High-tech faint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 80%), 
                            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        }}
      />
    </div>
  );
}

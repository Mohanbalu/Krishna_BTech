/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Phone, Code, Mail, Instagram, Globe, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full bg-brand-dark/90 border-t border-white/5 pt-16 pb-8 text-left text-xs sm:text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-brand-secondary/15 flex items-center justify-center bg-brand-primary">
              <img 
                src="https://i.ibb.co/9mdbvhzb/1.jpg"
                alt="Krishna B.Tech Solutions Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white">
                KRISHNA B.TECH
              </h4>
              <p className="font-mono text-[9px] text-[#00E5FF] tracking-widest uppercase">SOLUTIONS</p>
            </div>
          </div>
          <p className="font-sans leading-relaxed text-gray-500 max-w-sm">
            We provide tuitions for students before joining B.Tech and support their on-boarding with coding foundations, core logic, and college preparations.
          </p>
        </div>

        {/* Contact/Location Column */}
        <div className="space-y-4 text-left">
          <h5 className="font-display text-white font-bold text-xs uppercase tracking-wider text-[#00E5FF]">
            Location &amp; Contact
          </h5>
          <ul className="space-y-3 font-medium text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="text-[#00E5FF] shrink-0 mt-0.5" size={14} />
              <span>Pattabhipuram Main Road, Guntur</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-brand-secondary shrink-0" size={14} />
              <a href="tel:9704727292" className="hover:text-white transition-colors">
                9704727292
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-emerald-400 shrink-0" size={14} />
              <span className="text-gray-400 select-all">krishnatutition.coachings@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Official Directory & Social Column */}
        <div className="space-y-4 text-left">
          <h5 className="font-display text-white font-bold text-xs uppercase tracking-wider text-brand-secondary">
            Follow Us &amp; Reviews
          </h5>
          <ul className="space-y-3 font-medium text-xs">
            <li className="flex items-center gap-2.5">
              <Instagram className="text-amber-500 shrink-0" size={14} />
              <a 
                href="https://www.instagram.com/krishnabtechtuitions?utm_source=qr&igsh=aWtiOGN5MGp5ajJ5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 group"
              >
                Instagram Profile
                <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="text-emerald-400 shrink-0" size={14} />
              <a 
                href="https://share.google/oYW7gyOef6G1DKiBN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 group"
              >
                Google Location &amp; Reviews
                <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="text-[#00E5FF] shrink-0" size={14} />
              <a 
                href="https://jsdl.in/DT-99EVEUDNTNA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 group"
              >
                Justdial Profile
                <ExternalLink size={10} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-medium">
        <p>© {currentYear} KRISHNA B.TECH SOLUTIONS. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-mono">
          <Code size={12} className="text-brand-secondary" /> <span>Hands-on coding, Guntur</span>
        </p>
      </div>
    </footer>
  );
}

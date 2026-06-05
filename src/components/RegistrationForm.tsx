/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Ticket, Users, AlertCircle } from "lucide-react";
import { Registration } from "../types";

export default function RegistrationForm({ selectedCourse }: { selectedCourse?: string }) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [intermediateGroup, setIntermediateGroup] = useState("MPC");
  const [expectedBranch, setExpectedBranch] = useState("CSE (Computer Science)");
  const [interestedTuition, setInterestedTuition] = useState("Coding & Programming (C, Java, Python)");
  const [activeRecentIdx, setActiveRecentIdx] = useState(0);

  const recentStudents = [
    { name: "K. Rohit Reddy", group: "MPC", choice: "Coding & Programming", branch: "CSE (AIML) Stream", time: "15 mins ago" },
    { name: "A. Sneha Latha", group: "MPC", choice: "Engineering Mathematics", branch: "CSE Core", time: "1 hour ago" },
    { name: "Y. Jaswanth Sai", group: "MPC", choice: "Coding & Programming", branch: "Information Technology", time: "3 hours ago" },
    { name: "Ch. Lakshmi Pranathi", group: "MPC", choice: "B.Tech Core Subjects", branch: "ECE Stream", time: "5 hours ago" },
    { name: "M. Abdul Rahim", group: "MPC", choice: "Coding & Programming", branch: "CS & Systems", time: "Yesterday" }
  ];
  
  useEffect(() => {
    if (selectedCourse) {
      setInterestedTuition(selectedCourse);
    }
  }, [selectedCourse]);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(7);

  // Load previous submissions to simulate interactive dashboard / state
  const [submittedData, setSubmittedData] = useState<Registration | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("kbts_registration");
    if (saved) {
      setSubmittedData(JSON.parse(saved));
      setSeatsLeft(6); // decrease seat count locally if registered
    }
  }, []);

  useEffect(() => {
    const rTimer = setInterval(() => {
      setActiveRecentIdx((prev) => (prev + 1) % recentStudents.length);
    }, 4500);
    return () => clearInterval(rTimer);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || fullName.trim().length < 3) {
      setError("Please enter your full authentic name (min 3 chars).");
      return;
    }

    if (!mobileNumber.trim() || mobileNumber.trim().length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    // Simulate database write time
    setTimeout(() => {
      const newReg: Registration = {
        id: "REG_" + Math.random().toString(36).substring(2, 9).toUpperCase(),
        fullName,
        mobileNumber,
        intermediateGroup,
        expectedBranch,
        interestedTuition,
        timestamp: new Date().toLocaleString()
      };

      // Store in LocalStorage
      localStorage.setItem("kbts_registration", JSON.stringify(newReg));
      setSubmittedData(newReg);
      setIsSubmitted(true);
      setLoading(false);
      setSeatsLeft(5);

      // Instantly redirect to Krishna's number on WhatsApp carrying these details
      const msg = `Hi DV Krishna Sir! I just registered on your website under the name *${newReg.fullName}* (Phone: ${newReg.mobileNumber}). I completed Intermediate with *${newReg.intermediateGroup}* and my expected branch is *${newReg.expectedBranch}*. I am highly interested in joining your *${newReg.interestedTuition}* tuition category starting classes! Please block my offline seat.`;
      const waUrl = `https://wa.me/919704727292?text=${encodeURIComponent(msg)}`;
      
      try {
        const opened = window.open(waUrl, "_blank", "noopener,noreferrer");
        if (!opened || opened.closed || typeof opened.closed === "undefined") {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }
    }, 1200);
  };

  const clearSubmission = () => {
    localStorage.removeItem("kbts_registration");
    setSubmittedData(null);
    setIsSubmitted(false);
    setSeatsLeft(7);
    setFullName("");
    setMobileNumber("");
  };

  const openWhatsAppDirect = () => {
    const msg = `Hi DV Krishna Sir! I just registered on your website under the name *${submittedData?.fullName}*. I completed Intermediate with *${submittedData?.intermediateGroup}* and want to secure my offline seat in *${submittedData?.interestedTuition || "B.Tech Tuitions"}* classes.`;
    window.open(`https://wa.me/919704727292?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="register" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-10 md:py-14 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column: persuasive layout copy & stats */}
        <motion.div 
          className="lg:col-span-5 text-left space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block text-[#00E5FF] text-xs font-mono font-bold tracking-widest uppercase bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/20">
            Secure Your Spot
          </div>
          
          <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Register Your <span className="text-brand-secondary font-bold">Interest</span>
          </h2>

          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed">
            Fill out this quick form. Your response will be cached in Guntur's batch database. Director DV Krishna will personally contact you regarding trial sessions, timing preferences, and syllabus material distribution.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex gap-4 p-4 rounded-xl bg-brand-primary/40 border border-white/5">
              <div className="p-3 bg-brand-secondary/10 text-brand-secondary rounded-lg shrink-0">
                <Ticket size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Free Trial Classes Access</p>
                <p className="text-xs text-gray-400">Registered students get 2 days of free demo classroom classes.</p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl bg-brand-primary/40 border border-white/5">
              <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-lg shrink-0">
                <Users size={20} />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Group Discounts</p>
                <p className="text-xs text-gray-400">Join together with 3 or more school friends for a flat 10% waiver.</p>
              </div>
            </div>
          </div>

          {/* Recent Admissions Ticker Panel */}
          <div className="pt-4 border-t border-white/5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest font-extrabold">Active Registrations Feed (Guntur)</p>
            </div>

            <div className="bg-brand-primary/20 border border-white/5 rounded-2.5xl p-4 overflow-hidden min-h-[82px] relative flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRecentIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-white font-medium text-xs sm:text-sm font-display">
                      {recentStudents[activeRecentIdx].name} <span className="text-brand-secondary text-[10px] font-bold font-mono">({recentStudents[activeRecentIdx].group})</span>
                    </p>
                    <p className="text-gray-400 text-[11px] leading-snug">
                      Track: <strong className="text-white font-semibold">{recentStudents[activeRecentIdx].choice}</strong> &bull; {recentStudents[activeRecentIdx].branch}
                    </p>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-mono font-bold shrink-0 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded leading-none select-none">
                    {recentStudents[activeRecentIdx].time}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Right column: Form Box */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass relative rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden shadow-2xl">
            {/* Live Indicator Seats count */}
            <div className="absolute top-0 left-0 right-0 py-2 bg-gradient-to-r from-brand-secondary/20 to-amber-500/20 border-b border-white/5 flex items-center justify-center gap-2 text-xs text-brand-secondary select-none">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              <p className="font-semibold">{seatsLeft} Seats Left in the Summer Foundation Batch!</p>
            </div>

            <div className="pt-6">
              <AnimatePresence mode="wait">
                {isSubmitted || submittedData ? (
                  /* Success State Panel */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 size={36} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-white font-display font-extrabold text-xl sm:text-2xl">
                        Registration Success!
                      </h3>
                      <p className="text-xs text-[#00E5FF] font-mono tracking-wide uppercase select-none">
                        TICKET ID: {submittedData?.id || "REG_PENDING"}
                      </p>
                      <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                        Excellent step! Your seat preference is now reserved. Please tap the WhatsApp CTA below to alert Director DV Krishna directly and speed up placement.
                      </p>
                    </div>

                    {/* Cached Student Resume Recap */}
                    <div className="p-4 rounded-xl bg-brand-dark/80 text-left border border-white/5 space-y-2 text-xs max-w-md mx-auto">
                      <p className="font-semibold text-[#00E5FF] uppercase tracking-wide border-b border-white/5 pb-1">Receipt Summary:</p>
                      <p className="text-gray-300"><span className="text-gray-500">Name:</span> {submittedData?.fullName}</p>
                      <p className="text-gray-300"><span className="text-gray-500">Phone:</span> {submittedData?.mobileNumber}</p>
                      <p className="text-gray-300"><span className="text-gray-500">Group:</span> {submittedData?.intermediateGroup}</p>
                      <p className="text-gray-300"><span className="text-gray-500">Expected Branch:</span> {submittedData?.expectedBranch}</p>
                      <p className="text-gray-300"><span className="text-gray-500">Selected Course:</span> {submittedData?.interestedTuition || "Coding & Programming (C, Java, Python)"}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <motion.button
                        onClick={openWhatsAppDirect}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                      >
                        Confirm On WhatsApp Now
                      </motion.button>
                      
                      <button
                        onClick={clearSubmission}
                        className="text-gray-400 hover:text-white transition-colors text-xs font-semibold px-4 py-2 cursor-pointer underline decoration-dotted"
                      >
                        Reset / Enter New Registry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Form Container */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 text-left"
                  >
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                        Full Name First
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Balaji Rao"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-secondary focus:outline-none transition-all placeholder:text-gray-600"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="mobileNumber" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                        Mobile Number
                      </label>
                      <input
                        id="mobileNumber"
                        type="tel"
                        maxLength={10}
                        placeholder="e.g. 9876543210"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                        className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-[#00E5FF] focus:outline-none transition-all placeholder:text-gray-600 font-mono"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="group" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                          Intermediate Group
                        </label>
                        <select
                          id="group"
                          value={intermediateGroup}
                          onChange={(e) => setIntermediateGroup(e.target.value)}
                          className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-secondary focus:outline-none transition-all"
                          disabled={loading}
                        >
                          <option value="MPC">MPC (Maths, Physics, Chem)</option>
                          <option value="MEC">MEC (Maths, Econ, Commerce)</option>
                          <option value="BiPC">BiPC (Biology, Physics, Chem)</option>
                          <option value="Other">Other Groups</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="branch" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                          Expected B.Tech Branch
                        </label>
                        <select
                          id="branch"
                          value={expectedBranch}
                          onChange={(e) => setExpectedBranch(e.target.value)}
                          className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-secondary focus:outline-none transition-all"
                          disabled={loading}
                        >
                          <option value="CSE (Computer Science)">CSE (Computer Science)</option>
                          <option value="IT (Info Technology)">IT (Info Technology)</option>
                          <option value="ECE (Electronics)">ECE (Electronics)</option>
                          <option value="EEE (Electrical)">EEE (Electrical)</option>
                          <option value="Civil/Mechanical">Civil / Mechanical</option>
                          <option value="Artificial Intelligence (AI-ML)">AI / Machine Learning</option>
                          <option value="Not Confirmed Yet">Not Decided Yet / counseling</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="tuitionType" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                        Preferred Tuition Class Category
                      </label>
                      <select
                        id="tuitionType"
                        value={interestedTuition}
                        onChange={(e) => setInterestedTuition(e.target.value)}
                        className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-secondary focus:outline-none transition-all"
                        disabled={loading}
                      >
                        <option value="Coding & Programming (C, Java, Python)">Coding & Programming (C, Java, Python)</option>
                        <option value="Engineering Mathematics (M1, M2, Probability, Discrete)">Engineering Mathematics (Maths)</option>
                        <option value="B.Tech Core Subjects (DSA, DBMS, OS, DLD)">B.Tech Core Subjects</option>
                        <option value="Ultimate All-In-One Tuition Bundle">Ultimate All-In-One Bundle (Maths + Core + Coding)</option>
                      </select>
                    </div>

                    {/* Developer Backend comment anchor */}
                    <p className="text-[10px] text-gray-500 italic select-none">
                      💡 Tip: Submitting stores registry locally. Highly optimized to hook to sheet-webhooks or mailchimp easily.
                    </p>

                    {/* Error Alerts */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="p-3.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs rounded-xl flex items-center gap-2"
                        >
                          <AlertCircle size={15} className="shrink-0" />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <motion.button
                      id="submit-register"
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-gradient-to-r from-brand-secondary to-amber-500 hover:to-orange-600 font-display font-extrabold text-white text-sm uppercase tracking-wide py-4.5 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-secondary/10 transition-colors pt-2.5 mt-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Saving parameters...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Registration</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Ticket, Users, AlertCircle, MapPin, Laptop } from "lucide-react";
import { Registration } from "../types";

export default function RegistrationForm({ selectedCourse }: { selectedCourse?: string }) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [registrationType, setRegistrationType] = useState<"before" | "after">("before");
  const [intermediateGroup, setIntermediateGroup] = useState("MPC");
  const [expectedBranch, setExpectedBranch] = useState("CSE (Computer Science)");
  const [interestedTuition, setInterestedTuition] = useState("Coding & Programming (C & Python)");
  const [learningMode, setLearningMode] = useState<"offline" | "online">("offline");
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
      if (selectedCourse.includes("Coding & Programming") || selectedCourse.includes("C & Python")) {
        setRegistrationType("before");
      } else {
        setRegistrationType("after");
      }
    }
  }, [selectedCourse]);

  const handleTypeChange = (type: "before" | "after") => {
    setRegistrationType(type);
    if (type === "before") {
      setIntermediateGroup("MPC");
      setExpectedBranch("CSE (Computer Science)");
      setInterestedTuition("Coding & Programming (C & Python)");
    } else {
      setIntermediateGroup("B.Tech Student");
      setExpectedBranch("CSE (Computer Science)");
      setInterestedTuition("Engineering Mathematics (M2, M1, Discrete)");
    }
  };
  
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
        learningMode: learningMode === "offline" ? "Offline (Guntur Classroom)" : "Online (Live Remote)",
        timestamp: new Date().toLocaleString()
      };

      // Store in LocalStorage
      localStorage.setItem("kbts_registration", JSON.stringify(newReg));
      setSubmittedData(newReg);
      setIsSubmitted(true);
      setLoading(false);
      setSeatsLeft(5);

      // Instantly redirect to Krishna's number on WhatsApp carrying these details
      const batchMode = registrationType === "before" ? "Before B.Tech Batch" : "After B.Tech Batch";
      const grpLabel = registrationType === "before" ? "Intermediate Group" : "Stream/Group";
      const brchLabel = registrationType === "before" ? "Expected B.Tech Branch" : "B.Tech Branch/Specialization";
      const learnModeStr = learningMode === "offline" ? "Offline (Guntur Classroom)" : "Online (Live Remote)";

      const msg = `Hi DV Krishna Sir! I just registered for the *${batchMode}* on your website under the name *${newReg.fullName}* (Phone: ${newReg.mobileNumber}).\n\n*Details:*\n- ${grpLabel}: *${newReg.intermediateGroup}*\n- ${brchLabel}: *${newReg.expectedBranch}*\n- Course Preferred: *${newReg.interestedTuition}*\n- Learning Mode: *${learnModeStr}*\n\nPlease block my seat.`;
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
    const batchMode = registrationType === "before" ? "Before B.Tech Batch" : "After B.Tech Batch";
    const grpLabel = registrationType === "before" ? "Intermediate Group" : "Stream/Group";
    const brchLabel = registrationType === "before" ? "Expected B.Tech Branch" : "B.Tech Branch/Specialization";
    const modeLabel = submittedData?.learningMode || "Offline/Online";
    const msg = `Hi DV Krishna Sir! I just registered on your website under the name *${submittedData?.fullName}* for the *${batchMode}*.\n\n*Details:*\n- ${grpLabel}: *${submittedData?.intermediateGroup}*\n- ${brchLabel}: *${submittedData?.expectedBranch}*\n- Course: *${submittedData?.interestedTuition || "Selected Tuition"}*\n- Mode: *${modeLabel}*`;
    window.open(`https://wa.me/919704727292?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="register" className="relative z-10 w-full max-w-7xl mx-auto px-4 py-6 md:py-8 border-t border-white/5">
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
                      <p className="text-gray-300"><span className="text-gray-500">Selected Course:</span> {submittedData?.interestedTuition || "Coding & Programming (C & Python)"}</p>
                      <p className="text-gray-300"><span className="text-gray-500">Learning Mode:</span> {submittedData?.learningMode || "Offline Regular"}</p>
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
                    className="space-y-5 text-left"
                  >
                    {/* Segmented Registration Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Select Registration Stream
                      </label>
                      <div className="grid grid-cols-2 gap-2 bg-brand-dark/95 p-1.5 rounded-2xl border border-white/5 shadow-inner">
                        <button
                          type="button"
                          onClick={() => handleTypeChange("before")}
                          className={`relative py-3.5 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 select-none cursor-pointer ${
                            registrationType === "before"
                              ? "bg-gradient-to-r from-brand-secondary/90 to-brand-secondary text-white shadow-[0_0_20px_rgba(255,107,0,0.25)] border border-brand-secondary/30"
                              : "text-gray-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span className="text-[11px] uppercase tracking-wider font-extrabold">Before B.Tech</span>
                          <span className="text-[9px] font-normal opacity-80">Foundation &amp; Programming</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTypeChange("after")}
                          className={`relative py-3.5 px-3 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 select-none cursor-pointer ${
                            registrationType === "after"
                              ? "bg-gradient-to-r from-teal-500 to-brand-accent-blue text-white shadow-[0_0_20px_rgba(0,229,255,0.25)] border border-brand-accent-blue/30"
                              : "text-gray-400 hover:text-white bg-transparent hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span className="text-[11px] uppercase tracking-wider font-extrabold">After B.Tech</span>
                          <span className="text-[9px] font-normal opacity-80">University Maths &amp; Core</span>
                        </button>
                      </div>
                    </div>

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
                          {registrationType === "before" ? "Intermediate Group" : "Current Stream / Year"}
                        </label>
                        <select
                          id="group"
                          value={intermediateGroup}
                          onChange={(e) => setIntermediateGroup(e.target.value)}
                          className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-brand-secondary focus:outline-none transition-all"
                          disabled={loading}
                        >
                          {registrationType === "before" ? (
                            <>
                              <option value="MPC">MPC (Maths, Physics, Chem)</option>
                              <option value="MEC">MEC (Maths, Econ, Commerce)</option>
                              <option value="BiPC">BiPC (Biology, Physics, Chem)</option>
                              <option value="Other">Other Groups</option>
                            </>
                          ) : (
                            <>
                              <option value="B.Tech Student (1st Year)">B.Tech Student (1st Year)</option>
                              <option value="B.Tech Student (2nd/3rd Year)">B.Tech Student (2nd/3rd Year)</option>
                              <option value="Diploma Student">Diploma Student</option>
                              <option value="Other Degrees">Other Technical Stream</option>
                            </>
                          )}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="branch" className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                          {registrationType === "before" ? "Expected B.Tech Branch" : "B.Tech Branch / Specialization"}
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
                        {registrationType === "before" ? (
                          <>
                            <option value="Coding & Programming (C & Python)">Coding & Programming (C & Python Batch)</option>
                            <option value="Before B.Tech Bridge Course (Maths & Logic Foundations)">Before B.Tech Bridge Course (Maths & Logic Foundations)</option>
                          </>
                        ) : (
                          <>
                            <option value="Engineering Mathematics (M2, M1, Discrete)">Engineering Mathematics (Maths - M1, M2, Discrete)</option>
                            <option value="B.Tech Core Subjects (DSA, DBMS, OS, DLD)">B.Tech Core Subjects (DSA, DBMS, OS, DLD)</option>
                            <option value="Ultimate All-In-One Tuition Bundle">Ultimate All-In-One Tuition Bundle (Maths + Core + Coding)</option>
                          </>
                        )}
                      </select>
                    </div>

                    {/* Preferred Learning Mode (Online and Offline options) */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block">
                        Preferred Learning Mode
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setLearningMode("offline")}
                          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer select-none ${
                            learningMode === "offline"
                              ? "bg-brand-primary/80 border-[#00E5FF]/40 text-[#00E5FF] shadow-[0_4px_15px_rgba(0,229,255,0.15)] font-black"
                              : "bg-brand-dark/40 border-white/10 text-gray-400 hover:text-white"
                          }`}
                        >
                          <MapPin size={14} className={learningMode === "offline" ? "text-[#00E5FF]" : "text-gray-500"} />
                          <div className="text-left">
                            <span className="block text-[11px] uppercase tracking-wider">Offline Regular</span>
                            <span className="text-[9px] font-normal opacity-70">Guntur Classroom</span>
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setLearningMode("online")}
                          className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs font-bold transition-all border cursor-pointer select-none ${
                            learningMode === "online"
                              ? "bg-brand-primary/80 border-[#00E5FF]/40 text-[#00E5FF] shadow-[0_4px_15px_rgba(0,229,255,0.15)] font-black"
                              : "bg-brand-dark/40 border-white/10 text-gray-400 hover:text-white"
                          }`}
                        >
                          <Laptop size={14} className={learningMode === "online" ? "text-[#00E5FF]" : "text-gray-500"} />
                          <div className="text-left">
                            <span className="block text-[11px] uppercase tracking-wider">Online Classes</span>
                            <span className="text-[9px] font-normal opacity-70">Live Interactive Meet</span>
                          </div>
                        </button>
                      </div>
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

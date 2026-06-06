/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import GlowBackground from "./components/GlowBackground";
import Hero from "./components/Hero";
import WhyBeforeCollege from "./components/WhyBeforeCollege";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import Trainer from "./components/Trainer";
import Reviews from "./components/Reviews";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState("Coding & Programming (C, Java, Python)");
  const [highlightedCourseId, setHighlightedCourseId] = useState<string | null>(null);
  const timerRef = useRef<any>(null);

  const handleCourseSelect = (courseName: string) => {
    setSelectedCourse(courseName);
    
    let id = null;
    if (courseName.includes("Coding & Programming")) {
      id = "service-programming";
    } else if (courseName.includes("Engineering Mathematics")) {
      id = "service-maths";
    } else if (courseName.includes("B.Tech Core Subjects")) {
      id = "service-core";
    }
    
    if (id) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setHighlightedCourseId(id);
      timerRef.current = setTimeout(() => {
        setHighlightedCourseId(prev => prev === id ? null : prev);
      }, 3500);
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-brand-dark overflow-x-hidden selection:bg-brand-secondary/30 selection:text-white">
      {/* Absolute Ambient Background Layer */}
      <GlowBackground />

      <main className="relative z-10 w-full flex flex-col items-center">
        {/* SECTION 1: HERO */}
        <Hero onCourseSelect={handleCourseSelect} />

        {/* SECTION 2: WHY THIS PROGRAM */}
        <WhyBeforeCollege />

        {/* SECTION 3: WHAT YOU WILL LEARN */}
        <WhatYouWillLearn onCourseSelect={handleCourseSelect} highlightedCourseId={highlightedCourseId} />

        {/* SECTION 5: TRAINER SECTION */}
        <Trainer />

        {/* SECTION 6: STUDENT REVIEWS */}
        <Reviews />

        {/* SECTION 8: REGISTRATION SECTION */}
        <RegistrationForm selectedCourse={selectedCourse} />

        {/* SECTION 10: FOOTER */}
        <Footer />

        {/* FLOATING SOCIAL & ASSISTANT ACTIONS */}
        <FloatingActions />
      </main>
    </div>
  );
}

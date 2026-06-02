/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import GlowBackground from "./components/GlowBackground";
import Hero from "./components/Hero";
import WhyBeforeCollege from "./components/WhyBeforeCollege";
import WhatYouWillLearn from "./components/WhatYouWillLearn";
import WhoShouldJoin from "./components/WhoShouldJoin";
import Trainer from "./components/Trainer";
import ProgramDetails from "./components/ProgramDetails";
import WhyChooseUs from "./components/WhyChooseUs";
import RegistrationForm from "./components/RegistrationForm";
import WhatsAppCTA from "./components/WhatsAppCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white bg-brand-dark overflow-x-hidden selection:bg-brand-secondary/30 selection:text-white">
      {/* Absolute Ambient Background Layer */}
      <GlowBackground />

      <main className="relative z-10 w-full flex flex-col items-center">
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: WHY THIS PROGRAM */}
        <WhyBeforeCollege />

        {/* SECTION 3: WHAT YOU WILL LEARN */}
        <WhatYouWillLearn />

        {/* SECTION 4: WHO SHOULD JOIN */}
        <WhoShouldJoin />

        {/* SECTION 5: TRAINER SECTION */}
        <Trainer />

        {/* SECTION 6: PROGRAM DETAILS */}
        <ProgramDetails />

        {/* SECTION 7: WHY STUDENTS CHOOSE US */}
        <WhyChooseUs />

        {/* SECTION 8: REGISTRATION SECTION */}
        <RegistrationForm />

        {/* SECTION 9: WHATSAPP CTA SECTION */}
        <WhatsAppCTA />

        {/* SECTION 10: FOOTER */}
        <Footer />
      </main>
    </div>
  );
}

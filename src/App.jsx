import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import WhatWeDo from './components/WhatWeDo';
import CTA from './components/CTA';

import olhaImg from './assets/olha.png';

function App() {
  return (
    <main className="bg-black min-h-screen relative font-sans selection:bg-brand-yellow selection:text-black">
      <Navbar />

      {/* Fixed Background Layer for the Reveal Effect */}
      <div className="fixed inset-0 z-0 h-screen w-full overflow-hidden">
        <img
          src={olhaImg}
          alt="Background Reveal"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Section - Covers fixed background */}
      <div className="relative z-10 bg-black">
        <Hero />
      </div>

      {/* Approach Section - Covers fixed background */}
      <div className="relative z-10 bg-white rounded-b-3xl md:rounded-b-[5rem] shadow-2xl">
        <Approach />
      </div>

      {/* Reveal Spacer - Transparent area to show fixed background */}
      {/* "Saindo dessa sessão vai revelando por baixo outra imagem" */}
      <div className="relative z-0 h-[80vh] flex items-center justify-center pointer-events-none">
        {/* Optional caption on the revealed image? */}
        <div className="text-white text-center p-4">
          {/* <p className="text-xl md:text-3xl uppercase tracking-widest font-bold">Além do horizonte</p> */}
        </div>
      </div>

      {/* What We Do & CTA - Covers fixed background again */}
      <div className="relative z-10 bg-black rounded-t-3xl md:rounded-t-[5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <WhatWeDo />
        <CTA />
      </div>

    </main>
  );
}

export default App;

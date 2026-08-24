import React from 'react';
import { Logo } from './Logo';

export const Future: React.FC = () => {
  return (
    <section 
      id="future" 
      className="relative min-h-screen w-full flex flex-col justify-between py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10 overflow-hidden"
    >
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Metadata */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-white/10 text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase relative z-10">
        <span>07 / HORIZON</span>
        <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">THE NEXT DECADE // 2026 — 2036</span>
      </div>

      {/* Cinematic Center Visual Statement */}
      <div className="w-full max-w-5xl mx-auto my-auto py-16 flex flex-col items-center text-center gap-8 relative z-10">
        <div className="p-4 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md mb-2">
          <Logo size={48} showText={false} />
        </div>

        <h2 className="font-display font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-[-0.035em] uppercase text-white leading-none">
          THIS IS ONLY
          <br />
          <span className="text-white/40">THE BEGINNING.</span>
        </h2>

        <p className="text-[15px] sm:text-lg text-white/60 font-normal max-w-3xl leading-[1.7]">
          ITINA AI is being built for a world where intelligent systems become part of the infrastructure of how we work, create, decide, and discover.
        </p>

        {/* Ambient Computational Horizon Line */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-4" />

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[10px] font-mono-tech tracking-[0.25em] uppercase text-white/40">
          <span>RESEARCH</span>
          <span className="text-white/20">•</span>
          <span>SYSTEMS</span>
          <span className="text-white/20">•</span>
          <span>ORCHESTRATION</span>
          <span className="text-white/20">•</span>
          <span>DEPLOYMENT</span>
        </div>
      </div>

      {/* Bottom Coordinates */}
      <div className="w-full max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono-tech text-white/30 relative z-10">
        <span>A 10-YEAR JOURNEY TO BUILD ONE OF THE WORLD'S GREAT AI COMPANIES.</span>
        <span>ENGINEERED WITH RIGOR.</span>
      </div>
    </section>
  );
};


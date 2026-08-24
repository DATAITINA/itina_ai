import React from 'react';
import { Layers, Zap, Scale } from 'lucide-react';

export const FirstPrinciples: React.FC = () => {
  return (
    <section 
      id="principles" 
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10"
    >
      {/* Background Architectural Coordinates Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/10">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase">
            01 / FIRST PRINCIPLES
          </span>
          <span className="text-[10px] font-mono-tech text-white/30 uppercase tracking-widest">
            CORE THESIS // VALUE EQUATION
          </span>
        </div>

        {/* Huge Statement */}
        <div className="flex flex-col gap-6 max-w-5xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] uppercase text-white leading-[1.0]">
            THE HARD PROBLEMS
            <br />
            <span className="text-white/40">ARE STILL WAITING.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-white/70 font-light leading-relaxed tracking-tight max-w-4xl">
            We look for problems where intelligence can create measurable leverage — reducing cost, removing friction, accelerating decisions, and making complex work simpler.
          </p>
        </div>

        {/* First Principles Grid — Minimalist Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Pillar 01 */}
          <div className="flex flex-col gap-4 p-8 rounded-lg border border-white/10 bg-[#080808] hover:border-white/25 transition-all duration-300">
            <div className="flex items-center justify-between text-xs font-mono-tech text-white/40">
              <span className="tracking-widest">PRINCIPLE // 01</span>
              <Scale className="w-4 h-4 text-white/60" />
            </div>
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mt-2">
              MEASURABLE LEVERAGE
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              We do not build technology for aesthetic novelty. Every system must produce clear economic utility: hours saved, risks eliminated, errors prevented, or decisions unlocked.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono-tech text-white/30 tracking-wider">
              TARGET: 10X OPERATIONAL COMPRESSION
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="flex flex-col gap-4 p-8 rounded-lg border border-white/10 bg-[#080808] hover:border-white/25 transition-all duration-300">
            <div className="flex items-center justify-between text-xs font-mono-tech text-white/40">
              <span className="tracking-widest">PRINCIPLE // 02</span>
              <Layers className="w-4 h-4 text-white/60" />
            </div>
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mt-2">
              REAL-WORLD SURVIVABILITY
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              AI models fail when confronted with unstructured, noisy, physical realities. We engineer the complete scaffolding — verification pipelines, error-correction gates, and sensory safeguards.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono-tech text-white/30 tracking-wider">
              TARGET: DETERMINISTIC FAULT TOLERANCE
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="flex flex-col gap-4 p-8 rounded-lg border border-white/10 bg-[#080808] hover:border-white/25 transition-all duration-300">
            <div className="flex items-center justify-between text-xs font-mono-tech text-white/40">
              <span className="tracking-widest">PRINCIPLE // 03</span>
              <Zap className="w-4 h-4 text-white/60" />
            </div>
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mt-2">
              NO HYPE WRAPPERS
            </h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Thin API wrappers on third-party models decay overnight. We design proprietary neural orchestration, specialized fine-tuning matrices, and domain-grounded intelligence.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 text-[10px] font-mono-tech text-white/30 tracking-wider">
              TARGET: DEEP VERTICAL MOATS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


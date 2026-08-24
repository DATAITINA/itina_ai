import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section 
      id="philosophy" 
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10"
    >
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
            06 / PHILOSOPHY
          </span>
          <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
            COMPANY ETHOS // CORE OPERATING PRINCIPLES
          </span>
        </div>

        {/* Monolithic Manifesto Statement */}
        <div className="flex flex-col gap-2 max-w-5xl">
          <h2 className="font-display font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-[-0.035em] uppercase text-white leading-[0.98]">
            BUILD LESS.
            <br />
            BUILD BETTER.
            <br />
            <span className="text-white/40">MAKE IT MATTER.</span>
          </h2>
        </div>

        {/* Three Spacious Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 pt-8 border-t border-white/10">
          {/* 01 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-[10px] tracking-[0.25em] text-white/40 uppercase">
              01 // AXIOM
            </span>
            <h3 className="font-display font-semibold text-xl sm:text-2xl uppercase tracking-tight text-white">
              FIRST PRINCIPLES
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/60 leading-[1.7] font-normal">
              Understand the problem before choosing the technology. We deconstruct every operational bottleneck down to its foundational physical, mathematical, and economic realities.
            </p>
          </div>

          {/* 02 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-[10px] tracking-[0.25em] text-white/40 uppercase">
              02 // CRAFT
            </span>
            <h3 className="font-display font-semibold text-xl sm:text-2xl uppercase tracking-tight text-white">
              ENGINEERING
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/60 leading-[1.7] font-normal">
              Build systems that survive contact with the real world. Real-world data is hostile, missing, corrupted, and noisy. Reliability is engineered through deterministic safety structures.
            </p>
          </div>

          {/* 03 */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-[10px] tracking-[0.25em] text-white/40 uppercase">
              03 // UTILITY
            </span>
            <h3 className="font-display font-semibold text-xl sm:text-2xl uppercase tracking-tight text-white">
              IMPACT
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/60 leading-[1.7] font-normal">
              Optimize for measurable value, not vanity metrics. We do not count hype, social impressions, or synthetic benchmarks. We count dollars saved, errors eliminated, and human hours liberated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


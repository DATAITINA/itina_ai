import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LogoMark } from './Logo';

interface HeroProps {
  onExploreClick: () => void;
  onSeeBuildingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSeeBuildingClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col pt-24 sm:pt-28 overflow-hidden z-10 select-none bg-[#050505] text-[#F5F5F5]"
    >
      {/* Background Radial Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main Grid: 8-Column Main Hero + 4-Column Technical Aside */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 relative z-10 border-b border-white/10">
        {/* Left 8-Column Hero Section */}
        <div className="lg:col-span-8 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12 lg:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="p-1.5 rounded border border-white/10 bg-white/[0.02]">
              <LogoMark size={14} className="text-white/70" />
            </div>
            <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
              01 / FRONTIER INTELLIGENCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] leading-[0.98] sm:leading-[0.98] tracking-[-0.035em] mb-8 uppercase text-[#F5F5F5]"
          >
            WE BUILD<br />
            INTELLIGENT<br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-base md:text-[17px] text-[#F5F5F5]/70 font-normal leading-[1.7] max-w-xl mb-10 sm:mb-12"
          >
            Engineering high-autonomy infrastructure for the world's most critical, data-dense industries. AI engineered for the real world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              data-interactive="true"
              data-cursor-label="EXPLORE"
              className="bg-white text-black px-7 sm:px-9 py-3 sm:py-3.5 text-[11px] font-mono-tech tracking-[0.2em] font-medium uppercase rounded-xs hover:opacity-90 transition-all"
            >
              EXPLORE SYSTEMS
            </button>

            <button
              id="hero-see-mission-btn"
              onClick={onSeeBuildingClick}
              data-interactive="true"
              data-cursor-label="MISSION"
              className="flex items-center gap-3 sm:gap-4 group text-[11px] font-mono-tech tracking-[0.2em] font-medium uppercase"
            >
              <span className="text-white/40 group-hover:text-white transition-colors">SEE MISSION</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </button>
          </motion.div>
        </div>

        {/* Right 4-Column Technical Aside Panel */}
        <aside className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between p-8 sm:p-12 bg-[#080808] relative">
          <div>
            {/* Current Deployment Card */}
            <div className="mb-10 sm:mb-12">
              <span className="block text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase mb-4">
                CURRENT DEPLOYMENT
              </span>
              <div className="border border-white/10 p-6 rounded-lg bg-black/40">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-2xl tracking-tight text-white">Dokusure</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs sm:text-[13px] text-white/60 leading-[1.65] font-normal mb-6">
                  Autonomous PAAR and customs documentation processing for global logistics & maritime trade.
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-white/40 tracking-wider">
                  <span>STATUS: ACTIVE</span>
                  <span>LATENCY: 42MS</span>
                </div>
                <div className="mt-4 h-1 w-full bg-white/5 overflow-hidden rounded-full">
                  <div className="h-full bg-white/50 w-3/4 rounded-full" />
                </div>
              </div>
            </div>

            {/* System Architecture Matrix */}
            <div className="space-y-4 sm:space-y-6">
              <span className="block text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
                SYSTEM ARCHITECTURE
              </span>
              <div className="grid grid-cols-2 gap-4 text-[11px] font-mono-tech tracking-wider uppercase text-white/60">
                <div className="border-b border-white/5 pb-2">Perception</div>
                <div className="border-b border-white/5 pb-2">Reasoning</div>
                <div className="border-b border-white/5 pb-2">Orchestration</div>
                <div className="border-b border-white/5 pb-2">Action</div>
              </div>
            </div>
          </div>

          {/* Decadal Timestamp */}
          <div className="pt-10 sm:pt-12 border-t border-white/5 mt-8 lg:mt-0">
            <div className="text-3xl sm:text-4xl font-extralight font-mono-tech tracking-widest text-white/20 mb-2">
              2026
            </div>
            <p className="text-[10px] leading-relaxed text-white/40 uppercase font-mono-tech tracking-[0.2em]">
              Intelligence Through Innovation <br /> & Neural Automation
            </p>
          </div>
        </aside>
      </div>

      {/* Hero Sub-Bar Coordinates */}
      <div className="w-full flex items-center justify-between px-6 sm:px-12 py-4 bg-[#050505] text-[10px] font-mono-tech tracking-widest text-white/30">
        <div className="flex gap-6 sm:gap-8">
          <span>COORD: 6.5244° N, 3.3792° E</span>
          <span className="hidden sm:inline">SYSTEM_ID: ITINA_HQ_LGS</span>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PROD RUNTIME</span>
        </div>
      </div>
    </section>
  );
};


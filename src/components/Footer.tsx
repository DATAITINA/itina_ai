import React from 'react';
import { Logo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 text-[#F5F5F5] py-16 px-6 sm:px-12 lg:px-16 z-10 relative select-none">
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 pb-10 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <Logo size={28} />
            <span className="text-[10px] font-mono-tech tracking-[0.2em] text-white/40 uppercase mt-1">
              INTELLIGENCE THROUGH INNOVATION AND NEURAL AUTOMATION
            </span>
          </div>

          <button
            onClick={scrollToTop}
            data-interactive="true"
            data-cursor-label="TOP"
            className="self-start sm:self-auto text-[10px] font-mono-tech tracking-[0.2em] uppercase font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2 border border-white/10 px-4 py-2 rounded-xs"
          >
            <span>BACK TO TOP</span>
            <span className="text-white/40">↑</span>
          </button>
        </div>

        {/* Middle Navigation & Socials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-xs font-mono-tech">
          {/* Col 1: System Index */}
          <div className="flex flex-col gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              ARCHITECTURE
            </span>
            <a href="#systems" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Intelligent Automation
            </a>
            <a href="#systems" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Machine Intelligence
            </a>
            <a href="#systems" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Decision Systems
            </a>
            <a href="#systems" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Autonomous Workflows
            </a>
          </div>

          {/* Col 2: Products & Research */}
          <div className="flex flex-col gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              DEPLOYMENT
            </span>
            <a href="#dokusure" className="text-[11.5px] text-white/60 hover:text-white transition-colors flex items-center gap-1.5">
              <span>Dokusure (Maritime)</span>
              <span className="text-[8px] px-1 py-0.2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xs">
                LIVE
              </span>
            </a>
            <a href="#engineering" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Closed-Loop Pipeline
            </a>
            <a href="#frontier" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Frontier Sector Matrix
            </a>
            <a href="#philosophy" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Engineering Manifesto
            </a>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              ORGANIZATION
            </span>
            <a href="#about" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              About ITINA AI
            </a>
            <a href="#about" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Leadership & Origin
            </a>
            <a href="#contact" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              Commercial Pilot Access
            </a>
            <a href="#contact" className="text-[11.5px] text-white/60 hover:text-white transition-colors">
              hello@itina.ai
            </a>
          </div>

          {/* Col 4: Network & Socials */}
          <div className="flex flex-col gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              NETWORK
            </span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] text-white/60 hover:text-white transition-colors flex items-center gap-2"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-white/40" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Telemetry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] font-mono-tech text-white/30">
          <div>
            © {new Date().getFullYear()} ITINA AI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>LAGOS • SAN FRANCISCO • LONDON</span>
            <span>SYSTEMS ENGINEERED FOR THE REAL WORLD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


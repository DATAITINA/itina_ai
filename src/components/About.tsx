import React from 'react';
import { Globe, MapPin, Code2, Building2 } from 'lucide-react';
import { Logo } from './Logo';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10"
    >
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
            08 / ABOUT
          </span>
          <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
            ORGANIZATION PROFILE
          </span>
        </div>

        {/* Brand Meaning & Monolith */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo size={32} showText={false} />
              <h2 className="font-brand font-bold text-3xl sm:text-5xl uppercase tracking-[0.12em] text-white">
                ITINA AI
              </h2>
            </div>

            <div className="text-[11px] font-mono-tech tracking-[0.2em] text-white/40 uppercase">
              INTELLIGENCE THROUGH INNOVATION AND NEURAL AUTOMATION
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              An engineering company building intelligent systems for the real world.
            </p>

            <p className="text-[13.5px] sm:text-[14.5px] text-white/60 leading-[1.7] font-normal">
              We research, design, and deploy mission-critical AI systems that directly target expensive, repeated, and measurable bottlenecks in high-stakes industries. Headquartered with deep engineering roots in Nigeria, we are building technology designed to compete and operate at the global frontier.
            </p>
          </div>

          {/* Right: Key Facts & Leadership Card */}
          <div className="lg:col-span-5 border border-white/10 bg-[#080808] rounded-lg p-8 flex flex-col gap-6">
            <div className="text-[9.5px] font-mono-tech text-white/40 tracking-[0.25em] pb-3 border-b border-white/10 uppercase">
              COMPANY SPECIFICATIONS
            </div>

            <div className="flex flex-col gap-4 text-xs font-mono-tech">
              <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-[9.5px]">LOCATION & HUBS</span>
                  <span className="text-white font-medium">Lagos, Nigeria • Global Engineering</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                <Building2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-[9.5px]">LEADERSHIP & ORIGIN</span>
                  <span className="text-white font-medium">Founded by David Itina</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-3 border-b border-white/5">
                <Globe className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-[9.5px]">DECADE MISSION</span>
                  <span className="text-white font-medium">Build one of the world's great AI companies</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="w-4 h-4 text-white/60 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-[9.5px]">CURRENT FLAGSHIP PRODUCT</span>
                  <span className="text-emerald-400 font-medium">Dokusure (Customs PAAR Automation)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


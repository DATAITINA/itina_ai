import React, { useState } from 'react';
import { SystemCategory } from '../types';
import { Cpu, Binary, Network, Workflow, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const systemCategories: SystemCategory[] = [
  {
    id: 'intelligent-automation',
    number: '01',
    title: 'INTELLIGENT AUTOMATION',
    tagline: 'Systems that turn repetitive knowledge work into software.',
    description:
      'Eliminating human latency in mission-critical operational pipelines. We engineer autonomous document understanding, multi-format ingestion, and instant regulatory reconciliation engines.',
    capabilities: [
      'Multi-modal document extraction & semantic parsing',
      'Cross-jurisdictional compliance & rule verification',
      'Automated error-correction & reconciliation loops',
      'High-throughput legacy API bridge synthesis',
    ],
    metrics: [
      { label: 'EXTRACTION SPEED', value: '180ms / doc' },
      { label: 'ERROR RATE', value: '< 0.02%' },
      { label: 'THROUGHPUT', value: '25,000 req/min' },
    ],
    diagramType: 'pipeline',
  },
  {
    id: 'machine-intelligence',
    number: '02',
    title: 'MACHINE INTELLIGENCE',
    tagline: 'Models that perceive, reason, predict and act.',
    description:
      'Domain-adapted neural networks specialized in physical, spatial, and multi-variable industrial reasoning. Bridging statistical probability with deterministic rulesets.',
    capabilities: [
      'Industrial computer vision & anomaly detection',
      'Domain-adapted small language & reasoning models',
      'Continuous active-learning feedback pipelines',
      'Sub-millisecond edge inference compilation',
    ],
    metrics: [
      { label: 'MODEL LATENCY', value: '14.2ms' },
      { label: 'VALIDATION', value: '99.88%' },
      { label: 'PRECISION', value: '0.994 F1' },
    ],
    diagramType: 'neural',
  },
  {
    id: 'decision-systems',
    number: '03',
    title: 'DECISION SYSTEMS',
    tagline: 'AI that helps organizations make better decisions from complex information.',
    description:
      'Transforming chaotic enterprise data oceans into deterministic risk matrices, scenario simulations, and prescriptive operational recommendations.',
    capabilities: [
      'Supply chain vulnerability & bottleneck simulation',
      'Dynamic multi-variable tariff & pricing optimization',
      'Real-time fraud & compliance divergence detection',
      'Probabilistic risk forecasting & stress testing',
    ],
    metrics: [
      { label: 'DECISION LATENCY', value: '< 45ms' },
      { label: 'SCENARIOS/SEC', value: '10,000+' },
      { label: 'DRIFT MONITOR', value: 'Real-time' },
    ],
    diagramType: 'matrix',
  },
  {
    id: 'autonomous-workflows',
    number: '04',
    title: 'AUTONOMOUS WORKFLOWS',
    tagline: 'Systems that connect models, tools, data and actions into intelligent processes.',
    description:
      'Multi-agent state machines capable of executing multi-stage transactions, self-healing broken data paths, and coordinating between disparate software silos without human intervention.',
    capabilities: [
      'Directed Acyclic Graph (DAG) agent orchestration',
      'Self-healing transactional rollback safeguards',
      'Dynamic tool discovery & deterministic execution',
      'Air-gapped enterprise policy governance',
    ],
    metrics: [
      { label: 'EXECUTION RELIABILITY', value: '99.99%' },
      { label: 'AUTO-RECOVERY', value: 'Instant' },
      { label: 'ORCHESTRATION', value: 'Decentralized' },
    ],
    diagramType: 'graph',
  },
];

export const Systems: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<SystemCategory>(systemCategories[0]);

  return (
    <section 
      id="systems" 
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

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
              02 / SYSTEMS
            </span>
          </div>
          <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
            FOUR CORE CAPABILITY VECTORS
          </span>
        </div>

        {/* Huge Headline */}
        <div className="flex flex-col gap-3">
          <h2 className="font-display font-semibold sm:font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.035em] uppercase text-[#F5F5F5] leading-tight">
            INTELLIGENCE, DEPLOYED.
          </h2>
          <p className="text-[15px] sm:text-base text-white/60 font-normal leading-[1.7] max-w-2xl">
            We structure our engineering into four interlocking tiers of intelligent infrastructure.
          </p>
        </div>

        {/* Interactive Cinematic Panels Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Category Navigation Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {systemCategories.map((cat) => {
              const isSelected = activeSystem.id === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveSystem(cat)}
                  data-interactive="true"
                  data-cursor-label="INSPECT"
                  className={`w-full text-left p-6 transition-all duration-300 border rounded-lg group flex flex-col gap-2 relative overflow-hidden ${
                    isSelected
                      ? 'bg-white/[0.08] border-white/40 text-white shadow-lg'
                      : 'bg-[#080808] border-white/10 text-white/60 hover:bg-white/[0.03] hover:border-white/25 hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-white" />
                  )}

                  <div className="flex items-center justify-between text-xs font-mono-tech">
                    <span className={isSelected ? 'text-white font-medium' : 'text-white/40 group-hover:text-white/70'}>
                      VECTOR // {cat.number}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected ? 'text-white translate-x-1' : 'text-white/20 group-hover:text-white/50'
                      }`}
                    />
                  </div>

                  <h3 className="font-display font-semibold text-base sm:text-lg uppercase tracking-tight text-white mt-1">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-white/50 line-clamp-2 leading-[1.6] font-normal">
                    {cat.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Cinematic Inspector View */}
          <div className="lg:col-span-7 border border-white/10 bg-black/40 rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[500px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex flex-col gap-8 relative z-10"
              >
                {/* Top Inspector Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-white/50">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>SYSTEM ARCHITECTURE // {activeSystem.number}</span>
                  </div>
                  <span className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                    STATUS: ACTIVE ENGINE
                  </span>
                </div>

                {/* Title & Detailed Scope */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-display font-semibold text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {activeSystem.title}
                  </h4>
                  <p className="text-[13.5px] sm:text-[14.5px] text-white/60 leading-[1.7] font-normal">
                    {activeSystem.description}
                  </p>
                </div>

                {/* Engineering Capabilities */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
                    CORE CAPABILITY SPECIFICATIONS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSystem.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 border border-white/5 bg-white/[0.02] rounded text-xs text-white/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 mt-0.5 shrink-0" />
                        <span className="font-normal">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telemetry Benchmarks */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {activeSystem.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[9px] sm:text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <span className="font-mono-tech font-semibold text-sm sm:text-base text-white">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Status Feed */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-white/30">
              <span>ZERO-LATENCY IPC PIPELINES</span>
              <span>DETERMINISTIC ACCURACY: 99.8%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

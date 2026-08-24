import React, { useState } from 'react';
import { FrontierSector } from '../types';
import { Compass, Sparkles, Filter, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const frontierSectors: FrontierSector[] = [
  {
    id: 'logistics-trade',
    name: 'Logistics & Global Trade',
    status: 'BUILDING',
    problemStatement: 'Manual customs documentation, clearing bottlenecks, and fragmented port manifest reconciliation.',
    systemSolution: 'Dokusure: Automated OCR parsing, PAAR pre-clearance validation, and customs single-window filing.',
    potentialImpact: 'Eliminates 85% of documentation clearance delay across major maritime ports.',
    tags: ['Customs', 'PAAR', 'Port Automation', 'OCR Pipeline'],
  },
  {
    id: 'enterprise-workflows',
    name: 'Enterprise & Operations',
    status: 'BUILDING',
    problemStatement: 'Unstructured internal knowledge silos, repetitive multi-software data entry, and manual audits.',
    systemSolution: 'Deterministic autonomous DAG agents bridging legacy ERPs, CRMs, and internal ledgers.',
    potentialImpact: '90% operational compression on repeated back-office knowledge work.',
    tags: ['Autonomous Agents', 'ERP Integration', 'Process Automation'],
  },
  {
    id: 'finance-reconciliation',
    name: 'Finance & Banking',
    status: 'EXPLORING',
    problemStatement: 'Multi-currency cross-border trade reconciliation, FX compliance fraud, and audit divergence.',
    systemSolution: 'Real-time ledger audit reasoning engine with automated cryptographic discrepancy detection.',
    potentialImpact: 'Sub-second reconciliation across multi-tiered banking channels.',
    tags: ['Cross-Border', 'Trade Finance', 'Fraud Detection', 'CBN Regulatory'],
  },
  {
    id: 'energy-grid',
    name: 'Energy & Utilities',
    status: 'EXPLORING',
    problemStatement: 'Unstable grid load balancing, distribution losses, and predictive commercial generator maintenance.',
    systemSolution: 'Spatial-temporal load forecasting and automated micro-grid dispatch optimization models.',
    potentialImpact: 'Reduces peak distribution blackout failure rates by up to 40%.',
    tags: ['Grid Optimization', 'Predictive Telemetry', 'Micro-grids'],
  },
  {
    id: 'manufacturing-qa',
    name: 'Manufacturing & Industrial',
    status: 'EXPLORING',
    problemStatement: 'High defect escape rates in high-speed assembly lines and manual quality inspection fatigue.',
    systemSolution: 'Sub-millisecond high-speed edge computer vision for micro-defect classification.',
    potentialImpact: 'Zero-defect manufacturing thresholds with 100% inspection coverage.',
    tags: ['Edge Vision', 'Anomaly Detection', 'Zero Defect'],
  },
  {
    id: 'legal-contracts',
    name: 'Legal & Regulatory Compliance',
    status: 'EXPLORING',
    problemStatement: 'Voluminous corporate contract review, statutory regulatory shifts, and dispute discovery.',
    systemSolution: 'Constraint-guided legal reasoning engine for multi-jurisdiction contract risk analysis.',
    potentialImpact: 'Compresses multi-week due diligence into structured risk summaries.',
    tags: ['Contract Review', 'Statutory Compliance', 'Due Diligence'],
  },
  {
    id: 'insurance-claims',
    name: 'Insurance Underwriting & Claims',
    status: 'EXPLORING',
    problemStatement: 'Protracted claims verification cycles, fraudulent photo submissions, and assessment delays.',
    systemSolution: 'Multimodal vision and claims documentation verification with automated damage estimation.',
    potentialImpact: 'Instant claims pre-adjudication from days to under 60 seconds.',
    tags: ['Claims AI', 'Damage Estimation', 'Fraud Screening'],
  },
  {
    id: 'agriculture-supply',
    name: 'Agriculture & Commodities',
    status: 'EXPLORING',
    problemStatement: 'Post-harvest supply chain spoilage, lack of transparent commodity grading, and crop disease.',
    systemSolution: 'Hyperspectral commodity grading and predictive harvest logistics coordination.',
    potentialImpact: 'Increases smallholder yield realization and trade export pricing accuracy.',
    tags: ['Commodity Grading', 'Supply Chain', 'Agritech'],
  },
  {
    id: 'healthcare-triage',
    name: 'Healthcare & Diagnostics',
    status: 'RESEARCHING',
    problemStatement: 'Extreme radiologist deficit, clinical triage delays, and unstructured diagnostic notes.',
    systemSolution: 'Multimodal diagnostic reasoning models augmenting clinical pathology and imaging.',
    potentialImpact: 'Expanded diagnostic access across underserved clinical environments.',
    tags: ['Diagnostic Vision', 'Clinical Triage', 'Pathology'],
  },
  {
    id: 'construction-infra',
    name: 'Construction & Infrastructure',
    status: 'RESEARCHING',
    problemStatement: 'Severe project cost overruns, safety compliance breaches, and spatial BIM drift.',
    systemSolution: 'Autonomous drone and spatial vision models comparing live site construction to BIM models.',
    potentialImpact: 'Real-time drift detection preventing multi-million dollar structural rework.',
    tags: ['BIM Drift', 'Spatial Vision', 'Site Safety'],
  },
  {
    id: 'government-civic',
    name: 'Government & Public Sector',
    status: 'RESEARCHING',
    problemStatement: 'Fragmented citizen identity verification, civic service backlogs, and revenue leakage.',
    systemSolution: 'Unified sovereign intelligence infrastructure for civic identity and tax compliance.',
    potentialImpact: 'Transparent civic service delivery with eliminated bureaucratic friction.',
    tags: ['Sovereign AI', 'Public Records', 'Civic Systems'],
  },
  {
    id: 'education-cognition',
    name: 'Education & Cognitive Tools',
    status: 'RESEARCHING',
    problemStatement: 'One-size-fits-all curricula failing divergent cognitive learning patterns in technical domains.',
    systemSolution: 'Personalized interactive pedagogical models adapting to student cognitive graphs.',
    potentialImpact: 'Accelerated technical mastery in engineering, mathematics, and code.',
    tags: ['Cognitive Modeling', 'Adaptive Pedagogy', 'STEM'],
  },
];

export const Frontier: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'BUILDING' | 'EXPLORING' | 'RESEARCHING'>('ALL');
  const [activeSector, setActiveSector] = useState<FrontierSector>(frontierSectors[0]);

  const filtered = filter === 'ALL' 
    ? frontierSectors 
    : frontierSectors.filter((s) => s.status === filter);

  return (
    <section 
      id="frontier" 
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
          <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
            05 / FRONTIER
          </span>
          <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
            PROBLEM MATRIX // 12 SECTORS
          </span>
        </div>

        {/* Huge Headline & Distinction */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <h2 className="font-display font-semibold sm:font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.035em] uppercase text-white leading-tight">
              WHAT BECOMES POSSIBLE
              <br />
              <span className="text-white/40">WHEN MACHINES CAN REASON?</span>
            </h2>
            <p className="text-[15px] sm:text-base text-white/60 font-normal leading-[1.7] mt-2">
              We maintain strict intellectual honesty about our roadmap. We clearly distinguish between what we are actively deploying, what we are exploring with partners, and what we are researching for the future.
            </p>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 border border-white/10 p-1.5 bg-[#080808] rounded-lg">
            {(['ALL', 'BUILDING', 'EXPLORING', 'RESEARCHING'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                data-interactive="true"
                data-cursor-label="FILTER"
                className={`px-3.5 py-1.5 text-[9.5px] font-mono-tech tracking-wider rounded transition-all ${
                  filter === status
                    ? 'bg-white text-black font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Sector Matrix & Active Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid List */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
            {filtered.map((sector) => {
              const isSelected = activeSector.id === sector.id;
              const statusColor =
                sector.status === 'BUILDING'
                  ? 'text-emerald-400 border-emerald-500/30'
                  : sector.status === 'EXPLORING'
                  ? 'text-cyan-400 border-cyan-500/30'
                  : 'text-white/60 border-white/20';

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector)}
                  data-interactive="true"
                  data-cursor-label="VIEW"
                  className={`text-left p-4 border rounded-lg transition-all duration-300 flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'border-white/50 bg-white/[0.08] text-white shadow-md'
                      : 'border-white/10 bg-[#080808] text-white/60 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-tech">
                    <span className={`px-1.5 py-0.5 border ${statusColor} rounded-xs`}>
                      {sector.status}
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-white/30'}`} />
                  </div>
                  <span className="font-display font-semibold text-xs sm:text-sm uppercase tracking-tight text-white line-clamp-1">
                    {sector.name}
                  </span>
                  <span className="text-[11px] text-white/50 line-clamp-2 leading-[1.6] font-normal">
                    {sector.problemStatement}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Selected Sector Deep Dive */}
          <div className="lg:col-span-6 border border-white/10 bg-black/40 rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[480px]">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white/50">
                  <Compass className="w-4 h-4 text-white/70" />
                  <span>SECTOR SPECIFICATION // {activeSector.status}</span>
                </div>
                <span className="text-[9.5px] font-mono-tech px-2 py-0.5 border border-white/20 text-white/80 rounded-xs">
                  {activeSector.status}
                </span>
              </div>

              <h3 className="font-display font-semibold text-xl sm:text-2xl uppercase tracking-tight text-white">
                {activeSector.name}
              </h3>

              <div className="flex flex-col gap-2">
                <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
                  THE EXPENSIVE PROBLEM:
                </span>
                <p className="text-[13.5px] sm:text-[14px] text-white/70 leading-[1.65] font-normal">
                  {activeSector.problemStatement}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
                  THE INTELLIGENT SYSTEM ARCHITECTURE:
                </span>
                <p className="text-[13.5px] sm:text-[14px] text-white/90 leading-[1.65] font-normal">
                  {activeSector.systemSolution}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-emerald-400 uppercase">
                  MEASURABLE LEVERAGE IMPACT:
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-emerald-300 leading-[1.6] font-mono-tech">
                  {activeSector.potentialImpact}
                </p>
              </div>
            </div>

            {/* Tags & Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
              {activeSector.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono-tech px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-white/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

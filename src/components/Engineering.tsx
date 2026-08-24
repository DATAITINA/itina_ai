import React, { useState } from 'react';
import { ArchitectureNode } from '../types';
import { Database, Eye, BrainCircuit, Network, Play, RotateCcw, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'data',
    step: '01',
    name: 'DATA & INGESTION',
    shortDesc: 'High-throughput, zero-loss multi-format data ingestion, sanitization, and continuous streaming ETL.',
    specifications: [
      'Multi-source distributed event queues with backpressure management',
      'Format-agnostic normalization (PDF, XML, EDI, CSV, API streams)',
      'Deterministic hashing & provenance cryptographic verification',
      'Sub-millisecond data lineage tracking & air-gapped encryption',
    ],
    throughput: '45,000 events/sec',
    telemetry: {
      latency: '2.4ms',
      uptime: '99.999%',
      errorRate: '0.001%',
    },
  },
  {
    id: 'perception',
    step: '02',
    name: 'PERCEPTION & EXTRACTION',
    shortDesc: 'Multi-modal document vision, semantic vectorization, and structural geometry parsing.',
    specifications: [
      'Spatial coordinate optical layout analysis (2D/3D tensor grids)',
      'Multi-language, handwritten & noisy scan reconstruction',
      'Semantic entity extraction with confidence boundary tagging',
      'Hardware-accelerated edge inference quantization',
    ],
    throughput: '320 docs/sec',
    telemetry: {
      latency: '18.6ms',
      uptime: '99.99%',
      errorRate: '0.008%',
    },
  },
  {
    id: 'reasoning',
    step: '03',
    name: 'REASONING & VALIDATION',
    shortDesc: 'Deterministic constraint-guided neural reasoning, cross-document reconciliation, and mathematical verification.',
    specifications: [
      'Constraint logic programming combined with fine-tuned LLMs',
      'Zero-hallucination mathematical verification gates',
      'Cross-jurisdiction trade & tax rule execution matrices',
      'Automated discrepancy isolation & root-cause diagnosis',
    ],
    throughput: '12,500 evals/sec',
    telemetry: {
      latency: '24.1ms',
      uptime: '99.99%',
      errorRate: '0.002%',
    },
  },
  {
    id: 'orchestration',
    step: '04',
    name: 'ORCHESTRATION & AGENTS',
    shortDesc: 'Stateful directed acyclic graph (DAG) execution, agent coordination, and transactional state machines.',
    specifications: [
      'Distributed actor-model agent coordination protocols',
      'Idempotent transactional guarantees with automated rollbacks',
      'Dynamic policy enforcement & security sandbox barriers',
      'Human-in-the-loop exception escalation dispatchers',
    ],
    throughput: '8,000 workflows/sec',
    telemetry: {
      latency: '14.0ms',
      uptime: '99.995%',
      errorRate: '0.000%',
    },
  },
  {
    id: 'action',
    step: '05',
    name: 'ACTION & DEPLOYMENT',
    shortDesc: 'Automated external API execution, document generation, and enterprise database synchronization.',
    specifications: [
      'Direct customs portal & single-window integration hooks',
      'Cryptographically signed export artifact synthesis',
      'Immutable audit log persistence in distributed ledgers',
      'Fail-safe retry policies with exponential jitter backoff',
    ],
    throughput: '15,000 ops/sec',
    telemetry: {
      latency: '8.2ms',
      uptime: '99.99%',
      errorRate: '0.003%',
    },
  },
  {
    id: 'feedback',
    step: '06',
    name: 'FEEDBACK & ACTIVE LEARNING',
    shortDesc: 'Closed-loop telemetry, automated regression testing, and continuous model parameter refinement.',
    specifications: [
      'Self-supervised edge case discovery & cluster labeling',
      'Continuous synthetic dataset generation for rare edge cases',
      'Automated shadow deployment evaluation vs. production baseline',
      'Drift detection across real-world macro-environment changes',
    ],
    throughput: 'Real-time telemetry',
    telemetry: {
      latency: '1.2ms',
      uptime: '100.0%',
      errorRate: '0.000%',
    },
  },
];

export const Engineering: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ArchitectureNode>(architectureNodes[0]);

  return (
    <section 
      id="engineering" 
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
            04 / ENGINEERING
          </span>
          <span className="text-[9.5px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
            CLOSED-LOOP SYSTEM PIPELINE
          </span>
        </div>

        {/* Headline & Philosophy */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="font-display font-semibold sm:font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.035em] uppercase text-white leading-tight">
            WE DON'T WRAP AI.
            <br />
            <span className="text-white/40">WE ENGINEER SYSTEMS.</span>
          </h2>
          <p className="text-[15px] sm:text-base text-white/60 font-normal leading-[1.7]">
            Models are only one component. The real work is building reliable systems around them — data pipelines, retrieval, reasoning, orchestration, evaluation, interfaces, and deployment.
          </p>
        </div>

        {/* Linear Interactive Architecture Chain */}
        <div className="flex flex-col gap-4">
          <div className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
            SELECT PIPELINE LAYER TO INSPECT DEEP ARCHITECTURE:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 border border-white/10 p-3 bg-[#080808] rounded-lg">
            {architectureNodes.map((node) => {
              const isSelected = activeStep.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveStep(node)}
                  data-interactive="true"
                  data-cursor-label="INSPECT"
                  className={`p-3.5 sm:p-4 text-left transition-all duration-300 border rounded-md flex flex-col justify-between gap-2 relative ${
                    isSelected
                      ? 'border-white/50 bg-white/[0.1] text-white shadow-md'
                      : 'border-white/5 bg-black/40 text-white/50 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-tech">
                    <span className="text-white/40">STEP {node.step}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </div>
                  <span className="font-display font-semibold text-xs sm:text-[13px] uppercase tracking-tight text-white line-clamp-1">
                    {node.name.split('&')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Layer Technical Blueprint */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border border-white/10 bg-black/40 rounded-lg p-6 sm:p-10 flex flex-col gap-8 relative overflow-hidden"
          >
            {/* Top Spec Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-tech text-white/40">LAYER {activeStep.step}</span>
                <span className="text-white/20">|</span>
                <h3 className="font-display font-semibold text-lg sm:text-xl uppercase tracking-tight text-white">
                  {activeStep.name}
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono-tech">
                <span className="text-white/40">THROUGHPUT:</span>
                <span className="text-white font-medium">{activeStep.throughput}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-white/70 leading-[1.7] max-w-3xl font-normal">
              {activeStep.shortDesc}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeStep.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 border border-white/5 bg-[#080808] rounded text-xs font-mono-tech text-white/80"
                >
                  <span className="text-white/40 font-mono-tech">[{idx + 1}]</span>
                  <span className="font-normal">{spec}</span>
                </div>
              ))}
            </div>

            {/* Telemetry Benchmarks */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 text-xs font-mono-tech">
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[9.5px] uppercase tracking-wider">PIPELINE LATENCY</span>
                <span className="text-base sm:text-lg font-semibold text-white">{activeStep.telemetry.latency}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[9.5px] uppercase tracking-wider">SYSTEM AVAILABILITY</span>
                <span className="text-base sm:text-lg font-semibold text-emerald-400">{activeStep.telemetry.uptime}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white/40 text-[9.5px] uppercase tracking-wider">ERROR MARGIN</span>
                <span className="text-base sm:text-lg font-semibold text-white">{activeStep.telemetry.errorRate}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

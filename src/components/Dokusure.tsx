import React, { useState } from 'react';
import { DokusureDocument } from '../types';
import { FileText, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Download, RefreshCw, Cpu, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sampleDocs: DokusureDocument[] = [
  {
    id: 'bol-01',
    name: 'BILL_OF_LADING_MSKU7829104.pdf',
    type: 'Bill of Lading (B/L)',
    size: '1.4 MB',
    status: 'validated',
    paarRiskScore: 2,
    hsCode: '8471.30.0000',
    fields: [
      { label: 'CONSIGNEE', value: 'TRANS-SAHARA LOGISTICS LTD, APAPA LAGOS', confidence: 99.8, flag: 'verified' },
      { label: 'VESSEL / VOYAGE', value: 'MAERSK COTONOU / V.2604', confidence: 99.9, flag: 'match' },
      { label: 'PORT OF DISCHARGE', value: 'APMT APAPA CONTAINER TERMINAL (NGAPP)', confidence: 99.7, flag: 'verified' },
      { label: 'CONTAINER NO.', value: 'MSKU-481920-4 / 40FT HC', confidence: 99.9, flag: 'verified' },
      { label: 'GROSS WEIGHT', value: '24,650.00 KG', confidence: 99.4, flag: 'match' },
    ],
  },
  {
    id: 'inv-02',
    name: 'COMMERCIAL_INVOICE_CI-2026-991.pdf',
    type: 'Commercial Invoice & CCVO',
    size: '890 KB',
    status: 'validated',
    paarRiskScore: 0,
    hsCode: '8471.30.0000',
    fields: [
      { label: 'INVOICE NUMBER', value: 'INV-2026-SH-99120', confidence: 99.9, flag: 'verified' },
      { label: 'FOB VALUE', value: 'USD 128,400.00', confidence: 99.8, flag: 'match' },
      { label: 'FREIGHT CHARGES', value: 'USD 9,600.00', confidence: 99.6, flag: 'match' },
      { label: 'INSURANCE VALUE', value: 'USD 4,500.00', confidence: 99.5, flag: 'match' },
      { label: 'TOTAL CIF VALUE', value: 'USD 142,500.00 (EXACT)', confidence: 99.9, flag: 'match' },
    ],
  },
  {
    id: 'formm-03',
    name: 'FORM_M_CBN_MF202600984.pdf',
    type: 'CBN Form M & Insurance',
    size: '1.1 MB',
    status: 'validated',
    paarRiskScore: 1,
    hsCode: '8471.30.0000',
    fields: [
      { label: 'FORM M NUMBER', value: 'MF20260098412-CBN', confidence: 99.9, flag: 'verified' },
      { label: 'AUTHORIZED DEALER', value: 'ACCESS BANK PLC // COMMERCIAL DIV', confidence: 99.7, flag: 'verified' },
      { label: 'PAAR PRE-APPROVAL', value: 'CONFIRMED // ZERO DISCREPANCY', confidence: 99.8, flag: 'verified' },
      { label: 'DUTY ESTIMATE (NCS)', value: '₦ 24,937,500.00 (5% DUTY + VAT)', confidence: 99.4, flag: 'verified' },
    ],
  },
];

interface DokusureProps {
  onOpenContact: () => void;
}

export const Dokusure: React.FC<DokusureProps> = ({ onOpenContact }) => {
  const [activeDoc, setActiveDoc] = useState<DokusureDocument>(sampleDocs[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [exported, setExported] = useState(false);

  const handleSimulateExtraction = (doc: DokusureDocument) => {
    setActiveDoc(doc);
    setIsProcessing(true);
    setExported(false);
    setTimeout(() => {
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section 
      id="dokusure" 
      className="relative min-h-screen w-full flex flex-col justify-center py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10"
    >
      {/* Background Radial Dots */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-14 relative z-10">
        {/* Section Label & Deployment Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase">
              03 / FIRST DEPLOYMENT
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[9.5px] font-mono-tech text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium tracking-wider">CURRENTLY DEPLOYING // NIGERIA CUSTOMS & PORTS</span>
          </div>
        </div>

        {/* Huge Headline & Mission Scope */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-3xl">
            <div className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">
              PRODUCT // 001
            </div>
            <h2 className="font-display font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-[-0.035em] uppercase text-white leading-none">
              DOKUSURE
            </h2>
            <h3 className="font-display font-medium text-lg sm:text-xl lg:text-2xl uppercase tracking-tight text-white/80">
              INTELLIGENCE FOR CUSTOMS DOCUMENTATION.
            </h3>
            <p className="text-[14px] sm:text-[15.5px] text-white/60 font-normal leading-[1.7] mt-2">
              Automating the extraction, cross-document validation, and PAAR (Pre-Arrival Assessment Report) preparation for freight forwarders and clearing agents in Nigeria. Turning hours of manual inspection into instant, error-free clearance packets.
            </p>
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <button
              id="dokusure-contact-cta"
              onClick={onOpenContact}
              data-interactive="true"
              data-cursor-label="DEPLOY"
              className="text-[10.5px] font-mono-tech tracking-[0.2em] font-medium border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all text-white flex items-center gap-2 uppercase"
            >
              <span>REQUEST PILOT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sophisticated Operational System Visualizer */}
        <div className="border border-white/10 bg-[#080808] rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col gap-8 relative overflow-hidden">
          {/* Top Operational Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono-tech text-white/60">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">DOKUSURE ENGINE V2.4</span>
              <span className="text-white/30">|</span>
              <span>PAAR VALIDATOR: ACTIVE</span>
              <span className="text-white/30">|</span>
              <span className="text-emerald-400">NCS SINGLE-WINDOW COMPLIANT</span>
            </div>
            <div className="flex items-center gap-4 text-white/40">
              <span>ACCURACY: 99.87%</span>
              <span className="text-white/20">|</span>
              <span>PORTS: APAPA, TINCAN, ONNE</span>
            </div>
          </div>

          {/* Document Ingestion & Validation Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Document Queue / Ingestion Feed */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                INGESTED TRADE PACKET:
              </span>

              {sampleDocs.map((doc) => {
                const isSelected = activeDoc.id === doc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => handleSimulateExtraction(doc)}
                    data-interactive="true"
                    data-cursor-label="SELECT"
                    className={`w-full text-left p-4 border rounded-lg transition-all duration-300 flex flex-col gap-2 relative ${
                      isSelected
                        ? 'border-white/40 bg-white/[0.08] text-white'
                        : 'border-white/10 bg-black/40 text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono-tech">
                      <span className="font-semibold text-white/90 truncate max-w-[200px]">{doc.type}</span>
                      <span className="text-white/40">{doc.size}</span>
                    </div>
                    <div className="text-[10px] font-mono-tech text-white/40 truncate">
                      {doc.name}
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono-tech">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>OCR PARSED</span>
                      </span>
                      <span className="text-white/60">HS: {doc.hsCode}</span>
                    </div>
                  </button>
                );
              })}

              <div className="p-4 border border-dashed border-white/15 bg-black/20 rounded-lg flex flex-col items-center justify-center gap-2 text-center text-xs text-white/50 mt-2">
                <FileText className="w-5 h-5 text-white/40" />
                <span className="font-light">Drag & drop shipping documents (PDF, TIFF, Scan)</span>
                <span className="text-[10px] font-mono-tech text-white/30">Auto-classified & sanitized</span>
              </div>
            </div>

            {/* Right: Real-Time Extracted Structured Fields & PAAR Gate */}
            <div className="lg:col-span-8 border border-white/10 bg-black/40 rounded-lg p-6 sm:p-8 flex flex-col gap-6 relative">
              {/* Header Status */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-white/70" />
                  <span className="text-xs font-mono-tech text-white uppercase font-semibold">
                    EXTRACTED DATA SCHEMA // {activeDoc.type}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono-tech">
                  <span className="text-white/40">CONFIDENCE:</span>
                  <span className="text-emerald-400 font-bold">99.8% HIGH</span>
                </div>
              </div>

              {/* Extraction Fields */}
              <div className="flex flex-col gap-3 min-h-[220px] justify-center">
                {isProcessing ? (
                  <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                    <RefreshCw className="w-6 h-6 text-white animate-spin" />
                    <span className="text-xs font-mono-tech text-white/60">
                      NEURAL OCR EXTRACTION & FIELD SANITIZATION IN PROGRESS...
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    {activeDoc.fields.map((field, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-2 p-3 bg-[#080808] border border-white/5 rounded items-center text-xs font-mono-tech"
                      >
                        <span className="sm:col-span-4 text-white/40 uppercase tracking-wider text-[10px]">
                          {field.label}
                        </span>
                        <span className="sm:col-span-6 text-white font-medium truncate font-light">
                          {field.value}
                        </span>
                        <div className="sm:col-span-2 flex items-center justify-end gap-1.5 text-emerald-400 text-[10px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{field.confidence}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* PAAR Assessment Bar & Export Output */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs font-mono-tech">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/80">PAAR RISK INDEX: ZERO DISCREPANCY DETECTED</span>
                </div>

                <button
                  onClick={() => setExported(true)}
                  data-interactive="true"
                  data-cursor-label="EXPORT"
                  className="bg-white text-black px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{exported ? 'PACKET VERIFIED ✓' : 'EXPORT PAAR READY FILE'}</span>
                </button>
              </div>

              {exported && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-tech flex items-center justify-between rounded">
                  <span>PACKET EXPORTED // READY FOR NIGERIA CUSTOMS PORTAL SUBMISSION</span>
                  <span className="underline cursor-pointer" onClick={() => setExported(false)}>DISMISS</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

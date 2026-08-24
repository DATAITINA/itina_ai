import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Copy, Sparkles, Send } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    organization: '',
    email: '',
    sector: 'Logistics & Trade',
    problemScope: '',
    timeline: 'Immediate (1-3 months)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@itina.ai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen w-full flex flex-col justify-between py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-t border-white/10 bg-[#050505] text-[#F5F5F5] z-10"
    >
      {/* Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#F5F5F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Header */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pb-6 border-b border-white/10 text-[9.5px] font-mono-tech tracking-[0.3em] text-white/40 uppercase relative z-10">
        <span>09 / ENGAGEMENT</span>
        <span className="text-[9.5px] font-mono-tech text-white/30 tracking-[0.2em]">RESEARCH & COMMERCIAL INQUIRIES</span>
      </div>

      {/* Center Cinematic Layout */}
      <div className="w-full max-w-7xl mx-auto my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Headline & Direct Email */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-display font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] tracking-[-0.035em] uppercase text-white leading-none">
              BUILD
              <br />
              WITH US.
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-normal leading-relaxed">
              Have a hard problem worth solving?
            </p>
            <p className="text-[13.5px] sm:text-[14.5px] text-white/60 font-normal leading-[1.7] max-w-lg">
              We partner with enterprise leaders, logistics operators, industrial manufacturers, and forwarders who want to deploy intelligent systems that generate measurable ROI.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="p-6 rounded-lg border border-white/10 bg-[#080808] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white/60" />
              <div className="flex flex-col">
                <span className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase">DIRECT INQUIRIES</span>
                <span className="font-mono-tech text-white font-medium text-base sm:text-lg">hello@itina.ai</span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              data-interactive="true"
              data-cursor-label="COPY"
              className="text-[10.5px] font-mono-tech tracking-[0.2em] font-medium border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all text-white flex items-center gap-2 uppercase"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'COPIED' : 'COPY'}</span>
            </button>
          </div>
        </div>

        {/* Right Interactive Ingestion Form */}
        <div className="lg:col-span-6 border border-white/10 bg-black/40 rounded-lg p-8 sm:p-10 relative">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-2xl uppercase tracking-tight text-white">
                TRANSMISSION RECEIVED
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-md font-mono-tech">
                Our engineering team will review your problem scope and reach out to {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-[10.5px] font-mono-tech tracking-[0.2em] font-medium border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all text-white uppercase"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="text-[9.5px] font-mono-tech tracking-[0.25em] text-white/40 uppercase pb-3 border-b border-white/10">
                START A CONVERSATION // SYSTEM SPECIFICATION
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="David Adeleke"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded px-4 py-2.5 text-xs font-mono-tech text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    placeholder="Trans-Sahara Logistics"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded px-4 py-2.5 text-xs font-mono-tech text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                    WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded px-4 py-2.5 text-xs font-mono-tech text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                    SECTOR / DOMAIN
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full bg-[#080808] border border-white/10 rounded px-4 py-2.5 text-xs font-mono-tech text-white focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="Logistics & Trade">Logistics & Trade (Dokusure)</option>
                    <option value="Enterprise Workflows">Enterprise Workflows</option>
                    <option value="Finance & Banking">Finance & Banking</option>
                    <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                    <option value="Energy & Utilities">Energy & Utilities</option>
                    <option value="Insurance & Claims">Insurance & Claims</option>
                    <option value="Legal & Regulatory">Legal & Regulatory</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other High-Value Problem">Other High-Value Problem</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9.5px] font-mono-tech text-white/40 uppercase tracking-wider">
                  PROBLEM BOTTLENECK & SYSTEM OBJECTIVE
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the expensive, repeated, or manual friction your organization needs to eliminate..."
                  value={formData.problemScope}
                  onChange={(e) => setFormData({ ...formData, problemScope: e.target.value })}
                  className="w-full bg-[#080808] border border-white/10 rounded p-4 text-xs font-mono-tech text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-interactive="true"
                data-cursor-label="TRANSMIT"
                className="w-full py-3.5 rounded-xs bg-white text-black font-medium font-mono-tech text-[11px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Coordinates */}
      <div className="w-full max-w-7xl mx-auto pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono-tech text-white/30 relative z-10">
        <span>SECURITY: ENCRYPTED TRANSMISSION</span>
        <span>ITINA AI SYSTEM DISPATCH</span>
      </div>
    </section>
  );
};

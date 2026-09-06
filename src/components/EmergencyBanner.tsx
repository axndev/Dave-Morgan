import React from 'react';
import { Phone, ArrowRight, AlertCircle, Clock } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenQuote: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white py-14 sm:py-18 overflow-hidden border-y border-blue-800/40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-5">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span>Priority Emergency Assistance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Need Plumbing or Electrical Help?
        </h2>

        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We&apos;re here to help with reliable service when you need it.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Request Service</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:[PHONE NUMBER]"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 hover:border-white/30 transition-all backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call Now: [PHONE NUMBER]</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Clock className="w-4 h-4 text-blue-300" />
          <span>Prompt dispatch for water leaks, power failures &amp; critical issues</span>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PhoneCall, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuote: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      desc: 'Tell us what service you need. Reach out via our quick quote request form or give us a direct phone call.',
      icon: PhoneCall,
      highlight: 'Tell us what service you need.',
    },
    {
      step: '02',
      title: 'Get a Quote',
      desc: "We'll discuss the job and provide a quote. We clarify requirements, assess scope, and outline straightforward options.",
      icon: FileSpreadsheet,
      highlight: "We'll discuss the job and provide a quote.",
    },
    {
      step: '03',
      title: 'Get the Job Done',
      desc: 'Our team completes the work professionally. On-time arrival, tidy workmanship, and thorough testing before sign-off.',
      icon: CheckCircle2,
      highlight: 'Our team completes the work professionally.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Simple &amp; Seamless</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Hiring a skilled plumber or electrician should be straightforward. Our simple 3-step process gets your project scheduled and resolved with minimum disruption.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-400 font-mono tracking-wider">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-amber-300/90 text-xs font-semibold uppercase tracking-wider mb-3">
                    {item.highlight}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-600">
                    {/* Visual spacer */}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuote}
            type="button"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow transition-colors cursor-pointer"
          >
            <span>Start Step 1: Request Your Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Check, ShieldCheck, HeartHandshake, Award, Phone } from 'lucide-react';
import daveMorganPhoto from '../assets/images/dave_morgan_1788707726146-DKM7XNmL.jpg';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Owner Image Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-amber-500 rounded-3xl opacity-20 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                <img
                  src={daveMorganPhoto}
                  alt="Dave Morgan, Owner of Dave Morgan Plumbing & Electrical"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-square object-cover object-top"
                />

                {/* Owner Tag Card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-extrabold text-white">Dave Morgan</h4>
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-0.5">
                        Owner &amp; Lead Contractor
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/60 border border-blue-400/40 flex items-center justify-center text-amber-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct call badge */}
              <div className="mt-4 p-4 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Direct Inquiries
                    </span>
                    <span className="text-sm font-bold text-slate-900">[PHONE NUMBER]</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Local Owner
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span>Meet the Owner</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Professional Service. Quality Work. Peace of Mind.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Welcome to <strong>Dave Morgan Plumbing &amp; Electrical</strong>. As the owner, Dave Morgan brings a personal, hands-on commitment to every residential home and commercial property we serve.
              </p>
              <p>
                Our company provides dependable plumbing and electrical services with an uncompromising focus on quality workmanship, honest communication, and customer satisfaction. We believe that dealing with home utilities shouldn’t be stressful—you deserve upfront clarity, reliable scheduling, and repairs completed correctly the very first time.
              </p>
              <p className="text-sm text-slate-600">
                Whether you need urgent leak mitigation, circuit breaker repairs, or planned system installations, our goal is to deliver durable craftsmanship and genuine peace of mind.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-2.5">
                  <Award className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm text-slate-900">Quality Workmanship</h5>
                <p className="mt-1 text-xs text-slate-600">
                  Precision installation using trusted trade materials and proven code practices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm text-slate-900">Honest Communication</h5>
                <p className="mt-1 text-xs text-slate-600">
                  Straightforward assessments, transparent pricing, and clear timelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-sm text-slate-900">Customer Satisfaction</h5>
                <p className="mt-1 text-xs text-slate-600">
                  Clean job sites, courteous service, and lasting reliability on every job.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                type="button"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors cursor-pointer"
              >
                Schedule with Dave
              </button>
              <a
                href="#services"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

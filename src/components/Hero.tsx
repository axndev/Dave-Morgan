import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle, Clock, Home, Building2 } from 'lucide-react';
import heroBgImage from '../assets/images/hero_work_1788707746761.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const trustPoints = [
    { label: 'Reliable Service', icon: ShieldCheck },
    { label: 'Experienced Professionals', icon: CheckCircle },
    { label: 'Quality Work', icon: Clock },
    { label: 'Residential & Commercial', icon: Building2 },
  ];

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Professional plumber and electrician working on property maintenance"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-blue-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-3xl">
          {/* Eyebrow / Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Serving [SERVICE AREA] & Surrounding Communities</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none mb-6">
            Reliable Plumbing &amp; Electrical Services <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-amber-300">
              You Can Count On
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Professional plumbing and electrical solutions for homes and businesses. Fast, reliable service from experienced professionals.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-14">
            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-amber-500/50 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:[PHONE NUMBER]"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700 hover:border-slate-600 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call Now: [PHONE NUMBER]</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-slate-800/80">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {trustPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

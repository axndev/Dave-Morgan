import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  Building2,
  Zap,
  Smile,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Reliable & Professional',
      desc: 'Prompt arrival times, uniformed professionalism, and dependable service you can trust inside your home or commercial building.',
      icon: ShieldCheck,
      color: 'blue',
    },
    {
      title: 'Quality Workmanship',
      desc: 'Meticulous attention to detail with premium components and strict adherence to current plumbing and electrical safety codes.',
      icon: CheckCircle,
      color: 'amber',
    },
    {
      title: 'Honest Communication',
      desc: 'Clear, straightforward explanations of what needs repair without unnecessary upselling or unexpected surprises.',
      icon: MessageSquare,
      color: 'blue',
    },
    {
      title: 'Residential & Commercial Service',
      desc: 'Equipped to manage household fixture repairs, residential renovations, and active commercial facilities seamlessly.',
      icon: Building2,
      color: 'amber',
    },
    {
      title: 'Fast Response',
      desc: 'Prompt scheduling and rapid emergency assistance when sudden plumbing leaks or power outages strike.',
      icon: Zap,
      color: 'blue',
    },
    {
      title: 'Customer-Focused Service',
      desc: 'We treat your property with complete care, keep work areas clean, and ensure you are 100% satisfied before we wrap up.',
      icon: Smile,
      color: 'amber',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Why Dave Morgan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Dave Morgan Plumbing &amp; Electrical?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Combining experienced plumbing and electrical capabilities under one roof means fewer contractors to manage, consistent quality, and trusted results.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            const isBlue = pt.color === 'blue';
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isBlue
                      ? 'bg-blue-100 text-blue-800 group-hover:bg-blue-700 group-hover:text-white'
                      : 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-slate-950'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

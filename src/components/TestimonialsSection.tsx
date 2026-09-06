import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { PLACEHOLDER_TESTIMONIALS } from '../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client Testimonials &amp; Reviews
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our goal on every service call is earning a 5-star customer experience through honest communication, prompt timing, and skilled execution.
          </p>

          {/* Placeholder Transparency Notice */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Note: The testimonials below are placeholders structured for future verified client reviews once collected by the business.
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header / Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                    Placeholder
                  </span>
                </div>

                {/* Service Tag */}
                <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-4">
                  {item.serviceTag}
                </span>

                {/* Review text */}
                <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                  {item.quote}
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.clientType}</h4>
                  <span className="text-xs text-slate-500">[Client Location Placeholder]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

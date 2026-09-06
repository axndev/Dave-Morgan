import React, { useState } from 'react';
import { Wrench, Zap, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { PLUMBING_SERVICES, ELECTRICAL_SERVICES } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';
import { ServiceIcon } from './ServiceIcon';
import plumbingImg from '../assets/images/plumbing_work_1788707766897.jpg';
import electricalImg from '../assets/images/electrical_work_1788707793927.jpg';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Specialized Trade Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Complete Plumbing &amp; Electrical Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From emergency repairs to scheduled maintenance and system upgrades, we deliver clean, compliant, and durable trade work for residential homes and commercial businesses.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Services ({PLUMBING_SERVICES.length + ELECTRICAL_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab('plumbing')}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'plumbing'
                  ? 'bg-blue-700 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>Plumbing Services ({PLUMBING_SERVICES.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('electrical')}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'electrical'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Electrical Services ({ELECTRICAL_SERVICES.length})</span>
            </button>
          </div>
        </div>

        {/* Category 1: Plumbing Services */}
        {(activeTab === 'all' || activeTab === 'plumbing') && (
          <div className="mb-20">
            {/* Category Lead Banner */}
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative mb-8">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Wrench className="w-3.5 h-3.5 text-amber-400" />
                    <span>Residential &amp; Commercial Plumbing</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Dependable Plumbing Services
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Protect your property from water damage, poor water quality, and high utility bills. We handle urgent leak repairs, whole-house repiping, water heater service, and preventative drain clearing.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Fast Emergency Response
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Clean Workmanship Guarantee
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Upfront Transparent Quotes
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-video lg:aspect-4/3">
                    <img
                      src={plumbingImg}
                      alt="Professional plumbing craftsmanship and clean copper pipe installation"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-medium text-white/90">
                        Pristine pipework &amp; fixture installation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plumbing Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PLUMBING_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors mb-4">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 group-hover:underline cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-medium text-slate-400">Plumbing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Electrical Services */}
        {(activeTab === 'all' || activeTab === 'electrical') && (
          <div>
            {/* Category Lead Banner */}
            <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative mb-8">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Residential &amp; Commercial Electrical</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Safe, Certified Electrical Services
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Electrical systems power modern life but demand strict precision and safety standards. From circuit panel upgrades to wiring, lighting, and troubleshooting, we ensure code compliance and total reliability.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Strict Safety Compliance
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Certified Precision Troubleshooting
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-amber-400" /> Clean Panel &amp; Circuit Work
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-video lg:aspect-4/3">
                    <img
                      src={electricalImg}
                      alt="Electrician testing circuit breaker panel with multimeter"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-xs font-medium text-white/90">
                        Certified panel diagnostics &amp; breaker tuning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electrical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ELECTRICAL_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-amber-500 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors mb-4">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-900 group-hover:underline cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-medium text-slate-400">Electrical</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Bottom Action Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <span className="text-sm font-medium text-slate-700">
              Have a custom project or need combined plumbing and electrical work?
            </span>
            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

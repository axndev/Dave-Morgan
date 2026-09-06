import React from 'react';
import { X, Check, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string, category: 'plumbing' | 'electrical') => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-amber-400">
              <ServiceIcon name={service.iconName} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                {service.category === 'plumbing' ? 'Plumbing Solution' : 'Electrical Solution'}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{service.details}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Common Signs You Need This Service
            </h4>
            <ul className="space-y-2">
              {service.commonIssues.map((issue, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs mb-1">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Need Immediate Assistance?</span>
            </div>
            <p className="text-xs text-slate-600">
              Speak directly with Dave Morgan for prompt scheduling or emergency guidance:
            </p>
            <a
              href="tel:[PHONE NUMBER]"
              className="inline-block mt-2 font-bold text-blue-800 text-sm hover:underline"
            >
              [PHONE NUMBER]
            </a>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onBookService(service.title, service.category);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-lg shadow transition-colors"
          >
            <span>Request Quote for This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

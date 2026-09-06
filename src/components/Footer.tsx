import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  ShieldCheck,
  X,
} from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-slate-900 flex items-center justify-center border border-blue-500/30 text-amber-400">
                <Wrench className="w-5 h-5 -rotate-45" />
                <Zap className="w-4 h-4 -ml-1 text-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white block leading-tight">
                  Dave Morgan
                </span>
                <span className="text-xs font-bold tracking-wider uppercase text-blue-400">
                  Plumbing &amp; Electrical
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Reliable plumbing and electrical services for homes and businesses. Dedicated to quality workmanship, honest communication, and customer satisfaction.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Connect With Us:
              </span>
              <div className="flex items-center gap-2">
                {['Facebook', 'Google Business', 'Nextdoor', 'Yelp'].map((platform) => (
                  <span
                    key={platform}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Dave Morgan
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Quotes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Plumbing & Electrical Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-300 transition-colors">
                  Emergency Plumbing &amp; Leak Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300 transition-colors">
                  Water Heater &amp; Drain Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-300 transition-colors">
                  Pipe Repair &amp; Repiping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Electrical Panel &amp; Breaker Upgrades
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Wiring, Outlets &amp; GFCI Safety
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Interior &amp; Exterior Lighting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Information
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:[PHONE NUMBER]" className="hover:text-white font-semibold">
                  [PHONE NUMBER]
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:[EMAIL ADDRESS]" className="hover:text-white">
                  [EMAIL ADDRESS]
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Service Area: [SERVICE AREA]</span>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Business Hours:</span>
                  <span className="text-xs text-slate-400">Mon–Sat: [BUSINESS HOURS]</span>
                  <span className="text-xs text-amber-400 block mt-0.5">
                    Emergency Dispatch Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Tag Bar */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-slate-400">Local Service Specialties: </span>
            <span>
              local plumber &bull; plumbing services &bull; local electrician &bull; electrical services &bull; emergency plumber &bull; electrical repair &bull; plumbing repair &bull; residential &bull; commercial
            </span>
          </div>
          <div>
            <button
              onClick={onOpenQuote}
              className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Request Free Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Dave Morgan Plumbing &amp; Electrical. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 text-slate-200 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs space-y-3 max-h-72 overflow-y-auto pr-2 text-slate-300 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Dave Morgan Plumbing &amp; Electrical respects your privacy. We only collect necessary contact information (name, phone number, email address, property location) submitted through our quote forms or phone inquiries to provide service estimates and schedule trade services.
                  </p>
                  <p>
                    We never sell, rent, or trade your personal information to external marketers or third parties. All client records are maintained securely.
                  </p>
                  <p>
                    For inquiries regarding your stored information, please contact us at [EMAIL ADDRESS].
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By engaging Dave Morgan Plumbing &amp; Electrical for service assessments or trade work, you agree that estimates are provided based on visible diagnostic conditions at the time of inspection.
                  </p>
                  <p>
                    All plumbing and electrical services are performed following applicable local safety and building codes. Workmanship warranties apply to specified repairs and installations as detailed in your written invoice.
                  </p>
                  <p>
                    For questions regarding service terms or scheduled appointments, call [PHONE NUMBER].
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

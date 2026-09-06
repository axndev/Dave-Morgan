import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Wrench, Zap, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Emergency Service Available
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Mon–Sat: [BUSINESS HOURS]
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Serving [SERVICE AREA]
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:[PHONE NUMBER]"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition-colors"
              title="Call Dave Morgan Plumbing & Electrical"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now: [PHONE NUMBER]</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-md py-3 text-white'
            : 'bg-white py-4 shadow-sm text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-700 to-slate-900 flex items-center justify-center shadow-inner relative overflow-hidden border border-blue-600/30">
              <div className="flex items-center justify-center text-amber-400">
                <Wrench className="w-5 h-5 -rotate-45" />
                <Zap className="w-4 h-4 -ml-1 text-amber-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-base sm:text-lg tracking-tight leading-tight ${
                  isScrolled ? 'text-white' : 'text-slate-900'
                }`}
              >
                Dave Morgan
              </span>
              <span
                className={`text-xs font-semibold tracking-wider uppercase ${
                  isScrolled ? 'text-blue-300' : 'text-blue-700'
                }`}
              >
                Plumbing & Electrical
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:[PHONE NUMBER]"
              className={`hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg border transition-all ${
                isScrolled
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>[PHONE NUMBER]</span>
            </a>

            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-amber-400"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right CTAs (Call Now + Menu Toggle) */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:[PHONE NUMBER]"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg ${
                isScrolled
                  ? 'text-white hover:bg-slate-800'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 text-white px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center text-sm shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:[PHONE NUMBER]"
                className="w-full py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-center text-sm transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now: [PHONE NUMBER]</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

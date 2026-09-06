import React from 'react';
import { Phone, FileText } from 'lucide-react';

interface MobileActionBarProps {
  onOpenQuote: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl flex items-center gap-3">
      <a
        href="tel:[PHONE NUMBER]"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs tracking-wide border border-slate-700 active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>Call: [PHONE NUMBER]</span>
      </a>

      <button
        onClick={onOpenQuote}
        type="button"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span>Get Free Quote</span>
      </button>
    </div>
  );
};

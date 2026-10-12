import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

interface NavbarProps {
  onGoHome: () => void;
  activeView: 'home' | 'bank';
}

export const Navbar: React.FC<NavbarProps> = ({ onGoHome, activeView }) => {
  return (
    <header className="border-b border-stone-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Brand Logo */}
        <div
          onClick={onGoHome}
          className="flex items-center gap-2 cursor-pointer select-none group min-w-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-extrabold text-xs sm:text-sm tracking-tight shadow-2xs group-hover:bg-stone-800 transition-colors shrink-0">
            MP
          </div>
          <div className="truncate">
            <span className="font-extrabold text-sm sm:text-lg text-stone-900 tracking-tight">
              meilleurparrainage<span className="text-stone-400 font-medium">.com</span>
            </span>
          </div>
        </div>

        {/* Minimal Navigation & Trust indicator */}
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Offres bancaires 100% vérifiées</span>
          </div>

          <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[10px] sm:text-xs font-semibold whitespace-nowrap">
            <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
            <span>Jusqu'à 600 €</span>
          </div>
        </div>
      </div>
    </header>
  );
};

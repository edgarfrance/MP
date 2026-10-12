import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

interface NavbarProps {
  onGoHome: () => void;
  activeView: 'home' | 'bank';
}

export const Navbar: React.FC<NavbarProps> = ({ onGoHome, activeView }) => {
  return (
    <header className="border-b border-stone-200 bg-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={onGoHome}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-extrabold text-sm tracking-tight shadow-2xs group-hover:bg-stone-800 transition-colors">
            MP
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg text-stone-900 tracking-tight">
                meilleurparrainage<span className="text-stone-400 font-medium">.com</span>
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Navigation & Trust indicator */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Offres bancaires 100% vérifiées</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Jusqu'à 600 € cumulables</span>
          </div>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-16 pb-6 sm:pb-12 border-b border-stone-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center">
        {/* Subtle trust pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="leading-tight">Barème officiel & primes bancaires vérifiées • Édition 2026</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight sm:leading-[1.15]">
          Les meilleures offres de parrainage bancaire en France
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-lg text-stone-500 mt-2.5 sm:mt-4 max-w-2xl mx-auto leading-relaxed">
          Sélection indépendante des primes à l'ouverture de compte. Comparez les conditions réelles, simulez vos gains et débloquez votre prime en quelques clics.
        </p>

        {/* Reassuring micro-badges */}
        <div className="mt-5 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Aucun frais caché</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Banques agréées ACPR / BdF</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>Primes nettes d'impôt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

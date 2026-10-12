import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-stone-200/80 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle trust pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Barème officiel & primes bancaires vérifiées • Édition 2026</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
          Les meilleures offres de parrainage bancaire en France
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          Sélection indépendante des primes à l'ouverture de compte. Comparez les conditions réelles, simulez vos gains et débloquez votre prime en quelques clics.
        </p>

        {/* Reassuring micro-badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400" />
            <span>Aucun frais caché</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400" />
            <span>Banques agréées ACPR / Banque de France</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-stone-400" />
            <span>Primes nettes d'impôt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

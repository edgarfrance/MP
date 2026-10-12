import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface BoursoSimulatorProps {
  onApplyCode?: () => void;
  brandColor?: string;
}

export const BoursoSimulator: React.FC<BoursoSimulatorProps> = ({ brandColor = '#E2007A' }) => {
  // Predefined tiers: 1€ -> 90€, 50€ -> 120€, 300€ -> 160€
  const [deposit, setDeposit] = useState<number>(300);
  const [hasMobility, setHasMobility] = useState<boolean>(true);

  // Calculate instant bonus according to exact rule
  const getInstantBonus = (amount: number) => {
    if (amount >= 300) return 160;
    if (amount >= 50) return 120;
    return 90; // for amount >= 1
  };

  const instantBonus = getInstantBonus(deposit);
  const threeMonthsBonus = 80;
  const mobilityBonus = hasMobility ? 80 : 0;
  const totalBonus = instantBonus + threeMonthsBonus + mobilityBonus;

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-3.5 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Simulateur Officiel BoursoBank
          </div>
          <h3 className="text-base sm:text-xl font-bold text-stone-900 tracking-tight leading-snug">
            Calculez votre prime personnalisée
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 leading-relaxed">
            Ajustez votre 1<sup>er</sup> dépôt et cochez la mobilité bancaire pour voir votre gain direct.
          </p>
        </div>

        {/* Big Live Total Display */}
        <div className="bg-stone-50 rounded-xl p-3 sm:p-4 text-left sm:text-right border border-stone-100 w-full sm:w-auto sm:min-w-[180px]">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-semibold block">
            Prime totale estimée
          </span>
          <div className="flex items-baseline sm:justify-end gap-1.5 mt-0.5">
            <span className="text-2xl sm:text-4xl font-extrabold text-stone-900 font-num tracking-tight" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
            <span className="text-xs text-stone-500 font-medium">net d'impôts</span>
          </div>
        </div>
      </div>

      <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-8">
        {/* Slider & Quick Tier selector */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5 sm:mb-3">
            <label className="text-xs sm:text-sm font-semibold text-stone-800 flex items-center gap-2">
              <span>Montant de votre 1<sup>er</sup> dépôt :</span>
              <span className="font-num text-xs sm:text-base font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-900">
                {deposit} €
              </span>
            </label>
            <span className="text-[11px] text-stone-400">Palier : {deposit >= 300 ? '300€+' : deposit >= 50 ? '50€ - 299€' : '1€ - 49€'}</span>
          </div>

          {/* Quick buttons */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">
            {[
              { val: 1, label: '1 € (Mini)', bonus: '90€ direct' },
              { val: 50, label: '50 €', bonus: '120€ direct' },
              { val: 300, label: '300 € (Max)', bonus: '160€ direct' },
            ].map((tier) => (
              <button
                key={tier.val}
                type="button"
                onClick={() => setDeposit(tier.val)}
                className={`p-1.5 sm:py-2.5 sm:px-3 rounded-xl text-center sm:text-left border transition-all cursor-pointer ${
                  deposit === tier.val
                    ? 'border-pink-500 bg-pink-50/50 text-stone-900 font-semibold shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 text-stone-600'
                }`}
              >
                <div className="font-semibold text-stone-900 text-[11px] sm:text-sm truncate">{tier.label}</div>
                <div className="text-[9.5px] sm:text-[11px] text-pink-700 font-medium mt-0.5 leading-tight">{tier.bonus}</div>
              </button>
            ))}
          </div>

          <div className="relative pt-2">
            <input
              type="range"
              min="1"
              max="500"
              step="1"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E2007A]"
            />
            <div className="flex justify-between text-[10px] sm:text-[11px] text-stone-400 mt-2 font-num">
              <span>1 €</span>
              <span>50 €</span>
              <span>300 €</span>
              <span>500 €</span>
            </div>
          </div>
          <p className="text-[11px] sm:text-xs text-stone-500 mt-2 italic leading-relaxed">
            Ce dépôt n'est pas bloqué : il arrive sur votre compte BoursoBank et reste 100% disponible.
          </p>
        </div>

        {/* Mobility Bank Checkbox */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 sm:p-5">
          <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasMobility}
              onChange={(e) => setHasMobility(e.target.checked)}
              className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded border-stone-300 text-[#E2007A] focus:ring-[#E2007A] accent-[#E2007A] cursor-pointer shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                  Activer la mobilité bancaire EasyMove
                </span>
                <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 shrink-0">
                  +80 € offerts
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-relaxed">
                BoursoBank s'occupe de transférer vos prélèvements (ex : mobile, électricité) gratuitement sans démarche de votre part.
              </p>
            </div>
          </label>
        </div>

        {/* Detailed Breakdown */}
        <div className="border border-stone-100 bg-stone-50/50 rounded-xl p-3 sm:p-5 space-y-2.5 sm:space-y-3">
          <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-400">
            Détail précis de versement :
          </h4>

          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start justify-between gap-2 py-1 border-b border-stone-100">
              <span className="text-stone-600 flex items-start gap-1.5 sm:gap-2 min-w-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">Prime d'ouverture (dépôt {deposit}€) :</span>
              </span>
              <span className="font-bold text-stone-900 font-num text-xs sm:text-sm shrink-0 whitespace-nowrap">{instantBonus} €</span>
            </div>

            {/* Monthly 80€ breakdown (20€ + 30€ + 30€) */}
            <div className="py-2 px-2.5 sm:py-2.5 sm:px-3 bg-stone-50 rounded-xl border border-stone-100 space-y-2">
              <div className="flex items-center justify-between gap-1.5 text-xs font-semibold text-stone-700">
                <span className="flex items-center gap-1.5 min-w-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="leading-snug">Primes carte (3 premiers mois) :</span>
                </span>
                <span className="font-bold font-num text-stone-900 text-xs sm:text-sm shrink-0 whitespace-nowrap">+80 €</span>
              </div>

              <div className="grid grid-cols-3 gap-1 sm:gap-2 pt-1">
                <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-stone-200 text-center">
                  <span className="text-stone-400 block text-[9.5px] sm:text-[11px]">1<sup>er</sup> mois</span>
                  <span className="font-extrabold text-stone-900 font-num text-[11px] sm:text-sm block my-0.5">+20 €</span>
                  <span className="text-[8.5px] sm:text-[10px] text-stone-500 block leading-tight">1 paiement</span>
                </div>
                <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-stone-200 text-center">
                  <span className="text-stone-400 block text-[9.5px] sm:text-[11px]">2<sup>ème</sup> mois</span>
                  <span className="font-extrabold text-stone-900 font-num text-[11px] sm:text-sm block my-0.5">+30 €</span>
                  <span className="text-[8.5px] sm:text-[10px] text-stone-500 block leading-tight">1 paiement</span>
                </div>
                <div className="p-1.5 sm:p-2 bg-white rounded-lg border border-stone-200 text-center">
                  <span className="text-stone-400 block text-[9.5px] sm:text-[11px]">3<sup>ème</sup> mois</span>
                  <span className="font-extrabold text-stone-900 font-num text-[11px] sm:text-sm block my-0.5">+30 €</span>
                  <span className="text-[8.5px] sm:text-[10px] text-stone-500 block leading-tight">1 paiement</span>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between gap-2 py-1">
              <span className="text-stone-600 flex items-start gap-1.5 sm:gap-2 min-w-0">
                {hasMobility ? (
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-stone-300 shrink-0 mt-0.5" />
                )}
                <span className="leading-snug">Prime mobilité bancaire EasyMove :</span>
              </span>
              <span className={`font-bold font-num text-xs sm:text-sm shrink-0 whitespace-nowrap ${hasMobility ? 'text-stone-900' : 'text-stone-400'}`}>
                {hasMobility ? `+${mobilityBonus} €` : '0 €'}
              </span>
            </div>
          </div>

          <div className="pt-2.5 sm:pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
            <span className="font-bold text-stone-900 text-xs sm:text-sm leading-snug">Total à percevoir sur votre compte :</span>
            <span className="text-lg sm:text-2xl font-extrabold text-stone-900 font-num shrink-0 whitespace-nowrap" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
          </div>
        </div>

        {/* Reassurance note */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-stone-500 leading-snug">
          <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
          <span>Prime 100% officielle garantie avec le code de parrainage à renseigner lors de la souscription.</span>
        </div>
      </div>
    </div>
  );
};

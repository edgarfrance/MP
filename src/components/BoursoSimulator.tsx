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
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Simulateur Officiel BoursoBank
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            Calculez votre prime personnalisée
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            Ajustez votre 1<sup>er</sup> dépôt et cochez la mobilité bancaire pour voir votre gain direct.
          </p>
        </div>

        {/* Big Live Total Display */}
        <div className="bg-stone-50 rounded-xl p-4 sm:text-right border border-stone-100 min-w-[180px]">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
            Prime totale estimée
          </span>
          <div className="flex items-baseline sm:justify-end gap-1 mt-1">
            <span className="text-4xl font-extrabold text-stone-900 font-num tracking-tight" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
            <span className="text-xs text-stone-500 font-medium">net d'impôts</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {/* Slider & Quick Tier selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-stone-800 flex items-center gap-2">
              Montant de votre 1<sup>er</sup> dépôt initial :
              <span className="font-num text-base font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-900">
                {deposit} €
              </span>
            </label>
            <span className="text-xs text-stone-400">Palier actuel : {deposit >= 300 ? '300€+' : deposit >= 50 ? '50€ - 299€' : '1€ - 49€'}</span>
          </div>

          {/* Quick buttons */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { val: 1, label: '1 € (Mini)', bonus: '90€ direct' },
              { val: 50, label: '50 €', bonus: '120€ direct' },
              { val: 300, label: '300 € (Max)', bonus: '160€ direct' },
            ].map((tier) => (
              <button
                key={tier.val}
                type="button"
                onClick={() => setDeposit(tier.val)}
                className={`py-2.5 px-3 rounded-xl text-left border transition-all text-xs sm:text-sm ${
                  deposit === tier.val
                    ? 'border-pink-500 bg-pink-50/50 text-stone-900 font-semibold shadow-2xs'
                    : 'border-stone-200 bg-white hover:border-stone-300 text-stone-600'
                }`}
              >
                <div className="font-semibold text-stone-900">{tier.label}</div>
                <div className="text-[11px] text-pink-700 font-medium mt-0.5">{tier.bonus}</div>
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
            <div className="flex justify-between text-[11px] text-stone-400 mt-2 font-num">
              <span>1 €</span>
              <span>50 €</span>
              <span>300 €</span>
              <span>500 €</span>
            </div>
          </div>
          <p className="text-xs text-stone-500 mt-2 italic">
            Ce dépôt n'est pas bloqué : il arrive sur votre nouveau compte BoursoBank et reste 100% disponible dès réception.
          </p>
        </div>

        {/* Mobility Bank Checkbox */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-5">
          <label className="flex items-start gap-3.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasMobility}
              onChange={(e) => setHasMobility(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-stone-300 text-[#E2007A] focus:ring-[#E2007A] accent-[#E2007A] cursor-pointer"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-stone-900">
                  Activer la mobilité bancaire EasyMove
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  +80 € offerts
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                BoursoBank s'occupe de transférer vos prélèvements (ex : facture mobile, abonnement internet ou électricité) gratuitement sans démarche de votre part.
              </p>
            </div>
          </label>
        </div>

        {/* Detailed Breakdown */}
        <div className="border border-stone-100 bg-stone-50/50 rounded-xl p-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
            Détail précis de versement :
          </h4>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <span className="text-stone-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Prime d'ouverture instantanée (dépôt {deposit}€) :
              </span>
              <span className="font-bold text-stone-900 font-num">{instantBonus} €</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-stone-100">
              <span className="text-stone-600 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Prime fidélité (versée au 3<sup>ème</sup> mois) :
              </span>
              <span className="font-bold text-stone-900 font-num">+{threeMonthsBonus} €</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-stone-600 flex items-center gap-2">
                {hasMobility ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-stone-300" />
                )}
                Prime mobilité bancaire EasyMove :
              </span>
              <span className={`font-bold font-num ${hasMobility ? 'text-stone-900' : 'text-stone-400'}`}>
                {hasMobility ? `+${mobilityBonus} €` : '0 €'}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <span className="font-bold text-stone-900">Total à percevoir sur votre compte :</span>
            <span className="text-xl font-extrabold text-stone-900 font-num" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
          </div>
        </div>

        {/* Reassurance note */}
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0" />
          <span>Prime 100% officielle garantie avec le code de parrainage à renseigner lors de la souscription.</span>
        </div>
      </div>
    </div>
  );
};

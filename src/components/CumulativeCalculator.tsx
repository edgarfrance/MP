import React, { useState } from 'react';
import { BankOffer } from '../data/offers';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface CumulativeCalculatorProps {
  offers: BankOffer[];
  onSelectOffer: (offer: BankOffer) => void;
}

export const CumulativeCalculator: React.FC<CumulativeCalculatorProps> = ({
  offers,
  onSelectOffer,
}) => {
  const [selectedOfferIds, setSelectedOfferIds] = useState<string[]>([
    'boursobank',
    'sg',
    'credit-agricole',
    'fortuneo',
  ]);

  const toggleOffer = (id: string) => {
    if (selectedOfferIds.includes(id)) {
      setSelectedOfferIds(selectedOfferIds.filter((item) => item !== id));
    } else {
      setSelectedOfferIds([...selectedOfferIds, id]);
    }
  };

  const totalPotentiel = offers
    .filter((o) => selectedOfferIds.includes(o.id))
    .reduce((acc, curr) => acc + curr.maxBonus, 0);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Simulateur Multi-Banques
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            Combien pouvez-vous gagner au total ?
          </h3>
          <p className="text-sm text-stone-500 mt-1 max-w-xl">
            Il est tout à fait légal d'ouvrir plusieurs comptes bancaires pour cumuler les primes de parrainage. Cochez les banques qui vous intéressent :
          </p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-5 text-left md:text-right min-w-[200px]">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
            Gain Total Cumulé
          </span>
          <div className="text-4xl font-extrabold text-stone-900 font-num tracking-tight mt-0.5">
            {totalPotentiel} €
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">
            100% net d'impôt sur le revenu
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {offers.map((offer) => {
          const isChecked = selectedOfferIds.includes(offer.id);
          return (
            <div
              key={offer.id}
              onClick={() => toggleOffer(offer.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isChecked
                  ? 'border-stone-400 bg-stone-50/80'
                  : 'border-stone-200 bg-white opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-stone-900">{offer.shortName}</span>
                <span
                  className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors"
                  style={{
                    backgroundColor: isChecked ? offer.theme.primary : '#E5E7EB',
                    color: '#ffffff',
                  }}
                >
                  {isChecked ? '✓' : ''}
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-xs text-stone-500">Prime max :</span>
                <span className="font-bold font-num text-sm text-stone-900">
                  +{offer.maxBonus} €
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
        <span>
          Astuce : vous pouvez garder ces comptes secondaires sans frais en faisant 1 paiement mensuel par carte.
        </span>
        <button
          type="button"
          onClick={() => setSelectedOfferIds(offers.map((o) => o.id))}
          className="text-stone-700 hover:text-stone-900 font-semibold underline cursor-pointer"
        >
          Tout sélectionner
        </button>
      </div>
    </div>
  );
};

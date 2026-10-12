import React, { useState } from 'react';
import { CheckCircle2, CreditCard, ShieldCheck, ArrowRight, Info, Check } from 'lucide-react';

interface FortuneoSimulatorProps {
  brandColor?: string;
}

export const FortuneoSimulator: React.FC<FortuneoSimulatorProps> = ({ brandColor = '#108A4D' }) => {
  const [selectedCard, setSelectedCard] = useState<'fosfo' | 'gold'>('gold');

  const cardDetails = {
    fosfo: {
      name: 'Carte Fosfo Mastercard',
      bonus: 70,
      conditionRevenu: 'Aucune condition de revenus',
      incomeMet: true,
      badge: 'Accessible à tous',
      advantages: [
        'Carte gratuite dès 1 paiement par mois',
        'Zéro frais à l\'étranger (paiements & retraits sans commission)',
        '300€ de versement initial (récupérable)',
      ],
    },
    gold: {
      name: 'Carte Gold CB Mastercard',
      bonus: 130,
      conditionRevenu: '1 800 € de revenus nets mensuels requis',
      incomeMet: true,
      badge: 'Prime maximale 130€',
      advantages: [
        'Garanties d\'assurance & assistance voyage haut de gamme',
        'Plafonds de paiements confortables',
        'Carte gratuite dès 1 paiement par mois',
        '300€ de versement initial (récupérable)',
      ],
    },
  };

  const current = cardDetails[selectedCard];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 mb-2">
            <CreditCard className="w-3.5 h-3.5" />
            Choix de Carte Fortuneo
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            Fosfo (70 €) ou Gold Mastercard (130 €)
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            Les deux cartes nécessitent 300 € de premier versement. Prime versée quasi directement.
          </p>
        </div>

        <div className="bg-stone-50 rounded-xl p-4 sm:text-right border border-stone-100 min-w-[180px]">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
            Prime à percevoir
          </span>
          <div className="flex items-baseline sm:justify-end gap-1 mt-1">
            <span className="text-4xl font-extrabold text-stone-900 font-num tracking-tight" style={{ color: brandColor }}>
              {current.bonus} €
            </span>
            <span className="text-xs text-stone-500 font-medium">net</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {/* Card Switcher */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
            Sélectionnez la carte bancaire souhaitée :
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Fosfo Option */}
            <div
              onClick={() => setSelectedCard('fosfo')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedCard === 'fosfo'
                  ? 'border-emerald-600 bg-emerald-50/40 shadow-xs'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-stone-900">Carte Fosfo</span>
                <span className="font-num text-lg font-bold text-emerald-700">+70 €</span>
              </div>
              <p className="text-xs text-stone-500 mb-2">
                Accessible à tous sans condition de revenus.
              </p>
              <div className="text-[11px] font-medium text-emerald-800 bg-emerald-100/60 inline-block px-2 py-0.5 rounded">
                Dépôt initial : 300 €
              </div>
            </div>

            {/* Gold Option */}
            <div
              onClick={() => setSelectedCard('gold')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedCard === 'gold'
                  ? 'border-emerald-600 bg-emerald-50/40 shadow-xs'
                  : 'border-stone-200 bg-white hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-stone-900">Carte Gold CB Mastercard</span>
                <span className="font-num text-lg font-bold text-emerald-700">+130 €</span>
              </div>
              <p className="text-xs text-stone-500 mb-2">
                Dès 1 800 € net / mois (ou 10 000€ d'épargne).
              </p>
              <div className="text-[11px] font-medium text-emerald-800 bg-emerald-100/60 inline-block px-2 py-0.5 rounded">
                Dépôt initial : 300 €
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown of Conditions */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Conditions pour la {current.name} :
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
              {current.conditionRevenu}
            </span>
          </div>

          <div className="space-y-2 text-xs sm:text-sm text-stone-600">
            {current.advantages.map((adv, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{adv}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-stone-400 block">Dépôt initial requis :</span>
              <strong className="text-stone-900 font-num text-sm">300 € (récupérable)</strong>
            </div>
            <div>
              <span className="text-stone-400 block">Délai versement prime :</span>
              <strong className="text-stone-900 text-sm">Quasi immédiat (~15j)</strong>
            </div>
          </div>
        </div>

        {/* Capital Safety Callout */}
        <div className="flex items-start gap-2.5 p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
          <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
          <span>
            <strong>Rappel sur le premier versement de 300 € :</strong> Il s'agit d'un simple virement d'activation depuis votre compte bancaire existant. Ces 300 € sont immédiatement disponibles sur votre solde Fortuneo et peuvent être virés ou dépensés à tout moment.
          </span>
        </div>
      </div>
    </div>
  );
};

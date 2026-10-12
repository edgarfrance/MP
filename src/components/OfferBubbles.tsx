import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import { BankOffer } from '../data/offers';

interface OfferBubblesProps {
  offers: BankOffer[];
  onSelectOffer: (offer: BankOffer) => void;
  onOpenFullPage: (offer: BankOffer) => void;
}

export const OfferBubbles: React.FC<OfferBubblesProps> = ({
  offers,
  onSelectOffer,
  onOpenFullPage,
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {offers.map((offer) => {
          return (
            <div
              key={offer.id}
              onClick={() => onSelectOffer(offer)}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 hover:border-stone-400/80 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between text-left"
            >
              {/* Subtle top indicator bar in bank brand color */}
              <div
                className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full transition-all group-hover:h-[4px]"
                style={{ backgroundColor: offer.theme.primary }}
              />

              <div>
                {/* Header with bank initial badge & category tag */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white shadow-2xs"
                    style={{ backgroundColor: offer.theme.primary }}
                  >
                    {offer.id === 'boursobank' && 'BB'}
                    {offer.id === 'sg' && 'SG'}
                    {offer.id === 'credit-agricole' && 'CA'}
                    {offer.id === 'fortuneo' && 'FT'}
                  </div>

                  <span
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-stone-200/60 font-medium"
                    style={{
                      backgroundColor: offer.theme.bgSubtle,
                      color: offer.theme.textPrimary,
                    }}
                  >
                    {offer.id === 'credit-agricole' ? 'Aquitaine' : offer.id === 'sg' ? 'En ligne & Agence' : 'Banque en ligne'}
                  </span>
                </div>

                {/* Bank Name */}
                <h3 className="text-base font-bold text-stone-900 group-hover:text-stone-950 transition-colors">
                  {offer.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                  {offer.tagline}
                </p>

                {/* Big Prime Amount */}
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
                    Prime disponible
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span
                      className="text-3xl font-extrabold font-num tracking-tight"
                      style={{ color: offer.theme.primary }}
                    >
                      {offer.maxBonus} €
                    </span>
                    <span className="text-xs text-stone-500">max</span>
                  </div>
                </div>

                {/* Key criteria highlight */}
                <div className="mt-3 text-xs text-stone-600 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <span className="text-stone-400">•</span>
                    <span className="font-medium text-stone-700">
                      {offer.id === 'boursobank' && 'Dépôt dès 1€ (jusqu\'à 160€) + 80€'}
                      {offer.id === 'sg' && '0€ de dépôt requis (5 paiements)'}
                      {offer.id === 'credit-agricole' && '50€ sans dépôt + 50€ mobilité'}
                      {offer.id === 'fortuneo' && 'Fosfo 70€ / Gold 130€ (300€ dépôt)'}
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 text-stone-500 text-[11px]">
                    <span className="text-stone-300">•</span>
                    <span>{offer.payoutDelay}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-800 group-hover:text-stone-950 inline-flex items-center gap-1 transition-colors">
                  Accéder à l'offre
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                </span>

                <div
                  className="p-1.5 text-stone-400 group-hover:text-stone-800 group-hover:bg-stone-100 rounded-lg transition-colors"
                  title="Accéder à la page dédiée"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

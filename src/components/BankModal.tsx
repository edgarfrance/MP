import React, { useEffect } from 'react';
import { X, ExternalLink, Maximize2, ShieldCheck, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { BankOffer } from '../data/offers';
import { BoursoSimulator } from './BoursoSimulator';
import { CASimulator } from './CASimulator';
import { FortuneoSimulator } from './FortuneoSimulator';
import { ReferralActionBox } from './ReferralActionBox';

interface BankModalProps {
  offer: BankOffer | null;
  onClose: () => void;
  onOpenFullPage: (offer: BankOffer) => void;
}

export const BankModal: React.FC<BankModalProps> = ({
  offer,
  onClose,
  onOpenFullPage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (offer) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [offer, onClose]);

  if (!offer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 sm:py-8 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header styled with bank colors */}
        <div
          className="p-6 sm:p-8 text-white relative"
          style={{ backgroundColor: offer.theme.primary }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Top buttons bar */}
          <div className="relative z-10 flex items-center justify-between pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full text-white backdrop-blur-xs">
              {offer.badge}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenFullPage(offer)}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
                title="Basculer vers la page dédiée pleine largeur"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Page dédiée</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title & Max Prime */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {offer.name}
              </h2>
              <p className="text-white/85 text-sm sm:text-base mt-1 max-w-xl">
                {offer.tagline}
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/20 sm:text-right shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-white/75 font-semibold block">
                Prime Maximale
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-num">
                {offer.maxBonus} €
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Bank-Specific Interactive Simulator (omitted for SG) */}
          {offer.id !== 'sg' && (
            <section>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                1. Simulation en direct
              </div>
              {offer.id === 'boursobank' && (
                <BoursoSimulator brandColor={offer.theme.primary} />
              )}
              {offer.id === 'credit-agricole' && (
                <CASimulator brandColor={offer.theme.primary} />
              )}
              {offer.id === 'fortuneo' && (
                <FortuneoSimulator brandColor={offer.theme.primary} />
              )}
            </section>
          )}

          {/* Referral Box & Activation */}
          <section>
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              2. Code parrain & Activation
            </div>
            <ReferralActionBox offer={offer} />
          </section>

          {/* Specific Conditions & Rules */}
          <section className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
            <h4 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-stone-600" />
              Conditions d'éligibilité officielles ({offer.name})
            </h4>

            <ul className="space-y-2.5 text-sm text-stone-700">
              {offer.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-stone-500">
              <Clock className="w-4 h-4 text-stone-400 shrink-0" />
              <span><strong>Délai de versement constaté :</strong> {offer.payoutDelay}</span>
            </div>
          </section>

          {/* Steps */}
          <section>
            <h4 className="text-base font-bold text-stone-900 mb-4">
              Comment toucher votre prime étape par étape :
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offer.steps.map((st) => (
                <div key={st.number} className="bg-white border border-stone-200 rounded-xl p-4">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs text-white"
                      style={{ backgroundColor: offer.theme.primary }}
                    >
                      {st.number}
                    </span>
                    <span className="font-bold text-sm text-stone-900">{st.title}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pl-8">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-stone-400" />
            <span>Offre officielle et à jour pour l'année 2026.</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium transition-colors cursor-pointer"
            >
              Fermer la fenêtre
            </button>
            <button
              type="button"
              onClick={() => onOpenFullPage(offer)}
              className="px-4 py-2 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: offer.theme.primary }}
            >
              Voir la page dédiée complète →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

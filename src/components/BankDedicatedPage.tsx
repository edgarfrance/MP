import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Share2, 
  Copy, 
  Check, 
  Sparkles,
  Info,
  Calendar,
  CreditCard,
  DollarSign
} from 'lucide-react';
import { BankOffer } from '../data/offers';
import { BoursoSimulator } from './BoursoSimulator';
import { CASimulator } from './CASimulator';
import { FortuneoSimulator } from './FortuneoSimulator';
import { ReferralActionBox } from './ReferralActionBox';

interface BankDedicatedPageProps {
  offer: BankOffer;
  onBackToHome: () => void;
  onNavigateToOffer: (offerId: string) => void;
  allOffers: BankOffer[];
}

export const BankDedicatedPage: React.FC<BankDedicatedPageProps> = ({
  offer,
  onBackToHome,
  onNavigateToOffer,
  allOffers,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const otherOffers = allOffers.filter((o) => o.id !== offer.id);

  return (
    <div className="min-h-screen bg-[#FBFBFB] text-stone-900 pb-16 sm:pb-20">
      {/* Top Bank Announcement Bar */}
      <div
        className="w-full text-white text-[10px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 transition-colors"
        style={{ backgroundColor: offer.theme.primary }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="font-bold shrink-0">OFFRE 2026</span>
            <span className="truncate text-white/85">• {offer.badge}</span>
          </div>
          <span className="text-white/90 shrink-0 text-[10px] sm:text-[11px]">
            MeilleurParrainage.com
          </span>
        </div>
      </div>

      {/* Navigation Subheader */}
      <header className="border-b border-stone-200 bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer min-w-0"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="truncate">Toutes les offres</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={handleShareLink}
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-medium px-2.5 sm:px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copié' : 'Partager'}</span>
            </button>

            <a
              href={offer.officialSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: offer.theme.primary }}
            >
              <span>Site officiel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero of the bank page with sober branded tones */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-6 sm:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 border"
                style={{
                  backgroundColor: offer.theme.bgSubtle,
                  borderColor: offer.theme.borderSubtle,
                  color: offer.theme.textPrimary,
                }}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Détail & Conditions • {offer.shortName}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Parrainage {offer.name} : jusqu'à{' '}
                <span style={{ color: offer.theme.primary }}>
                  {offer.maxBonus} € offerts
                </span>
              </h1>

              <p className="text-xs sm:text-lg text-stone-600 mt-2.5 sm:mt-4 leading-relaxed">
                {offer.tagline}. Retrouvez ci-dessous la simulation en direct de votre gain, les conditions précises et le code parrainage pour activer votre prime sans erreur.
              </p>

              {/* Quick Key points pills */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {offer.keyPoints.map((point, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 bg-stone-100 rounded-lg text-stone-700 leading-snug"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                    <span>{point}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Big Max Bonus Card */}
            <div className="w-full lg:w-80 shrink-0 bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-7 shadow-xs">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-400 font-bold block">
                Prime Maximale
              </span>
              <div className="flex items-baseline gap-1 mt-0.5 sm:mt-1">
                <span
                  className="text-4xl sm:text-5xl font-extrabold font-num tracking-tight"
                  style={{ color: offer.theme.primary }}
                >
                  {offer.maxBonus} €
                </span>
                <span className="text-xs sm:text-sm text-stone-500 font-medium">versés</span>
              </div>

              <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span className="text-stone-400">Versement initial :</span>
                  <span className="font-semibold text-stone-800">
                    {offer.minDepositRequired > 0 ? `Dès ${offer.minDepositRequired} €` : '0 € (Aucun)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Délai versement :</span>
                  <span className="font-semibold text-stone-800">
                    {offer.id === 'sg' ? 'Sous 90j' : offer.id === 'boursobank' ? 'Instantané + 3 mois' : 'Sous 15 jours'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Frais de compte :</span>
                  <span className="font-semibold text-emerald-700">0 € / an</span>
                </div>
              </div>

              {offer.isSingleUseCode ? (
                <a
                  href={`https://wa.me/33768059063?text=${encodeURIComponent(
                    `Bonjour, je souhaite recevoir mon code de parrainage individuel pour ${offer.name} svp.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all hover:opacity-95 leading-snug text-center"
                  style={{ backgroundColor: offer.theme.primary }}
                >
                  <span>Demander mon code (SMS / WhatsApp)</span>
                </a>
              ) : (
                <a
                  href={offer.officialSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all hover:opacity-95 leading-snug text-center"
                  style={{ backgroundColor: offer.theme.primary }}
                >
                  <span>Accéder à la souscription {offer.shortName}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-3.5 sm:px-6 pt-6 sm:pt-14 space-y-8 sm:space-y-12">
        {/* Section 1: Simulator (shown for BoursoBank, Crédit Agricole, Fortuneo, omitted for SG) */}
        {offer.id !== 'sg' && (
          <section>
            <div className="flex items-center justify-between mb-3.5 sm:mb-4">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
                  1. Simulateur en direct pour {offer.name}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  Calculez le montant exact versé selon votre situation.
                </p>
              </div>
            </div>

            {offer.id === 'boursobank' && <BoursoSimulator brandColor={offer.theme.primary} />}
            {offer.id === 'credit-agricole' && <CASimulator brandColor={offer.theme.primary} />}
            {offer.id === 'fortuneo' && <FortuneoSimulator brandColor={offer.theme.primary} />}
          </section>
        )}

        {/* Section 2: Code Parrain & Action Box */}
        <section>
          <div className="mb-3.5 sm:mb-4">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
              {offer.id === 'sg' ? '1.' : '2.'} {offer.isSingleUseCode ? 'Code parrain individuel & Contact immédiat' : 'Code parrain officiel & Activation'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5 leading-relaxed">
              {offer.isSingleUseCode
                ? 'Contactez-nous pour recevoir votre code nominatif valide avant d\'ouvrir votre compte.'
                : 'Utilisez ce code pour vous assurer de recevoir votre prime lors de l\'inscription.'}
            </p>
          </div>
          <ReferralActionBox offer={offer} />
        </section>

        {/* Section 3: Official Requirements & Conditions */}
        <section className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 pb-4 sm:pb-5 border-b border-stone-100">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: offer.theme.primary }}
            >
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                Conditions obligatoires pour valider la prime
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500">
                Extrait des conditions générales de l'offre de parrainage {offer.name}.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
            {offer.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-xs sm:text-sm text-stone-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{req}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-5 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-stone-400 shrink-0" />
              <span>Délai d'encaissement moyen : <strong>{offer.payoutDelay}</strong></span>
            </div>
            <span className="italic">Conditions vérifiées et à jour.</span>
          </div>
        </section>

        {/* Section 4: 4 Steps Walkthrough */}
        <section>
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
              Comment ça marche ? Le guide en 4 étapes
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
              Suivez ce parcours rapide pour débloquer la totalité de vos gains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {offer.steps.map((st) => (
              <div key={st.number} className="bg-white border border-stone-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xs relative">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm text-white mb-2.5 sm:mb-3"
                  style={{ backgroundColor: offer.theme.primary }}
                >
                  {st.number}
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1 leading-snug">
                  {st.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Other bank offers */}
        <section className="pt-4 sm:pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 mb-4 sm:mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                Découvrez aussi les autres banques partenaires
              </h3>
              <p className="text-xs text-stone-500">
                Vous pouvez cumuler les ouvertures de compte pour maximiser vos gains.
              </p>
            </div>
            <button
              type="button"
              onClick={onBackToHome}
              className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline transition-colors self-start sm:self-auto cursor-pointer"
            >
              Voir tout le comparateur →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {otherOffers.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigateToOffer(item.id)}
                className="bg-white border border-stone-200 rounded-xl p-3 sm:p-4 hover:border-stone-400 transition-all cursor-pointer flex items-center justify-between shadow-2xs"
              >
                <div className="min-w-0 pr-2">
                  <span className="font-bold text-xs sm:text-sm text-stone-900 block truncate">{item.name}</span>
                  <span className="text-[11px] sm:text-xs text-stone-500 line-clamp-1">{item.tagline}</span>
                </div>
                <span
                  className="font-extrabold text-sm sm:text-base font-num shrink-0 ml-2 whitespace-nowrap"
                  style={{ color: item.theme.primary }}
                >
                  {item.maxBonus} €
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

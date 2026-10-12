/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BANK_OFFERS, BankOffer } from './data/offers';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfferBubbles } from './components/OfferBubbles';
import { BankModal } from './components/BankModal';
import { BankDedicatedPage } from './components/BankDedicatedPage';
import { BoursoSimulator } from './components/BoursoSimulator';
import { CumulativeCalculator } from './components/CumulativeCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedModalOffer, setSelectedModalOffer] = useState<BankOffer | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  // Handle URL hash changes so /#/boursobank or /boursobank works like a real separate page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (['boursobank', 'sg', 'credit-agricole', 'fortuneo'].includes(hash)) {
        setCurrentRoute(hash);
        setSelectedModalOffer(null);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentRoute('home');
    setSelectedModalOffer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDedicatedPage = (offer: BankOffer) => {
    window.location.hash = `/${offer.slug}`;
    setCurrentRoute(offer.slug);
    setSelectedModalOffer(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a dedicated bank page route is active, render that bank's page
  const activeDedicatedOffer = BANK_OFFERS.find((o) => o.slug === currentRoute);

  if (activeDedicatedOffer) {
    return (
      <BankDedicatedPage
        offer={activeDedicatedOffer}
        onBackToHome={navigateToHome}
        onNavigateToOffer={(id) => {
          const target = BANK_OFFERS.find((o) => o.id === id);
          if (target) navigateToDedicatedPage(target);
        }}
        allOffers={BANK_OFFERS}
      />
    );
  }

  // Otherwise, render the Clean Minimal Landing Page
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 flex flex-col font-sans selection:bg-stone-200">
      {/* Top clean navbar (sober, not connected to all offers) */}
      <Navbar onGoHome={navigateToHome} activeView="home" />

      {/* Hero section */}
      <Hero />

      {/* Main landing container */}
      <main className="flex-1 max-w-6xl mx-auto px-3.5 sm:px-6 py-6 sm:py-14 space-y-8 sm:space-y-14 w-full">
        {/* Section 1: The Requested "carrés (bulles) avec les offres à l'intérieur" */}
        <section id="offres">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-400 mb-0.5 sm:mb-1">
                Sélection 2026
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Les offres de parrainage du moment
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-xs sm:text-right">
              Cliquez sur une offre pour accéder à sa page dédiée.
            </p>
          </div>

          <OfferBubbles
            offers={BANK_OFFERS}
            onSelectOffer={navigateToDedicatedPage}
            onOpenFullPage={navigateToDedicatedPage}
          />
        </section>

        {/* Section 2: Simulateur Multi-Banques direct en dessous des bulles */}
        <section id="cumul">
          <CumulativeCalculator
            offers={BANK_OFFERS}
            onSelectOffer={navigateToDedicatedPage}
          />
        </section>

        {/* Section 3: Meilleure offre du moment (BoursoBank) */}
        <section id="meilleure-offre" className="pt-1 sm:pt-2">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-pink-50 text-pink-700 border border-pink-100 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                <span>Meilleure offre du moment</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
                Meilleure offre du moment • BoursoBank (jusqu'à 320 €)
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm sm:text-right">
              Choisissez votre montant de premier dépôt et activez la mobilité bancaire pour voir le calcul en direct.
            </p>
          </div>

          <BoursoSimulator brandColor="#E2007A" />
        </section>

        {/* Section 4: Transparent FAQ */}
        <section id="faq">
          <FAQSection />
        </section>
      </main>

      {/* Footer */}
      <Footer
        onGoHome={navigateToHome}
        onOpenBank={(slug) => {
          const target = BANK_OFFERS.find((o) => o.slug === slug);
          if (target) navigateToDedicatedPage(target);
        }}
      />

      {/* Modal Window fallback */}
      <BankModal
        offer={selectedModalOffer}
        onClose={() => setSelectedModalOffer(null)}
        onOpenFullPage={navigateToDedicatedPage}
      />
    </div>
  );
}

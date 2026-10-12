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

  const handleSelectOfferModal = (offer: BankOffer) => {
    setSelectedModalOffer(offer);
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
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14 w-full">
        {/* Section 1: The Requested "carrés (bulles) avec les offres à l'intérieur" */}
        <section id="offres">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                Sélection 2026
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Les offres de parrainage du moment
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-xs sm:text-right">
              Cliquez sur un carré pour ouvrir sa fenêtre détaillée ou sa page dédiée.
            </p>
          </div>

          <OfferBubbles
            offers={BANK_OFFERS}
            onSelectOffer={handleSelectOfferModal}
            onOpenFullPage={navigateToDedicatedPage}
          />
        </section>

        {/* Section 2: BoursoBank Focus & Interactive Live Simulator */}
        <section id="simulateur-bourso" className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-50 text-pink-700 border border-pink-100 mb-2">
                Offre n°1 • BoursoBank
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Simulateur en direct BoursoBank
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm sm:text-right">
              Choisissez votre montant de premier dépôt et activez la mobilité bancaire pour voir le calcul en direct.
            </p>
          </div>

          <BoursoSimulator brandColor="#E2007A" />
        </section>

        {/* Section 3: Cumulative Multi-Bank Simulator */}
        <section id="cumul">
          <CumulativeCalculator
            offers={BANK_OFFERS}
            onSelectOffer={handleSelectOfferModal}
          />
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

      {/* The Requested Modal Window displaying specific conditions */}
      <BankModal
        offer={selectedModalOffer}
        onClose={() => setSelectedModalOffer(null)}
        onOpenFullPage={navigateToDedicatedPage}
      />
    </div>
  );
}

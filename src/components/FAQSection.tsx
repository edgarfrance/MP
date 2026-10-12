import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Est-il légal d\'ouvrir un compte uniquement pour toucher la prime de parrainage ?',
      a: 'Oui, tout à fait. Les banques en ligne (BoursoBank, Fortuneo, SG, Crédit Agricole) prévoient ces budgets marketing pour acquérir de nouveaux clients. Vous êtes parfaitement dans vos droits d\'ouvrir un compte pour profiter de l\'offre promotionnelle.',
    },
    {
      q: 'Combien de temps faut-il conserver le compte ouvert ?',
      a: 'En règle générale, les conditions prévoient de conserver le compte ouvert pendant au moins 12 mois. Si vous fermez le compte avant ce délai de 1 an, la banque se réserve le droit de prélever le montant de la prime. Au-delà de 12 mois, la clôture est 100% libre et gratuite.',
    },
    {
      q: 'Les primes de parrainage bancaire sont-elles imposables ?',
      a: 'Pour le filleul (celui qui ouvre son compte), la prime d\'ouverture de compte est considérée par l\'administration fiscale comme une remise commerciale promotionnelle. Elle n\'est donc pas soumise à l\'impôt sur le revenu.',
    },
    {
      q: 'Dois-je obligatoirement changer de banque principale ?',
      a: 'Non ! Vous pouvez conserver votre banque historique sans rien modifier. La mobilité bancaire est une option facultative qui rapporte un bonus supplémentaire (+80€ chez BoursoBank, +50€ chez Crédit Agricole), mais elle n\'est jamais obligatoire pour toucher la prime principale.',
    },
    {
      q: 'Mon premier versement est-il bloqué sur le compte ?',
      a: 'Absolument pas. L\'argent versé (ex: 1€, 50€ ou 300€ chez BoursoBank ou Fortuneo) est disponible immédiatement sur votre compte courant. Vous pouvez le dépenser avec votre nouvelle carte ou le revirer vers votre compte initial dès que vous le souhaitez.',
    },
  ];

  return (
    <section className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug">
            Foire Aux Questions (F.A.Q.)
          </h3>
          <p className="text-[11px] sm:text-xs text-stone-500">
            Toutes les réponses pour toucher vos primes en toute sérénité.
          </p>
        </div>
      </div>

      <div className="divide-y divide-stone-100">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-3 sm:py-3.5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-3 font-semibold text-xs sm:text-base text-stone-900 hover:text-stone-700 transition-colors cursor-pointer leading-snug"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-stone-700' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pr-2 sm:pr-6 animate-in fade-in duration-150">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onGoHome: () => void;
  onOpenBank: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onGoHome, onOpenBank }) => {
  return (
    <footer className="border-t border-stone-200 bg-white text-stone-600 text-xs py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-stone-100">
          <div>
            <div
              onClick={onGoHome}
              className="flex items-center gap-2 cursor-pointer font-bold text-sm sm:text-base text-stone-900"
            >
              <div className="w-6 h-6 rounded bg-stone-900 text-white flex items-center justify-center font-extrabold text-xs">
                MP
              </div>
              <span>meilleurparrainage.com</span>
            </div>
            <p className="text-stone-400 mt-1 max-w-md text-[11px] sm:text-xs">
              Comparateur indépendant des offres de parrainage et primes bancaires en France.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs">
            <button
              type="button"
              onClick={() => onOpenBank('boursobank')}
              className="text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              BoursoBank
            </button>
            <button
              type="button"
              onClick={() => onOpenBank('sg')}
              className="text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              SG
            </button>
            <button
              type="button"
              onClick={() => onOpenBank('credit-agricole')}
              className="text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              Crédit Agricole
            </button>
            <button
              type="button"
              onClick={() => onOpenBank('fortuneo')}
              className="text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              Fortuneo
            </button>
          </div>
        </div>

        <div className="py-4 border-b border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-stone-500 text-xs">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="font-semibold text-stone-700">Contact parrainage (CA & SG) :</span>
            <a href="mailto:contact@meilleurparrainage.com" className="hover:text-stone-900 underline break-all">
              contact@meilleurparrainage.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>SMS / WhatsApp :</span>
            <a href="https://wa.me/33768059063" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">
              07 68 05 90 63
            </a>
          </div>
        </div>

        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-stone-400 text-[10px] sm:text-[11px] text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span>
              meilleurparrainage.com n'est pas un établissement bancaire. Informations fournies à titre indicatif.
            </span>
          </div>
          <div className="shrink-0">
            © {new Date().getFullYear()} meilleurparrainage.com • Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

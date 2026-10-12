import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, Tag, Edit3 } from 'lucide-react';
import { BankOffer } from '../data/offers';

interface ReferralActionBoxProps {
  offer: BankOffer;
}

export const ReferralActionBox: React.FC<ReferralActionBoxProps> = ({ offer }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [customCode, setCustomCode] = useState<string>(offer.defaultReferralCode || 'PARRAIN2026');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(customCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
            Code de Parrainage Officiel
          </span>
          <h4 className="text-lg font-bold text-stone-900 mt-0.5">
            Activer l'offre {offer.name}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400">Prime vérifiée :</span>
          <span
            className="text-xs font-extrabold px-2.5 py-1 rounded-full font-num"
            style={{
              backgroundColor: offer.theme.accentBadgeBg,
              color: offer.theme.textPrimary,
            }}
          >
            Jusqu'à {offer.maxBonus} €
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
            <span>Code à coller dans le formulaire d'inscription :</span>
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="text-stone-400 hover:text-stone-600 inline-flex items-center gap-1 transition-colors"
              title="Personnaliser ce code parrain si vous avez le vôtre"
            >
              <Edit3 className="w-3 h-3" />
              {isEditing ? 'Valider' : 'Modifier'}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={customCode}
                  onChange={(e) => setCustomCode(e.target.value.toUpperCase())}
                  className="w-full font-mono text-base font-bold text-stone-900 px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:border-stone-500"
                  placeholder="VOTRE-CODE"
                />
              ) : (
                <div
                  onClick={handleCopy}
                  className="w-full font-mono text-base sm:text-lg font-bold text-stone-900 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl tracking-wider select-all cursor-pointer flex items-center justify-between hover:bg-stone-100/70 transition-colors"
                >
                  <span>{customCode}</span>
                  <Tag className="w-4 h-4 text-stone-400" />
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className={`px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copié !</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copier</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={offer.officialSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all shadow-xs hover:opacity-95 cursor-pointer"
            style={{ backgroundColor: offer.theme.primary }}
          >
            <span>Accéder au site officiel de {offer.name}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-stone-400 text-center mt-2">
            Lien sécurisé vers le site officiel de {offer.name}. Collez le code dans la case « Code parrain / offre ».
          </p>
        </div>
      </div>
    </div>
  );
};

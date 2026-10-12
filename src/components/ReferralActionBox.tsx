import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare, 
  Phone, 
  Mail, 
  Sparkles, 
  Tag, 
  Edit3,
  ShieldCheck,
  Send
} from 'lucide-react';
import { BankOffer } from '../data/offers';

interface ReferralActionBoxProps {
  offer: BankOffer;
}

export const ReferralActionBox: React.FC<ReferralActionBoxProps> = ({ offer }) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [customCode, setCustomCode] = useState<string>(offer.defaultReferralCode || 'PARRAIN2026');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const isSingleUse = offer.isSingleUseCode;
  const contactPhone = '07 68 05 90 63';
  const contactPhoneRaw = '0768059063';
  const contactEmail = 'contact@meilleurparrainage.com';

  const defaultMsg = encodeURIComponent(
    `Bonjour, je souhaite recevoir un code de parrainage individuel pour ${offer.name} (${offer.maxBonus}€) svp.`
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(customCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
            {isSingleUse ? 'Code Parrainage Individuel' : 'Code de Parrainage Officiel'}
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

      <div className="mt-5 space-y-5">
        {/* If single-use code (CA and SG): Show Contact Options */}
        {isSingleUse ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-stone-900 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Code à usage unique (délivré gratuitement en 5 min)</span>
              </div>
              Pour <strong>{offer.name}</strong>, le code de parrainage est strictement nominatif et à usage unique. Contactez-nous directement pour recevoir le vôtre immédiatement :
            </div>

            {/* Quick Contact Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/33768059063?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* SMS */}
              <a
                href={`sms:${contactPhoneRaw}?body=${defaultMsg}`}
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>SMS</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Demande de code parrainage ${offer.name}`)}&body=${defaultMsg}`}
                className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer border border-stone-200"
              >
                <Mail className="w-4 h-4 text-stone-600" />
                <span>E-mail</span>
              </a>
            </div>

            {/* Direct Contact Phone & Email Display */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 bg-stone-50/70 border border-stone-200 rounded-xl text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Numéro direct (SMS / WhatsApp) : <strong>{contactPhone}</strong></span>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-stone-600 hover:text-stone-900 font-semibold underline text-left sm:text-right cursor-pointer"
              >
                {copiedPhone ? 'Numéro copié !' : 'Copier le numéro'}
              </button>
            </div>

            <div className="pt-1">
              <a
                href={offer.officialSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: offer.theme.primary }}
              >
                <span>Accéder à la souscription officielle {offer.name}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-stone-400 text-center mt-2">
                Demandez votre code en 1 clic puis collez-le lors de votre inscription pour débloquer les {offer.maxBonus}€.
              </p>
            </div>
          </div>
        ) : (
          /* Fixed Code (BoursoBank & Fortuneo) */
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                <span>Code à coller dans le formulaire d'inscription :</span>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-stone-400 hover:text-stone-600 inline-flex items-center gap-1 transition-colors"
                  title="Personnaliser ce code si besoin"
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
                      onClick={handleCopyCode}
                      className="w-full font-mono text-base sm:text-lg font-bold text-stone-900 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl tracking-wider select-all cursor-pointer flex items-center justify-between hover:bg-stone-100/70 transition-colors"
                    >
                      <span>{customCode}</span>
                      <Tag className="w-4 h-4 text-stone-400" />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                    copiedCode
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {copiedCode ? (
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
                <span>Souscrire sur {offer.name} avec ce code ({offer.defaultReferralCode})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-stone-400 text-center mt-2">
                Le lien intègre directement le code parrain <strong>{offer.defaultReferralCode}</strong> pour garantir votre prime de {offer.maxBonus}€.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

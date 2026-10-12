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
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-3.5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3.5 sm:pb-5 border-b border-stone-100">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-400">
            {isSingleUse ? 'Code Parrainage Individuel' : 'Code de Parrainage Officiel'}
          </span>
          <h4 className="text-sm sm:text-lg font-bold text-stone-900 mt-0.5 leading-snug">
            Activer l'offre {offer.name}
          </h4>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[10px] sm:text-xs text-stone-400">Prime vérifiée :</span>
          <span
            className="text-[10px] sm:text-xs font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-num shrink-0 whitespace-nowrap"
            style={{
              backgroundColor: offer.theme.accentBadgeBg,
              color: offer.theme.textPrimary,
            }}
          >
            Jusqu'à {offer.maxBonus} €
          </span>
        </div>
      </div>

      <div className="mt-3.5 sm:mt-5 space-y-3.5 sm:space-y-5">
        {/* If single-use code (CA and SG): Show Contact Options */}
        {isSingleUse ? (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-stone-900 mb-1">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
                <span className="leading-snug">Code à usage unique (délivré gratuitement en 5 min)</span>
              </div>
              Pour <strong>{offer.name}</strong>, le code de parrainage est strictement nominatif. Contactez-nous directement pour recevoir le vôtre immédiatement :
            </div>

            {/* Quick Contact Buttons Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/33768059063?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* SMS */}
              <a
                href={`sms:${contactPhoneRaw}?body=${defaultMsg}`}
                className="flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[11px] sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>SMS</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(`Demande de code parrainage ${offer.name}`)}&body=${defaultMsg}`}
                className="flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-3.5 py-2.5 sm:py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-[11px] sm:text-sm transition-colors cursor-pointer border border-stone-200"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-600 shrink-0" />
                <span>E-mail</span>
              </a>
            </div>

            {/* Direct Contact Phone Display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 bg-stone-50/70 border border-stone-200 rounded-xl text-xs">
              <div className="flex items-center gap-2 text-stone-700 min-w-0">
                <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="text-[11px] sm:text-xs leading-snug">
                  Numéro direct (SMS / WhatsApp) : <strong className="font-num whitespace-nowrap">{contactPhone}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-[11px] sm:text-xs text-stone-600 hover:text-stone-900 font-semibold underline text-left sm:text-right cursor-pointer shrink-0 self-start sm:self-auto ml-5 sm:ml-0"
              >
                {copiedPhone ? 'Numéro copié !' : 'Copier le numéro'}
              </button>
            </div>

            {/* Direct Contact Email Display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 bg-stone-50/70 border border-stone-200 rounded-xl text-xs">
              <div className="flex items-start sm:items-center gap-2 text-stone-700 min-w-0">
                <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-[11px] sm:text-xs leading-snug break-all">
                  E-mail direct : <strong>{contactEmail}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] sm:text-xs text-stone-600 hover:text-stone-900 font-semibold underline text-left sm:text-right cursor-pointer shrink-0 self-start sm:self-auto ml-5 sm:ml-0"
              >
                {copiedEmail ? 'E-mail copié !' : 'Copier l\'e-mail'}
              </button>
            </div>

            <p className="text-[10px] sm:text-[11px] text-stone-500 text-center pt-0.5 italic leading-relaxed">
              Le code personnalisé et le lien vous seront envoyés directement par SMS, WhatsApp ou Email en moins de 5 minutes.
            </p>
          </div>
        ) : (
          /* Fixed Code (BoursoBank & Fortuneo) */
          <div className="space-y-3.5 sm:space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                <span className="text-[11px] sm:text-xs">Code à copier et reporter :</span>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="text-stone-400 hover:text-stone-600 inline-flex items-center gap-1 text-[11px] sm:text-xs transition-colors"
                  title="Personnaliser ce code si besoin"
                >
                  <Edit3 className="w-3 h-3" />
                  {isEditing ? 'Valider' : 'Modifier'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex-1 min-w-0">
                  {isEditing ? (
                    <input
                      type="text"
                      value={customCode}
                      onChange={(e) => setCustomCode(e.target.value.toUpperCase())}
                      className="w-full font-mono text-sm sm:text-base font-bold text-stone-900 px-2.5 sm:px-4 py-2 sm:py-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:border-stone-500"
                      placeholder="VOTRE-CODE"
                    />
                  ) : (
                    <div
                      onClick={handleCopyCode}
                      className="w-full font-mono text-xs sm:text-lg font-bold text-stone-900 px-2.5 sm:px-4 py-2 sm:py-3 bg-stone-50 border border-stone-200 rounded-xl tracking-wider select-all cursor-pointer flex items-center justify-between hover:bg-stone-100/70 transition-colors"
                    >
                      <span className="truncate">{customCode}</span>
                      <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 shrink-0 ml-1" />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className={`px-3 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 ${
                    copiedCode
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <a
                href={offer.officialSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl text-white font-semibold text-xs sm:text-sm transition-all shadow-xs hover:opacity-95 cursor-pointer text-center leading-snug"
                style={{ backgroundColor: offer.theme.primary }}
              >
                <span>Accéder au site officiel {offer.name}</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </a>

              {offer.id === 'fortuneo' ? (
                <div className="mt-2.5 p-2.5 sm:p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[11px] sm:text-xs leading-relaxed text-left">
                  <strong>Important pour Fortuneo :</strong> Le lien ne remplit pas le code automatiquement. Vous devez <u>impérativement coller ou saisir vous-même</u> le code parrain <strong>{offer.defaultReferralCode}</strong> dans le champ « Code parrain / avantage » lors de votre souscription pour que votre prime (70€ ou 130€) soit prise en compte.
                </div>
              ) : (
                <p className="text-[10px] sm:text-[11px] text-stone-400 text-center mt-2 leading-relaxed">
                  Le lien officiel BoursoBank intègre le code <strong>{offer.defaultReferralCode}</strong> pour valider votre prime.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

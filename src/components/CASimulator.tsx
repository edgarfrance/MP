import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, MapPin, FileText, Check } from 'lucide-react';
import { AQUITAINE_DEPTS } from '../data/offers';

interface CASimulatorProps {
  brandColor?: string;
}

export const CASimulator: React.FC<CASimulatorProps> = ({ brandColor = '#007D8A' }) => {
  const [selectedDept, setSelectedDept] = useState<string>('33');
  const [hasMobility, setHasMobility] = useState<boolean>(true);
  const [postalCodeInput, setPostalCodeInput] = useState<string>('33000');

  const baseBonus = 50;
  const mobilityBonus = hasMobility ? 50 : 0;
  const totalBonus = baseBonus + mobilityBonus;

  // Check if postal code is in Aquitaine
  const enteredPrefix = postalCodeInput.trim().slice(0, 2);
  const matchedDept = AQUITAINE_DEPTS.find((d) => d.code === enteredPrefix);
  const isEligibleRegion = !!matchedDept;

  const handlePostalChange = (val: string) => {
    setPostalCodeInput(val);
    const prefix = val.trim().slice(0, 2);
    const found = AQUITAINE_DEPTS.find((d) => d.code === prefix);
    if (found) {
      setSelectedDept(found.code);
    }
  };

  const handleDeptSelect = (code: string) => {
    setSelectedDept(code);
    setPostalCodeInput(`${code}000`);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Offre Territoriale Aquitaine
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            Crédit Agricole Aquitaine : jusqu'à 100 € offerts
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            50 € versés instantanément sans dépôt + 50 € supplémentaires avec la mobilité bancaire.
          </p>
        </div>

        <div className="bg-stone-50 rounded-xl p-4 sm:text-right border border-stone-100 min-w-[180px]">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
            Prime maximale
          </span>
          <div className="flex items-baseline sm:justify-end gap-1 mt-1">
            <span className="text-4xl font-extrabold text-stone-900 font-num tracking-tight" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
            <span className="text-xs text-stone-500 font-medium">immédiat</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {/* Region Verification Tool */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
            1. Testez votre éligibilité géographique (Aquitaine requise)
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <span className="text-xs text-stone-500 block mb-1">Votre Code Postal :</span>
              <input
                type="text"
                maxLength={5}
                value={postalCodeInput}
                onChange={(e) => handlePostalChange(e.target.value)}
                placeholder="Ex : 33000, 40000, 47000..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm font-num text-stone-900 focus:outline-hidden focus:border-teal-600"
              />
            </div>
            <div>
              <span className="text-xs text-stone-500 block mb-1">Ou choisissez votre département :</span>
              <select
                value={selectedDept}
                onChange={(e) => handleDeptSelect(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-900 focus:outline-hidden focus:border-teal-600"
              >
                {AQUITAINE_DEPTS.map((d) => (
                  <option key={d.code} value={d.code}>
                    {d.code} — {d.name} ({d.prefecture})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {isEligibleRegion ? (
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-lg flex items-center gap-2.5 text-xs text-teal-900">
              <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                <strong>Éligible !</strong> Le département <strong>{matchedDept?.name} ({matchedDept?.code})</strong> fait bien partie de la région Aquitaine ({matchedDept?.prefecture}).
              </span>
            </div>
          ) : (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2.5 text-xs text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Attention : Cette offre spécifique est réservée aux résidents d'Aquitaine (départements 33, 40, 47, 24, 64).
              </span>
            </div>
          )}
        </div>

        {/* Mobility Option */}
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 sm:p-5">
          <label className="flex items-start gap-3.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hasMobility}
              onChange={(e) => setHasMobility(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-stone-300 text-teal-700 focus:ring-teal-700 accent-[#007D8A] cursor-pointer"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-stone-900">
                  Ajouter la mobilité bancaire Crédit Agricole
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-900">
                  +50 € offerts
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Le Crédit Agricole s'occupe de transférer vos prélèvements automatiques. Les 50€ supplémentaires sont crédités après la demande de mobilité.
              </p>
            </div>
          </label>
        </div>

        {/* Breakdown */}
        <div className="border border-stone-100 bg-stone-50/50 rounded-xl p-5 space-y-2.5 text-sm">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-stone-600 flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              Prime ouverture immédiate (0€ de dépôt requis) :
            </span>
            <span className="font-bold text-stone-900 font-num">50 €</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-stone-600 flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600" />
              Prime mobilité bancaire :
            </span>
            <span className={`font-bold font-num ${hasMobility ? 'text-stone-900' : 'text-stone-400'}`}>
              {hasMobility ? '+50 €' : '0 €'}
            </span>
          </div>

          <div className="pt-2 flex items-center justify-between font-bold text-stone-900">
            <span>Total versé sur votre compte :</span>
            <span className="text-xl font-extrabold font-num" style={{ color: brandColor }}>
              {totalBonus} €
            </span>
          </div>
        </div>

        {/* Required Document Note */}
        <div className="flex items-start gap-2.5 p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
          <FileText className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
          <div>
            <strong>Justificatif obligatoire demandé :</strong> Un justificatif de domicile de moins de 3 mois (facture d'eau/électricité, avis d'impôt ou quittance) attestant de votre résidence en Aquitaine.
          </div>
        </div>
      </div>
    </div>
  );
};

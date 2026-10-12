import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Zap, Info } from 'lucide-react';

interface SGSimulatorProps {
  brandColor?: string;
}

export const SGSimulator: React.FC<SGSimulatorProps> = ({ brandColor = '#E2001A' }) => {
  const [paymentsDone, setPaymentsDone] = useState<number[]>([]);

  const examplePayments = [
    { id: 1, title: 'Micro-recharge Amazon ou cagnotte', amount: '0,15 €' },
    { id: 2, title: 'Baguette en boulangerie', amount: '1,20 €' },
    { id: 3, title: 'Café en terrasse', amount: '1,80 €' },
    { id: 4, title: 'Ticket de transport ou horodateur', amount: '2,10 €' },
    { id: 5, title: 'Paiement libre (aucun montant mini requis)', amount: '0,01 €' },
  ];

  const togglePayment = (id: number) => {
    if (paymentsDone.includes(id)) {
      setPaymentsDone(paymentsDone.filter((p) => p !== id));
    } else {
      setPaymentsDone([...paymentsDone, id]);
    }
  };

  const progressCount = paymentsDone.length;
  const isGoalReached = progressCount === 5;

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 mb-2">
            <Zap className="w-3.5 h-3.5" />
            Aucun dépôt initial imposé
          </div>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            Offre SG : 50 € sans apport obligatoire
          </h3>
          <p className="text-sm text-stone-500 mt-1">
            Il suffit d'exécuter 5 paiements par carte au cours des 3 premiers mois pour débloquer votre prime.
          </p>
        </div>

        <div className="bg-stone-50 rounded-xl p-4 sm:text-right border border-stone-100 min-w-[180px]">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">
            Prime garantie
          </span>
          <div className="flex items-baseline sm:justify-end gap-1 mt-1">
            <span className="text-4xl font-extrabold text-stone-900 font-num tracking-tight" style={{ color: brandColor }}>
              50 €
            </span>
            <span className="text-xs text-stone-500 font-medium">versés cash</span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {/* Comparison card: 0€ locked */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
            <span className="text-xs font-semibold text-stone-500 uppercase">Dépôt initial demandé</span>
            <div className="text-2xl font-bold text-stone-900 mt-1 font-num">0 €</div>
            <p className="text-xs text-stone-500 mt-1">Pas besoin d'avancer d'argent pour ouvrir le compte.</p>
          </div>
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
            <span className="text-xs font-semibold text-stone-500 uppercase">Période pour les 5 paiements</span>
            <div className="text-2xl font-bold text-stone-900 mt-1 font-num">90 jours</div>
            <p className="text-xs text-stone-500 mt-1">Dès réception de la carte Visa physique ou Apple/Google Pay.</p>
          </div>
        </div>

        {/* Interactive checklist simulation */}
        <div className="bg-stone-50/70 border border-stone-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-stone-900">
              Simulateur de vos 5 micro-dépenses requises ({progressCount}/5 validées) :
            </h4>
            <span className="text-xs font-medium text-stone-500">
              Cliquez pour simuler
            </span>
          </div>

          <div className="space-y-2">
            {examplePayments.map((item) => {
              const checked = paymentsDone.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => togglePayment(item.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                    checked
                      ? 'bg-red-50/60 border-red-300 text-stone-900 font-medium'
                      : 'bg-white border-stone-200 hover:border-stone-300 text-stone-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold transition-all ${
                        checked ? 'bg-[#E2001A] text-white' : 'border border-stone-300 bg-white'
                      }`}
                    >
                      {checked && '✓'}
                    </div>
                    <span className="text-xs sm:text-sm">{item.title}</span>
                  </div>
                  <span className="text-xs font-bold font-num bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                    {item.amount}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-4 pt-3 border-t border-stone-200">
            <div className="flex justify-between text-xs text-stone-600 mb-1.5 font-medium">
              <span>Progression déblocage prime</span>
              <span>{progressCount * 20}%</span>
            </div>
            <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300 rounded-full"
                style={{
                  width: `${progressCount * 20}%`,
                  backgroundColor: brandColor,
                }}
              />
            </div>
            {isGoalReached && (
              <div className="mt-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Condition 100% remplie ! Vos 50 € sont versés directement sur votre compte bancaire SG.
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="flex items-start gap-2.5 text-xs text-stone-500 bg-stone-50 p-3.5 rounded-lg border border-stone-200">
          <Info className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
          <span>
            <strong>Astuce parrainage :</strong> Pas besoin d'effectuer de gros achats. Même des transactions de 0,05€ (borne de stationnement, micro-bon Amazon, baguette) sont comptabilisées comme un paiement valide.
          </span>
        </div>
      </div>
    </div>
  );
};

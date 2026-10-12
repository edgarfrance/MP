export interface BankOffer {
  id: 'boursobank' | 'sg' | 'credit-agricole' | 'fortuneo';
  name: string;
  shortName: string;
  slug: string;
  tagline: string;
  badge: string;
  maxBonus: number;
  minDepositRequired: number;
  highlightText: string;
  theme: {
    primary: string;
    primaryHover: string;
    textPrimary: string;
    bgSubtle: string;
    borderSubtle: string;
    accentBadgeBg: string;
    accentBadgeText: string;
    gradientFrom: string;
    gradientTo: string;
  };
  keyPoints: string[];
  depositTiers?: {
    deposit: number;
    instantBonus: number;
    threeMonthsBonus: number;
    label: string;
  }[];
  mobilityBonus?: number;
  cardOptions?: {
    name: string;
    bonus: number;
    minIncome: string;
    requiredDeposit: number;
    features: string[];
  }[];
  payoutDelay: string;
  requirements: string[];
  steps: {
    number: number;
    title: string;
    desc: string;
  }[];
  defaultReferralCode?: string;
  referralLinkPlaceholder?: string;
  officialSiteUrl: string;
}

export const BANK_OFFERS: BankOffer[] = [
  {
    id: 'boursobank',
    name: 'BoursoBank',
    shortName: 'BoursoBank',
    slug: 'boursobank',
    tagline: 'Jusqu\'à 320€ de prime cumulée avec carte Ultim gratuite',
    badge: 'Offre Star • Jusqu\'à 320€',
    maxBonus: 320,
    minDepositRequired: 1,
    highlightText: 'Prime modulable selon votre 1er versement + 80€ mobilité',
    theme: {
      primary: '#E2007A', // Rose emblématique BoursoBank
      primaryHover: '#C20068',
      textPrimary: '#9D0054',
      bgSubtle: '#FDF2F8',
      borderSubtle: '#FBCFE8',
      accentBadgeBg: '#FCE7F3',
      accentBadgeText: '#BE185D',
      gradientFrom: '#E2007A',
      gradientTo: '#9D0054',
    },
    keyPoints: [
      'Dès 1€ de dépôt (90€ direct + 80€ en 3 mois = 170€)',
      'Jusqu\'à 160€ direct avec 300€ de premier versement',
      '+80€ supplémentaires avec la mobilité bancaire EasyMove',
      'Carte bancaire Ultim gratuite (0€ de frais de tenue de compte)'
    ],
    depositTiers: [
      {
        deposit: 1,
        instantBonus: 90,
        threeMonthsBonus: 80,
        label: 'Dépôt mini de 1€'
      },
      {
        deposit: 50,
        instantBonus: 120,
        threeMonthsBonus: 80,
        label: 'Dépôt de 50€'
      },
      {
        deposit: 300,
        instantBonus: 160,
        threeMonthsBonus: 80,
        label: 'Dépôt de 300€ (Prime Maximale)'
      }
    ],
    mobilityBonus: 80,
    payoutDelay: 'Immédiat pour la 1ère partie, et sous 90 jours pour le bonus fidélité',
    requirements: [
      'Être une personne physique majeure résidant fiscalement en France',
      'Ouvrir un compte individuel ou joint pour la 1ère fois chez BoursoBank',
      'Conserver le compte ouvert au minimum 12 mois',
      'Effectuer au moins 1 opération de paiement par mois avec la carte (sinon 9€/mois)'
    ],
    steps: [
      {
        number: 1,
        title: 'Formulaire en ligne',
        desc: 'Remplissez vos coordonnées en 5 minutes et collez le code parrainage.'
      },
      {
        number: 2,
        title: 'Signature & Justificatifs',
        desc: 'Signez par SMS et déposez vos pièces d\'identité et justificatif de domicile.'
      },
      {
        number: 3,
        title: 'Premier versement (1€, 50€ ou 300€)',
        desc: 'Effectuez votre premier versement depuis votre compte actuel pour activer le compte et débloquer la prime instantanée.'
      },
      {
        number: 4,
        title: 'Mobilité EasyMove (Optionnelle : +80€)',
        desc: 'En 1 clic dans l\'appli, demandez le transfert d\'au moins un prélèvement pour toucher 80€ de plus.'
      }
    ],
    defaultReferralCode: 'MPBOURSO320',
    officialSiteUrl: 'https://www.boursobank.com'
  },
  {
    id: 'sg',
    name: 'SG (Société Générale)',
    shortName: 'SG',
    slug: 'sg',
    tagline: '50€ offerts sans aucun dépôt obligatoire',
    badge: 'Sans dépôt préalable • 50€',
    maxBonus: 50,
    minDepositRequired: 0,
    highlightText: '5 micro-paiements sur 3 mois suffisent (ex: 5x 0,01€)',
    theme: {
      primary: '#E2001A', // Rouge officiel SG
      primaryHover: '#B80015',
      textPrimary: '#991B1B',
      bgSubtle: '#FEF2F2',
      borderSubtle: '#FECACA',
      accentBadgeBg: '#FEE2E2',
      accentBadgeText: '#991B1B',
      gradientFrom: '#18181B',
      gradientTo: '#E2001A',
    },
    keyPoints: [
      'Aucun dépôt obligatoire à l\'ouverture du compte',
      '50€ versés directement dès la condition remplie',
      'Souscription 100% en ligne (plus simple) ou directement en agence SG',
      'Condition ultra simple : 5 paiements par carte en 3 mois (même 1 centime !)',
      'Grand réseau d\'agences physiques partout en France + appli mobile'
    ],
    payoutDelay: 'Versé directement sur le compte après exécution des 5 paiements',
    requirements: [
      'Être majeur et ne pas être déjà client de la SG',
      'Ouverture possible en ligne (recommandé pour la rapidité) ou en agence physique SG',
      'Réaliser 5 paiements par carte dans les 90 jours (recharges Amazon, boulangerie, horodateur...)',
      'Pas de montant minimum de dépense imposé'
    ],
    steps: [
      {
        number: 1,
        title: 'Souscription en ligne ou en agence',
        desc: 'Ouvrez votre compte en 5 minutes en ligne (le plus simple et rapide), ou rendez-vous dans l\'agence SG la plus proche en transmettant votre code parrain.'
      },
      {
        number: 2,
        title: 'Réception ou retrait de votre carte',
        desc: 'Recevez votre carte bancaire Visa par courrier ou récupérez-la en agence. Activez-la sur Apple Pay ou Google Pay.'
      },
      {
        number: 3,
        title: 'Effectuez 5 paiements de votre choix',
        desc: 'Payez 5 fois un montant symbolique (ex: 0,10€ ou vos achats du quotidien) dans les 3 mois.'
      },
      {
        number: 4,
        title: 'Réception directe des 50€',
        desc: 'La prime de 50€ est créditée automatiquement sur votre compte courant.'
      }
    ],
    defaultReferralCode: 'MPSG50OFF',
    officialSiteUrl: 'https://particuliers.sg.fr'
  },
  {
    id: 'credit-agricole',
    name: 'Crédit Agricole (Aquitaine)',
    shortName: 'Crédit Agricole',
    slug: 'credit-agricole',
    tagline: '50€ sans dépôt + 50€ avec mobilité bancaire',
    badge: 'Aquitaine • Jusqu\'à 100€',
    maxBonus: 100,
    minDepositRequired: 0,
    highlightText: '50€ instantanés sans versement + 50€ si transfert bancaire',
    theme: {
      primary: '#007D8A', // Vert d'eau / canard Crédit Agricole
      primaryHover: '#006570',
      textPrimary: '#115E59',
      bgSubtle: '#F0FDFA',
      borderSubtle: '#CCFBF1',
      accentBadgeBg: '#CCFBF1',
      accentBadgeText: '#0F766E',
      gradientFrom: '#0A533E',
      gradientTo: '#007D8A',
    },
    keyPoints: [
      '50€ offerts sans aucun dépôt préalable, versés instantanément',
      '+50€ additionnels si vous réalisez la mobilité bancaire',
      'Réservé exclusivement aux résidents d\'Aquitaine',
      'Justificatif de domicile obligatoire en Aquitaine'
    ],
    mobilityBonus: 50,
    payoutDelay: '50€ versés instantanément à l\'ouverture + 50€ après transfert',
    requirements: [
      'Habiter obligatoirement en région Aquitaine (Gironde 33, Landes 40, Lot-et-Garonne 47, Dordogne 24, Pyrénées-Atlantiques 64)',
      'Fournir un justificatif de domicile valide de moins de 3 mois',
      'Être une personne physique majeure résidente'
    ],
    steps: [
      {
        number: 1,
        title: 'Vérifiez votre éligibilité territoriale',
        desc: 'Assurez-vous de résider en Aquitaine (Gironde, Landes, Lot-et-Garonne, Dordogne, Pyrénées-Atlantiques).'
      },
      {
        number: 2,
        title: 'Ouverture de compte en ligne',
        desc: 'Initiez l\'ouverture auprès du Crédit Agricole d\'Aquitaine en fournissant votre justificatif de domicile.'
      },
      {
        number: 3,
        title: 'Versement instantané des 50€',
        desc: 'Dès que le dossier est validé, les 50€ sont crédités immédiatement sans aucun versement initial requis.'
      },
      {
        number: 4,
        title: 'Mobilité bancaire (+50€ bonus)',
        desc: 'Activez le service d\'aide à la mobilité bancaire pour encaisser 50€ supplémentaires.'
      }
    ],
    defaultReferralCode: 'MPCA100AQ',
    officialSiteUrl: 'https://www.credit-agricole.fr/ca-aquitaine/particulier.html'
  },
  {
    id: 'fortuneo',
    name: 'Fortuneo Banque',
    shortName: 'Fortuneo',
    slug: 'fortuneo',
    tagline: '70€ pour Fosfo ou 130€ pour Gold CB Mastercard',
    badge: 'Gold ou Fosfo • Jusqu\'à 130€',
    maxBonus: 130,
    minDepositRequired: 300,
    highlightText: '300€ de premier versement (capital récupérable) + prime quasi directe',
    theme: {
      primary: '#108A4D', // Vert Fortuneo emblématique
      primaryHover: '#0D703E',
      textPrimary: '#166534',
      bgSubtle: '#F0FDF4',
      borderSubtle: '#BBF7D0',
      accentBadgeBg: '#DCFCE7',
      accentBadgeText: '#15803D',
      gradientFrom: '#108A4D',
      gradientTo: '#0B291B',
    },
    keyPoints: [
      '70€ pour la carte Fosfo Mastercard (accessible sans condition de revenus)',
      '130€ pour la carte Gold Mastercard (dès 1 800€ de revenus mensuels nets)',
      'Dépôt de 300€ obligatoire dans les deux cas (ce capital reste le vôtre)',
      'Prime versée quasi directement après validation du compte'
    ],
    cardOptions: [
      {
        name: 'Carte Fosfo Mastercard',
        bonus: 70,
        minIncome: 'Aucune condition de revenus',
        requiredDeposit: 300,
        features: [
          'Gratuite dès 1 utilisation par mois',
          'Paiements & retraits gratuits dans le monde entier',
          'Accessible sans justificatif de revenus'
        ]
      },
      {
        name: 'Carte Gold CB Mastercard',
        bonus: 130,
        minIncome: '1 800€ nets / mois ou 10 000€ d\'épargne',
        requiredDeposit: 300,
        features: [
          'Assurances voyage & garanties haut de gamme incluses',
          'Plafonds de paiement élevés',
          'Gratuite dès 1 paiement par mois'
        ]
      }
    ],
    payoutDelay: 'Versé quasi directement (environ 10 à 15 jours après réception du dépôt)',
    requirements: [
      'Effectuer un versement initial de 300€ minimum depuis un compte bancaire à votre nom',
      'Pour la carte Gold : justifier de 1 800€ nets/mois (bulletins de paie ou avis d\'imposition)',
      'Conserver le compte et la carte ouverts pendant au moins 12 mois',
      'Réaliser au moins 1 opération de paiement par mois pour maintenir la gratuité'
    ],
    steps: [
      {
        number: 1,
        title: 'Choisissez votre carte (Fosfo ou Gold)',
        desc: 'Sélectionnez Fosfo (70€, accessible à tous) ou Gold (130€, si revenus >= 1 800€).'
      },
      {
        number: 2,
        title: 'Formulaire & code parrainage',
        desc: 'Renseignez vos informations et collez le code parrainage pour enregistrer l\'offre.'
      },
      {
        number: 3,
        title: 'Premier versement de 300€',
        desc: 'Transférez 300€ pour valider définitivement l\'ouverture. L\'argent reste 100% disponible.'
      },
      {
        number: 4,
        title: 'Encaissement de la prime',
        desc: 'Votre bonus (70€ ou 130€) est versé presque instantanément sur votre compte courant.'
      }
    ],
    defaultReferralCode: 'MPFORTUNEO130',
    officialSiteUrl: 'https://www.fortuneo.fr'
  }
];

export const AQUITAINE_DEPTS = [
  { code: '33', name: 'Gironde', prefecture: 'Bordeaux (CA d\'Aquitaine)' },
  { code: '40', name: 'Landes', prefecture: 'Mont-de-Marsan / Dax (CA d\'Aquitaine)' },
  { code: '47', name: 'Lot-et-Garonne', prefecture: 'Agen (CA d\'Aquitaine)' },
  { code: '24', name: 'Dordogne', prefecture: 'Périgueux (CA Charente-Périgord)' },
  { code: '64', name: 'Pyrénées-Atlantiques', prefecture: 'Pau / Bayonne (CA Pyrénées Gascogne)' }
];

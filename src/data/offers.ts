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
  isSingleUseCode?: boolean;
  contactForCode?: {
    email: string;
    phone: string;
    phoneRaw: string;
    whatsappText: string;
  };
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
      'Jusqu\'à 160€ direct avec 300€ de premier versement',
      'Primes mensuelles : 20€ le 1er mois, 30€ le 2ème, 30€ le 3ème (dès 1 paiement, sans montant minimum)',
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
    payoutDelay: 'Immédiat pour le dépôt, puis 20€ (1er mois), 30€ (2ème mois) et 30€ (3ème mois)',
    requirements: [
      'Être une personne physique majeure résidant fiscalement en France',
      'Ouvrir un compte individuel ou joint pour la 1ère fois chez BoursoBank',
      'Effectuer 1 paiement par carte chaque mois (sans montant minimum) pour toucher les 20€ + 30€ + 30€',
      'Conserver le compte ouvert au minimum 12 mois',
      'Effectuer au moins 1 opération de paiement par mois avec la carte Ultim pour maintenir la gratuité'
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
        desc: 'Effectuez votre premier versement pour activer le compte et débloquer immédiatement 90€, 120€ ou 160€ sur votre solde.'
      },
      {
        number: 4,
        title: '1 paiement / mois (20€ + 30€ + 30€ = 80€)',
        desc: 'Faites au moins 1 paiement par mois (même 0,01€, aucun montant minimum imposé) pour toucher 20€ le 1er mois, 30€ le 2ème mois et 30€ le 3ème mois.'
      },
      {
        number: 5,
        title: 'Mobilité EasyMove (+80€ en option)',
        desc: 'En 1 clic dans l\'application, transférez au moins un prélèvement pour toucher 80€ de plus.'
      }
    ],
    defaultReferralCode: 'EDDU9063',
    officialSiteUrl: 'https://www.boursobank.com/landing/parrainage?code_parrain=EDDU9063'
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
      'Code à usage unique transmis gratuitement par SMS/WhatsApp/Mail',
      'Souscription 100% en ligne (plus simple) ou directement en agence SG',
      'Condition ultra simple : 5 paiements par carte en 3 mois (même 1 centime !)',
      'Grand réseau d\'agences physiques partout en France + appli mobile'
    ],
    payoutDelay: 'Versé directement sur le compte après exécution des 5 paiements',
    requirements: [
      'Être majeur et ne pas être déjà client de la SG',
      'Code parrainage à usage unique (demandez-le gratuitement par SMS, WhatsApp ou Mail)',
      'Ouverture possible en ligne (recommandé pour la rapidité) ou en agence physique SG',
      'Réaliser 5 paiements par carte dans les 90 jours (recharges Amazon, boulangerie, horodateur...)',
      'Pas de montant minimum de dépense imposé'
    ],
    steps: [
      {
        number: 1,
        title: 'Demandez votre code unique',
        desc: 'Contactez-nous par SMS/WhatsApp au 07 68 05 90 63 ou mail à contact@meilleurparrainage.com pour recevoir votre code nominatif valide.'
      },
      {
        number: 2,
        title: 'Souscription en ligne ou en agence',
        desc: 'Ouvrez votre compte en 5 minutes en ligne (le plus simple), ou rendez-vous en agence SG en renseignant votre code parrain.'
      },
      {
        number: 3,
        title: 'Réception de votre carte & 5 paiements',
        desc: 'Activez votre carte Visa et effectuez 5 paiements de montant libre (ex: 5x 0,10€) dans les 3 mois.'
      },
      {
        number: 4,
        title: 'Réception directe des 50€',
        desc: 'La prime de 50€ est créditée automatiquement sur votre nouveau compte SG.'
      }
    ],
    isSingleUseCode: true,
    defaultReferralCode: 'USAGE UNIQUE (SMS/WhatsApp)',
    contactForCode: {
      email: 'contact@meilleurparrainage.com',
      phone: '07 68 05 90 63',
      phoneRaw: '0768059063',
      whatsappText: 'Bonjour, je souhaite recevoir un code de parrainage SG (Société Générale) svp.'
    },
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
      'Code à usage unique transmis gratuitement par SMS/WhatsApp/Mail',
      'Réservé exclusivement aux résidents d\'Aquitaine',
      'Justificatif de domicile obligatoire en Aquitaine'
    ],
    mobilityBonus: 50,
    payoutDelay: '50€ versés instantanément à l\'ouverture + 50€ après transfert',
    requirements: [
      'Habiter obligatoirement en région Aquitaine (Gironde 33, Landes 40, Lot-et-Garonne 47, Dordogne 24, Pyrénées-Atlantiques 64)',
      'Code parrainage à usage unique (demandez-le gratuitement par SMS, WhatsApp ou Mail)',
      'Fournir un justificatif de domicile valide de moins de 3 mois',
      'Être une personne physique majeure résidente'
    ],
    steps: [
      {
        number: 1,
        title: 'Demandez votre code unique Aquitaine',
        desc: 'Contactez-nous par SMS/WhatsApp au 07 68 05 90 63 ou mail à contact@meilleurparrainage.com pour recevoir votre lien/code nominatif.'
      },
      {
        number: 2,
        title: 'Ouverture de compte en ligne',
        desc: 'Initiez l\'ouverture auprès du Crédit Agricole d\'Aquitaine en fournissant votre justificatif de domicile.'
      },
      {
        number: 3,
        title: 'Versement instantané des 50€',
        desc: 'Dès validation de votre dossier, les 50€ sont crédités sans aucun versement initial requis.'
      },
      {
        number: 4,
        title: 'Mobilité bancaire (+50€ bonus)',
        desc: 'Activez le service d\'aide à la mobilité bancaire pour encaisser 50€ supplémentaires.'
      }
    ],
    isSingleUseCode: true,
    defaultReferralCode: 'USAGE UNIQUE (SMS/WhatsApp)',
    contactForCode: {
      email: 'contact@meilleurparrainage.com',
      phone: '07 68 05 90 63',
      phoneRaw: '0768059063',
      whatsappText: 'Bonjour, je souhaite recevoir un code de parrainage Crédit Agricole Aquitaine svp.'
    },
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
    defaultReferralCode: '12569618',
    officialSiteUrl: 'https://www.fortuneo.fr/compte-bancaire/souscrire/choix-type-compte'
  }
];

export const AQUITAINE_DEPTS = [
  { code: '33', name: 'Gironde', prefecture: 'Bordeaux (CA d\'Aquitaine)' },
  { code: '40', name: 'Landes', prefecture: 'Mont-de-Marsan / Dax (CA d\'Aquitaine)' },
  { code: '47', name: 'Lot-et-Garonne', prefecture: 'Agen (CA d\'Aquitaine)' },
  { code: '24', name: 'Dordogne', prefecture: 'Périgueux (CA Charente-Périgord)' },
  { code: '64', name: 'Pyrénées-Atlantiques', prefecture: 'Pau / Bayonne (CA Pyrénées Gascogne)' }
];

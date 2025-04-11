const PLANS = [
  {
    title: "Basic",
    price: "€ 2,99",
    popular: true,
    color: '#FB8C00',
    description: "Il piano perfetto per i principianti del Fantacalcio.",
    features: [
      "Aste online in tempo reale",
      "Gestione di 1 lega",
      "Fino a 8 partecipanti",
      "Supporto email",
    ],
    buttonText: "Inizia con Basic",
  },
  {
    title: "Premium",
    price: "€ 7,99",
    color: '#43A047',
    recommended: true,
    description: "Per i Fantallenatori che vogliono di più.",
    features: [
      "Tutto del piano Basic",
      "Gestione fino a 3 leghe",
      "Fino a 16 partecipanti per lega",
      "Statistiche avanzate",
      "Supporto prioritario",
    ],
    buttonText: "Inizia con Premium",
  },
  {
    title: "Manager",
    price: "€ 9,99",
    color: '#1976D2',
    description: "L'ultima parola in fatto di Fantacalcio.",
    features: [
      "Tutto del piano Premium",
      "Leghe illimitate",
      "Partecipanti illimitati",
      "Algoritmi di suggerimento IA",
      "Supporto 24/7",
      "API per integrazioni",
    ],
    buttonText: "Inizia con Manager",
  },
];

export default PLANS;

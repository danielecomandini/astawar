const PLANS = [
  {
    title: "Basic",
    price: "€ 4,99",
    popular: true,
    color: '#1976D2',
    description: "Il piano perfetto per i principianti del Fantacalcio.",
    features: [
      "Aste online in tempo reale",
      "Partecipazione a 3 leghe",
      "Massimo di 8 partecipanti per lega",
      "Supporto email",
    ],
    buttonText: "Inizia con Basic",
  },
  {
    title: "Premium",
    price: "€ 7,99",
    color: '#1976D2',
    recommended: true,
    description: "Per i Fantallenatori che vogliono di più.",
    features: [
      "Tutto del piano Basic",
      "Gestione fino a 5 leghe",
      "Massimo di 12 partecipanti per lega",
      "Statistiche avanzate",
      "Supporto prioritario",
    ],
    buttonText: "Inizia con Premium",
  },
  {
    title: "Manager",
    price: "€ 12,99",
    color: '#1976D2',
    description: "L'ultima parola in fatto di Fantacalcio.",
    features: [
      "Tutto del piano Premium",
      "Leghe illimitate",
      "Partecipanti illimitati",
      "Algoritmi di suggerimento IA",
      "API per integrazioni",
    ],
    buttonText: "Inizia con Manager",
  },
];

export default PLANS;

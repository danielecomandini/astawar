const SUBSCRIPTION_PLANS = [
  {
    id: "PLAN_BASIC",
    name: "Basic",
    price: 4.99,
    currency: "€",
    description: "Il piano perfetto per fare l'asta con i tuoi amici",
    functionalities: [
      "Aste online in tempo reale",
      "Gestione fino a 3 leghe",
      "Fino a 8 partecipanti per lega",
    ],
  },
  {
    id: "PLAN_PREMIUM",
    name: "Premium",
    price: 7.99,
    currency: "€",
    description: "Per i Fantallenatori che vogliono di piu'",
    functionalities: [
      "Tutto il piano Basic",
      "Gestione fino a 5 leghe",
      "Fino a 16 partecipanti per lega",
      "Statistiche sui giocatori",
    ],
  },
  {
    id: "PLAN_MANAGER",
    name: "Manager",
    price: 12.99,
    currency: "€",
    description: "Per i Fantallenatori che si sentono dirigenti",
    functionalities: [
      "Tutto il piano Premium",
      "Leghe illimitate",
      "Partecipanti illimitati",
      "Algoritmi di suggerimento IA",
      "Integrazione con altri tool per gestire la stagione",
    ],
  },
];

export default SUBSCRIPTION_PLANS;

import {
  faCalendar,
  faCreditCard,
  faKey,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const MENU = [
  {
    label: "ASTA",
    functionalities: [
      { label: "Gestisci Calendario", icon: faCalendar },
      { label: "Gestisci Calciatori", icon: faUsers },
    ],
  },
  {
    label: "ACCOUNT",
    functionalities: [
      { label: "Cambia Password", icon: faKey },
      { label: "Cambia Piano", icon: faCreditCard },
      { label: "Invita un amico", icon: faUserPlus },
    ],
  },
];

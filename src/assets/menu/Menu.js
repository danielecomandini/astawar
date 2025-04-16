import {
  faCalendar,
  faCreditCard,
  faHammer,
  faKey,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const MENU = [
  {
    label: "ASTA",
    functionalities: [
      { label: "Gestisci Asta", icon: faHammer, routeTo: '/asta' },
      { label: "Gestisci Calendario", icon: faCalendar, routeTo: '/calendario' },
      { label: "Gestisci Calciatori", icon: faUsers, routeTo: '/calciatori' },
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

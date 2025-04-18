import {
  faCalendar,
  faCreditCard,
  faHammer,
  faHome,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const ASTA_WAR_MENU = [
  {
    label: "HOME",
    items: [{ label: "Asta War", icon: faHome }],
  },
  {
    label: "ASTE",
    items: [
      { label: "Le Mie Aste", icon: faHammer },
      { label: "Gestisci Calendario", icon: faCalendar },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      { label: "Gestisci Account", icon: faUser },
      { label: "Gestisci Piani", icon: faCreditCard },
      { label: "Invita un Amico", icon: faUserPlus },
    ],
  },
];

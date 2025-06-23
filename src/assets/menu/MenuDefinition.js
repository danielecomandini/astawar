import {
  faCalendar,
  faChartLine,
  faEuro,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import MyBids from "../../pages/my-bids/MyBidsIndex";
import PlayerStats from "../../pages/player-stats/PlayerStatsIndex";
import PricingIndex from "../../pages/pricing/PricingIndex";
import AccountIndex from "../../pages/account/AccountIndex";

export const MENU_DEFINITION = [
  { id: "calendar", label: "Le Mie Aste", icon: faCalendar, component: MyBids },
  { id: "stats", label: "Statistiche", icon: faChartLine, component: PlayerStats },
  { id: "pricing", label: "Pricing", icon: faEuro, component: PricingIndex },
  { id: "profile", label: "Profile", icon: faUser, component: AccountIndex },
];

import {
  faCalendar,
  faChartLine,
  faEuro,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import PlayerStats from "../../pages/player-stats/PlayerStatsIndex";
import PricingIndex from "../../pages/pricing/PricingIndex";
import AccountIndex from "../../pages/account/AccountIndex";
import HomeIndex from "../../pages/home/HomeIndex";
import MyBidsIndex from "../../pages/my-bids/MyBidsIndex";

export const MENU_DEFINITION = [
  { id: "home", label: "Home", icon: faHome, component: HomeIndex },
  { id: "calendar", label: "Le Mie Aste", icon: faCalendar, component: MyBidsIndex },
  { id: "stats", label: "Statistiche", icon: faChartLine, component: PlayerStats },
  { id: "pricing", label: "Pricing", icon: faEuro, component: PricingIndex },
  { id: "profile", label: "Profile", icon: faUser, component: AccountIndex },
];

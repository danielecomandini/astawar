import { Toolbar } from "@mui/material";
import AWCard from "../../UI/elements/AWCard";
import { AW_COLORS } from "../../UI/themes/AstaWarTheme";
import AstaWarSubstriptionPlanDescription from "./components/AstaWarSubstriptionPlanDescription";
import AstaWarSubscriptionPlanContent from "./components/AstaWarSubscriptionPlanContent";

const AstaWarSubscriptionPlan = () => {
  return (
    <>
      <AstaWarSubstriptionPlanDescription />
      <AstaWarSubscriptionPlanContent />
    </>
  );
};

export default AstaWarSubscriptionPlan;

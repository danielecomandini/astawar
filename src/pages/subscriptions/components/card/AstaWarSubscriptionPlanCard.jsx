import { Card } from "@mui/material";
import PlanName from "./PlanName";
import PlanPrice from "./PlanPrice";
import PlanDescription from "./PlanDescription";
import PlanFunctionalities from "./PlanFunctionalities";
import PlanButton from "./PlanButton";

const AstaWarSubscriptionPlanCard = ({plan}) => {
  return (
    <Card
      sx={{
        width: "30%",
        margin: "5px",
      }}
    >
      <PlanName plan={plan} />
      <PlanPrice plan={plan} />
      <PlanDescription plan={plan} />
      <PlanFunctionalities plan={plan} />
      <PlanButton plan={plan} />
    </Card>
  );
};

export default AstaWarSubscriptionPlanCard;

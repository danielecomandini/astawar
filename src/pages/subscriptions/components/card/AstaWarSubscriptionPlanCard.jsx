import { Card } from "@mui/material";
import PlanName from "./PlanName";
import PlanPrice from "./PlanPrice";

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
      <div>PLAN DESCRIPTION</div>
      <div>PLAN FUNCTIONALITIES</div>
      <div>BUTTON</div>
    </Card>
  );
};

export default AstaWarSubscriptionPlanCard;

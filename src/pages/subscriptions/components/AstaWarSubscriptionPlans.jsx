import { Container } from "@mui/material";
import AstaWarSubscriptionPlanCard from "./card/AstaWarSubscriptionPlanCard";

const AstaWarSubscriptionPlans = ({plans}) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {plans && plans.map( plan => <AstaWarSubscriptionPlanCard key={plan.title} plan={plan} />)}
      </div>
    </Container>
  );
};

export default AstaWarSubscriptionPlans;

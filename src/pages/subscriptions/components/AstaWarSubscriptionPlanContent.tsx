import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AWCard from "../../../UI/elements/AWCard";
import AWIcon from "../../../UI/elements/AWIcon";
import AWText from "../../../UI/elements/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const PLANS = [
  { id: "BASIC", price: 4.99, items: ["", ""] },
  { id: "PREMIUM", price: 7.99, items: [""] },
  { id: "MANAGER", price: 9.99, items: [""] },
];

const PlanSeparator = () => {
  return (
    <hr
      style={{
        width: "95%",
        border: `1px solid ${AW_COLORS.highlight}`,
      }}
    />
  );
};

const PlanName = ({ plan }) => {
  return (
    <AWText
      variant="h5"
      color={AW_COLORS.highlight}
      fontWeight="bold"
      style={{
        marginTop: "20px",
      }}
    >
      {plan.id}
    </AWText>
  );
};

const PlanPrice = ({ plan }) => {
  return (
    <div
      style={{
        width: "95%",
        margin: "0 auto",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <AWText variant="h2" fontWeight="bold" color={AW_COLORS.highlight}>
        € {plan.price}
      </AWText>
    </div>
  );
};

const PlanFunctionalities = ({ plan }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        width: "90%",
        margin: "0 auto",
        textAlign: "justify",
      }}
    >
      {plan.items &&
        plan.items.map((item, idx) => (
          <div key={idx}>
            <AWText variant="h7" color={AW_COLORS.highlight} fontWeight="bold">
              {item !== "" && (
                <AWIcon icon={faCheck} color={AW_COLORS.highlight} />
              )}{" "}
              TEXT
            </AWText>
          </div>
        ))}
    </div>
  );
};

const AstaWarSubscriptionPlanCard = ({ plan }) => {
  return (
    <AWCard
      sx={{
        border: `3px solid ${AW_COLORS.highlight}`,
        width: "100%",
        marginLeft: "10px",
        backgroundColor: AW_COLORS.white,
      }}
    >
      <div>
        <div>
          <PlanName plan={plan} />
          <PlanSeparator />
          <PlanPrice plan={plan} />
          <PlanSeparator />
          <PlanFunctionalities plan={plan} />
          <PlanSeparator />
        </div>
      </div>
    </AWCard>
  );
};

const AstaWarSubscriptionPlanContent = () => {
  return (
    <>
      <div
        style={{
          width: "75%",
          margin: "0 auto",
          marginTop: "30px",
          padding: "10px",
          textAlign: "center",
          display: "flex",
        }}
      >
        {PLANS.map((plan) => (
          <AstaWarSubscriptionPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </>
  );
};

export default AstaWarSubscriptionPlanContent;

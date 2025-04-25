import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AWCard from "../../../UI/elements/AWCard";
import AWIcon from "../../../UI/elements/AWIcon";
import AWText from "../../../UI/elements/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import { Typography } from "@mui/material";
import AWButton from "../../../UI/elements/AWButton";

const PLANS = [
  {
    id: "BASIC",
    price: 4.99,
    description: "Il piano perfetto per i principianti del Fantacalcio.",
    items: [
      "Aste online in tempo reale",
      "Partecipazione a 3 leghe",
      "Massimo di 8 partecipanti per lega",
      "Supporto email",
      "",
    ],
  },
  {
    id: "PREMIUM",
    price: 7.99,
    description: "Per i Fantallenatori che vogliono di più.",
    items: [
      "Tutto il piano Basic",
      "Gestione fino a 5 leghe",
      "Massimo di 12 partecipanti per lega",
      "Statistiche avanzate",
      "Supporto prioritario",
    ],
  },
  {
    id: "MANAGER",
    price: 9.99,
    description: `Tutta la potenza dell'Intelligenza Artificiale a tua disposizione.`,
    items: [
      "Tutto il piano Premium",
      "Leghe illimitate",
      "Partecipanti illimitati",
      "Algoritmi di suggerimento IA",
      "API per integrazioni",
    ],
  },
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
        € {plan.price}/
        <span
          style={{
            fontSize: "30px",
          }}
        >
          anno
        </span>
      </AWText>
    </div>
  );
};

const PlanDescription = ({ plan }) => {
  return (
    <AWText
      variant="h6"
      color={AW_COLORS.darkGrey}
      fontWeight="bold"
      textAlign="justify"
      style={{
        marginTop: "20px",
        marginLeft: "15px",
      }}
    >
      {plan.description}
    </AWText>
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
        padding: "20px",
        minHeight: "160px",
      }}
    >
      {plan.items &&
        plan.items.map((item, idx) => (
          <div key={idx}>
            <AWText variant="h7" color={AW_COLORS.highlight} fontWeight="bold">
              {item !== "" && (
                <>
                  <AWIcon icon={faCheck} color={AW_COLORS.highlight} /> {item}
                </>
              )}
            </AWText>
          </div>
        ))}
    </div>
  );
};

const PlanButton = ({ plan }) => {
  return (
    <AWButton
      style={{
        margin: "20px",
      }}
      onClick={() => console.log(`Comincia con ${plan.id}...`)}
    >
      COMINCIA CON {plan.id}
    </AWButton>
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
          <PlanDescription plan={plan} />
          <PlanSeparator />
          <PlanFunctionalities plan={plan} />
          <PlanSeparator />
          <PlanButton plan={plan} />
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

import { Box, Card } from "@mui/material";
import AWText from "../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import AWIcon from "../../../UI/elements/icons/AWIcon";
import AWButton from "../../../UI/elements/buttons/AWButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AstaWarSubscriptionPlanName = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        p: 2,
        backgroundColor: "#AAAAAA",
        border: "1px solid #AAAAAA",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <AWText
        color={AW_COLORS.cardHeader}
        fontWeight="bold"
        paddingLeft="10px"
        variant="h5"
      >
        {plan.name}
      </AWText>
    </Box>
  );
};

const AstaWarSubscriptionPlanPrice = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        p: 2,
      }}
    >
      <AWText
        textAlign="center"
        color={AW_COLORS.cardHeader}
        fontWeight="bold"
        variant="h3"
        paddingTop="20px"
        paddingBottom="20px"
      >
        {plan.currency} {plan.price}/
        <span style={{ fontSize: "30px" }}>anno</span>
      </AWText>
    </Box>
  );
};

const AstaWarSubscriptionPlanDescription = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <AWText
          textAlign="justify"
          color={AW_COLORS.cardHeader}
          fontWeight="bold"
          variant="h7"
          paddingTop="20px"
          paddingBottom="20px"
        >
          {plan.description}
        </AWText>
      </div>
    </Box>
  );
};

const AstaWarSubscriptionPlanFunctionalities = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        p: 2,
      }}
    >
      {plan.functionalities.map((f, idx) => (
        <div
          key={idx}
          style={{ display: "flex", margin: "0 auto", width: "90%" }}
        >
          <div>
            <AWIcon icon={faCheck} color={AW_COLORS.check} />
          </div>
          <div>
            <AWText color={AW_COLORS.cardHeader} paddingLeft="5px">
              {f}
            </AWText>
          </div>
        </div>
      ))}
    </Box>
  );
};

const AstaWarSubscriptionPlanButton = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <div style={{
        margin: '0 auto',
        width: '100%',

      }}>
        <AWButton style={{position: "relative", bottom: '0px'}}>INIZIA CON {plan.name.toUpperCase()}</AWButton>
      </div>
    </Box>
  );
};

const AstaWarSubscriptionPlans = ({ classes, plans }) => {
  return (
    <>
      <div className={classes["subscription-plans-container"]}>
        {plans &&
          plans.map((plan) => (
            <Card key={plan.id} className={classes["subscription-plans-card"]}>
              <AstaWarSubscriptionPlanName plan={plan} />
              <AstaWarSubscriptionPlanPrice plan={plan} />
              <AstaWarSubscriptionPlanDescription plan={plan} />
              <AstaWarSubscriptionPlanFunctionalities plan={plan} />
              <AstaWarSubscriptionPlanButton plan={plan} />
            </Card>
          ))}
      </div>
    </>
  );
};

export default AstaWarSubscriptionPlans;

import AWButton from "../../elements/AWButton";
import { AW_COLORS } from "../../themes/AstaWarTheme";

const AstaWarSubscriptionPlans = () => {
  return <>
    <div style={{ marginTop: "40px" }}>
        <AWButton
          sx={{
            backgroundColor: AW_COLORS.headerBg,
          }}
        >
          VISUALIZZA I PIANI
        </AWButton>
      </div>
  </>;
};

export default AstaWarSubscriptionPlans;

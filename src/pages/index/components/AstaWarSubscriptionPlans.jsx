import { useNavigate } from "react-router-dom";
import AWButton from "../../../UI/elements/AWButton";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const AstaWarSubscriptionPlans = () => {
  const navigate = useNavigate();

  const onViewPlanButtonClickHandler = () => {
    navigate("/plans");
  };

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <AWButton
          sx={{
            backgroundColor: AW_COLORS.headerBg,
          }}
          onClick={onViewPlanButtonClickHandler}
        >
          VISUALIZZA I PIANI
        </AWButton>
      </div>
    </>
  );
};

export default AstaWarSubscriptionPlans;

import { useNavigate } from "react-router-dom";
import AWButton from "../../../UI/elements/AWButton";
import AWText from "../../../UI/elements/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const AstaWarUpperSection = () => {
  const navigate = useNavigate();

  const onViewPlanButtonClickHandler = () => {
    navigate("/plans");
  };

  return (
    <>
      <AWText
        variant="h2"
        fontWeight="bold"
        color={AW_COLORS.headerBg}
        sx={{
          paddingTop: "100px",
        }}
      >
        ASTA WAR
      </AWText>
      <AWText
        variant="h5"
        fontWeight="bold"
        color={AW_COLORS.darkGrey}
        sx={{
          paddingTop: "50px",
        }}
      >
        La nuova piattaforma per effettuare aste online con i tuoi amici e
        <br />
        sfruttare tutta la potenza dell'intelligenza artificiale.
      </AWText>
      <div style={{ marginTop: "40px" }}>
        <AWButton
          sx={{
            backgroundColor: AW_COLORS.headerBg,
          }}
          onClick={onViewPlanButtonClickHandler}
        >
          PROVA GRATUITA 7 GIORNI
        </AWButton>
      </div>
    </>
  );
};

export default AstaWarUpperSection;

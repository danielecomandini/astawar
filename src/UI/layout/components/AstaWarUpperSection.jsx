import AWButton from "../../elements/AWButton";
import AWText from "../../elements/AWText";
import { AW_COLORS } from "../../themes/AstaWarTheme";

const AstaWarUpperSection = () => {
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
        >
          PROVA GRATUITA 7 GIORNI
        </AWButton>
      </div>
    </>
  );
};

export default AstaWarUpperSection;

import { Toolbar } from "@mui/material";
import AWCard from "../../../UI/elements/AWCard";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const AstaWarSubstriptionPlanDescription = () => {
  return (
    <>
      <Toolbar />
      <AWCard
        sx={{
          width: "75%",
          margin: "0 auto",
          marginTop: "30px",
          backgroundColor: AW_COLORS.highlight,
          color: AW_COLORS.white,
          padding: "10px",
          textAlign: "center",
        }}
      >
        La nuova piattaforma per fare le <b>Aste</b> al Fantacalcio con i tuoi
        amici sfruttando la potenza dell'<b>Intelligenza Artificiale</b>.
      </AWCard>
    </>
  );
};

export default AstaWarSubstriptionPlanDescription;

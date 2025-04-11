import { Box } from "@mui/material";
import AWText from "../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import AWButton from "../../../UI/elements/buttons/AWButton";
import { useNavigate } from "react-router-dom";

const AstaWarSubscriptionHeader = () => {
  const navigate = useNavigate();

  const onClickButtonHandler = () => {
    navigate("/home");
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        p: 2,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <AWText fontWeight="bold" variant="h1" color={AW_COLORS.green}>
          ASTA WAR
        </AWText>
        <AWText fontWeight="bold" variant="h5">
          Una nuova piattaforma interattiva per poter gestire le aste del
          fantacalcio insieme ai tuoi amici.
        </AWText>
        <AWText fontWeight="bold" variant="h5">
          Sfrutta la potenza dell'AI e mettila a tua disposizione per costruire
          la squadra dei tuoi sogni!
        </AWText>
        <AWButton
          style={{
            marginTop: "15px",
            marginBottom: "10px",
            backgroundColor: AW_COLORS.green,
          }}
          onClick={onClickButtonHandler}
        >
          Prova Gratuita 7 giorni
        </AWButton>
        <hr
          style={{
            height: "3px",
            backgroundColor: AW_COLORS.green,
          }}
        />
      </div>
    </Box>
  );
};

export default AstaWarSubscriptionHeader;

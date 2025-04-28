import AWText from "../../../UI/elements/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const AstaWarPlansHeader = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <AWText
        variant="h4"
        fontWeight="bold"
        color={AW_COLORS.darkGrey}
        sx={{
          paddingTop: "50px",
        }}
      >
        PIANI E ABBONAMENTI
      </AWText>
      <AWText
        variant="h5"
        fontWeight="bold"
        color={AW_COLORS.darkGrey}
        sx={{
          paddingTop: "50px",
        }}
      >
        Scegli il piano per le tue esigienze. Tutti i piani includono un periodo
        di prova di 7 giorni.
      </AWText>
    </div>
  );
};

export default AstaWarPlansHeader;

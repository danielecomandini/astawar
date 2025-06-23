import {
  faCalendar,
  faHexagonNodes,
  faTrophy,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AWCol from "../../../UI/elements/grids/AWCol";
import AWRow from "../../../UI/elements/grids/AWRow";
import AWIcon from "../../../UI/elements/icons/AWIcon";
import AWText from "../../../UI/elements/texts/AWText";
import { Box } from "@mui/material";

const Bullet = ({ icon, text }) => {
  return (
    <Box
      sx={{
        marginBottom: "10px",
      }}
    >
      <AWText variant="h7">
        <AWIcon
          icon={icon}
        />{" "}
        {text} <br />
      </AWText>
    </Box>
  );
};

const UnloggedApplicationDescription = () => {
  return (
    <section
      style={{
        marginTop: "200px",
      }}
    >
      <AWRow
        sx={{
          marginBottom: "100px",
        }}
      >
        <AWCol textAlign="center">
          <AWText fontWeight="bold" variant="h2">
            ASTA WAR
          </AWText>
        </AWCol>
        <AWCol textAlign="center">
          <AWText fontWeight="bold" variant="h5">
            L'ASTA PER IL FANTACALCIO NON E' MAI STATA PIU' FACILE
          </AWText>
        </AWCol>
      </AWRow>

      <AWRow
        sx={{
          paddingLeft: "50px",
        }}
      >
        <AWCol size={5}>
          <AWText variant="h6">
            Partecipa insieme ai tuoi amici alle aste per la tua nuova stagione
            del Fantacalcio e sfrutta tutta la potenza dell'IA per creare la tua
            squadra dei sogni.
          </AWText>
        </AWCol>
        <AWCol size={5}>
          <Bullet
            icon={faHexagonNodes}
            text="Algoritmi avanzati per l'analisi dei giocatori"
          />
          <Bullet
            icon={faUsers}
            text="Crea gruppi e partecipa ad aste esclusive con i tuoi amici"
          />
          <Bullet
            icon={faCalendar}
            text="Controlla le tue aste passate e future con il nostro calendario"
          />
          <Bullet icon={faTrophy} text="Esperienza live durante le aste" />
        </AWCol>
      </AWRow>
    </section>
  );
};

export default UnloggedApplicationDescription;

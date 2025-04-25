import { Toolbar } from "@mui/material";
import AWText from "../elements/AWText";
import { AW_COLORS } from "../themes/AstaWarTheme";
import AWCard from "../elements/AWCard";
import {
  faCalendar,
  faChartLine,
  faHammer,
  faRobot,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import AWIcon from "../elements/AWIcon";

const MAIN_FUNCTIONALITIES = [
  {
    label: "CALENDARIO",
    icon: faCalendar,
    desc: "Visualizza il calendario delle tue aste.",
  },
  {
    label: "INVITA AMICI",
    icon: faUserPlus,
    desc: "Invita i tuoi amici per poter fare l'asta.",
  },
  {
    label: "ASTE",
    icon: faHammer,
    desc: "Partecipa alle aste con i tuoi amici.",
  },
  {
    label: "STATISTICHE",
    icon: faChartLine,
    desc: "Statistiche sempre aggiornate su giocatori e squadre.",
  },
  {
    label: "AI",
    icon: faRobot,
    desc: "Usa l'intelligenza artificiale per costruire la squadra dei tuoi sogni.",
  },
];

const AstaWarIndex = () => {
  return (
    <>
      <Toolbar></Toolbar>
      <section
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
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
        <AWText
          variant="h4"
          fontWeight="bold"
          color={AW_COLORS.headerBg}
          sx={{
            paddingTop: "200px",
          }}
        >
          FUNZIONALITA' PRINCIPALI
        </AWText>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {MAIN_FUNCTIONALITIES.map((funct, idx) => (
            <div
              key={idx}
              style={{
                border: `1px solid ${AW_COLORS.grey}`,
                borderRadius: "5px",
                width: "400px",
                height: "200px",
                marginLeft: "20px",
                marginRight: "20px",
                marginTop: "40px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <div>
                <AWIcon
                  icon={funct.icon}
                  size="2x"
                  style={{
                    marginTop: "20px",
                    color: AW_COLORS.headerBg,
                  }}
                />
              </div>
              <div>
                <AWText
                  fontWeight="bold"
                  color={AW_COLORS.headerBg}
                  variant="h5"
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  {funct.label}
                </AWText>
              </div>
              <div>
                <AWText
                  fontWeight="bold"
                  color={AW_COLORS.headerBg}
                  variant="h7"
                  textAlign="justify"
                >
                  {funct.desc}
                </AWText>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AstaWarIndex;

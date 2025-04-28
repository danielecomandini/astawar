import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AWIcon from "../../../UI/elements/AWIcon";
import AWText from "../../../UI/elements/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import AWButton from "../../../UI/elements/AWButton";

const PLANS = [
  {
    id: "BASIC",
    price: 5.99,
    description: "Il piano perfetto per i principianti del Fantacalcio.",
    items: [
      "Aste online in tempo reale",
      "Partecipazione a tre leghe",
      "Supporto email",
    ],
  },
  {
    id: "PREMIUM",
    price: 9.99,
    description: "Per i Fantallentaori che vogliono di piu'.",
    color: AW_COLORS.headerBg,
    items: [
      "Aste online in tempo reale",
      "Numero leghe illimitato",
      "Statistiche basi su giocatori e squadre",
      "Supporto prioritario",
    ],
  },
  {
    id: "MANAGER",
    price: 12.99,
    description: `Tutta la potenza dell'AI al servizio dei Fantallenatori che vogliono di piu'.`,
    items: [
      "Aste online in tempo reale",
      "Numero leghe illimitato",
      "Statistiche avanzate su giocatori e squadre",
      "Supporto AI",
      "API per integrazione con altre piattaforme",
    ],
  },
];

const AstaWarPlansOptions = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {PLANS.map((opt, idx) => (
        <div
          key={idx}
          style={{
            border: `2px solid ${opt.color || AW_COLORS.grey}`,
            borderRadius: "5px",
            width: "480px",
            height: "550px",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "40px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.3s ease-in-out",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div>
            <AWText
              variant="h3"
              fontWeight="bold"
              paddingLeft="20px"
              color={opt.color || AW_COLORS.darkGrey}
            >
              {opt.id}
            </AWText>
          </div>
          <div>
            <AWText
              variant="h1"
              fontWeight="bold"
              textAlign="center"
              paddingLeft="20px"
              color={opt.color || AW_COLORS.darkGrey}
            >
              € {opt.price}
            </AWText>
          </div>
          <div>
            <AWText
              variant="h5"
              fontWeight="bold"
              paddingLeft="20px"
              color={AW_COLORS.darkGrey}
            >
              {opt.description}
            </AWText>
          </div>
          <div
            style={{
              margin: "20px auto",
              width: "90%",
            }}
          >
            {opt.items.map((item, idx) => (
              <AWText>
                <AWIcon
                  icon={faCheck}
                  color={AW_COLORS.headerBg}
                  style={{
                    marginRight: "20px",
                  }}
                />
                {item}
              </AWText>
            ))}
          </div>
          <div>
            <AWButton
              style={{
                backgroundColor: opt.color || AW_COLORS.darkGrey,
                margin: "0 auto",
                width: "100%",
              }}
            >
              Abbonati
            </AWButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstaWarPlansOptions;

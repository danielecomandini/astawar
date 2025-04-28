import { MAIN_FUNCTIONALITIES } from "../../../assets/objects/MAIN_FUNCTIONALITIES";
import AWIcon from "../../elements/AWIcon";
import AWText from "../../elements/AWText";
import { AW_COLORS } from "../../themes/AstaWarTheme";

const AstaWarMainFunctionality = () => {
  return (
    <>
      <AWText
        variant="h4"
        fontWeight="bold"
        color={AW_COLORS.headerBg}
        sx={{
          paddingTop: "150px",
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
    </>
  );
};

export default AstaWarMainFunctionality;

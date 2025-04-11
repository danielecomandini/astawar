import { Box } from "@mui/material";
import AWText from "../../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../../UI/themes/AstaWarTheme";
import AWIcon from "../../../../UI/elements/icons/AWIcon";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PlanFunctionalities = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        p: 2,
      }}
    >
      <div>
        {plan.features.map((feature, idx) => (
          <div key={idx} style={{ display: "flex" }}>
            <div>
              <AWIcon icon={faCheck} color={AW_COLORS.green} />
            </div>
            <div><AWText paddingLeft="10px">{feature}</AWText></div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default PlanFunctionalities;

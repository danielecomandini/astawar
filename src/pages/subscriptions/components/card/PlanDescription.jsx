import { Box } from "@mui/material";
import AWText from "../../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../../UI/themes/AstaWarTheme";

const PlanDescription = ({ plan }) => {
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
        <AWText variant="h7" fontWeight="bold" color={AW_COLORS.darkGrey}>
          {plan.description}
        </AWText>
      </div>
    </Box>
  );
};

export default PlanDescription;

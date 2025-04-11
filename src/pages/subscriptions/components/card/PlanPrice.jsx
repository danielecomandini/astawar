import { Box } from "@mui/material";
import AWText from "../../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../../UI/themes/AstaWarTheme";

const PlanPrice = ({ plan }) => {
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
        <AWText
          variant="h3"
          textAlign="center"
          fontWeight="bold"
          color={AW_COLORS.darkGrey}
        >
          {plan.price} <span style={{
            fontSize: '14px'
          }}>/anno</span>
        </AWText>
      </div>
    </Box>
  );
};

export default PlanPrice;

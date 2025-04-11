import { Box } from "@mui/material";
import AWText from "../../../../UI/elements/texts/AWText";

const PlanName = ({ plan }) => {
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
        <AWText variant="h5" fontWeight="bold" color={plan.color}>
          {plan.title}
        </AWText>
      </div>
    </Box>
  );
};

export default PlanName;

import { Box } from "@mui/material";
import AWButton from "../../../../UI/elements/buttons/AWButton";
import { AW_COLORS } from "../../../../UI/themes/AstaWarTheme";

const PlanButton = ({ plan }) => {
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        border: "1px solid lightgray",
        p: 2,
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <AWButton style={{
          backgroundColor: plan.color
        }}>COMINCIA CON {plan.title.toUpperCase()}</AWButton>
      </div>
    </Box>
  );
};

export default PlanButton;

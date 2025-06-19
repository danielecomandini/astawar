import { Drawer, Toolbar } from "@mui/material";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import AWText from "../../../UI/elements/AWText";

const AstaWarHeader = () => {
  return (
    <Drawer anchor="top" variant="permanent">
      <Toolbar
        sx={{
          backgroundColor: AW_COLORS.headerBg,
        }}
      >
        <AWText variant="h4" fontWeight="bold" color={AW_COLORS.headerText}>
          ASTA WAR
        </AWText>
      </Toolbar>
    </Drawer>
  );
};

export default AstaWarHeader;

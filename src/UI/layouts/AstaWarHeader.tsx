import { Drawer, Toolbar } from "@mui/material";
import AWText from "../elements/AWText";
import { AW_COLORS } from "../themes/AstaWarTheme";

const AstaWarHeader = () => {
  return (
    <Drawer variant="permanent" anchor="top" sx={{ zIndex: '120000000' }}>
      <Toolbar>
        <AWText variant="h5" color={AW_COLORS.green} fontWeight="bold">ASTA WAR</AWText>
      </Toolbar>
    </Drawer>
  );
};

export default AstaWarHeader;

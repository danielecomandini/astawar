import { AppBar, Box, Toolbar } from "@mui/material";
import AW_Text from "../../../UI/elements/texts/AWText";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";

const AstaWarHomeNavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: AW_COLORS.white,
          }}
        >
          <AW_Text variant="h3" color={AW_COLORS.green} fontWeight="bold">
            ASTA WAR
          </AW_Text>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AstaWarHomeNavigationBar;

import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import AW_Text from "../../../UI/elements/texts/AWText";
import AW_Icon from "../../../UI/elements/icons/AWIcon";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AstaWarHomeNavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: AW_COLORS.white,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AW_Icon icon={faBars} color={AW_COLORS.green} />
          </IconButton>
          <AW_Text variant="h3" color={AW_COLORS.green} fontWeight="bold">
            ASTA WAR
          </AW_Text>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AstaWarHomeNavigationBar;

import { AppBar, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Text from "../../elements/texts/Text";
import { AW_COLORS } from "../../themes/Theme";
import MenuButton from "../../elements/buttons/MenuButton";
import Icon from "../../elements/icons/Icon";
import { MENU_DEFINITION } from "../../../assets/menu/MenuDefinition";

const AppBarNavigationMenu = () => {
  const MENU = MENU_DEFINITION;

  return (
    <AppBar position="static" sx={{ backgroundColor: "#227788" }}>
      <Toolbar>
        {/* Titolo a sinistra */}
        <Text
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", color: AW_COLORS.headerText }}
        >
          ASTA WAR
        </Text>

        {/* Spazio elastico */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Menu di navigazione */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {MENU.map((btn) => (
            <MenuButton
              key={btn.id}
              component={NavLink}
              to={`/${btn.id}`}
              color="inherit"
              sx={{
                color: AW_COLORS.highlight,
                "&.active": {
                  borderBottom: `5px solid ${AW_COLORS.highlight}`,
                },
              }}
            >
              <Icon icon={btn.icon} style={{ marginRight: '5px' }}/>{btn.label}
            </MenuButton>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarNavigationMenu;

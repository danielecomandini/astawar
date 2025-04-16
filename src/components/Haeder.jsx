import { AppBar, Box, Toolbar } from "@mui/material";
import AW_Text from "../UI/elements/texts/AWText";
import AW_Chip from "../UI/elements/chips/AWChip";
import { AW_COLORS } from "../UI/themes/AstaWarTheme";

const Header = ({ children }) => {
  const version = "beta";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: AW_COLORS.background,
          }}
        >
          <AW_Text variant="h4" fontWeight="bold" color={AW_COLORS.highlight}>
            {children}
          </AW_Text>
          {version && !version.includes(".") && (
            <AW_Chip
              variant="outlined"
              sx={{
                color: AW_COLORS.highlight,
                fontWeight: "bold",
                border: `2px solid ${AW_COLORS.highlight}`,
                marginLeft: "20px",
              }}
            >
              {version}
            </AW_Chip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

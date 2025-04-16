import * as React from "react";
import { Box } from "@mui/material";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import AW_Icon from "../../../UI/elements/icons/AWIcon";
import { MENU } from "../../../assets/menu/Menu";
import { AW_COLORS } from "../../../UI/themes/AstaWarTheme";
import { useNavigate } from "react-router-dom";

const AstaWarMenuPanel = ({ showMenu, onCloseHandler }) => {
  const navigate = useNavigate();

  const onMenuClickHandler = () => {
    onCloseHandler(!showMenu);
  };

  const onItemButtonClick = (routeTo) => {
    navigate(routeTo);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: AW_COLORS.white }}
      role="presentation"
      onClick={onMenuClickHandler}
    >
      <List>
        {MENU.map((menu, idx) => (
          <>
            {idx !== 0 && <Divider />}
            {menu.functionalities.map((funct, idx) => (
              <ListItem
                key={idx}
                disablePadding
                sx={{
                  color: AW_COLORS.green,
                }}
              >
                <ListItemButton
                  onClick={() => onItemButtonClick(funct.routeTo)}
                >
                  <ListItemIcon>
                    <AW_Icon icon={funct.icon} color={AW_COLORS.green} />
                  </ListItemIcon>
                  <ListItemText
                    primary={funct.label}
                    sx={{ fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={onMenuClickHandler}>Open drawer</Button>
      <Drawer
        open={showMenu}
        sx={{ backgroundColor: AW_COLORS.white }}
        onClose={onMenuClickHandler}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default AstaWarMenuPanel;

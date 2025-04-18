import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { ASTA_WAR_MENU } from "../../assets/menu/ASTA_WAR_MENU";
import AWIcon from "../elements/AWIcon";
import AWText from "../elements/AWText";
import { AW_COLORS } from "../themes/AstaWarTheme";

const AstaWarMenu = () => {
  return (
    <>
      <Drawer variant="permanent">
        <Toolbar />
        <Box sx={{ width: 250 }} role="presentation">
          {ASTA_WAR_MENU &&
            ASTA_WAR_MENU.map((list, index) => (
              <List key={list.label}>
                {list.items &&
                  list.items.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemButton
                        onClick={() =>
                          console.log(`You have clicked ${item.label}`)
                        }
                      >
                        <ListItemText>
                          <AWIcon icon={item.icon} /> {item.label}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  ))}
                {index <= ASTA_WAR_MENU.length - 2 && <Divider />}
              </List>
            ))}
        </Box>
      </Drawer>
    </>
  );
};

export default AstaWarMenu;

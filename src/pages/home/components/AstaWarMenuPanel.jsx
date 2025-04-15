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
import { faCalendar, faUsers } from "@fortawesome/free-solid-svg-icons";
import AW_Icon from "../../../UI/elements/icons/AWIcon";

const AstaWarMenuPanel = ({ showMenu, onCloseHandler }) => {
  const onMenuClickHandler = () => {
    onCloseHandler(!showMenu);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onMenuClickHandler}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AW_Icon icon={faCalendar} />
                ) : (
                  <AW_Icon icon={faUsers} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={onMenuClickHandler}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AW_Icon icon={faCalendar} />
                ) : (
                  <AW_Icon icon={faUsers} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={onMenuClickHandler}>Open drawer</Button>
      <Drawer open={showMenu} onClose={onMenuClickHandler}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default AstaWarMenuPanel;

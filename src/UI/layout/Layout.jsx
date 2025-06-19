import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Menu,
} from "@mui/material";
import Icon from "../elements/icons/Icon";
import { faCogs, faUser } from "@fortawesome/free-solid-svg-icons";
import Text from "../elements/texts/Text";

const drawerWidth = 150;

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Text variant="h8">{item.icon} {item.text}</Text>
      </div>
    </div>
  );
};

const Layout = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <Icon icon={faUser} />, path: "/" },
    { text: "Settings", icon: <Icon icon={faCogs} />, path: "/settings" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My SaaS Platform
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
              >
                <MenuItem item={item} />
                {/* <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText sx={{ margintLeft: '-50px' }} primary={item.text} /> */}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "10px",
          marginLeft: "5px",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

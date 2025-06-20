import { Button } from "@mui/material";

const MenuButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default MenuButton;


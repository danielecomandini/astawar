import { Button } from "@mui/material";

const AWButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default AWButton;

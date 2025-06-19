import { Typography } from "@mui/material";

const AWText = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default AWText;

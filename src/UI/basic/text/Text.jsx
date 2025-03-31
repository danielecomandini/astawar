import { Typography } from "@mui/material";

const Test = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default Test;

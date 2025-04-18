import { Card } from "@mui/material";

const AWCard = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default AWCard;

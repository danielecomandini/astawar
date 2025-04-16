import { Chip } from "@mui/material";

const AW_Chip = ({ children, ...props }) => {
  return <Chip label={children} {...props} />;
};

export default AW_Chip;

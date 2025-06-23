import { Card, CardContent, CardHeader } from "@mui/material";
import { AW_COLORS } from "../../themes/Theme";

const AWCard = ({ children, ...props }) => {
  return (
    <Card sx={{
        border: `2px solid ${AW_COLORS.highlight}`
    }}>
      {props.header && <CardHeader title={props.header} />}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default AWCard;

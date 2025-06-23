import { Button } from "@mui/material";
import { AW_COLORS } from "../../themes/Theme";
import Icon from "../icons/AWIcon";

const AWButton = ({
  children,
  color,
  fontSize,
  backgroundColor,
  onClick,
  icon,
  iconPos,
  bold,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: backgroundColor || AW_COLORS.highlight,
        fontSize: fontSize || "10px",
        color: color || AW_COLORS.background,
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {icon && !iconPos && (
        <Icon
          icon={icon}
          style={{
            marginRight: "5px",
          }}
        />
      )}
      {children}
      {icon && iconPos && (
        <Icon
          icon={icon}
          style={{
            marginLeft: "5px",
          }}
        />
      )}
    </Button>
  );
};

export default AWButton;

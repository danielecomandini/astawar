import { Button } from "@mui/material";

const AWButton = ({ children, ...props }) => {
  return (
    <Button
      style={{
        backgroundColor: props.backgroundColor,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AWButton;

import { Grid } from "@mui/material";

const AWCol = ({ children, size = 12, textAlign="left" }) => {
  return (
    <Grid size={{ md: size }} sx={{
      textAlign: textAlign
    }}>
      {children}
    </Grid>
  );
};

export default AWCol;

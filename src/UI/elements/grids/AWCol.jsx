import { Grid } from "@mui/material";

const AWCol = ({ children, size = 12, textAlign }) => {
  return (
    <Grid size={{ md: size }} sx={{
      textAlign: textAlign
    }} justifyItems={textAlign}>
      {children}
    </Grid>
  );
};

export default AWCol;

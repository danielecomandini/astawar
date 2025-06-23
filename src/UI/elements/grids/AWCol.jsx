import { Grid } from "@mui/material";

const AWCol = ({ children, xs, md }) => {
  return (
    <Grid size={{ xs: xs, md: md }}>
      {children}
    </Grid>
  );
};

export default AWCol;

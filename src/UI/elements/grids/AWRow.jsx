import { Box, Grid } from "@mui/material";

const AWRow = ({ children, spacing, sx }) => {
  return (
    <Box sx={{ ...sx, flexGrow: 1 }}>
      <Grid
        container
        spacing={spacing || 4}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default AWRow;

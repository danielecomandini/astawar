import { Box, Grid } from "@mui/material";

const AWRow = ({ children, spacing }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing || 4}>
        {children}
      </Grid>
    </Box>
  );
};

export default AWRow;

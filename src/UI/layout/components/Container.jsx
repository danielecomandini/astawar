import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Outlet />
    </Box>
  );
};

export default Container;

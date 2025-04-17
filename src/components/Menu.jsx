import { Box, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
//   const navigate = useNavigate();

  const goTo = (link) => {
    // navigate(link);
  };

  return (
    <Box
      style={{
        marginTop: "60px",
        position: "fixed",
        borderRight: "1px solid",
        borderColor: "divider", // usa il colore di separazione del tema
        backgroundColor: "background.paper",
        boxShadow: "2px 0 4px rgba(0,0,0,0.05)", // effetto ombra leggero a destra
        height: "100vh",
        width: "12  %",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar>
        <ul>
          <li onClick={() => goTo("/home")}>HOME</li>
          <li onClick={() => goTo("/test")}>TEST</li>
        </ul>
      </Toolbar>
    </Box>
  );
};

export default Menu;

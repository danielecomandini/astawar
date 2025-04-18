import { Drawer, Toolbar } from "@mui/material";

const AstaWarMenu = () => {
  return (
    <>
      <Drawer variant="permanent">
        <Toolbar />
        <div
          style={{
            width: "200px",
          }} onClick={() => console.log('CIAO BELLO!')}
        >
          TEST
        </div>
      </Drawer>
    </>
  );
};

export default AstaWarMenu;

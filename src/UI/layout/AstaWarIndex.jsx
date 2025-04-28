import { Toolbar } from "@mui/material";
import AstaWarHeader from "./components/AstaWarHeader";
import AstaWarUpperSection from "./components/AstaWarUpperSection";
import AstaWarMainFunctionality from "./components/AstaWarMainFunctionality";

const AstaWarIndex = () => {
  return (
    <>
      <AstaWarHeader />
      <Toolbar></Toolbar>
      <section
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <AstaWarUpperSection />
        <AstaWarMainFunctionality />
        <hr style={{
          width: '84.5%',
          marginTop: '60px'
        }} />
      </section>
    </>
  );
};

export default AstaWarIndex;

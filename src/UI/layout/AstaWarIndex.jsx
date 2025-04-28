import { Toolbar } from "@mui/material";
import AstaWarHeader from "./components/AstaWarHeader";
import AstaWarUpperSection from "./components/AstaWarUpperSection";
import AstaWarMainFunctionality from "./components/AstaWarMainFunctionality";
import AstaWarSubscriptionPlans from "./components/AstaWarSubscriptionPlans";

const AstaWarIndex = () => {
  return (
    <>
      <AstaWarHeader />
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
          marginTop: '100px'
        }} />
        <AstaWarSubscriptionPlans />
      </section>
    </>
  );
};

export default AstaWarIndex;

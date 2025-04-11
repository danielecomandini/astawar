import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AstaWarSubscriptionIndex from "../pages/subscriptions/AstaWarSubscriptionIndex";
import AstaWarHomeIndex from "../pages/home/AstaWarHomeIndex";

const AstaWarRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<AstaWarHomeIndex />} />
        <Route path="/subscription" element={<AstaWarSubscriptionIndex />} />
        <Route path="/action" element={<div>ACTION</div>} />
        <Route path="/contact" element={<div>CONTACT</div>} />
        <Route path="*" element={<div>UNDEFINED</div>} />
      </Routes>
    </Router>
  );
};

export default AstaWarRouter;

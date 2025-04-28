import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AstaWarIndex from "./pages/index/AstaWarIndex";
import AstaWarHeader from "./pages/index/components/AstaWarHeader";
import AstaWarPlanOptions from "./pages/index/components/AstaWarPlanOptions";
import { Toolbar } from "@mui/material";

const App = () => {
  return (
    <>
      <AstaWarHeader />
      <Toolbar
        sx={{
          marginBottom: "50px",
        }}
      ></Toolbar>
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<div>LOGIN</div>} />

          {/* Protected area with fixed Layout */}
          <Route path="/" element={<Outlet />}>
            <Route index element={<AstaWarIndex />} />
            <Route path="plans" element={<AstaWarPlanOptions />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

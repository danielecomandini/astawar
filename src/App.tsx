import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AstaWarIndex from "./pages/index/AstaWarIndex";
import AstaWarHeader from "./pages/index/components/AstaWarHeader";
import { Toolbar } from "@mui/material";
import AstaWarPlansIndex from "./pages/plans/AstaWarPlansIndex";

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
            <Route path="plans" element={<AstaWarPlansIndex />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import AstaWarIndex from "./UI/layout/AstaWarIndex";
import AstaWarHeader from "./UI/layout/components/AstaWarHeader";

const App = () => {
  return (
    <>
      <AstaWarHeader />
      <Router>
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<div>LOGIN</div>} />

          {/* Protected area with fixed Layout */}
          <Route path="/" element={<Outlet />}>
            <Route index element={<AstaWarIndex />} />
            <Route path="dashboard" element={<div>DASHBOARD</div>} />
            <Route path="settings" element={<div>SETTINGS</div>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

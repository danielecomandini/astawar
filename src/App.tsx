import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/layout/Layout.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>DASHBOARD</div>} />
          <Route path="/settings" element={<div>SETTINGS</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AstaWarLayout from "../UI/layouts/AstaWarLayout";

const Home = () => (
  <Typography variant="h4">Welcome to AstaWar Home</Typography>
);
const Test = () => <Typography variant="h4">This is the Test page</Typography>;


const AstaWarRouting = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AstaWarLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/daniele" element={<div>DANIELE</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AstaWarRouting;

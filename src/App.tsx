import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/layout/Layout.jsx";
import { MENU_DEFINITION } from "./assets/menu/MenuDefinition.js";

const App = () => {
  const MENU = MENU_DEFINITION;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>HOME</div>} />
          {MENU.map((route) => (
            <Route
              key={route.id}
              path={`/${route.id}`}
              element={<div>{route.label}</div>}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

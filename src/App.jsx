import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/layout/Layout.jsx";
import { MENU_DEFINITION } from "./assets/menu/MenuDefinition.js";
import HomeIndex from "./pages/home/HomeIndex.jsx";

const getComponent = (component: String) => {
  const Component = component;
  return <Component />;
};

const App = () => {
  const MENU = MENU_DEFINITION;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeIndex />} />
          {MENU.map((route) => (
            <Route
              key={route.id}
              path={`/${route.id}`}
              element={getComponent(route.component)}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

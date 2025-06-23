import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/layout/Layout.jsx";
import { MENU_DEFINITION } from "./assets/menu/MenuDefinition.js";

const App = () => {
  const MENU = MENU_DEFINITION;

  const getComponent = (component: String) => {
    const Component = component;
    return <Component />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>HOME</div>} />
          {MENU.map((route) => (
            <Route
              key={route.id}
              path={`/${route.id}`}
              element={getComponent( route.component )}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

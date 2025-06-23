import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./UI/layout/Layout.jsx";
import { MENU_DEFINITION } from "./assets/menu/MenuDefinition.js";
import HomeIndex from "./pages/home/HomeIndex.jsx";
import { useState } from "react";
import UnloggedIndex from "./pages/unlogged/UnloggedIndex.jsx";

const getComponent = (component) => {
  const Component = component;
  return <Component />;
};

const App = () => {
  const MENU = MENU_DEFINITION;

  const [userConnected, setUserConnected] = useState(undefined)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout userConnected={userConnected} />}>
          <Route path="/" element={userConnected ? <HomeIndex /> : <UnloggedIndex />} />
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

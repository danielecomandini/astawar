import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../UI/layout/Layout";
import { MENU_DEFINITION } from "../assets/menu/MenuDefinition";
import HomeIndex from "../pages/home/HomeIndex";
import UnloggedIndex from "../pages/unlogged/UnloggedIndex";

const getComponent = (component) => {
  const Component = component;
  return <Component />;
};

const Routing = ({userConnected}) => {
  const MENU = MENU_DEFINITION;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout userConnected={userConnected} />}>
          <Route
            path="/"
            element={userConnected ? <HomeIndex /> : <UnloggedIndex />}
          />
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

export default Routing;

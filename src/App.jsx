import { useState } from "react";
import UnloggedIndex from "./pages/unlogged/UnloggedIndex.jsx";
import Routing from "./routing/Routing.jsx";

const App = () => {
  const [userConnected, setUserConnected] = useState(undefined);

  return (
    <>
      {!userConnected && <UnloggedIndex />}
      {userConnected && <Routing userConnected={userConnected} />}
    </>
  );
};

export default App;

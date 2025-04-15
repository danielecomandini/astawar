import { useState } from "react";
import AstaWarMenuPanel from "./components/AstaWarMenuPanel";
import AstaWarHomeNavigationBar from "./components/AstaWarHomeNavigationBar";

const AstaWarHomeIndex = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <AstaWarHomeNavigationBar
        showMenu={showMenu}
        onClickHandler={setShowMenu}
      />
      <AstaWarMenuPanel
        showMenu={showMenu}
        onCloseHandler={() => setShowMenu(false)}
      />
      <div
        style={{
          height: "100hv",
          overflowY: "auto",
          paddingTop: "80px",
        }}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i}>Testo Qui...</div>
        ))}
      </div>
    </>
  );
};

export default AstaWarHomeIndex;

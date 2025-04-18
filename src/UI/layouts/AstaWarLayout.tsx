import AstaWarHeader from "./AstaWarHeader";
import AstaWarMenu from "./AstaWarMenu";

const AstaWarLayout = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <AstaWarMenu />
      </div>
      <AstaWarHeader />
    </>
  );
};

export default AstaWarLayout;

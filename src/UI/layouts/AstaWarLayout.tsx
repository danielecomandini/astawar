import AstaWarHeader from "./AstaWarHeader";
import AstaWarMenu from "./AstaWarMenu";

export default function App() {
  return (
    <>
      <AstaWarHeader />
      <div
        style={{
          display: "flex",
        }}
      >
        <AstaWarMenu />
      </div>
    </>
  );
}

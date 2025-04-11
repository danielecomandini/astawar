import AstaWarHomeNavigationBar from "./components/AstaWarHomeNavigationBar";

const AstaWarHomeIndex = () => {
  return (
    <>
      <AstaWarHomeNavigationBar />
      <div style={{
        height: '100hv',
        overflowY: 'auto',
        paddingTop: '80px'
      }}>
        {Array.from( {length: 100}, (_,i) => <div key={i}>Testo Qui...</div>)}
      </div>
    </>
  );
};

export default AstaWarHomeIndex;

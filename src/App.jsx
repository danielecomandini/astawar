import Header from "./components/Haeder";
import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Header>ASTA WAR</Header>
      <section>
        <div style={{ display: "flex" }}>
          <Menu />
          <div>CONTENT</div>
        </div>
      </section>
    </>
  );
};

export default App;

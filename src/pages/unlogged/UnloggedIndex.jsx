import AWCol from "../../UI/elements/grids/AWCol";
import AWRow from "../../UI/elements/grids/AWRow";
import UnloggedApplicationDescription from "./components/UnloggedApplicationDescription";

const UnloggedIndex = () => {
  return (
    <AWRow spacing={0}>
      <AWCol size={7}>
        <UnloggedApplicationDescription />
      </AWCol>
      <AWCol size={5}>
        <div
          style={{
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          LOGIN
        </div>
      </AWCol>
    </AWRow>
  );
};

export default UnloggedIndex;

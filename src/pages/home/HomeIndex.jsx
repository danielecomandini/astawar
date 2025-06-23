import { faUser } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "../../UI/elements/buttons/AWButton";
import AWCard from "../../UI/elements/cards/AWCard";
import AWRow from "../../UI/elements/grids/AWRow";
import AWCol from "../../UI/elements/grids/AWCol";

const HomeIndex = () => {
  return (
    <AWRow>
      <AWCol md={6}>
        <AWCard header={<div style={{ fontWeight: "bold" }}>GENIO DIV</div>}>
          CONTENT QUI
        </AWCard>
      </AWCol>
      <AWCol md={6}>
        <AWCard header={<div style={{ fontWeight: "bold" }}>GENIO DIV</div>}>
          CONTENT QUI
        </AWCard>
      </AWCol>
    </AWRow>
  );
};

export default HomeIndex;

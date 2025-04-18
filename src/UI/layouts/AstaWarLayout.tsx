import { useState } from "react";
import AstaWarHeader from "./AstaWarHeader";
import AstaWarMenu from "./AstaWarMenu";
import AstaWarSubscriptionPlan from "../../pages/subscriptions/AstaWarSubscriptionPlan";

const AstaWarLayout = () => {
  const [user, setUser] = useState(undefined);
  return (
    <>
      {user && <AstaWarMenu />}
      {!user && <AstaWarSubscriptionPlan />}
      <AstaWarHeader />
    </>
  );
};

export default AstaWarLayout;

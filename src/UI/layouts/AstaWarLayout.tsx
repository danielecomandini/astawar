import { useState } from "react";
import AstaWarHeader from "./AstaWarHeader";
import AstaWarMenu from "./AstaWarMenu";
import AstaWarSubscriptionPlanIndex from "../../pages/subscriptions/AstaWarSubscriptionPlanIndex";

const AstaWarLayout = () => {
  const [user, setUser] = useState(undefined);
  return (
    <>
      {user && <AstaWarMenu />}
      {!user && <AstaWarSubscriptionPlanIndex />}
      <AstaWarHeader />
    </>
  );
};

export default AstaWarLayout;

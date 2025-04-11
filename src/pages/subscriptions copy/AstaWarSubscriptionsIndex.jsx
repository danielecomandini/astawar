import AstaWarSubscriptionPlans from "./components/AstaWarSubscriptionPlans";

import PLANS from "./SUBSCRIPTION_PLANS";

import classes from "./AstaWarSubscriptions.module.css";

const AstaWarSubscriptionIndex = () => {
  return (
    <>
      <div>UPPER</div>
      <AstaWarSubscriptionPlans classes={classes} plans={PLANS} />
      <div>LOWER</div>
    </>
  );
};

export default AstaWarSubscriptionIndex;

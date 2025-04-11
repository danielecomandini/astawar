import AstaWarSubscriptionHeader from "./components/AstaWarSubscriptionHeader";
import AstaWarSubscriptionPlans from "./components/AstaWarSubscriptionPlans";
import PLANS from "./data/SUBSCRIPTION_PLANS";

const AstaWarSubscriptionIndex = () => {
  return (
    <div>
      <AstaWarSubscriptionHeader />
      <AstaWarSubscriptionPlans plans={PLANS} />
      <div>TABLE</div>
    </div>
  );
};

export default AstaWarSubscriptionIndex;

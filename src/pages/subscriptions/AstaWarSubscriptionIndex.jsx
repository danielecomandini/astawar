import AstaWarSubscriptionPlans from "./components/AstaWarSubscriptionPlans";
import PLANS from "./data/SUBSCRIPTION_PLANS";

const AstaWarSubscriptionIndex = () => {
  return (
    <div>
      <div>HEADER</div>
      <AstaWarSubscriptionPlans plans={PLANS} />
      <div>TABLE</div>
      <div>FOOTER</div>
    </div>
  );
};

export default AstaWarSubscriptionIndex;

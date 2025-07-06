import PlanPayment from "../Components/HomeComp/PlanPayment";
import FreeTrial from "../Components/HomeComp/FreeTrial";
import ComparePlans from "../Components/SubscriptionsComp/ComparePlans";
import ScrollToTop from "../Components/ScrollToTop";

const Subscriptions = () => {
  return (
    <div className="flex flex-col mt-32 gap-37">
      <ScrollToTop />
      <PlanPayment />
      <ComparePlans />
      <FreeTrial />
    </div>
  );
};

export default Subscriptions;

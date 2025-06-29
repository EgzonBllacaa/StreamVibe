import React from "react";
import PlanPayment from "../Components/HomeComp/PlanPayment";
import FreeTrial from "../Components/HomeComp/FreeTrial";
import ComparePlans from "../Components/SubscriptionsComp/ComparePlans";

const Subscriptions = () => {
  return (
    <div className="flex flex-col mt-32 gap-37">
      <PlanPayment />
      <ComparePlans />
      <FreeTrial />
    </div>
  );
};

export default Subscriptions;

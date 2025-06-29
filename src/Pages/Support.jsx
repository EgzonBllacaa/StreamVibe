import React from "react";
import Faq from "../Components/HomeComp/Faq";
import FreeTrial from "../Components/HomeComp/FreeTrial";
import WelcomeToSupport from "../Components/SupportComp/WelcomeToSupport";

const Support = () => {
  return (
    <div className="flex flex-col gap-37 mt-28">
      <WelcomeToSupport />
      <Faq />
      <FreeTrial />
    </div>
  );
};

export default Support;

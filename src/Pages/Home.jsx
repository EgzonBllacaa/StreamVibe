import React from "react";
import Hero from "../Components/HomeComp/Hero";
import ExploreCategories from "../Components/HomeComp/ExploreCategories";
import StreamingDevices from "../Components/HomeComp/StreamingDevices";
import Faq from "../Components/HomeComp/Faq";
import PlanPayment from "../Components/HomeComp/PlanPayment";
import FreeTrial from "../Components/HomeComp/FreeTrial";
import ScrollToTop from "../Components/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <div className="flex flex-col gap-38">
        <ExploreCategories />
        <StreamingDevices />
        <Faq />
        <PlanPayment />
        <FreeTrial />
      </div>
    </>
  );
};

export default Home;

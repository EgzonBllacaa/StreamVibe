import React from "react";
import welcomeToSupportPNG from "../../assets/welcome-to-support.png";
import SupportForm from "./SupportForm";

const WelcomeToSupport = () => {
  return (
    <div className="flex gap-20 flex-wrap">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3.5">
          <h2 className="text-5xl font-bold">Welcome to our support page!</h2>
          <p className="text-lg text-gray-60">
            We're here to help you with any problems you may be having with our
            product.
          </p>
        </div>
        <div>
          <img
            className="border-2 border-black-15"
            src={welcomeToSupportPNG}
            alt=""
          />
        </div>
      </div>
      <SupportForm />
    </div>
  );
};

export default WelcomeToSupport;

import React from "react";
import FreeTrialImg from "../../assets/FreeTrial-img.png";
import ButtonCta from "../ButtonCta";

const FreeTrial = () => {
  return (
    <div
      className="relative z-0 h-auto px-20 py-24 bg-center bg-no-repeat bg-cover bg-absolute-black mb-36"
      style={{ backgroundImage: `url(${FreeTrialImg})` }}
    >
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(255, 0, 0, 0.4), rgba(255, 255, 255, 0))`,
        }}
      />
      <div className="relative z-20 flex flex-col items-start justify-between gap-8 mx-auto md:flex-row md:items-center max-w-7xl">
        <div className="flex-1 flex flex-col gap-3.5">
          <h3 className="text-3xl font-bold md:text-5xl text-absolute-white">
            Start your free trial today!
          </h3>
          <p className="text-lg text-gray-60">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <ButtonCta children={"Start a Free Trial"} />
      </div>
    </div>
  );
};

export default FreeTrial;

import React, { useState } from "react";

const Plans = ({ plansArray }) => {
  const [activePlan, setActivePlan] = useState("Standard");

  const featureLabels = plansArray[0];
  const planData = plansArray.slice(1);

  const featureKeys = Object.keys(featureLabels).filter(
    (key) => key !== "Features"
  );
  const activePlanData = planData.find((plan) => plan.Features === activePlan);
  return (
    <>
      {/* Plan Selector Buttons (Mobile & Up) */}
      <div className="flex flex-wrap md:hidden bg-black-06 rounded p-2 justify-center mb-6 gap-2">
        {planData.map((plan, i) => (
          <button
            key={i}
            onClick={() => setActivePlan(plan.Features)}
            className={` rounded px-5 py-3 cursor-pointer hover:bg-black-10  ${
              plan.Features === activePlan
                ? "bg-black-12 rounded  text-white"
                : ""
            }`}
          >
            {plan.Features}
          </button>
        ))}
      </div>

      {/* Mobile View: Show only active plan */}
      <div className="md:hidden  border-black-15">
        <div className="grid bg-black-06 p-6 border border-black-15 rounded-xl">
          {featureKeys.map((key, idx) => (
            <React.Fragment key={idx}>
              <div className="px-2 pb-[1px] text-lg text-zinc-400 border-black-15">
                {featureLabels[key]}
              </div>
              <div className="px-2 pb-6  border-black-15">
                {activePlanData[key]}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="hidden md:grid grid-cols-[1.5fr_repeat(3,1fr)] border border-black-15 text-white text-sm md:text-base">
          {/* Header Row */}
          <div className="bg-[#111] p-4 font-semibold border border-black-15">
            Features
          </div>
          {planData.map((plan, i) => (
            <div
              key={i}
              onClick={() => setActivePlan(plan.Features)}
              className={`p-4 font-semibold flex items-center gap-2 justify-center text-center border border-black-15 ${
                plan.Features === activePlan ? "bg-black-12" : "bg-black-06"
              }`}
            >
              <span>{plan.Features}</span>

              {plan.Features === activePlan && (
                <span className="mt-1 text-xs  bg-red-600 text-white rounded px-2 py-0.5 inline-block">
                  {plan.Features === "Standard" ? "Popular" : "Selected"}
                </span>
              )}
            </div>
          ))}

          {featureKeys.map((key, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div className="p-4 font-medium border border-black-15">
                {featureLabels[key]}
              </div>

              {planData.map((plan, colIndex) => (
                <div
                  key={colIndex}
                  className={`p-4 text-center border  border-black-15`}
                >
                  {plan[key]}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plans;

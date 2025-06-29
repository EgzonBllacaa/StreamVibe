import React, { useState } from "react";

const Plans = ({ plansArray }) => {
  const [activePlan, setActivePlan] = useState("Standard");

  // This distinguish the first section of the array which is the
  // are the labels eg. price free trial HDR etc.
  // planArray[0]
  const featureLabels = plansArray[0]; // First column is labels
  // planData is everything that is in the plansArray expect the first one
  // in here i put the slice method and sliced 1 the first one
  const planData = plansArray.slice(1); // The rest are plans

  //   here i got the Object.keys(featureLabels) so each one as before
  //   and filter it so it returns an object with all the keys inside expect the one that is called "Features"
  const featureKeys = Object.keys(featureLabels).filter(
    (key) => key !== "Features"
  );

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] border border-black-15 text-white text-sm md:text-base">
        {/* Header Row */}
        <div className="bg-[#111] p-4 font-semibold border border-black-15">
          Features
        </div>
        {/* In here i rendered all the plans names and everything inside of it */}
        {planData.map((plan, i) => (
          <div
            key={i}
            // here i have a div that displays the name of the feature
            // onclick i call the activePlan and pass in the plan.Features
            onClick={() => setActivePlan(plan.Features)}
            className={`p-4 font-semibold flex items-center gap-2 justify-center text-center border border-black-15 ${
              plan.Features === activePlan ? "bg-black-12" : "bg-black-06"
            }`}
          >
            {/* in here if i just typed plan i have access to everything inside but i needed only the plan.Features */}
            <span>{plan.Features}</span>
            {/* here i have a conditional div */}
            {/* if the plan.Features is strictly same as the activePlan then i render this otherwise i dont  */}
            {plan.Features === activePlan && (
              // its a simple red bg span that says Standard option is the most Popular
              <span className="mt-1 text-xs  bg-red-600 text-white rounded px-2 py-0.5 inline-block">
                {/* and in here i check if the plan.Features equals to "Standard" ? then i set that span to be Popular otherwise set it to be selected */}
                {/* but selected are not being seen until i click on it and then it shows and would like a explanation from AI for this */}
                {/* my explanation is that onclick i change the active plan to one of these options so when i click the styles are being active and */}
                {/* everything works as expected but and the span now checks if the one that now its activePlan is also called Standard if yes say its Popular
                 if not say its Selected */}
                {plan.Features === "Standard" ? "Popular" : "Selected"}
              </span>
            )}
          </div>
        ))}

        {/* Features Rows */}
        {/* here i map over the featuresKeys  */}

        {featureKeys.map((key, rowIndex) => (
          // and i take the key and rowIndex as parameters
          //   for the key of the fragment i set it to rowIndex i have 10 of these
          <React.Fragment key={rowIndex}>
            <div className="p-4 font-medium border border-black-15">
              {/* here i render a featureLabels eg.price content devices hdr etc*/}
              {/* for each [key] so for each one i render the name here */}
              {/* {console.log(key)} */}
              {featureLabels[key]}
            </div>
            {/* in here i map over each planData just like i did for the Features key */}
            {/* and i take the plan colIndex so vertically is the index */}
            {planData.map((plan, colIndex) => (
              <div
                key={colIndex}
                className={`p-4 text-center border  border-black-15`}
              >
                {plan[key]}
              </div>
            ))}
          </React.Fragment>
          //   I dont understand how is this colIndex and for featureKeys its rowIndex????
        ))}
      </div>
    </div>
  );
};

export default Plans;

import React, { useState } from "react";
import TitleHeader from "../TitleHeader";
import BoxActive from "../BoxActive";
import ButtonCta from "../ButtonCta";
import Button from "../Button";

const PLANS = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    priceMonthly: 9.99,
    priceYearly: 5.99,
    type: "/month",
    options: ["Start Free Trial", "Choose Plan"],
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    priceMonthly: 12.99,
    priceYearly: 7.99,
    type: "/month",
    options: ["Start Free Trial", "Choose Plan"],
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    priceMonthly: 14.99,
    priceYearly: 9.99,
    type: "/month",
    options: ["Start Free Trial", "Choose Plan"],
  },
];

const PlanPayment = () => {
  const [category, setCategory] = useState("Monthly");
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-between">
        <TitleHeader
          title={"Choose the plan that's right for you"}
          description={
            "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          }
        />
        <BoxActive
          first={"Monthly"}
          second={"Yearly"}
          category={category}
          setCategory={setCategory}
          priceMonthly={PLANS.priceMonthly}
          priceYearly={PLANS.priceYearly}
        />
      </div>
      <div className="flex gap-7">
        {PLANS.map((plan, i) => (
          <div
            key={i}
            className="flex flex-col justify-center gap-12 p-12 bg-black-10 rounded-xl"
          >
            <div className="flex flex-col gap-4">
              <h6 className="text-2xl font-bold text-absolute-white">
                {plan.title}
              </h6>
              <p className="text-lg text-gray-60">{plan.description}</p>
            </div>
            <div className="flex items-end">
              <h5 className="text-4xl font-semibold ">
                {category === "Monthly"
                  ? `$${plan.priceMonthly}`
                  : `$${plan.priceYearly}`}
              </h5>

              <span className="text-lg font-medium text-gray-60">
                {plan.type}
              </span>
            </div>
            <div className="flex gap-5">
              <Button>{plan.options[0]}</Button>
              <ButtonCta>{plan.options[1]}</ButtonCta>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPayment;

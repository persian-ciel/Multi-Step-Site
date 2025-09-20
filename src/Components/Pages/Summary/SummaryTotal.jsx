import React from "react";
import { useSelector } from "react-redux";
import { plans } from "../../../data/plans";
import { addonsList } from "../../../data/addons";

function SummaryTotal() {
  const { selectedPlan, addons, isYearly } = useSelector(
    (state) => state.billing
  );

  const plan = plans.find((p) => p.id === selectedPlan);
  const selectedAddons = addonsList.filter((a) => addons.includes(a.id));

  let total = 0;
  if (plan) {
    total += isYearly ? plan.yearly : plan.monthly;
  }
  selectedAddons.forEach((addon) => {
    total += isYearly ? addon.yearly : addon.monthly;
  });

  return (
    <div className="flex px-5 py-3 font-sans 2xl:text-xl 2xl:py-5 2xl:px-7">
      <div className="flex-1 text-neutral-400 ">
        Total (per {isYearly ? "year" : "month"})
      </div>
      <div className="flex font-bold text-blue-700 text-2xl">
        ${total}/{isYearly ? "yr" : "mo"}
      </div>
    </div>
  );
}

export default SummaryTotal;

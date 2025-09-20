import React from "react";
import { useSelector } from "react-redux";
import { plans } from "../../../data/plans";

function SummaryPlan() {
  const { selectedPlan, isYearly } = useSelector((state) => state.billing);
  const plan = plans.find((p) => p.id === selectedPlan);

  if (!plan) return null; 

  const price = isYearly ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`;

  return (
    <div className="flex px-5 py-3 2xl:py-5 2xl:px-7">
      <div className="flex-1 font-bold text-blue-950 2xl:text-xl ">
        {plan.name} ({isYearly ? "Yearly" : "Monthly"})
      </div>
      <div className="flex font-bold text-blue-950">{price}</div>
    </div>
  );
}

export default SummaryPlan;

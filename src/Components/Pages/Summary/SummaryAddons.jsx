import React from "react";
import { useSelector } from "react-redux";
import { addonsList } from "../../../data/addons";

function SummaryAddons() {
  const { addons, isYearly } = useSelector((state) => state.billing);
  const selectedAddons = addonsList.filter((a) => addons.includes(a.id));

  return (
    <>
      {selectedAddons.map((addon) => {
        const price = isYearly
          ? `+$${addon.yearly}/yr`
          : `+$${addon.monthly}/mo`;
        return (
          <div key={addon.id} className="flex px-5 py-3 2xl:py-5 2xl:px-7">
            <div className="flex-1 text-neutral-500">{addon.name}</div>
            <div className="flex text-neutral-500">{price}</div>
          </div>
        );
      })}
    </>
  );
}

export default SummaryAddons;

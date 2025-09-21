import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddon } from "../../../store/billingSlice";

function CheckboxAddons({ id, title, description, price }) {
  const dispatch = useDispatch();
  const { addons, isYearly } = useSelector((state) => state.billing);

  const checked = addons.includes(id);

  return (
    <div
      className={`w-full rounded-lg hover:border-purple-800 outline-none cursor-pointer px-4 py-3 2xl:px-5 2xl:py-5 flex mb-4 border ${
        checked ? "border-purple-800 bg-purple-50" : "border-neutral-300"
      }`}
      onClick={() => dispatch(toggleAddon(id))}
    >
      <div className="flex mr-5 items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => dispatch(toggleAddon(id))}
          className="w-5 h-5 accent-purple-600 bg-gray-100 border-gray-300 rounded-2xl focus:ring-purple-600"
        />
      </div>
      <div className="flex-1">
        <label className="font-semibold text-lg 2xl:text-xl">{title}</label>
        <br />
        <label className="font-sans 2xl:text-base text-sm text-neutral-400">
          {description}
        </label>
      </div>
      <div className="flex items-center mr-3 text-purple-600">
        +{price}
        {isYearly ? "/yr" : "/mo"}
      </div>
    </div>
  );
}

export default CheckboxAddons;

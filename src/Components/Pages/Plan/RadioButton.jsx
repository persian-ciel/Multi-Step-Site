import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBilling } from "../../../store/billingSlice";

function RadioButton() {
  const dispatch = useDispatch();
  const isYearly = useSelector((state) => state.billing.isYearly);

  return (
    <div className="flex items-center justify-center gap-4">
      <span className={!isYearly ? "font-bold" : "text-gray-400"}>Monthly</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isYearly}
          onChange={(e) => dispatch(setBilling(e.target.checked))}
        />
        <div className="group peer bg-blue-950 rounded-full duration-300 2xl:w-16 2xl:h-8 relative w-12 h-6">
          <div
            className={`absolute bg-white rounded-full w-4 h-4 2xl:h-6 2xl:w-6 top-1 left-1 transform transition-transform duration-300 ${
              isYearly ? "translate-x-6 2xl:translate-x-8" : ""
            }`}
          />
        </div>
      </label>
      <span className={isYearly ? "font-bold" : "text-gray-400"}>Yearly</span>
    </div>
  );
}

export default RadioButton;

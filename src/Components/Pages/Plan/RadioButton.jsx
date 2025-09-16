import React from "react";

function RadioButton({ isYearly, setIsYearly }) {
  const toggleBilling = () => setIsYearly((prev) => !prev);

  return (
    <div className="flex rounded-xl items-center justify-center mt-11 font-sans">
      <div className="inline-flex items-center gap-2">
        {/* Monthly Label */}
        <label
          className={`text-sm font-semibold transition-colors duration-300 ${
            !isYearly ? "text-blue-950" : "text-slate-400"
          }`}
        >
          Monthly
        </label>

        {/* Toggle */}
        <label className="relative inline-flex items-center cursor-pointer mx-6">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={toggleBilling}
          />
          <div className="group peer bg-blue-950 rounded-full duration-300 w-16 h-8 relative">
            <div
              className={`absolute bg-white rounded-full h-6 w-6 top-1 left-1 transform transition-transform duration-300 ${
                isYearly ? "translate-x-8" : ""
              }`}
            />
          </div>
        </label>

        {/* Yearly Label */}
        <label
          className={`text-sm font-semibold transition-colors duration-300 ${
            isYearly ? "text-blue-950" : "text-slate-400"
          }`}
        >
          Yearly
        </label>
      </div>
    </div>
  );
}

export default RadioButton;

import React from "react";

function PlanCard({ image, name, price, isYearly, isSelected, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className={`w-[28%] 2xl:w-[29%] border rounded-lg outline-none cursor-pointer transition
        ${
          isSelected
            ? "border-purple-800 bg-purple-50"
            : "border-neutral-300 bg-transparent"
        }
        hover:border-purple-800`}
    >
      <img
        src={image}
        className="w-8 h-8 m-5 ml-4 mb-5 2xl:mb-10 2xl:w-12 2xl:h-12"
      />
      <p className="text-left ml-4 font-semibold font-sans 2xl:text-xl mb-1.5">
        {name}
      </p>
      <p className="text-left ml-4 text-sm mb-1.5 text-neutral-400 tracking-wider items-start">
        {price}
        <span className="text-sm text-neutral-400 tracking-wider">
          {isYearly ? "/yr" : "/mo"}
        </span>
      </p>
      {isYearly && (
        <div className="text-blue-950 font-medium text-left ml-4 mb-1.5 text-xs 2xl:text-base">
          2 months free
        </div>
      )}
    </button>
  );
}

export default PlanCard;
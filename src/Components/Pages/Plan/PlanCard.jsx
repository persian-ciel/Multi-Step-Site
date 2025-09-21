import React from "react";
import useIsMobile from "../../../hooks/useIsMobile";

function PlanCard({ image, name, price, isYearly, isSelected, onSelect }) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <button
      onClick={onSelect}
      className={`w-full border rounded-lg outline-none inline-flex items-center cursor-pointer transition
        ${
          isSelected
            ? "border-purple-800 bg-purple-50"
            : "border-neutral-300 bg-transparent"
        }
        hover:border-purple-800`}
    >
      <img
        src={image}
        className="w-10 h-10 m-5 ml-4 mb-5 2xl:mb-10 2xl:w-12 2xl:h-12 "
      />
      <div className="flex flex-col">
        <p className="text-left font-semibold font-sans 2xl:text-xl mb-1.5 ">
          {name}
        </p>
        <p className="text-left text-sm mb-1.5 text-neutral-400 tracking-wider ">
          {price}
          <span className="text-sm text-neutral-400 tracking-wider">
            {isYearly ? "/yr" : "/mo"}
          </span>
        </p>
        {isYearly && (
        <div className="text-blue-950 font-medium text-left  mb-1.5 text-xs 2xl:text-base">
          2 months free
        </div>
      )}
      </div>
      
    </button>
  ) : (
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

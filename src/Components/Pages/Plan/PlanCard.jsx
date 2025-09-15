import React from "react";

function PlanCard(props) {
  return (
    <>
      <button className="w-[28%] 2xl:w-[29%] bg-transparent border border-neutral-300 rounded-lg  hover:border-purple-800 outline-none cursor-pointer mr-5 ">
        <img src={props.image} className="w-8 h-8 m-5 mb-5 2xl:mb-10 2xl:w-12 2xl:h-12" />
        <p className="text-left ml-5 font-semibold font-sans 2xl:text-xl mb-1.5">{props.name}</p>
        <p className="text-left ml-5 text-sm mb-3 text-neutral-400 tracking-wider">{props.price}</p>
      </button>
    </>
  );
}

export default PlanCard;

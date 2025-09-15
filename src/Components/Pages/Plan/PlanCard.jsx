import React from "react";

function PlanCard(props) {
  return (
    <>
      <button className="w-[28%] bg-transparent border border-neutral-300 rounded-lg  hover:border-purple-800 outline-none cursor-pointer mr-5 ">
        <img src={props.image} className="w-8 h-8 m-5 mb-5" />
        <p className="text-left ml-5 font-semibold font-sans">{props.name}</p>
        <p className="text-left ml-5 text-sm mb-3">{props.price}</p>
      </button>
    </>
  );
}

export default PlanCard;

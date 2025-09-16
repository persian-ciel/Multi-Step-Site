import React from "react";

function GoBack({ setActiveStep }) {
  const goBack = () => setActiveStep((prev) => Math.max(prev - 1, 1));

  return (
    <button
      onClick={goBack}
      className="text-neutral-400 font-semibold px-5 py-2 cursor-pointer"
    >
      Go Back
    </button>
  );
}

export default GoBack;

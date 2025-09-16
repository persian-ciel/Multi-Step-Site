import React from "react";

function NextPage({ onClick, setActiveStep }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // run custom validation handler
    } else if (setActiveStep) {
      setActiveStep((prev) => Math.min(prev + 1, 4));
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-950 text-white font-semibold px-5 py-2 rounded cursor-pointer"
    >
      Next Step
    </button>
  );
}

export default NextPage;

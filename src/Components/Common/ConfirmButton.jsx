import React from "react";

function ConfirmButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-blue-700 text-white font-semibold px-5 py-2 rounded cursor-pointer"
      >
        Confirm
      </button>
    </>
  );
}

export default ConfirmButton;

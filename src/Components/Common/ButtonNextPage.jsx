import React from "react";

function NextPage({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-blue-950 text-white px-5 py-2 rounded-lg cursor-pointer"
      >
        Next Step
      </button>
    </>
  );
}

export default NextPage;

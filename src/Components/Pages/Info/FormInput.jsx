import React from "react";

function FromInput({ inputText, name, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={inputText}
      className="border border-neutral-300 rounded-lg w-full px-3 py-2 mt-1.5 focus:border-purple-800 outline-none"
    />
  );
}

export default FromInput;

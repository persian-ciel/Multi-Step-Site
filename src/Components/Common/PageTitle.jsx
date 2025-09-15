import React from "react";

function PageTilte(props) {
  return (
    <>
      <p className="text-3xl font-bold">{props.titleName}</p>
      <p className="font-sans text-sm text-neutral-400 mt-2 mb-6">
        {props.text}
      </p>
    </>
  );
}

export default PageTilte;

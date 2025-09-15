import React from "react";

function PageTilte(props) {
  return (
    <>
      <p className="text-3xl font-bold 2xl:text-5xl">{props.titleName}</p>
      <p className="font-sans text-sm text-neutral-400 mt-2 mb-6 2xl:text-lg tracking-wide">
        {props.text}
      </p>
    </>
  );
}

export default PageTilte;

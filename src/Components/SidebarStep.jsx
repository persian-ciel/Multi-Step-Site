import React from "react";

function SidebarStep(props) {
  return (
    <>
      <div className="flex w-full ml-[10%] mb-[10%] 2xl:ml-[20%]">
        <div className="flex justify-center items-center bg-transparent ">
          <div className="h-full flex-shrink-0 ">
            <p
              className={`flex items-center justify-center font-mono w-10 h-10 mr-4 rounded-full border-1 cursor-pointer 2xl:w-13 2xl:h-13 font-semibold 2xl:text-xl
              ${
                props.isActive
                  ? "bg-blue-300 text-black border-blue-300"
                  : "bg-transparent text-white border-white"
              }
            `}
            >
              {props.step}
            </p>
          </div>
          <main className="flex-1 bg-transparent h-full">
            <div className=" h-full ">
              <p className="text-neutral-200 font-sans tracking-wider 2xl:text-sm">
                {props.stepnum}
              </p>
              <p className="font-sans font-semibold tracking-widest text-sm 2xl:text-lg">
                {props.titl}
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default SidebarStep;

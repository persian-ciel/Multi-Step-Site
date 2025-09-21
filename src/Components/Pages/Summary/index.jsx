import React from "react";
import PageTilte from "../../Common/PageTitle";
import SummaryAddons from "./SummaryAddons";
import SummaryPlan from "./SummaryPlan";
import SummaryTotal from "./SummaryTotal";
import GoBack from "../../Common/ButtonGoBack";
import ConfirmButton from "../../Common/ConfirmButton";
import useIsMobile from "../../../hooks/useIsMobile";

function Step4({ setActiveStep }) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <>
      <div className="relative h-full p-4">
        <PageTilte
          titleName="Finishing up"
          text="Double-check everything looks OK before confirming."
        />
        <div className="bg-zinc-200 rounded-sm 2xl:rounded-lg font-sans">
          <SummaryPlan />
          <hr className="w-3/4 bg-neutral-300 text-neutral-300" />
          <SummaryAddons />
        </div>
        <SummaryTotal />
        
      </div>
    </>
  ) : (
    <>
      <div className="relative h-full">
        <PageTilte
          titleName="Finishing up"
          text="Double-check everything looks OK before confirming."
        />
        <div className="bg-zinc-200 rounded-sm 2xl:rounded-lg font-sans">
          <SummaryPlan />
          <hr className="w-3/4 bg-neutral-300 text-neutral-300" />
          <SummaryAddons />
        </div>
        <SummaryTotal />
        <div className="absolute bottom-0 left-0 ">
          <GoBack setActiveStep={setActiveStep} />
        </div>
        <div className="absolute bottom-0 right-0">
          <ConfirmButton onClick={() => setActiveStep("confirm")}/>
        </div>
      </div>
    </>
  );
}

export default Step4;

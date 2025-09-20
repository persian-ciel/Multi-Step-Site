import React from "react";
import PageTilte from "../../Common/PageTitle";
import SummaryAddons from "./SummaryAddons";
import SummaryPlan from "./SummaryPlan";
import SummaryTotal from "./SummaryTotal";
import GoBack from "../../Common/ButtonGoBack";
import ConfirmButton from "../../Common/ConfirmButton";

function Step4({ setActiveStep }) {
  return (
    <>
      <div className="relative h-full">
        <PageTilte
          titleName="Finishing up"
          text="Double-check everything looks OK before confirming."
        />
        <div className="bg-neutral-100 rounded-sm font-sans">
          <SummaryPlan />
          <hr />
          <SummaryAddons />
        </div>
        <SummaryTotal />
        <div className="absolute bottom-0 left-0">
        <GoBack setActiveStep={setActiveStep} />
      </div>
      <div className="absolute bottom-0 right-0">
        <ConfirmButton/>
      </div>
      </div>
    </>
  );
}

export default Step4;

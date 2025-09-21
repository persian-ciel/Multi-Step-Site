import React from "react";
import Step1 from "./Pages/Info/Index";
import Step2 from "./Pages/Plan/index";
import Step3 from "./Pages/Add-ons/index";
import Step4 from "./Pages/Summary/index";
import ConfirmPage from "./Pages/Summary/ConfirmPage";
import useIsMobile from "../hooks/useIsMobile";


function MainContent({
  activeStep,
  setActiveStep,
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <main className="flex-1 h-full">
      <div className="font-mono h-full  ">
        {activeStep === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 2 && <Step2 setActiveStep={setActiveStep} />}
        {activeStep === 3 && <Step3 setActiveStep={setActiveStep} />}
        {activeStep === 4 && <Step4 setActiveStep={setActiveStep} />}
        {activeStep === "confirm" && <ConfirmPage />}
      </div>
    </main>
  ) : (
    <main className="flex-1 h-full">
      <div className="font-mono h-full py-[6%] px-[12%]">
        {activeStep === 1 && (
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
            setActiveStep={setActiveStep}
          />
        )}
        {activeStep === 2 && <Step2 setActiveStep={setActiveStep} />}
        {activeStep === 3 && <Step3 setActiveStep={setActiveStep} />}
        {activeStep === 4 && <Step4 setActiveStep={setActiveStep} />}
        {activeStep === "confirm" && <ConfirmPage />}
      </div>
    </main>
  );
}

export default MainContent;

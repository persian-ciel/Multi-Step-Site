import React from "react";
import Step1 from "./Pages/Info/Index";
import Step2 from "./Pages/Plan/index";
import Step3 from "./Pages/Add-ons/index";
import Step4 from "./Pages/Summary/index";

function MainContent({
  activeStep,
  setActiveStep,
  formData,
  setFormData,
  errors,
  setErrors,
}) {
  return (
    <main className="flex-1 bg-white h-full">
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
      </div>
    </main>
  );
}

export default MainContent;

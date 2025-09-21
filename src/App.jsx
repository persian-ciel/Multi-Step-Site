import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { validateStep1 } from "./validation/InfoInputValidate";
import useIsMobile from "./hooks/useIsMobile";
import NextPage from "./Components/Common/ButtonNextPage";
import GoBack from "./Components/Common/ButtonGoBack";
import ConfirmButton from "./Components/Common/ConfirmButton";

function App() {
  const isMobile = useIsMobile();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleStepChange = (newStep) => {
    if (activeStep === 1) {
      const stepErrors = validateStep1(formData);
      setErrors(stepErrors);
      if (Object.keys(stepErrors).length > 0) return;
    }
    setActiveStep(newStep);
  };

  const goNext = () => {
    const stepErrors = validateStep1(formData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setActiveStep((prev) => Math.min(prev + 1, 4));
  };

  return isMobile ? (
    <div className="relative overflow-hidden h-screen bg-gray-200">
      <Sidebar activeStep={activeStep} onStepClick={handleStepChange} />
      <div className="absolute top-[13%] left-1/2 -translate-x-1/2 w-[90%] rounded-2xl drop-shadow-lg bg-gray-100 p-3">
        <MainContent
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      <div className="flex h-1/12 w-full absolute bottom-0 items-center bg-gray-100">
        {activeStep === 1 ? (
          <div className="absolute right-0 mr-3">
            <NextPage onClick={goNext} />
          </div>
        ) : activeStep === 4 ? (
          <>
            <div className="absolute left-0">
              <GoBack setActiveStep={setActiveStep} />
            </div>
            <div className="absolute right-0 mr-3">
              <ConfirmButton onClick={() => setActiveStep("confirm")} />
            </div>
          </>
        ) : activeStep === 2 ? (
          <>
            <div className="absolute left-0">
              <GoBack setActiveStep={setActiveStep} />
            </div>
            <div className="absolute right-0 mr-3">
              <NextPage setActiveStep={setActiveStep} />
            </div>
          </>
        ) : activeStep === 3 ? (
          <>
            <div className="absolute left-0">
              <GoBack setActiveStep={setActiveStep} />
            </div>
            <div className="absolute right-0 mr-3">
              <NextPage setActiveStep={setActiveStep} />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  ) : (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="flex h-[91.6667vh] mx-auto my-auto w-3/5 justify-center items-center rounded-2xl drop-shadow-lg bg-gray-100 p-3">
        <Sidebar activeStep={activeStep} onStepClick={handleStepChange} />
        <MainContent
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
}

export default App;

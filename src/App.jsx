import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import { validateStep1 } from "./validation/InfoInputValidate";

function App() {
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

  return (
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

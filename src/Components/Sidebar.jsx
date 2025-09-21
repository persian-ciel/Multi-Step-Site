import SidebarStep from "./SidebarStep";
import useIsMobile from "../hooks/useIsMobile";

function Sidebar({ activeStep, onStepClick }) {
  const isMobile = useIsMobile();

  const steps = [
    { id: 1, stepsnum: 1, steps: "Step 1", title: "YOUR INFO" },
    { id: 2, stepsnum: 2, steps: "Step 2", title: "SELECT PLAN" },
    { id: 3, stepsnum: 3, steps: "Step 3", title: "ADD-ONS" },
    { id: 4, stepsnum: 4, steps: "Step 4", title: "SUMMARY" },
  ];

  return isMobile ? (
    <>
      <div className="w-full pt-0 h-[20%] bg-[url(/images/bg-sidebar-mobile.svg)] bg-cover flex justify-center">
        <div className="font-mono text-white inline-flex mt-8 ">
          {steps.map((link) => (
            <div key={link.id} onClick={() => onStepClick(link.id)}>
              <SidebarStep
                step={link.stepsnum}
                isActive={activeStep === link.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div className="w-[30%] pt-[4%] rounded-2xl h-full flex-shrink-0 bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover">
      <div className="font-mono text-white">
        {steps.map((link) => (
          <div key={link.id} onClick={() => onStepClick(link.id)}>
            <SidebarStep
              step={link.stepsnum}
              stepnum={link.steps}
              titl={link.title}
              isActive={activeStep === link.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

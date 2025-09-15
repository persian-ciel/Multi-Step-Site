import SidebarStep from "./SidebarStep";

function Sidebar({ activeStep, onStepClick }) {
  const steps = [
    { id: 1, stepsnum: 1, steps: "Step 1", title: "YOUR INFO" },
    { id: 2, stepsnum: 2, steps: "Step 2", title: "SELECT PLAN" },
    { id: 3, stepsnum: 3, steps: "Step 3", title: "ADD-ONS" },
    { id: 4, stepsnum: 4, steps: "Step 4", title: "SUMMARY" },
  ];

  return (
    <div className="w-[30%] pt-[4%] rounded-2xl h-full flex-shrink-0 bg-[url(/images/bg-sidebar-desktop.svg)]">
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

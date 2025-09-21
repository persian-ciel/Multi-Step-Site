import React from "react";
import PageTilte from "../../Common/PageTitle";
import CheckboxAddons from "./Checkbox";
import NextPage from "../../Common/ButtonNextPage";
import GoBack from "../../Common/ButtonGoBack";
import useIsMobile from "../../../hooks/useIsMobile";

function Step3({ setActiveStep }) {
  const isMobile = useIsMobile();
  const list = [
    {
      id: 1,
      top: "Online service",
      des: "Access to multiplayer games",
      per: 1,
    },
    { id: 2, top: "Larger storage", des: "Extra 1TB of cloud save", per: 2 },
    {
      id: 3,
      top: "Customizable profile",
      des: "Custom theme on your profile",
      per: 2,
    },
  ];

  return isMobile ? (
    <div className="relative h-full p-4">
      <PageTilte
        titleName="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />

      {list.map((chebox) => (
        <CheckboxAddons
          key={chebox.id}
          id={chebox.id}
          title={chebox.top}
          description={chebox.des}
          price={chebox.per}
         />
      ))}

      
    </div>
  ) : (
    <div className="relative h-full">
      <PageTilte
        titleName="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />

      {list.map((chebox) => (
        <CheckboxAddons
          key={chebox.id}
          id={chebox.id}
          title={chebox.top}
          description={chebox.des}
          price={chebox.per}
        />
      ))}

      <div className="absolute bottom-0 left-0">
        <GoBack setActiveStep={setActiveStep} />
      </div>
      <div className="absolute bottom-0 right-0">
        <NextPage setActiveStep={setActiveStep} />
      </div>
    </div>
  );
}

export default Step3;

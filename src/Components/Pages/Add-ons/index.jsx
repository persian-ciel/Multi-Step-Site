import React from "react";
import PageTilte from "../../Common/PageTitle";
import CheckboxAddons from "./Checkbox";
import NextPage from "../../Common/ButtonNextPage";
import GoBack from "../../Common/ButtonGoBack";
import useIsMobile from "../../../hooks/useIsMobile";
import { useSelector } from "react-redux";

function Step3({ setActiveStep }) {
  const isMobile = useIsMobile();
  const { isYearly, selectedPlan } = useSelector((state) => state.billing);
  const list = [
    {
      id: 1,
      top: "Online service",
      des: "Access to multiplayer games",
      monthly: "$1",
      yearly: "$10",
    },
    {
      id: 2,
      top: "Larger storage",
      des: "Extra 1TB of cloud save",
      monthly: "$2",
      yearly: "$20",
    },
    {
      id: 3,
      top: "Customizable profile",
      des: "Custom theme on your profile",
      monthly: "$2",
      yearly: "$20",
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
          price={isYearly ? chebox.yearly : chebox.monthly}
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
          price={isYearly ? chebox.yearly : chebox.monthly}
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

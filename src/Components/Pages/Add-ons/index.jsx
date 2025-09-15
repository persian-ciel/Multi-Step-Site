import React from "react";
import PageTilte from "../../Common/PageTitle";
import CheckboxAddons from "./Checkbox";
import NextPage from "../../Common/ButtonNextPage";
import GoBack from "../../Common/ButtonGoBack";

function Step3({ setActiveStep }) {
  const list=[
    {id:1, top:"Online service", des:"Access to multiplayer games",per:1},
    {id:2, top:"Larger storage", des:"Extra 1TB of cloud save",per:2},
    {id:3, top:"Customizable profile", des:"Custom theme on your profile",per:2}]
    
    const goNext = () => setActiveStep((prev) => Math.min(prev + 1, 4));
  return (
    <>
      <div className="relative h-full">
        <div>
        <PageTilte
          titleName="Pick add-ons"
          text="Add-ons help enhance your gaming experience."
        />
      </div>
        {list.map((chebox)=>(<CheckboxAddons title={chebox.top} description={chebox.des} price={chebox.per} />))}
        <div className="absolute bottom-0 left-0">
          <GoBack />
        </div>
        <div className="absolute bottom-0 right-0">
          <NextPage onClick={goNext} />
        </div>
      </div>
      
    </>
  );
}

export default Step3;

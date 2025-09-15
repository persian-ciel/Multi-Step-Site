import React from "react";
import NextPage from "../../Common/ButtonNextPage";
import PageTilte from "../../Common/PageTitle";
import GoBack from "../../Common/ButtonGoBack";
import PlanCard from "./PlanCard";
import ArcadeImage from "/images/icon-arcade.svg";
import AdvanceImage from "/images/icon-advanced.svg";
import ProImage from "/images/icon-pro.svg";
import RadioButton from "./RadioButton";

function Step2({ setActiveStep }) {
  const list = [
    { id: 1, img: ArcadeImage, title: "Arcade", curency: "$9" },
    { id: 2, img: AdvanceImage, title: "Advance", curency: "$12" },
    { id: 3, img: ProImage, title: "Pro", curency: "$15" },
  ];

  const goNext = () => setActiveStep((prev) => Math.min(prev + 1, 4));
  return (
    <>
      <div className="relative h-full">
        <div>
          <PageTilte
            titleName="Select your plan"
            text="You have the option of monthly or yearly billing"
          />
        </div>
        <div className="inline w-full ">
          {list.map((card) => (
            <PlanCard key={card.id} image={card.img} name={card.title} price={card.curency} />
          ))}
        </div>
        <div className="">
          <RadioButton />
        </div>
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

export default Step2;

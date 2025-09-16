import React,{useState} from "react";
import NextPage from "../../Common/ButtonNextPage";
import PageTilte from "../../Common/PageTitle";
import GoBack from "../../Common/ButtonGoBack";
import PlanCard from "./PlanCard";
import ArcadeImage from "/images/icon-arcade.svg";
import AdvanceImage from "/images/icon-advanced.svg";
import ProImage from "/images/icon-pro.svg";
import RadioButton from "./RadioButton";

function Step2({ setActiveStep }) {
  const [isYearly, setIsYearly] = useState(false);

  const list = [
    { id: 1, img: ArcadeImage, title: "Arcade", monthly: "$9", yearly: "$90" },
    { id: 2, img: AdvanceImage, title: "Advance", monthly: "$12", yearly: "$120" },
    { id: 3, img: ProImage, title: "Pro", monthly: "$15", yearly: "$150" },
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
        <div className=" w-full flex flex-wrap items-center justify-center gap-6 my-6">
          {list.map((card) => (
            <PlanCard key={card.id} image={card.img} name={card.title} price={isYearly ? card.yearly : card.monthly}
            isYearly={isYearly} />
          ))}
        </div>
        <div className="">
          <RadioButton isYearly={isYearly} setIsYearly={setIsYearly}/>
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

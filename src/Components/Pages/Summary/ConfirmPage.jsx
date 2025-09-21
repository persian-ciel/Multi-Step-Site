import React from "react";
import ThanksImage from "/images/icon-thank-you.svg";
import useIsMobile from "../../../hooks/useIsMobile";

function ConfirmPage() {
  const isMobile = useIsMobile();
  return isMobile ? (
    <>
      <div className="flex flex-col justify-center items-center h-full space-y-0 p-4 mt-5">
        <img src={ThanksImage} className=""/><br />
        <p className="text-2xl font-bold">Thank you!</p><br />
        <p className="text-sm text-neutral-400 text-center font-sans mb-6">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  ) : (
    <>
      <div className="flex flex-col justify-center items-center h-full space-y-0 ">
        <img src={ThanksImage} className=""/><br />
        <p className="text-2xl font-bold">Thank you!</p><br />
        <p className="text-sm text-neutral-400 text-center font-sans ">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
}

export default ConfirmPage;

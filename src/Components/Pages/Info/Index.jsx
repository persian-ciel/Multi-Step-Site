import React from "react";
import FromInput from "./FormInput";
import NextPage from "../../Common/ButtonNextPage";
import { validateStep1 } from "../../../validation/InfoInputValidate";
import PageTilte from "../../Common/PageTitle";
import useIsMobile from "../../../hooks/useIsMobile";

function Step1({ formData, setFormData, errors, setErrors, setActiveStep }) {
  const isMobile = useIsMobile();

  const inputList = [
    { id: 1, name: "name", label: "Name", placeholder: ".e.g Stephen King" },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      placeholder: ".e.g stephenking@lorem.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      placeholder: ".e.g +1 234 5678",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const goNext = () => {
    const stepErrors = validateStep1(formData);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setActiveStep((prev) => Math.min(prev + 1, 4));
  };

  return isMobile ? (
    <div className="p-4">
      <PageTilte
        titleName="Personal Info"
        text="Please provide your name, email address, and phone number."
      />
      <div className="mt-4 space-y-4">
        {inputList.map((link) => (
          <div key={link.id}>
            <label className="block font-medium">{link.label}</label>
            {errors?.[link.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[link.name]}</p>
            )}
            <FromInput
              inputText={link.placeholder}
              name={link.name}
              value={formData?.[link.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      
    </div>
  ) : (
    <div className="relative h-full">
      <PageTilte
        titleName="Personal Info"
        text="Please provide your name, email address, and phone number."
      />
      <div>
        {inputList.map((link) => (
          <div key={link.id} className="mt-3 2xl:mt-6">
            <div className="flex justify-between">
              <label className="ml-1 font-medium">{link.label}</label>
              {errors?.[link.name] && (
                <p className="text-red-500 text-xs mt-1.5">{errors[link.name]}</p>
              )}
            </div>
            <FromInput
              inputText={link.placeholder}
              name={link.name}
              value={formData?.[link.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0">
        <NextPage onClick={goNext} />
      </div>
    </div>
  );
}

export default Step1;

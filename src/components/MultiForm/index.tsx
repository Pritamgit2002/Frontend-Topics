import React, { useState } from "react";
import { MultistepFormOne } from "./multistep-form-one";
import { MultistepFormTwo } from "./multistep-form-two";

type Props = {};

export const MultistepForm = (props: Props) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: " ",
    age: " ",
    class: " ",
    section: " ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      {step === 1 && (
        <MultistepFormOne
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <MultistepFormTwo
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

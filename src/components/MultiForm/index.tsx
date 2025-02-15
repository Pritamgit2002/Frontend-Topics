import React, { useState } from "react";
import { MultistepFormOne } from "./multistep-form-one";
import { MultistepFormTwo } from "./multistep-form-two";
import useForm from "./hook/useForm";

export const MultistepForm = () => {
  const {
    formData,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
    state,
  } = useForm({
    name: "",
    age: "",
    class: "",
    section: "",
  });

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      {state === 1 && (
        <MultistepFormOne
          formData={formData}
          handleChange={handleChange}
          nextStep={handleNext}
        />
      )}

      {state === 2 && (
        <MultistepFormTwo
          formData={formData}
          handleChange={handleChange}
          prevStep={handlePrev}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

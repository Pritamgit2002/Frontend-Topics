import { FC, useState } from "react";

type InitialValuesProps = {
  name: string;
  age: string;
  class: string;
  section: string;
};

const useForm = (initialValues: InitialValuesProps) => {
  const [formData, setFormData] = useState(initialValues);
  const [state, setState] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    {
      state === 1 &&
        formData.name.length > 0 &&
        formData.age.length > 0 &&
        setState((state) => state + 1);
    }
  };

  const handlePrev = () => {
    setState((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (formData.name && formData.age && formData.class && formData.section) {
      console.log("form submitted");
      console.log(formData);
      return;
    }
    alert("Please,Fill all the fields");
  };

  return {
    formData,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
    state,
  };
};

export default useForm;

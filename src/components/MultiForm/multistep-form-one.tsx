import React, { FC } from "react";

type Props = {
  formData: {
    name: string;
    age: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
};

export const MultistepFormOne: FC<Props> = (props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 1: Personal Info</h2>
      <span>Please Enter your name</span>
      <input
        type="text"
        name="name"
        value={props.formData.name}
        onChange={props.handleChange}
        placeholder="Enter Name"
        className="w-full p-2 border rounded mb-3"
      />
      <span>Please Enter your age</span>
      <input
        type="number"
        name="age"
        value={props.formData.age}
        onChange={props.handleChange}
        placeholder="Enter Age"
        className="w-full p-2 border rounded mb-3"
      />
      <button
        onClick={props.nextStep}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

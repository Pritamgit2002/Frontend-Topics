import React, { FC } from "react";

type Props = {
  formData: {
    class: string;
    section: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  handleSubmit: () => void;
};

export const MultistepFormTwo: FC<Props> = (props: Props) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Step 2: Class Info</h2>
      <span>Please Enter your class</span>
      <input
        type="text"
        name="class"
        value={props.formData.class}
        onChange={props.handleChange}
        placeholder="Enter Class"
        className="w-full p-2 border rounded mb-3"
      />
      <span>Please Enter your section</span>
      <input
        type="text"
        name="section"
        value={props.formData.section}
        onChange={props.handleChange}
        placeholder="Enter Section"
        className="w-full p-2 border rounded mb-3"
      />
      <div className="flex items-center justify-between gap-x-2">
        <button
          onClick={props.prevStep}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={props.handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

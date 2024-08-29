import React, { useState } from "react";

type Props = {
  id: number;
  name: string;
};
const contries = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" },
  { id: 3, name: "China" },
];

export const Dropdown = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className=" w-max flex flex-col items-center justify-start gap-y-2 h-96 ">
      <span className=" text-center text-xl font-bold ">Dropdown</span>
      <div className="flex flex-col items-center justify-center">
        <select
          name="country"
          id="country"
          onChange={(e) => setSelected(Number(e.target.value))}
          className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded w-64"
        >
          {contries.map((item, i) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
      <div>
        {contries
          .filter((item) => item.id === selected)
          .map((item: Props) => (
            <span key={item.id} className=" text-base  font-medium ">
              Country name:{item.name}
            </span>
          ))}
      </div>
    </div>
  );
};

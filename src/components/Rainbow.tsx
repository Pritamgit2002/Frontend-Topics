import React, { useState } from "react";

const Rainbow = () => {
  const [one, setOne] = useState<boolean>();
  const [two, setTwo] = useState<boolean>();
  const [three, setThree] = useState<boolean>();
  const [four, setFour] = useState<boolean>();
  const [five, setFive] = useState<boolean>();
  const [six, setSix] = useState<boolean>();
  const [seven, setSeven] = useState<boolean>();

  return (
    <div className=" w-max ">
      <title>Rainbow</title>
      <div className="flex items-start justify-start gap-4 ">
        <div className="flex flex-col items-center justify-center gap-2 text-xl font-semibold text-black ">
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              one ? " bg-violet-500 " : "bg-gray-200 "
            } `}
            onClick={() => setOne(!one)}
          >
            V
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              two ? " bg-indigo-500" : "bg-gray-200 "
            } `}
            onClick={() => setTwo(!two)}
          >
            I
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              three ? " bg-blue-500 " : "bg-gray-200 "
            } `}
            onClick={() => setThree(!three)}
          >
            B
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              four ? " bg-green-500 " : "bg-gray-200 "
            } `}
            onClick={() => setFour(!four)}
          >
            G
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              five ? " bg-yellow-500" : "bg-gray-200 "
            } `}
            onClick={() => setFive(!five)}
          >
            Y
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              six ? " bg-orange-500 " : "bg-gray-200 "
            } `}
            onClick={() => setSix(!six)}
          >
            O
          </div>
          <div
            className={`w-96 h-20 rounded-xl shadow-xl flex items-center justify-center ${
              seven ? " bg-red-500 " : "bg-gray-200 "
            } `}
            onClick={() => setSeven(!seven)}
          >
            R
          </div>
        </div>
        {one && two && three && four && five && six && seven && (
          <span className=" text-5xl text-center font-medium font-sans ">
            It's <br /> Rainbow
          </span>
        )}
      </div>
    </div>
  );
};

export default Rainbow;

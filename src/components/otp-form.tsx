import React, { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNT = 6;

export const OtpForm = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (value: any, index: number) => {
    if (isNaN(value)) {
      return;
    }

    const newArr = [...inputArr];

    newArr[index] = value.slice(-1);
    setInputArr(newArr);

    // Move to next input if a number is entered
    if (value && index < OTP_DIGIT_COUNT - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !inputArr[index] && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="h-64 w-full p-4 flex flex-col items-center justify-start gap-4">
      <span>Enter OTP here</span>
      <div className="w-max flex items-center justify-center gap-2">
        {inputArr.map((item, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 rounded-md border-2 border-gray-400 text-center text-xl font-semibold"
            value={inputArr[index]}
            ref={(input) => (inputRef.current[index] = input)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

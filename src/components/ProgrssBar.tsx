import React, { useState } from "react";

const steps = [
  {
    step: 1,
    title: "Step 1",
    describe:
      "Would I rather be feared or loved? Both, I want people to be afraid of how much they love me.",
  },
  {
    step: 2,
    title: "Step 2",
    describe: "All I can do right now is put on a brave face.",
  },
  {
    step: 3,
    title: "Step 3",
    describe:
      "Do you really expect me to not push you up against the wall, beeyotch?",
  },
  {
    step: 4,
    title: "Step 4",
    describe:
      " Bros before hos. Why? Because your bros are always there for you. They have got your back after your ho rips your heart out for no good reason. And you are nothing but great to your ho, and you told her that she was the only ho for you, and that she was better than all the other hos in the world. And then... Then suddenly she's not your ho no mo'!",
  },
  {
    step: 5,
    title: "Step 5",
    describe: "No question about it. I'm ready to get hurt again.",
  },
];

const ProgressBar = () => {
  const length = steps.length;
  const perStepPoint = 100 / (length - 1);
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Update progress based on currentStep
  const progress = perStepPoint * currentStep;

  const handleClickPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClickNext = () => {
    if (currentStep < length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-96 h-96 border-2 border-gray-800 rounded-lg bg-gray-200 flex flex-col items-center justify-start p-4">
      <span className="text-xl font-bold">{steps[currentStep].title}</span>
      <p className="text-base">{steps[currentStep].describe}</p>
      <div className="w-full flex items-center justify-between px-2 mt-4">
        {/* Previous button */}
        <button
          onClick={handleClickPrev}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Prev
        </button>
        {/* Next button */}
        <button
          onClick={handleClickNext}
          disabled={currentStep === length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
      <div className="w-4/5 h-3 rounded-full bg-white relative mt-4">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-blue-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4">
        <span className="text-sm">Current Step: {currentStep + 1}</span>
        <br />
        <span className="text-sm">Progress: {progress.toFixed(0)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;

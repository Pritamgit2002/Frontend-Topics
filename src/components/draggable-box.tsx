"use client"; // Only if you're using Next.js App Router

import React from "react";
import Draggable from "react-draggable";

const DraggableBox = () => {
  return (
    <div className="w-full h-[75vh] flex items-center justify-center bg-gray-100">
      <Draggable
        //axis="y"
        bounds="parent"
      >
        <div
          className="w-44 h-44 bg-red-500 active:shadow-xl shadow-red-400/85 rounded-xl text-xl font-semibold text-white cursor-move flex items-center justify-center select-none"
          role="button"
          aria-label="Draggable box"
        >
          Move Me
        </div>
      </Draggable>
    </div>
  );
};

export default DraggableBox;

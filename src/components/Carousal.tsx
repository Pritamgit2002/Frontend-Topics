import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1724908549265-06972c22ca37",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1724991488569-ac2fb5060b99",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1724961223462-879f7b5006c4",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1723398466717-12d0c8f6299c",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1724752286363-846076c705a9",
  },
];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const length = data.length;

  useEffect(() => {
    const intervalFunction = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < length - 1 ? prevIndex + 1 : 0
      );
    }, 2500);

    return () => clearInterval(intervalFunction);
  }, [length, currentIndex]);

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(length - 1);
    }
  };

  const handleClickNext = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-0 bg-blue-500 p-4 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-80 overflow-hidden">
        <div
          className={`flex
              transition-transform duration-700 ease-in-out"
              
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {data.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <Image
                src={item.image}
                alt={`Slide ${item.id}`}
                width={1200}
                height={1200}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="text-lg font-medium bg-white text-blue-500 p-2 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
          onClick={handleClickPrev}
        >
          Prev
        </button>
        <span>
          {currentIndex + 1} of {length}
        </span>
        <button
          className="text-lg font-medium bg-white text-blue-500 p-2 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousal;

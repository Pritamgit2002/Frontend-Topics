import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalid);
  });

  return (
    <div className=" w-80 ">
      <h1>Current Time</h1>
      <span>{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default DigitalClock;

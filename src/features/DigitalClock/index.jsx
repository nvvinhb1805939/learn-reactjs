import React, { useEffect, useState } from "react";
import "./DigitalClock.scss";

const formatTime = date => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};

function DigitalClock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const newTimeString = formatTime(new Date());
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return (
    <div className="clock">
      <span className="clock__timer">{timeString}</span>
    </div>
  );
}

export default DigitalClock;

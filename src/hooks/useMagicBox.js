import React, { useEffect, useState } from "react";

const getRandomColor = () => {
  const COLORS = ["orange", "pink", "purple"];
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  const randomColor = COLORS[randomIndex];
  return randomColor;
};

function useMagicBox() {
  const [color, setColor] = useState("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor);
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicBox;

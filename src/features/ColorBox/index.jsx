import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLORS = ["deeppink", "yellow", "orange", "green"];
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const newColor = localStorage.getItem("colorBox") || "deeppink";
    return newColor;
  });
  const handleBoxClick = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
    localStorage.setItem("colorBox", randomColor);
  };
  return (
    <div className="box">
      <div
        className="box__container"
        style={{
          backgroundColor: color,
          color: "white",
        }}
        onClick={handleBoxClick}
      >
        Click Me!
      </div>
    </div>
  );
}

export default ColorBox;

import useMagicBox from "hooks/useMagicBox";
import React from "react";
import "./MagicBox.scss";

function MagicBox() {
  const color = useMagicBox();
  return <div className="box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;

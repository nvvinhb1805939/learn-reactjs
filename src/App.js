import DigitalClock from "features/DigitalClock";
import MagicBox from "features/MagicBox";
import React from "react";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "100vw",
    height: "100vh",
  };
  return (
    <div className="App">
      <div className="container" style={styles}>
        <MagicBox />
      </div>
    </div>
  );
}

export default App;

import NewTodoFeature from "features/NewTodo";
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
        <NewTodoFeature />
      </div>
    </div>
  );
}

export default App;

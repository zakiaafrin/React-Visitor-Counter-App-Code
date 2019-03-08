import React from "react";
import ReactDOM from "react-dom";
import Screen from "./components/screen.js";
import Counter from "./components/counter.js";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Screen />
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

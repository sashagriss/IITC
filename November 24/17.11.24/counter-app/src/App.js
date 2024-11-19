import "./App.css";
import { useState } from "react";
import ChildComp from "./components/Child";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  };
  const reduceCount = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter-container">
      <button onClick={reduceCount}>-</button>
      <div>{counter}</div>
      <ChildComp />
      <button onClick={increaseCount}>+</button>
    </div>
  );
}
export default App;

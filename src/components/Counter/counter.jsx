import { useState } from "react"
import "./counter.css"

export function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((oldCount) => oldCount + 1);
  }

  function subtraction() {
    setCount((oldCount) => oldCount - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="shoppingBag">
      <button className="subtractionButton" onClick={subtraction}>-</button>
      <div className="count">{count}</div>
      <button className="incrementButton" onClick={increment}>+</button>
      <button className="resetButton" onClick={reset}>RESET</button>
    </div>
  );
}
import { useState } from "react"
import "./card.css"

export function Card(props) {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((oldCount) => oldCount + 1)
  }

  function subtraction() {
    setCount((oldCount) => oldCount - 1)
  }

  function reset() {
    setCount(0)
  }

  return(
    <div className="clothes-card">
      <a href={props.url} target="_blank" rel="noopener noreferrer"><img className = "clothes-image" src={props.img} alt={props.tittel}/></a>
      <a href={props.url} target="_blank" rel="noopener noreferrer"><h3>{props.tittel}</h3></a>
      <p>{props.price}</p>

      <div className="shoppingBag">
        <button className="subtractionButton" onClick={subtraction}>-</button>
        <div className="count">{count}</div>
        <button className="incrementButton" onClick={increment}>+</button>
        <button className="resetButton" onClick={reset}>RESET</button>
      </div>
    </div>
  )
}
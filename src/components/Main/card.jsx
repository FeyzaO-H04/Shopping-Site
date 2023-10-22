import { useState } from "react"
import { Count } from "../Counter/counter"
import "./card.css"

export function Card(props) {

  return(
    <div className="clothes-card">
      <a href={props.url} target="_blank" rel="noopener noreferrer"><img className = "clothes-image" src={props.img} alt={props.tittel}/></a>
      <a href={props.url} target="_blank" rel="noopener noreferrer"><h3>{props.tittel}</h3></a>
      <p>{props.price}</p>

    <Count />
    
    </div>
  )
}
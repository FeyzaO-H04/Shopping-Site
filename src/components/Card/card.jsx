
import "./card.css"

export function Card(props){
  return(
    <div className="clothes-card">
      <img className = "clothes-image" src={props.img} alt={props.tittel}/>
      <h3>{props.tittel}</h3>
      <p>{props.price}</p>
    
    </div>
  )
}
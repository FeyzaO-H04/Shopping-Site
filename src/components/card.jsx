
import "./card.css"

export function Card(props){
  return(
    <>
      <img src={props.img} alt={props.tittel}/>
      <h3>{props.tittel}</h3>
      <p>{props.price}</p>
    
    </>
  )
}
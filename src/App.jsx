import { Card } from "./components/Card/card"
import Data from "./components/dataArray"
import './App.css'


export function App() {

  const cards = Data.map(item =>{
    return(
      <Card
        key = {item.id}
        img = {item.img}
        tittel ={item.tittel}
        price = {item.price}
      />
    )
  })

  return (
    <>
      <header>Header</header>
      <main className="card-container">
        {cards}
      </main>
      <footer></footer>
    </>
  )
}



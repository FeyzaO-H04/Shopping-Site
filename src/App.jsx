import { Header } from "./components/Header/header"
import { Card } from "./components/Main/card"
import { Footer } from "./components/Footer/footer"
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
        url = {item.url}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="card-container">
        {cards}
      </main>
      <Footer />
    </>
  )
}



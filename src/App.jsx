import { useState } from 'react'
import {Card} from "./components/card"
import Data from "./components/dataArray"
import './App.css'

export function App() {

  const cards = Data.map(item =>{
    return(
      <Card
        img = {item.img}
        tittel ={item.tittel}
        price = {item.price}
      />
    )
  })

  return (
    <>
      <header>YARGICI</header>
      <main>
        {cards}
      </main>
      <footer></footer>
    </>
  )
}



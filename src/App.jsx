import { Card } from "./components/Main/card"
import { BaseLayout } from "./layout/BaseLayout"
import { Man } from "./pages/Man/man"
import { Woman } from "./pages/Woman/woman"
import Data from "./data/dataArray"
import './App.css'
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseLayout cards={cards} />}/>
        <Route path='/Man' element={<Man />}/>
        <Route path='/Woman' element={<Woman />}/>
        <Route path='*' element={<h1 className="not-found">404 Not Found</h1>}/>
      </Routes>
     </BrowserRouter>
  )
}



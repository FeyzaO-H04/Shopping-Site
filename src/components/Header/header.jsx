import { useState } from "react"
import "./header.css"
import {
  Link,
} from 'react-router-dom'
import { Card } from "../Main/card";



export function Header(){
/*
  const clothes = Card ();
  const [filter, setFilter] = useState("");
  const filteredClothes = clothes.filter((item) => item.tittel.includes(filter)); 

  function updateFilter(event) {
    setFilter(event.target.value)
  }

  console.log(filter) */
  
  return(
    <div className="header">
      <div className="nav-bar"> 
        <div className="nav-bar-left">
          <ul className="link-container">
            <li><Link to="/woman">WOMAN</Link></li>
            <li><Link to="/man">MAN</Link></li>
          </ul>

          <div className="searchContainer">
            <input className="searchInput" type="text" placeholder="Search" /* onChange={updateFilter} *//>
            <button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>
        <Link to="/" className="logo">LAKOS</Link>
        <ul className="link-container">
          <li><a href="http://" target="_blank" rel="noopener noreferrer">SIGN IN</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">FAVORITES</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">SHOPPING BAG</a></li>
        </ul>
      </div>
    </div>
  )
}
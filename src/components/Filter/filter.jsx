import { useState } from "react"
import "./filter.css"

export function Filter() {
   /* 
  const [filter, setFilterState] = useState("");
  const filteredClothes = cards.filter((item) => item.tittel.includes(filter));

  function updateFilter(event) {
    setFilter(event.target.value)
  }

  console.log(filter) */

  return (
    <div className="searchContainer">
      <input className="searchInput" type="text" placeholder="Search" /* onChange={updateFilter} */ />
      <button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button>
  
    </div>
  );
}  




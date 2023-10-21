import "./header.css"
import {
  Link,
} from 'react-router-dom'



export function Header(){
  return(
    <div className="header">
      <div className="nav-bar"> 
        <ul className="link-container">
          <li><Link to="/woman">WOMAN</Link></li>
          <li><Link to="/man">MAN</Link></li>
        </ul>
        <Link to="/" className="logo">LAKOS</Link>
        <ul className="link-container">
          <li><a href="http://" target="_blank" rel="noopener noreferrer">SEARCH</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">SIGN IN</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">FAVORITES</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">SHOPPING BAG</a></li>
        </ul>
      </div>
    </div>
  )
}
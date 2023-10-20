import "./header.css"

export function Header(){
  return(
    <div className="header">
      <div className="nav-bar"> 
        <ul className="link-container">
            <li><a href="http://" target="_blank" rel="noopener noreferrer">DAME</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">HERRE</a></li>
        </ul>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <h1 >LAKOS</h1>
        </a>
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
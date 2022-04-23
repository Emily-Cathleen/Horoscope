import React from "react"
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = ({ resetHome }) => {
  return(
    <header className="header">
      <div className="title">Mycologist Horoscope</div>
      <Link to="/">
        <button className="home-button" onClick={() => {resetHome()}}>HOME</button>
      </Link>
    </header>

  )
}


export default Header

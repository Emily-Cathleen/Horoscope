import React from "react"
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = ({ resetHome }) => {
  return(
    <header className="header">
      <h1 className="title">Mycologist Horoscope</h1>
      <div className="button-container">
        <Link to="/">
          <button className="home-button" onClick={() => {resetHome()}}>HOME</button>
        </Link>
        <Link to="/learn">
          <button className="learn-more-button" onClick={() => {resetHome()}}>Learn More</button>
        </Link>
        <Link to="/saved">
        <button className="saved-horoscopes-button" >SAVED HOROSCOPES PAGE</button>
        </Link>
      </div>
    </header>

  )
}


export default Header

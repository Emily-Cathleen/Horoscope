import React from "react"
import { NavLink } from "react-router-dom";
import "./SingleHoroscope.css";
import Header from "../Header/Header";


const SingleHoroscope = ( { userHoroscope, saveHoroscope } ) => {

  return(
    <div>
    <div className="greeting"> {`Your sign is ${userHoroscope.sign}, happy forraging! `} </div>
    <div className="single-horoscope-container">
      <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      <div className="horoscope-details-container">
        <div className="sign">
          {`You are a beautiful ${userHoroscope.sign} and you will be ${userHoroscope.messages}`}
        </div>
        <div className="mushroom-name">
          {`Your mushroom is a ${userHoroscope.name}`}
        </div>
        <button className="favorite-button" onClick={() => {saveHoroscope(userHoroscope)}}>SAVE</button>
      </div>
    </div>
    </div>
  )
}

export default SingleHoroscope

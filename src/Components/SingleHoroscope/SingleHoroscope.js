import React from "react"
import { NavLink } from "react-router-dom";
import "./SingleHoroscope.css";
import Header from "../Header/Header";


const SingleHoroscope = ( {userHoroscope} ) => {

  return(
    <div className="single-horoscope-contianer">
      <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      <div className="horoscope-details-container">
        <div className="sign">
          {userHoroscope.sign}
        </div>
        <div className="mushroom-name">
          {userHoroscope.name}
        </div>
      </div>
    </div>
  )
}


export default SingleHoroscope

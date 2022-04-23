import React from "react"
import { NavLink } from "react-router-dom";
import "./SingleHoroscope.css";
import Header from "../Header/Header";


const SingleHoroscope = ( {userHoroscope} ) => {

  return(
    <div className="single-horoscope-contianer">

     <img className="mushroom-image" src={userHoroscope.img_url} alt="mushroom picture"/>
      {userHoroscope.sign}
      {userHoroscope.name}

    </div>
  )
}


export default SingleHoroscope

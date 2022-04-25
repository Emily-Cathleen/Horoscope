import React from "react"
import { NavLink } from "react-router-dom";
import SingleHoroscope from "../SingleHoroscope/SingleHoroscope";
import SavedCard from "./SavedCard";
import "./SavedCard.css"
// import "./SavedHoroscopes.css";

const SavedHoroscopes = ({ favorites }) => {
const sortedHoroscopes = favorites.map(favorite => <SavedCard userHoroscope={favorite} key={favorite.sign} />)
  return(
    <section className="sorted-horoscopes-container">
    <h1>Here are all of your saved horoscopes:</h1>
    {sortedHoroscopes}
    </section>
  )
}

export default SavedHoroscopes

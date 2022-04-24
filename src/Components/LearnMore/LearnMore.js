import React from "react";
import "./LearnMore.css";
import { Link } from 'react-router-dom';


const LearnMore = () => {
  return(
      <Link to="/learn">
        <button className="learn-more-button">Learn More</button>
      </Link>
  )
}


export default LearnMore

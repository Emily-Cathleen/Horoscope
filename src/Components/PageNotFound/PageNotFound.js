import React from "react"
import "./PageNotFound.css"
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h2>404 Error</h2>
      <p> That URL does not exist! Maybe try returning the the main page <Link to='/'>home</Link>.</p>
    </div>
  )
}

export default PageNotFound

import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <h1>Favorite Authors</h1>
        <NavLink to= '/'>Home  </NavLink>
        <span>  |  </span>
        <NavLink to= '/Form'>  Add Author</NavLink>
    </div>
  )
}

export default NavBar
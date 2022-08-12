import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        
        <div>
            <h1>Project Manager</h1>
            <NavLink to="/home">Home</NavLink>
            <span> | </span>
            <NavLink to="/" className="">Form</NavLink>
        </div>
      </div>
  )
}

export default NavBar
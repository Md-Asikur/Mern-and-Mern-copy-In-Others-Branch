import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.module.css'
const Navbar = () => {
  return (
      <>
         <nav>
              <NavLink className="a" to="/">Home</NavLink>
              <NavLink className="a" to="/about">About</NavLink>
              <NavLink className="a" to="/contact">Contact</NavLink>
              <NavLink className="a" to="/login">Login</NavLink>
        <NavLink className="a" to="/signin">SignIn</NavLink>
         <NavLink className="a" to="/validate">Validation</NavLink>
              
      </nav>
      
      </>
  )
}

export default Navbar
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
        <NavLink className="a" to="/register">Register</NavLink>
          <NavLink className="a" to="/test">Test R</NavLink>
              
      </nav>
      
      </>
  )
}

export default Navbar
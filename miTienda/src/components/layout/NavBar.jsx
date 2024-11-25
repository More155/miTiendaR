import React from 'react'
import { Link } from 'react-router-dom'
import "../layout/NavBar.css"
import CartWidget from '../common/CartWidget'

const NavBar = () => {

    return (
        <header className="header">
       <Link to="/">Prana</Link> 

        <nav className="navbar">
           <a href={"/"}>Home</a>
           <a href="/">Paletas</a>
           <a href="/">Bases</a>
           <a href="/">Labiales</a>
           <CartWidget />
        </nav>
        
    </header>
    )
}

export default NavBar

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
           <Link to="/category/ojos">Ojos</Link>
           <Link to="/category/rostro">Rostro</Link>
           <Link to="/category/labios">Labios</Link>
           <CartWidget />
        </nav>

      
        
    </header>
    );
};

export default NavBar

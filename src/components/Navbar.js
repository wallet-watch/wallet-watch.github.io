import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';

import logo_light from '../asessts/images/logo-w.png';

const Navbar = () => {
    const handleRedirect = () => {
        window.location.href = 'http://127.0.0.1:3000';
    };
  return (
    
    <div className="navbar">
        <Link to="/">
        <img src={logo_light} alt="" className="logo" />
        </Link>

    <ul className="navul">
        <li>
            <Link to="/" className="nav-text">Home</Link>
        </li>
        <li>
            <Link to="/features" className="nav-text">Features</Link>
        </li>
        <li>
            <Link to="/about" className="nav-text">About</Link>
        </li>
    </ul>
    <button className="navbut" onClick={handleRedirect}><p>Get</p></button>
    </div>
  )
}

export default Navbar
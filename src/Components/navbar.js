import React from 'react';
import './navbar.css'; 
import img1 from "../images/logo.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={img1} alt="" className="navbar-logo" />
        
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';

// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <div className="cv__navbar">
      <div className="cv__navbar-links">
        <div className="cv__navbar-links_logo">
          {/* <img src={logo} /> */}
        </div>
        <div className="cv__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      
      <div className="cv__navbar-menu">
        {toggleMenu
          ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuFill size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cv__navbar-menu_container scale-up-center">
          <div className="cv__navbar-menu_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#projects">Projects</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
          
        </div>
        )}
      </div>
      
        
    </div>
  );
};

export default Navbar;

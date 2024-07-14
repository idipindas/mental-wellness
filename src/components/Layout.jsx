import React, { useState } from 'react';
import '../styles/navStyle.css';
import Homepage from '../pages/Homepage';
import logo from '../../public/logo.png';
import About from '../pages/AboutPage';
import Services from '../pages/Services';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776; {/* Unicode character for the hamburger menu */}
          </div>
          <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <li>
              <div to="/">Home</div>
            </li>
            <li>
              <div to="/aboutus">About Us</div>
            </li>
            <li>
              <div to="/services">Services</div>
            </li>
            <li>
              <div to="/contactus">Contact Us</div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        {/* <Homepage/> */}
        {/* <About /> */}
        <Services/>
      </div>
    </>
  );
}

export default Layout;

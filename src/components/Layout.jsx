import React, { useState } from 'react';
import '../styles/navStyle.css';
import Homepage from '../pages/Homepage';
import logo from '../../public/logo.png';
import About from '../pages/AboutPage';
import Services from '../pages/Services';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate()

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
              <div onClick={()=>navigate('/')}>Home</div>
            </li>
            <li>
              <div onClick={()=>navigate('/about')}>About Us</div>
            </li>
            <li>
              <div onClick={()=>navigate('/services')}>Services</div>
            </li>
            <li>
              <div onClick={()=>navigate('/contact')}>Contact Us</div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        {/* <Homepage/> */}
        {/* <About /> */}
        {/* <Services/> */}
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;

import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../../images/blue logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import Menu from "../Megamenu/Menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar2-container">
        {/* Left - Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Blue Star Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Center - Navigation Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
          <li>Home</li>
          <li>New Arrival</li>

          {/* Shop by Category - Click to Toggle Mega Menu */}
          <li onClick={toggleMenu} className="dropdown-trigger">
            Shop by Category
          </li>

          <li>Collections</li>
          <li>Expert Service</li>
          <li>Store Locator</li>
        </ul>

        {/* Right - Book a Call Button */}
        <div className="navbar-button">
          <Button variant="warning" className="book-call">
            <BiCalendar className="icon" /> Book a call
          </Button>
        </div>
      </nav>

      {/* Mega Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && <Menu />}
    </>
  );
}

export default Navbar;

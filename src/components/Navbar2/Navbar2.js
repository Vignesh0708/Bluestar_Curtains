import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../../assets/images/blue logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import Menu from "../Megamenu/Menu";
import { Link } from "react-router-dom";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="navbar2-container">
        <div className="navbar-logo">
          <img src={logo} alt="Blue Star Logo" />
        </div>

        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
          <li><Link className="text-black" to="/">Home</Link></li>
          <li><Link className="text-black" to="/new-arrival">New Arrival</Link></li>
          <li onClick={toggleMenu} className="dropdown-trigger">
            <span className="text-black">Shop by Category</span>
          </li>
          <li><Link className="text-black" to="/collections">Collections</Link></li>
          <li><Link className="text-black" to="/expert-service">Expert Service</Link></li>
          <li><Link className="text-black" to="/store-locator">Store Locator</Link></li>
        </ul>

        <div className="navbar-button">
          <Button variant="warning" className="book-call">
            <BiCalendar className="icon" /> Book a call
          </Button>
        </div>
      </nav>

      {isMenuOpen && <Menu />}
    </>
  );
}

export default Navbar2;

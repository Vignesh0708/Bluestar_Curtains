import React, { useState, useEffect, useRef } from "react";
import "./Navbar2.css";
import logo from "../../assets/images/blue logo.png";
import { Dropdown } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import cartIcon from "../../assets/images/shopping-cart-add 1.svg"; // Cart icon
import userIcon from "../../assets/images/user (2).png"; // User profile image
import Menu from "../Megamenu/Menu";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar2-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Blue Star Logo" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "show" : ""}`}>
          <li><Link className="text-black" to="/">Home</Link></li>
          <li><Link className="text-black" to="/new-arrival">New Arrival</Link></li>

          {/* Dropdown with Hover Effect */}
          <li 
            className="dropdown-trigger" 
            onMouseEnter={() => setIsMenuOpen(true)} 
            onMouseLeave={() => setIsMenuOpen(false)}
            ref={dropdownRef}
          >
            <li className="text-black">Shop by Category</li>
          </li>

          <li><Link className="text-black" to="/collections">Collections</Link></li>
          <li><Link className="text-black" to="/expert-service">Expert Service</Link></li>
          <li><Link className="text-black" to="/store-locator">Store Locator</Link></li>
        </ul>

        {/* Cart Button */}
        <button className="cart-button">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          Cart (2)
        </button>

        {/* User Profile Section */}
        <Dropdown align="end">
          <Dropdown.Toggle variant="link" id="dropdown-profile" className="profile-toggle">
            <img src={userIcon} alt="User" className="profile-icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item disabled className="dropdown-header">
              <img src={userIcon} alt="User" className="profile-img" />
              <div className="sam">
                <p className="user-name">Sam</p>
                <p className="user-email">Sam@Info.com</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><i className="bi bi-person"></i> Your Account</Dropdown.Item>
            <Dropdown.Item><i className="bi bi-cart"></i> Your Cart</Dropdown.Item>
            <Dropdown.Item><i className="bi bi-truck"></i> Track Your Order</Dropdown.Item>
            <Dropdown.Item><i className="bi bi-question-circle"></i> Help Center</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="logout-option">
              <i className="bi bi-box-arrow-right"></i> Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>

      {/* Dropdown Menu Component */}
      {isMenuOpen && <Menu style={{ zIndex: 999, position: "absolute" }} />}
    </>
  );
}

export default Navbar2;

import React from "react";
import "./Navbar.css";
import call from "../../assets/images/phone-call.png";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';




function Navbar() {
  return (
    <nav className="navbar-container d-flex align-items-center justify-content-between px-3 py-2 flex-wrap">
      {/* Call Section */}
      <div className="d-flex align-items-center call-image">
        <img src={call} alt="call-logo" className="me-2" />
        <p className="mb-0">+91 90808 88427</p>
      </div>

      {/* Search Bar */}
      <div className="input-group search-bar">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input type="text" className="form-control" placeholder="Type something..." />
      </div>

      {/* Login & Signup Buttons */}
      <div className="log-sig">
        <button  className="btn btn-outline-primary me-2">Login</button>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;

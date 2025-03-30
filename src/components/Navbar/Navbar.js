import React from "react";
import "./Navbar.css";
import call from "../../assets/images/phone-call.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white px-4">
      <div className="d-flex align-items-center call-section">
        <img src={call} alt="call-logo" className="call-icon me-2" />
        <p className="mb-1">+91 90808 88427</p>
      </div>
      <form className="d-flex search-bar">
        <input
          className="form-control search-input"
          type="search"
          placeholder="Search text"
          aria-label="Search"
        />
        <button className="btn btn-primary search-btn" type="submit">
          Search
        </button>
        <button className="btn refresh-btn">
          <i className="bi bi-arrow-clockwise"></i>
        </button>
      </form>
    </nav>
  );
}

export default Navbar;

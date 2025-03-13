import React, { useState } from "react";
import "./Filter.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FilterIcon from "../../images/system-uicons_filtering.svg"; // Import image

const FilterBar = () => {
  const [showCount, setShowCount] = useState(16);
  const [sortBy, setSortBy] = useState("Default");

  return (
    <div className="filter-bar-container">

      {/* Filter Bar */}
      <div className="filter-bar w-100">



        {/* Offcanvas Button */}
        <a
          className="btn btn-primary w-auto"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >

          <img src={FilterIcon} alt="Filter Logo" className="filter-icon" />
          Filter
        </a>


        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Filter Options
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <p>Some text as placeholder.</p>

            {/* Dropdown Menu */}
            <div className="dropdown mt-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results Text */}
        <span className="results-text">
          Showing 1–{showCount} of 32 results
        </span>

        {/* Show Count & Sort Options */}
        <div className="controls">
          <label>Show</label>
          <input
            type="number"
            value={showCount}
            onChange={(e) => setShowCount(e.target.value)}
            min="1"
            max="32"
            className="show-input"
          />

          <label>Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-dropdown"
          >
            <option value="Default">Default</option>
            <option value="Price">Price</option>
            <option value="Popularity">Popularity</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

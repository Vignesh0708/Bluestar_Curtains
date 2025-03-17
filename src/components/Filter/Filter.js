
import React, { useState } from "react";
import "./Filter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FilterIcon from "../../assets/images/system-uicons_filtering.svg";
import { Link } from "react-router-dom";
import { Accordion, Form, InputGroup, Button } from "react-bootstrap";

const Filter = ({ showCount, setShowCount, maxLimit }) => {
  const [sortOption, setSortOption] = useState("default");
  
  const [priceRange, setPriceRange] = useState({ min: 0, max: 749 });
   
  const backendLimit = 16;

  const handleSortChange = (option) => {
    setSortOption(option);
    console.log("Selected Option:", option);
  };

  const handleShowCountChange = (e) => {
    const value = Number(e.target.value);
    if (value <= backendLimit) {
      setShowCount(value);
    }
  };

  return (
    <div className="filter-bar-container sticky-top bg-white">
      <div className="filter-bar w-100 d-flex align-items-center justify-content-between p-2 border-bottom">
        
        <Link
          className="btn btn-primary"
          data-bs-toggle="offcanvas"
          to="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img src={FilterIcon} alt="Filter Logo" className="filter-icon" />
          Filter
        </Link>

       
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

          <div className="offcanvas-body  mt-2">
           

      <Accordion defaultActiveKey="0" alwaysOpen>
       
        <Accordion.Item className="mb-3 shadow-sm" eventKey="1">
          <Accordion.Header>Product Type</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="Standard Curtains (0)" />
          </Accordion.Body>
        </Accordion.Item>

        
        <Accordion.Item className="mb-3 shadow-sm" eventKey="2">
          <Accordion.Header>Size</Accordion.Header>
          <Accordion.Body>
            {[
              "Customize",
              "Door - 7.5 ft X 5 ft",
              "Long Door - 9 ft X 5 ft",
              "Window - 5.5 ft X 5 ft",
            ].map((size, index) => (
              <div key={index} className="size-tag">
                {size} (0)
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>

      
        <Accordion.Item className="mb-3 shadow-sm" eventKey="3">
          <Accordion.Header>Availability</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="In stock (0)" />
            <Form.Check type="checkbox" label="Out of stock (0)" />
          </Accordion.Body>
        </Accordion.Item>
 
        <Accordion.Item className="mb-3 shadow-sm" eventKey="4">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <InputGroup>
              <InputGroup.Text>₹</InputGroup.Text>
              <Form.Control
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
              />
              <InputGroup.Text>to</InputGroup.Text>
              <Form.Control
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
              />
            </InputGroup>
          </Accordion.Body>
        </Accordion.Item>

     
        <Accordion.Item className="mb-3 shadow-sm " eventKey="5">
          <Accordion.Header>Fabric/Material</Accordion.Header>
          <Accordion.Body>
            <Form.Check type="checkbox" label="100% Cotton (0)" />
            <Form.Check type="checkbox" label="Cotton Linen Blend (0)" />
          </Accordion.Body>
        </Accordion.Item>
 
        <Accordion.Item eventKey="6">
          <Accordion.Header>Color</Accordion.Header>
          <Accordion.Body>
            {[
              "Beige",
              "Blue",
              "Brown",
              "Cream",
              "Green",
              "Grey",
              "Indigo",
              "Lavender",
              "Multicolor",
              "Mustard",
              "Off-white",
              "Plum",
              "Red",
              "Rust",
              "White",
              "Yellow",
            ].map((color, index) => (
              <Form.Check key={index} type="checkbox" label={`${color} (0)`} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
          </div>
        </div>
 
        <span className="results-text">Showing 1–{showCount} results</span>
 
        <div className="controls d-flex align-items-center">
          <label className="me-2">Show</label>
          <input
            type="number"
            value={showCount}
            onChange={handleShowCountChange}
            min="1"
            max={backendLimit}
            className={`show-input form-control ${showCount > backendLimit ? "text-danger" : ""}`}
          />
        </div>
 
        <div className="dropdown ms-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            {sortOption === "default" ? "Default" : sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link
                className="dropdown-item"
                to="#"
                onClick={() => handleSortChange("price")}
              >
                Price
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="#"
                onClick={() => handleSortChange("popularity")}
              >
                Popularity
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;

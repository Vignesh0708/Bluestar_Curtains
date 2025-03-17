import React from "react";
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";
import "./Benefits.css"; // Import the CSS file


const Benefit = () => {
  return (
    <div className="benefit-container">
      <div className="benefit-item">
        <FaTrophy className="benefit-icon" />
        <div>
          <h3>High Quality</h3>
          <p>Crafted from top materials</p>
        </div>
      </div>

      <div className="benefit-item">
        <FaShieldAlt className="benefit-icon" />
        <div>
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>

      <div className="benefit-item">
        <FaShippingFast className="benefit-icon" />
        <div>
          <h3>Free Shipping</h3>
          <p>Order over $150</p>
        </div>
      </div>

      <div className="benefit-item">
        <FaHeadset className="benefit-icon" />
        <div>
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

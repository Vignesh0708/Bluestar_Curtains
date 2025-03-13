import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="mega-menu">
      <p className="menu-title"></p>
      <div className="menu-border"></div>

      <div className="menu-container">
        {/* Shop by Design */}
        <div className="menu-column">
          <h3>Shop by Design</h3>
          <ul>
            <li>Single Panel Curtains</li>
            <li>Panel Pair Curtains</li>
            <li>Pinch Pleat Curtains</li>
            <li>Goblet Pleat Curtains</li>
            <li>Pencil Pleat Curtains</li>
          </ul>
        </div>

        {/* Shop by Color */}
        <div className="menu-column">
          <h3>Shop by Color</h3>
          <ul>
            <li>Red Curtain</li>
            <li>Green Curtain</li>
            <li>Blue Curtain</li>
            <li>White Curtain</li>
            <li>Black Curtain</li>
          </ul>
        </div>

        {/* Shop by Material */}
        <div className="menu-column">
          <h3>Shop by Material</h3>
          <ul>
            <li>Silk Curtain</li>
            <li>Linen Curtain</li>
            <li>Polyester Curtain</li>
            <li>Velvet Curtain</li>
            <li>Acrylic Curtain</li>
          </ul>
        </div>

        {/* Shop by Types */}
        <div className="menu-column">
          <h3>Shop By Types</h3>
          <ul>
            <li>Single Panel Curtains</li>
            <li>Panel Pair Curtains</li>
            <li>Pinch Pleat Curtains</li>
            <li>Goblet Pleat Curtains</li>
            <li>Pencil Pleat Curtains</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;

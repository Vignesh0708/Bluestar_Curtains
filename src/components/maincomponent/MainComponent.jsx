 
import React, { useState } from "react";
import  Filter from "../Filter/Filter";
import  Productlist from "../Productlist/Productlist";
import image1 from "../../assets/images/Image-svg.svg";
import image2 from "../../assets/images/Image -1.svg";
import image3 from "../../assets/images/Image -2.svg";
import image4 from "../../assets/images/Image -3.svg";
import image5 from "../../assets/images/Image -4.svg";

const MainComponent = () => {
  const [showCount, setShowCount] = useState(16);
  const maxLimit = 16; 

  const products = [
    { id: 1, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 5, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image5 },
    { id: 6, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 7, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 8, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 9, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 10, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image5 },
    { id: 11, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 12, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 13, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 14, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 15, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image5 },
    { id: 16, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 17, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 18, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 19, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 20, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image5 },
  ];

  return (
    <div className="main-container">
      < Filter showCount={showCount} setShowCount={setShowCount} maxLimit={maxLimit} />
      < Productlist products={products.slice(0, Math.min(showCount, maxLimit))} />
    </div>
  );
};
  export default MainComponent;
  
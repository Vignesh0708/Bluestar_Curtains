import React, { useState } from "react";
import "./Imagegallery.css";
 
import initialImage from "../../assets/Imagegallery/kids-playing-around-calm-cosy-spaces 1.svg";
import image1 from "../../assets/Imagegallery/images (1).svg";
import image2 from "../../assets/Imagegallery/images (2).svg";
import image3 from "../../assets/Imagegallery/images (3).svg";
import image4 from "../../assets/Imagegallery/images (4).svg";
import image5 from "../../assets/Imagegallery/images (5).svg";
import image6 from "../../assets/Imagegallery/cart-btn.svg";
import image7 from "../../assets/Imagegallery/measuring-tape 1.png";

const images = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(initialImage);
  const [index, setIndex] = useState(-1);
  const [quantity, setQuantity] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Open popup and disable scrolling
  const openPopup = () => {
    document.body.classList.add("no-scroll");
    setIsPopupOpen(true);
  };

  // Close popup and enable scrolling
  const closePopup = () => {
    document.body.classList.remove("no-scroll");
    setIsPopupOpen(false);
  };

  return (
    <div className="gallery-container">
      {/* Image Gallery */}
      <div className="image-gallery">
        <div className="thumbnail-container">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.image}
              alt={`Thumbnail ${img.id}`}
              className={`thumbnail ${selectedImage === img.image ? "active" : ""}`}
              onClick={() => setSelectedImage(img.image)}
            />
          ))}
        </div>


        <div className="selected-image-container" onClick={() => setSelectedImage(images[(index + 1) % images.length].image)}>
          <img src={selectedImage} alt="Selected preview" className="selected-image-full" />
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2>Cabin Checks 100% Cotton Geometric Curtain</h2>
        <div className="rating">⭐ 4.5 | 1.2k+ Customer Reviews <span className="in-stock">In Stock</span></div>
        <div className="price">
          <span className="current-price">$500.00</span>
          <span className="original-price">$990.00</span>
        </div>

        {/* Size Options */}
        <div className="size-options">
          <button className="size-btn">Window: 5.5 Ft x 5 Ft</button>
          <button className="size-btn">Door: 7.5 Ft x 5 Ft</button>
          <button className="size-btn">Long Door: 9 Ft x 5 Ft</button>
          <button className="size-btn customize" onClick={openPopup}>
            Customize
          </button>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-container">
          <span className="Add">Add Quantity:</span>
          <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
          <span className="size">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        {/* Buy Now Section */}
        <div className="action-buttons">
          <img src={image6} className="Cart" alt="Cart Button" />
          <button className="buy-now">Buy Now</button>
        </div>
      </div>

      {/* Popup Section */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>

            <div className="how">
              <h2 className="bold"> Customize Your Product </h2>
              <img src={image7} className="image7" alt="Measuring Tape" />
              <h4 className="blue">how to measure</h4>
            </div>

            {/* Input Fields */}
            <div className="input-group">
              <input type="text" placeholder="Enter Width" className="black" />
              <span>Inch</span>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Enter Height" className="black" />
              <span>Inch</span>
            </div>

            {/* Accordion for Customization Options */}
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                    Header style
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Choose your preferred header style.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                    Light Block Lining
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Choose between light block and blackout lining.</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                    Accessories
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Add additional accessories.</div>
                </div>
              </div>
            </div>

            {/* Quantity Selector in Popup */}
            <div className="quantity-container">
              <span className="Add">Add Quantity:</span>
              <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
              <span className="size">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            {/* Pricing & Buy Now in Popup */}
            <div className="prices">
              <span className="current">$500.00</span>
              <span className="original">$990.00</span>
            </div>

            <div className="action-buttonss">
              <img src={image6} className="Cart" alt="Cart Button" />
              <button className="buy-noww" >Buy Now</button>
            </div>

            

            {/* Continue Shopping */}
            <div className="Continue">
              <h3>Continue Shopping</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
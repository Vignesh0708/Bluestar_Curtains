import React, { useState } from "react";
import image1 from "../../assets/images/Images.svg"; // Import images
import image2 from "../../assets/images/Images (1).svg";
import image3 from "../../assets/images/Images (2).svg";
import image4 from "../../assets/images/Images (3).svg";
import image5 from "../../assets/images/Images (4).svg";

const ProductCard = () => {
  const [products] = useState([
    { id: 1, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 5, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image5 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 5, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 5, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 5, title: "Elegant Orange Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 1, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 1, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 1, title: "Gold Color Curtains", price: 2500, rating: 4.5, image: image1 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 },
    { id: 2, title: "Blue Satin Curtains", price: 2500, rating: 4.5, image: image2 },
    { id: 3, title: "Luxury Tassel Curtains", price: 2500, rating: 4.5, image: image3 },
    { id: 4, title: "Multi-color Linen Curtains", price: 2500, rating: 4.5, image: image4 }
  ]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product Cards</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm">
              <a href={`/product/${product.id}`} className="text-decoration-none text-dark">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="text-muted">₹ {product.price}</p>
                  <p className="text-warning mb-0">⭐ {product.rating}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

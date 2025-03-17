import React from "react";
import './Productlist.css'
import '../Filter/Filter.css'

const Productlist = ({ products }) => {
  return (
    <div className="product-container mt-3 mb-3 " style={{ minHeight: "calc(200vh - 200px)", overflowY: "auto" }}>
      <div className="container">
        <h2 className="mb-4">Product Cards</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
       
            
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm">
                <a
                  href={`/product/${product.id}`}
                  className="text-decoration-none text-dark"
                >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}  
                  />
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
    </div>
  );
};

export default  Productlist;
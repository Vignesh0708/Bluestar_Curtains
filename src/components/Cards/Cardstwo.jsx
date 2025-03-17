import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import star from '../../assets/icons/Star.svg';
import Cartbtn from '../Buttons/Cartbtn';
import Primartbtn from '../Buttons/Primartbtn';
import '../Buttons/button.css';

const Cardstwo = ({ product }) => {
  return (

         
       <>

      <div className="image-box">
        <NavLink>
          <Card className="product-card ms-1 p-1">
            <Card.Img
              className="rounded p-1"
              style={{ height: '10rem' }}
              src={product.image}
              alt=" "
              variant="top"
            />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontWeight: '400' }} className="fs-6 fw-bold">
                  {product.price}
                </span>
                <span
                  style={{ fontWeight: '400' }}
                  className="d-flex align-items-center fs-6 fw-bold"
                >
                  <img className="me-1  " src={star} alt="star icon" />
                  {product.rating}
                </span>
              </div>

              <Card.Text
                style={{ fontWeight: '400',fontSize:"12px" }}
                className="mt-2 text-center text-black"
              >
                {product.content}
              </Card.Text>

              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <Cartbtn />
                </div>
                <div className="d-flex">
                  <Primartbtn />
                </div>
              </div>
            </Card.Body>
          </Card>
        </NavLink>
      </div>
     </>
  );
};

export default Cardstwo;

import React from 'react'
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import star from '../../assets/icons/Star.svg'
import Cartbtn from '../Buttons/Cartbtn';
import Primartbtn from '../Buttons/Primartbtn';
 



const Cardsone = ( {material}) => {
  return (
    <div>
         <div className='image-box '>
            <NavLink>
             <Card className='ms-1 p-2 product-card '>
              <Card.Img className='rounded 'style={{height:"11rem"}} src={material.image} alt=' ' variant='top' />
              <Card.Body className=' '>
                <div className='d-flex justify-content-between align-items-center'>
                <span  className="fs-6 fw-bold">{material.price}</span>
                 <span   className=" d-flex align-items-center fs-6 fw-bold">
                    <img className='me-1 fw-bold' src={star} alt='star icon '/>
                       {material.rating}
                 </span>
                </div>
                
                <Card.Text style={{fontWeight:"400",fontSize:"12px"}} className="mt-2 text-center  text-black " >
                  
                  {material.content}
                 </Card.Text>

        <div className="d-flex justify-content-between">
            <div className='d-flex align-items-center'>
            <Cartbtn/>
            </div>
            <div className='d-flex'>

          <Primartbtn/>
            </div>
        </div>
                  
              </Card.Body>
             </Card>
            </NavLink>

      </div>
    </div>
  )
}

export default Cardsone;

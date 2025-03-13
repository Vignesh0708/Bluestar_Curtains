import React from 'react'
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import star from '../../assets/icons/Star.svg'
import Cartbtn from '../Buttons/Cartbtn';
import Primartbtn from '../Buttons/Primartbtn';

 


const Cardstwo = ({product}) => {
  return (
    <div>
      <div className='image-box'>
            <NavLink>
             <Card className='ms-1 p-1 '>
              <Card.Img className='rounded 'style={{  height:"14rem"}} src={product.image} alt=' ' variant='top' />
              <Card.Body className=' '>
                <div className='d-flex justify-content-between align-items-center'>
                <span style={{fontWeight:"400"}} className="fs-6">{product.price}</span>
                 <span style={{fontWeight:"400"}} className=" d-flex align-items-center fs-6 ">
                    <img className='me-1' src={star} alt='star icon '/>
                       {product.rating}
                 </span>
                </div>
                
                <Card.Text style={{fontWeight:"500"}} className="mt-2 text-center fs-6  text-black " >
                  
                  {product.content}
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

export default Cardstwo

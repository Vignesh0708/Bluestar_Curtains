import header from '../../assets/cover img/Header image.png'
import React from 'react'
import './header.css'
import { Container, Row, Col,  } from "react-bootstrap";
const Header = () => {
  return (

    <Container>
      <Row>
        <Col md="12">

       <div>

        <img className='  w-100' src={header} alt=''/>

        <div className= '  hero-sec   rounded  '>
      <span className='text-white d-inline-flex p-2'>Find Our Latest Design <br></br> Curtains For Your Living Room</span>
      <a className='d-inline-flex  btn-giant shadow-sm rounded' href='.' >Shop Now</a>
    </div>
       </div>
        </Col>
      </Row>
    </Container>
    

    
      
  )
}

export default Header

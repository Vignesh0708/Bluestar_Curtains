import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import mainlogo from '../../assets/icons/main-logo.png'
import address from '../../assets/icons/location icon.png'
import email from '../../assets/icons/email icon.png'
import  call from '../../assets/icons/call icon.png'
import { Link } from 'react-router-dom';
 
const Footerpage = () => {
  return (

       <>
       
    <footer className="bg-dark text-light py-4 ">
    <div className="container">
      <div className="row">
      <div className="col-md-4  details-container ">
            <img src={ mainlogo} alt="Blue Star Logo" className="mb-2  main-logo" />

            <div className="  d-inline-flex link mt-4 ">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={address} alt="" /> 

                </div>
            <li className=" d-inline   align-items-center p-2" >
              New No:37, Old No: 17B, Thyagaraya Gramani St, T. Nagar, Chennai,
              Tamil Nadu 600017
            </li>
            </div>

            <div className="  d-inline-flex link mt-4">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={email} alt="" /> 

                </div>
            <li className=" d-inline   align-items-center p-3" >
              <Link href="mailto:customercare@bluestar.com" className="text-light     text-decoration-none"> customercare@bluestar.com</Link>
            </li>
            </div>

            <div className="  d-flex mt-4 link ">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={call} alt="" /> 

                </div>
            <li className=" d-inline  align-items-center p-3" >
              <Link href="tel:+919080888427" className="     text-decoration-none  text-light     text-decoration-none">+91 9080888427</Link>
            </li>
            </div>
          </div>

        
        <div className="  col-md-2 mt-5  ">
          <h5 className="text-primary link">Service</h5>
          <ul className="list-unstyled  ">
            <li > <Link href="." className="text-light text-decoration-none link">Home</Link></li>
            <li className='mt-4'> <Link href="." className="text-light text-decoration-none link">New Arrivals</Link></li>
            <li className='mt-4'> <Link href="." className="text-light text-decoration-none link">Shop By Category</Link></li>
            <li className='mt-4'> <Link href="." className="text-light text-decoration-none link">Collections</Link></li>
            <li className='mt-4'> <Link href="." className="text-light text-decoration-none link">Expert Service</Link></li>
          </ul>
        </div>

         
        <div className=" mt-5 col-md-2">
          <h5 className="text-primary link">Company</h5>
          <ul className="list-unstyled">
            <li className='mt-4'>< Link href="." className="text-light text-decoration-none link">Contact Us</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Store Locator</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">About Us</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Complaints and Feedback</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Privacy and Policy</Link></li>
          </ul>
        </div>

         
        <div className=" col-md-2 mt-5">
          <h5 className="text-primary link">Our Social Media</h5>
          <ul className="list-unstyled">
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Facebook</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Instagram</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">X</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">Threads</Link></li>
            <li className='mt-4'><Link href="." className="text-light text-decoration-none link">LinkedIn</Link></li>
          </ul>
        </div>

        
        <div className="col-md-2 mt-5">
          <h5 className="text-primary link">Join a Newsletter</h5>
          <form className=''>
            <div className="mt-4">
              <input
                type="email"
                className="form-control bg-secondary text-light border-0"
                placeholder="Enter Your Email"
              />
            </div>
            <button  type="submit" className="btn btn-primary mt-4 px-4 link">Send</button>
          </form>
        </div>
      </div>
    </div>
  </footer>

  < div className="  py-2" style={{ backgroundColor: "#fff" }}>
      <p className="text-muted mb-0 ms-5">
        Copyright © 2025. All rights reserved. Designed & Developed by{" "}
        <Link
          href="mailto:Vigneshengineer07@gmail.com"
          className="text-muted"
          style={{ textDecoration: "none" }}
        >
          Vigneshengineer07@gmail.com
        </Link>
      </p>
    </div>
       </>


        
  )
}

export default Footerpage

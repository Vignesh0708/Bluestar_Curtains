import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'
import mainlogo from '../../assets/icons/main-logo.png'
import address from '../../assets/icons/location icon.png'
import email from '../../assets/icons/email icon.png'
import  call from '../../assets/icons/call icon.png'
 
const Footerpage = () => {
  return (

       

    <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
      <div className="col-md-4  details-container ">
            <img src={ mainlogo} alt="Blue Star Logo" className="mb-2 " />

            <div className="  d-inline-flex mt-4">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={address} alt="" /> 

                </div>
            <li className=" d-inline  align-items-center p-2" >
              New No:37, Old No: 17B, Thyagaraya Gramani St, T. Nagar, Chennai,
              Tamil Nadu 600017
            </li>
            </div>

            <div className="  d-inline-flex mt-4">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={email} alt="" /> 

                </div>
            <li className=" d-inline  align-items-center p-3" >
            <a href="mailto:customercare@bluestar.com" className="     text-decoration-none">
            customercare@bluestar.com</a>
            </li>
            </div>

            <div className="  d-flex mt-4 ">
                <div className=" d-flex  align-items-center ">
            <img className=" " src={call} alt="" /> 

                </div>
            <li className=" d-inline  align-items-center p-3" >
            <a href="tel:+919080888427" className="     text-decoration-none       text-decoration-none">+91 9080888427</a>
            </li>
            </div>
          </div>

        
        <div className="  col-md-2 mt-5">
          <h5 className="text-primary ">Service</h5>
          <ul className="list-unstyled  ">
            <li ><a href="." className="text-light text-decoration-none">Home</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">New Arrivals</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Shop By Category</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Collections</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Expert Service</a></li>
          </ul>
        </div>

         
        <div className=" mt-5 col-md-2">
          <h5 className="text-primary">Company</h5>
          <ul className="list-unstyled">
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Contact Us</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Store Locator</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">About Us</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Complaints and Feedback</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Privacy and Policy</a></li>
          </ul>
        </div>

         
        <div className=" col-md-2 mt-5">
          <h5 className="text-primary">Our Social Media</h5>
          <ul className="list-unstyled">
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Facebook</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Instagram</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">X</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">Threads</a></li>
            <li className='mt-4'><a href="." className="text-light text-decoration-none">LinkedIn</a></li>
          </ul>
        </div>

        
        <div className="col-md-2 mt-5">
          <h5 className="text-primary ">Join a Newsletter</h5>
          <form className=''>
            <div className="mt-4">
              <input
                type="email"
                className="form-control bg-secondary text-light border-0"
                placeholder="Enter Your Email"
              />
            </div>
            <button  type="submit" className="btn btn-primary mt-4">Send</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
        
  )
}

export default Footerpage

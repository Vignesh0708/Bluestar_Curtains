import header from '../../assets/cover img/Header image.png'
import React from 'react'
import './header.css'
 
const Header = () => {
  return (

    

       <div style={{maxHeight:"150vh"}}>

        <img style={{height:"100vh"}} className='h-auto  w-100 ' src={header} alt=''/>

        <div className= '  hero-sec   rounded  '>
      <span className= 'header-content  text-white d-inline-flex p-2'>Find Our Latest Design <br></br> Curtains For Your Living Room</span>
      <a className='d-inline-flex  btn-giant shadow-sm rounded' href='.' >Shop Now</a>
    </div>
       </div>
      
    

    
      
  )
}

export default Header

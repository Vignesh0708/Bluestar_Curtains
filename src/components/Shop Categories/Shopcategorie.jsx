import React from 'react'
import './shop.css'
import img1 from '../../assets/categories/Curtain Image-1.png'
import img2 from '../../assets/categories/Curtain Image-2.png'
import img3 from '../../assets/categories/Curtain Image-3.png'
import img4 from '../../assets/categories/Curtain Image-5.png'


const Shopcategorie = () => {
  return (
    <div className='container-fluid  text-center my-5'> 
    
    <div className=' categorie-header d-inline-block  justify-content-center mb-5 '>

      <h1 className=' text-center display-6 fw-bold '> Shop From <span className='span'>Top Categories</span></h1>
      < div className=' border border-primary  '></ div>
      
    </div>
      
    <div className='categorie-items  d-flex justify-content-evenly flex-wrap  '>
      
      <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>

       <img className='categorie-img p-2 ' src={img2} alt='' />
       <span className='fs-6 fw-bold text-center  mt-2 mb-2 '>Curtains</span>
      </a>

      
      <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>

       <img className='categorie-img p-2' src={img3} alt='' />
       <span className='fs-6  fw-bold text-center mt-2 mb-2'>Table Cloths</span>
      </a>

     
       <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>
       <img className='categorie-img p-2' src={img4} alt='' />
       <span className='fs-6  fw-bold text-center mt-2 mb-2'>Runners</span>

      </a>

       <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>
       <img className='categorie-img p-2' src={img1} alt='' />
       <span className='fs-6  fw-bold text-center mt-2 mb-2'>Throw</span>
       </a>


       <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>
       <img className='categorie-img p-2' src={img1} alt='' />
       <span className='fs-6 fw-bold text-center mt-2 mb-2'>Fitted Sheet</span>
      </a>


       <a className='row-2  mt-4 mb-4 d-flex flex-column text-decoration-none text-black' href='.'>
       <img className='categorie-img p-2' src={img1} alt='' />
       <span className='fs-6 fw-bold text-center mt-2 mb-2'>Fitted Sheet</span>

      </a>
      


      


      
       
    </div>
  </div>
  )
}

export default Shopcategorie

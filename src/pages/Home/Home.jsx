import React from 'react'
import './home.css'
import { materialdata,products } from '../../data/data'
import { Container, Row, Col,  } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cardsone from '../../components/Cards/Cardsone';
import Header from '../../components/header/Header';
import Shopcategorie from '../../components/Shop Categories/Shopcategorie'
import Sectionone from '../../components/Section/Sectionone';
// import cover3 from '../../assets/images/cover image-3.png'
 
// import  right from '../../assets/icons/angle right img.svg'
// import left from '../../assets/icons/angle left img.svg'
import Cardstwo from '../../components/Cards/Cardstwo';
import Pagination from "../../components/Pagination/Pagination";
import Benefit from '../../components/Benefits/Benefits';


const Home = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              autoplay: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              autoplay: true,
              prevArrow: false,
              nextArrow: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false,
            },
          },
        ],
      };


  return (
    <>
     
    <Header/>
    <div>
      <section className='  pb-5 pt-2'>
        <Container>

            <Row>
                <Col md="12">
                  <div className='text-black text-center    '>
                    <h1>NEW ARRIVAL</h1>
                  </div>
                </Col>
            </Row>
            {/* <Row>
              <Col md="12">
              <div className='d-flex justify-content-between my-2'>
                  <div className='d-inline-flex  swiper-button-prev shadow-sm ' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
           
                      <img src={left} className='p-3'   alt='' aria-hidden="true" />
                  </div>
              <div className='d-inline-flex swiper-button-next shadow-sm ' type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"      >
         
                      <img src={right} className='p-3'  alt='' aria-hidden="true" />
               </div>

       
     </div >
              </Col>
            </Row> */}

            <Row >
                <Col md="12" >
                <Slider {...settings} className='' >
                 {materialdata.map((material,inx)=>{
                  return(
                   <Cardsone   material={material} key={inx}/>
                  );
                 })}
                </Slider>

                </Col>
            </Row>

        </Container>
     </section>

     < Shopcategorie/>

     <section className='pb-5 pt-2  '>
      <Container >
        <Row>
          <Col md="12" className='text-center'>
          <div className=' categorie-header d-inline-block  justify-content-center mb-5 '>

      <h1 className='  text-center display-6 fw-bold'> Our <span className='span'>Popular Picks</span></h1>
      < div className=' border border-primary  '></ div>
      
    </div>
          </Col>
        </Row>
        <Row>
           <Col md="12">
           
           <Slider {...settings}  >
                 {products.map(( product,ind)=>{
                  return(
                   <Cardstwo product={product} key={ind}/>
                  );
                 })}
                </Slider>
           </Col>
         </Row>
             
      </Container>


     </section>

     <Sectionone/>
     <Carousel/>
      
    </div>
    </>
  )
}

export default Home

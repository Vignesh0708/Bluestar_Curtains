
import React from 'react';
import { Routes, Route } from 'react-router-dom';
 
import Home from './pages/Home/Home.jsx';
import Newarrival from './pages/New-arrival/Newarrival.jsx';
import Productlist from "./components/Productlist/Productlist.js";
import ImageGallery from "./components/Imagegallery/Imagegallery.js";  
import Login from './components/Buttons/Login.jsx';
import Loginform from './components/Form/Login/Loginform.jsx';
import Sign from './components/Buttons/Sign.jsx';
import Sign_up from './components/Form/sign up/Sign_up.jsx';
import Forgot_Password_form from './components/Form/Forgot_Password/Forgot_Password_form.jsx';

const products = [
  {
    id: 1,
    title: "Cabin Checks 100% Cotton Geometric Curtain",
    image: "/assets/Imagegallery/images (1).svg",
    price: 500,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Luxury Cotton Drapes",
    image: "/assets/Imagegallery/images (2).svg",
    price: 700,
    rating: 4.7,
  },
];

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<Newarrival />} />
        <Route path="/" element={<Productlist products={products} />} />
        <Route path="/product/:id" element={<ImageGallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/log-in" element={<Loginform />} />
        <Route path='/signup' element={<Sign/>}/>
        <Route path='/sign-up' element={<Sign_up/>}/>
        <Route path="/forgot-password" element={< Forgot_Password_form/>} />
      </Routes>
      

  
    </>
  );
}
export default App;


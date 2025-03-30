 
import React from 'react';
// import Loginform from './components/Form/Login/Loginform.jsx';
 
import { Routes, Route } from 'react-router-dom';
import Doublenavbar from './components/doublenavbar/Doublenavbar.jsx';
import Footerpage from './components/Footer/Footerpage.jsx';
import Home from './pages/Home/Home.jsx';
import Newarrival from './pages/New-arrival/Newarrival.jsx';
  
function App() {
  return (
    <>
      <Doublenavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<Newarrival />} />
      </Routes>
      <Customers/>
      <Footerpage />

     {/* <Loginform/> */}
    </>
  );
}
export default App;


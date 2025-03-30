import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Doublenavbar from './components/doublenavbar/Doublenavbar';
import Footerpage from './components/Footer/Footerpage';
import Home from './pages/Home/Home';
import Newarrival from './pages/New-arrival/Newarrival.jsx';
import ImageGallery from './components/Imagegallery/Imagegallery.js';
import Customers from "./components/Customers/Customers.js";
import Pay from "./components/Razorpay/pay.js"; // ✅ Razorpay Component
import Edit from "./components/Edit/Edit.js";

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
      <Edit/>
    </>
  );
}
export default App;


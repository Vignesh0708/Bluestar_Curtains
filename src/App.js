import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Doublenavbar from './components/doublenavbar/Doublenavbar';
import Footerpage from './components/Footer/Footerpage';
import Home from './pages/Home/Home';
import Newarrival from './pages/New-arrival/Newarrival.jsx';

function App() {
  return (
    <>
      <Doublenavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrival" element={<Newarrival />} />
      </Routes>
      <Footerpage />
    </>
  );
}

export default App;

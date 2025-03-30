import React from 'react'
 
import NewArrival from '../../components/NewArrival/NewArrival'
import Doublenavbar from '../../components/doublenavbar/Doublenavbar.jsx';
import Footerpage from '../../components/Footer/Footerpage.jsx';
import MainComponent from '../../components/maincomponent/MainComponent'
import Pagination from '../../components/Pagination/Pagination'
 

const Newarrival = () => {
  return (
    <div>
       <Doublenavbar/>
      <NewArrival/>
      <MainComponent/>
      <Pagination/>
       <Footerpage/>
    </div>
  )
}

export default Newarrival

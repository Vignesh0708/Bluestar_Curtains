import React from 'react'
 
import NewArrival from '../../components/NewArrival/NewArrival'
import Filter from '../../components/Filter/Filter'  
import Productlist from '../../components/Productlist/Productlist'
 

const Newarrival = () => {
  return (
    <div>
       
      <NewArrival/>
      <Filter/>
      <Productlist/>
       
    </div>
  )
}

export default Newarrival

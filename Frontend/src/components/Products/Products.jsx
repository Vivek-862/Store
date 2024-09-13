import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Material from '../Material/Material'
import list from "../../list.json"
console.log(list);


const Products = () => {
  return (
    <> 
    <Navbar/>
    <div className='min-h-screen'>
    <Material/>
    </div>
    
    <Footer/>

    </>
  )
}

export default Products
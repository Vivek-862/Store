import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Veg from '../Veg/Veg'

const Vegetables = () => {
  return (
    <> 
    <Navbar/>
    <div className='min-h-screen'>
    <Veg/>
    </div>
    <Footer/>

    </>
  )
}

export default Vegetables
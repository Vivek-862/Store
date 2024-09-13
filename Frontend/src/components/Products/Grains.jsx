import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Grain from '../Grain/Grain'



const Grains = () => {
  return (
    <> 
    <Navbar/>
    <div className='min-h-screen'>
    <Grain/>
    </div>
   <Footer/>

    </>
  )
}

export default Grains
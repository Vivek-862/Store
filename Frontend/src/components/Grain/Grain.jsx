import React from 'react'
import list from "../../list.json"
import Cards from "../Cards/Cards"
import {Link} from "react-router-dom"

const Grain = () => {
    const filterData= list.filter((data)=> data.category == "grains");
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-10 md:mt-20'>
                <h1 className='text-2xl font-semibold md:text-4xl'>All types of grains are Available <span className='text-red-300'>Here : )</span></h1>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {filterData.map((item)=>(
            <Cards item={item} key={item.id} />

            ))}

            </div>
            <Link to="/">
            <button className="bg-red-300 py-2 px-4" >Go to Home</button>

            </Link>
        </div>
    </>
  )
}

export default Grain
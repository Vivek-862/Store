import React from 'react'

const Cards = ( {item} ) => {
  if (!item) {
    return <p>No data available</p>;  // Handle cases where item is undefined
  }
  console.log(item);

  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
   <figure>
    <img
      src={item.image}
      alt={item.name} />
    </figure>
    <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-success">new</div>
    </h2>
    <p>{item.title }</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs.{item.price} per. kg </div>
      <div className="hover:bg-red-200 badge badge-outline">Buy Now</div>
    </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Cards
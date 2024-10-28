import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Grain = () => {
   const [product, setProduct] = useState([]); // Initialize as an empty array

   useEffect(() => {
      const getProduct = async () => {
         try {
            const res = await axios.get("http://localhost:4001/product");
            console.log(res.data);
            setProduct(res.data); 
         } catch (error) {
            console.log(error);
         }
      };
      getProduct();
   }, []);

   return (
      <div className="max-w-screen-2xl container mx-auto md:px-20">
         <div className="mt-10 md:mt-20">
            <h1 className="text-2xl font-semibold md:text-4xl">
               All types of grains are Available <span className="text-red-300">Here : )</span>
            </h1>
         </div>
         <div className="mt-12 grid grid-cols-1 md:grid-cols-4 w-auto">
            {product.length > 0 ? (
               product.map((item) => (
                  <Cards item={item} key={item.id} />
               ))
            ) : (
               <p>Loading products...</p>
            )}
         </div>
         <Link to="/">
            <button className="bg-red-300 py-2 px-4">Go to Home</button>
         </Link>
      </div>
   );
};

export default Grain;

import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from "../../../src/list.json"
import Cards from "../Cards/Cards"

const Product = () => {

  const [product, setProduct] = useState([]); // Initialize as an empty array

  useEffect(() => {
     const getProduct = async () => {
        try {
           const res = await axios.get("http://localhost:4001/product");
           console.log(res.data);
           setProduct(res.data.filter((data)=> data.category == "veg" || data.category == "grains")); 
        } catch (error) {
           console.log(error);
        }
     };
     getProduct();
  }, []);
    // const filterData= list.filter((data)=> data.category == "veg" || data.category == "grains");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
 
  return (
    <>
    <div className='text-start max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Best Quality Products </h1>
        <p>Elevating farm-to-table dining.</p>
        </div>
  
    <div  className="slider-container">
    <Slider {...settings}>
        {/* "props" ais way to pass data from parent component to child component,
        props allows, components to be dynamic and flexible, once they receive different data and render accordingly. */}
        {product.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Product
import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaArrowRight } from "react-icons/fa";
import GymAccessories from '../components/GymAccessories';
import GymAccessories2 from '../components/GymAccessories2';

const GymAccessoriesAllProducts = () => {
    return (
        <div>
             <div className=' py-10 my-0'>
                <h1 className='font-bold text-4xl flex items-center gap-5 ml-10'>GYM ACCESSORIES <FaArrowRight className='text-3xl' /> </h1>
                <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-4  gap-3 ">
                
                    {GymAccessories2.map(item => {
                    return <ProductCard product={item} />
                    })}
                </div>
                <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-4  gap-3 ">
                    {GymAccessories.map(item => {
                    return <ProductCard product={item} />
                    })}
                </div>
              </div>
        </div>
      )
}
export default GymAccessoriesAllProducts
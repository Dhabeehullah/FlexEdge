import React from 'react'
import ProductCard from '../components/ProductCard'
import { FaArrowRight } from "react-icons/fa";
import SupplementDetails1 from '../components/SupplementDetails1';
import SupplementDetails2 from '../components/SupplementDetails2';



const SupplementsForAllProducts = () => {
    
  return (
    <div>
         <div className=' py-10 my-0'>
            <h1 className='font-bold text-4xl flex items-center gap-5 ml-10'>PROTEIN <FaArrowRight className='text-3xl' /> </h1>
            <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-4  gap-3 ">
            
                {SupplementDetails2.map(item => {
                return <ProductCard product={item} />
                })}
            </div>
            <div className="max-w-screen-xl mx-auto mt-5 shadow-boxxshad p-10 grid grid-cols-4  gap-3 ">
                {SupplementDetails1.map(item => {
                return <ProductCard product={item} />
                })}
            </div>
          </div>
    </div>
  )
}

export default SupplementsForAllProducts
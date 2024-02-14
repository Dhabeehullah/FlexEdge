import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const ProductHeader = (props) => {
  return (
  <div className='flex justify-between mx-12 my-2 mb-1 mt-5'>
    <p className='font-bold cursor-pointer'>{props.header}</p>
    <span className='flex items-center gap-2 cursor-pointer hover:scale-110 duration-300'>VIEW PRODUCTS<BsArrowRight /></span>
  </div>
  )
}

export default ProductHeader
import React,{useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Subtitle = () => {
  const [childs,setChilds]=useState('hidden')
  const allProducts= () => {
    setChilds('block')
  }
  


  return (
    <div className='flex text-slate-800 justify-evenly  font-titleFont mt-1 mb-2 pr-2 pl-2'>
        <div onMouseOver={allProducts}  className='cursor-pointer text-base hover:bg-gray-200 p-2 rounded-xl flex gap-1 items-center'>
          <div>All products</div>
          <IoIosArrowDown className='hover:animate-spin' />
        </div>
        <div className={`${childs} absolute left-0 bg-white`}>
          
        </div>

        <div className='nav-link'>OFFERS</div>
        <div className='nav-link flex items-center gap-1'>Stores<IoIosArrowDown /></div>
        <div className='nav-link'>Our Story</div>
        <div className='nav-link'>Authencity</div>
    </div>
  )
}

export default Subtitle
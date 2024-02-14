import React from 'react'
import {MdOutlineClose} from "react-icons/md";
import {HiOutlineArrowLeft} from "react-icons/hi";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/flexedgeSlice';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.flexedge.productData)
  const [baseQty,setbaseQty] =useState(0)

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
          <h2 className='font-titleFont text-2xl'>shopping cart</h2>
      </div>
      <div >
          {productData.map((item) => {
              
              return( <div key={item.id} className='flex items-center justify-between gap-6 mt-6'>
               
                <div className='flex items-center gap-2'>
                    <MdOutlineClose onClick={() =>
                       dispatch(deleteItem(item.id)) &
                       toast.error(`${item.title.toLowerCase()} is removed`)
                         
                       } 
                       className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                    <img className='w-32 h-32 object-cover' src={item.image} alt="image" />
                </div>
                <h2 className='w-52'>{item.title}</h2>
                <p className='w-10'>${item.price}</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button onClick={() => 
                  dispatch(
                    decrementQuantity({
                      id:item.id,
                      title:item.title,
                      image:item.image,
                      price:item.price,
                      quantity:1,
                    })
                  )
                  } className="border h-5 font-normal text-lg flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 active:bg-black">
                  -
                  </button>
                  <span>
                  {item.quantity}
                  </span>
                  <button onClick={() =>
                  dispatch(
                    incrementQuantity({
                      id:item.id,
                      title:item.title,
                      image:item.image,
                      price:item.price,
                      quantity:1,
                    })
                  )
                  } 
                  className="border h-5 font-normal text-lg flex items-center
                  justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                  duration-300 ☐ active:bg-black">
                  +
                  </button>
                </div>
                <p>${item.price*item.quantity}</p>
              </div>
          )})}
      </div>
      <div className='flex flex-col gap-3 justify-center mt-10'>    
        <p onClick={() => 
        dispatch(resetCart()) & toast.error("cart is empty")
        }
        className='bg-red-500 px-4 w-fit text-white cursor-pointer'>reset all</p>
        <Link to="/">
          <p className='flex items-center gap-2 text-slate-500 cursor-pointer hover:text-black duration-300'><HiOutlineArrowLeft /><span>go to shopping</span></p>
        </Link>
        
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default CartItem
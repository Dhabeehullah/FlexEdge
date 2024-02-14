import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/flexedgeSlice';
import { ToastContainer,toast } from 'react-toastify';

const ProductCard = ({product}) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  const id_=product.title;
  const idString= (id_) => {
    return String(id_).toLowerCase().split(" ").join("");
  }
  const root_id=idString(id_)

  const handleDetails = () => {
    navigate(`/product/${root_id}`,{
    state:{
        item:product,
    }
  } )
  }
  
  return (
    
        <div className="flex flex-col justify-between group relative border-[1px] border-neutral-400  duration-300" key={product.id}>
        <div className="w-full h-96 cursor-pointer overflow-hidden">
        <div onClick={handleDetails} className="flex justify-center items-center w-full h-full cursor-pointer overflow-hidden">
            <img
            className="max-w-64 max-h-80 object-cover object-center group-hover:scale-110  duration-500"
            src={product.image}
            alt="productImg"
            />
        </div>
        </div>
        <div className="w-full h-24 border-[1px] px-2 py-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className=" font-titleFont text-base ">
                     {product.title.substring(0,18)}
                       <span>...</span>
                    </h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
                    <div className="flex gap-2  items-center transform group-hover:translate-x-24  transition-transform duration-500">
                        <p className="line-through  text-gray-500">${product.oldPrice} </p>
                        <p className="font-semibold">${product.price}</p>
                    </div>
                    <p onClick={() => dispatch(
                        addToCart({
                            id:product.id,
                            title:product.title,
                            image:product.image,
                            price:product.price,
                            quantity:1,
                        })) & toast.success(`${product.title.toLowerCase()} is added`)
                        } 
                    className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex
                    items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0
                    transition-transform cursor-pointer duration-500">
                    add to cart{" "}
                    <span>
                      <BsArrowRight  />
                    </span>
                    </p>
                </div>
            </div>
            <div>
                <p className='text-slate-500'>{product.category}</p>
            </div>
            <div className='absolute top-0 right-0'>
                {product.isNew && (
                    <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>OFFER</p>
                    )}
                
            </div>
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
)};

export default ProductCard

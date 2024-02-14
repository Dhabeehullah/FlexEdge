import React from 'react'
import { websiteLogo ,userLogo} from '../assets/index'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Header = () => {
  const productData= useSelector((state) => state.flexedge.productData);
  const userInfo=useSelector((state) => state.flexedge.userInfo)

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div >
          <Link to="/">
              <img className="w-36 h-20 p-1" src={websiteLogo} alt="logo" />
          </Link>

         </div>
        <div className="flex items-center gap-4 md:gap-16">
          <ul className="flex items-center gap-4 md:gap-12">
            <Link to="/"><li className='text-sm md:text-lg text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li></Link>
            <Link to="/gymaccessories"><li className='text-sm md:text-lg text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Equipments</li></Link>
            <Link to="supplements"><li className='text-sm md:text-lg text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Supplements</li></Link>
          </ul>
          <div className='relative cursor-pointer'>
            <Link to="/cart">
               <HiOutlineShoppingBag className='w-8 h-8' />
            </Link>
            <span className='absolute top-3 left-3 text-xs'>{productData.length}</span>
          </div>
          <Link to="/login">
             <img className='w-8 h-8 cursor-pointer rounded-2xl'  src={userInfo ? userInfo.image : userLogo  } alt="userlogo" />
          </Link>
          {
            userInfo && <p className='text-base hidden md:block font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
          }
         
        </div>
      </div>
    </div>
  )
}



export default Header

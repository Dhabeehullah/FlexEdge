import React, { useState } from 'react'
import ProductCard from './ProductCard';
import SupplementDetails1 from './SupplementDetails1';
import { BsArrowRight } from "react-icons/bs";
import ProductHeader from './ProductHeader';
import GymAccessories from './GymAccessories';
import GymOutfits from './GymOutfits';
import { homebottombanner,homebottombanner2 } from '../assets/index';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
  const productheader={
    first:"PROTEIN ZONE",
    second:"GYM ACCESSORIES",
    third:"Gym Outfits"
  }

  return (
    <div>
    <div className=" mt-20 mr-8 ml-8 ">
        <div className="flex flex-col items-center  gap-4 mb-20 ">
        
            <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center"> Just Grab It</h1>
            <span className="w-20 h-[3px] ☐ bg-black"></span>
            
            <p className="max-w-[700px] text-gray-600 text-center">
        
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, quos fugit inventore, cumque quae corporis ratione tenetur eos voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis asperiores repudiandae assumenda quidem.
            
            </p>
        </div>
        <div className='shadow-boxxshad py-10 my-14'>
          <Link to="/supplements">
            <ProductHeader header={productheader.first} />
          </Link>


          <div className="max-w-screen-xl mx-auto mt-5 px-10 grid grid-cols-4  gap-3 ">
            {SupplementDetails1.map(item => {
              return <ProductCard product={item} />
            })}
          </div>
        </div>

        <div className='shadow-boxxshad py-5 my-14'>
          <Link to="/gymaccessories">
               <ProductHeader header={productheader.second} />
          </Link>

          <div className="max-w-screen-xl py-5 mt-1 mx-auto  px-10 grid grid-cols-4  gap-3 ">
            {GymAccessories.map(item => {
              return <ProductCard product={item} />
            })}
        </div>

        </div>
        
        <Link to="/gymoutfits"><img className='min-w-full min-h-96' src={homebottombanner} alt="banner" /> </Link> 
        <Link to="/gymoutfits"><img className=' mt-16' src={homebottombanner2} alt="banner" /></Link>
        
        <div className='shadow-boxxshad py-5 my-14'>
          <Link to="/gymoutfits">
              <ProductHeader header={productheader.third} />
          </Link>

         <div className="max-w-screen-xl py-5 mt-1 mx-auto  px-10 grid grid-cols-4  gap-6 ">
            {GymOutfits.map(item => {
              return <ProductCard product={item} />
            })}
          </div>

        </div>
        
        
    </div>
    
    </div>
);
};
  

export default HomeProducts
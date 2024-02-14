import React,{useState} from 'react'
import { FaArrowRight,  FaArrowLeft  } from "react-icons/fa";
import { topbanner1,topbanner2,topbanner3,topbanner4 } from '../assets/index';
import { Link } from 'react-router-dom';


const CarouselSlide = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [topbanner1,topbanner2,topbanner3,topbanner4];
  
  
 
  const prevSlide= () => {
    setCurrentSlide (currentSlide === 0?3: (prev)=>prev-1);
  }
  const nextSlide= () => {
    setCurrentSlide (currentSlide === 3?0: (prev)=>prev+1);
}
return(
  <div className="mt-2  w-full h-full overflow-x-hidden  overflow-y-hidden">
      <div className="w-screen h-[650px] relative">
      <Link to="/gymaccessories">
        <div
          style={{ transform: `translateX(-${currentSlide*100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover object-center"
            src={data[3]}
            alt="ImgOne"
            Loading="priority"
          />
          <img
            className="w-screen h-full object-cover object-center"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full obiect-cover object-center"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full obiect-cover object-center"
            src={data[0]}
            alt="ImageFour"
          />
        </div>
      </Link>
      
     
      <div className="absolute bottom-6 left-0 right-0 mx-auto flex gap-10 w-fit ">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px]  border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700
          hover: text-white  active:bg-gray-900 duration-300">
            <FaArrowLeft />
          </div>
          
          <div  onClick={nextSlide}  className="w-14 h-12 border-[1px]  border-gray-700 flex items-center
          justify-center hover:cursor-pointer  hover:bg-gray-700 hover: text-white
          active:bg-gray-900 duration-300">
            <FaArrowRight />
          </div>
      </div>
      </div>
      
  </div>
  
);}

export default CarouselSlide
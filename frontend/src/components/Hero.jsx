import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => { 
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* hero left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py10'>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
            </div>
            <h1 className='prata-regular text-3x1 sm:py-3 lg:text-5x1 leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
               
                        <NavLink
                          to="/collection"
                        >
                           <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        </NavLink>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
        </div>
     </div>
     {/* Hero right side */} 
     <img className='w-full sm:w-1/2' src={assets.banner} alt="" />
    </div>
  )
}

export default Hero
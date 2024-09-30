import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const HeroSection = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-xl px-6 md:px-10'>

        {/* ......left side........... */}
        <div className='md:w-1/2 flex flex-col justify-center items-start gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-white font-medium text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br />With Trusted Doctors</p>
            <div className='flex flex-col lg:flex-row gap-3 text-sm text-light text-white'>
                <img className='w-40 h-20' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block md:hidden' /> schedule your appointment hassle-free. </p>
            </div>
           <a  href="#speciality" className='flex items-center gap-3 bg-white rounded-full px-6 py-3 text-sm text-gray-600  m-auto  md:m-0 hover:scale-105 transition-all duration-300'>Book Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
        </div>

        {/* .........right side............... */}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div>
    </div>
    </>
  )
}

export default HeroSection
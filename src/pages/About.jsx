import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

  <div  className='text-center text-2xl text-gray-500 '>ABOUT<span className='px-2 text-gray-700 font-medium'>US</span> </div>

  <div className='my-10 flex flex-col md:flex-row gap-12'>
    <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
    <div className='flex flex-col justify-center gap-4 md:max-w-2/4 text-sm text-gray-600'>
      <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
      <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
      <b className='text-gray-800'>Our Vision</b>
      <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it</p>
    </div>
  </div>
   
  <div className='my-4 text-xl'>
    <p>WHY <span className='text-gry-700 font-medium'>CHOOSE US</span></p>
  </div>
    
    <div className='flex flex-col md:flex-row mb-15'>
     <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600'>
      <b>Efficiency:</b>
      <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
     </div>
     <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600'>
     <b>Convenience:</b>
     <p>Access to a network of trusted healthcare professionals in your area.</p>
     </div>
     <div className='flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all  duration-300 text-gray-600'>
     <b>Personalization:</b>
     <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
     </div>
    </div>

    </div>
  )
}

export default About
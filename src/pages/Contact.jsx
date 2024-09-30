import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <>
    <div>

<div className='text-center text-gray-500'>
  <p>CONTACT <span className='text-gray-600 font-medium'>US</span></p>
</div>

<div className='my-10 flex flex-col md:flex-row gap-12 mb-20 text-sm justify-center'>
  <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

  <div className='flex flex-col justify-center items-start gap-6'>
    <p className='text-lg font-semibold text-gray-700'>OUR OFFICE</p>
    <p className='text-gray-500'>54709 Willms Station <br />Sute 350, Washington, USA</p>
    <p className='text-gray-500'>Tel:+91-8154857962 <br />Email: yadavshreeniwash22@gmail.com</p>
    <p className='text-lg font-semibold text-gray-700'>Careers at PRESCRIPTO</p>
    <p className='text-gray-500'>learn more about our teams and job openings.</p>
    <button className='text-sm border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
  </div>
</div>


    </div>
    
    
    </>
  )
}

export default Contact
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <>
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* .............left section........... */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full text-gray-600 leading-6 md:w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>


        {/* .............center section........... */}
        <div >
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col text-gray-600 gap-2 '>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* .............right section........... */}
        <div>
            <p  className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600 gap-2 '>
                <li>+91-8154857962</li>
                <li>yadavshreeniwash22@gmail.com</li>
            </ul>
        </div>


    </div>

    {/* .....................copy right text........... */}
    <div>
        <hr />
        <p className='py-5 text-sm  text-center'>Copyright 2024@ Prescripto. All Right Reserved</p>
    </div>
    </div>
    
    
    
    
    </>
  )
}

export default Footer
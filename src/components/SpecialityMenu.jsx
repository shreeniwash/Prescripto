import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from "react-router-dom"

const SpecialityMenu = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-4 py-16 text-gray-800' id='speciality' >
        <h1 className='text-3xl font-medium'>Find By Speciality</h1>
        <p className='w-1/2  text-center text-base'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex gap-4 sm:justify-center w-full pt-4 overflow-scroll'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col flex-shrink-0 text-xs items-center cursor-pointer hover:translate-y-[-10px] transition-all duration-300' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
    
    </>
  )
}

export default SpecialityMenu
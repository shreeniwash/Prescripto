import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyApponitments = () => {

  const {doctors} =useContext(AppContext)
  return (
    <>
    
    <div>
     <p className='pb-3 mt-12 text-zinc-700 border-b font-medium'>My appointments</p>
     <div>
      {
        doctors.slice(0,3).map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] sm:flex sm:gap-6 gap-4 py-2 border-b ' key={index}>
             <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt="" />
             </div>
             <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='text-zinc-700 mt-1 font-medium'>Address:</p>
              <p className='text-sm '>{item.address.line1}</p>
              <p className='text-sm '>{item.address.line2}</p>
              <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time: <span>25, july, 2024 | 8:30 PM</span></span></p>
             </div>
             <div></div>
             <div className='flex flex-col gap-2 justify-end '>
              <button className='text-stone-500 text-sm text-center sm:max-w-48 py-2 border rounded  hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button className='text-stone-500 text-sm text-center sm:max-w-48 px-4 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
             </div>
          </div>
        ))
      }
     </div>
    </div>
    </>
  )
}

export default MyApponitments
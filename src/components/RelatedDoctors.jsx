import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality, docID}) => {

    const {doctors}= useContext(AppContext);
    const navigate = useNavigate()
    const [realDoc, setRealDoc]=useState([]);

    useEffect(()=>{
        if(doctors.length >0 && speciality){
            const doctorsData= doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docID)
            setRealDoc(doctorsData)
        }

    },[doctors,docID,speciality])
    
  return (
    <>
     <div className='flex flex-col items-center gap-4 text-gray-900 my-10 '>
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto px-3 gap-4  sm:px-0 gap-y-6 pt-4 '>
            {realDoc.slice(0,5).map((item,index)=>(
           <div key={index} onClick={()=>{navigate(`/appointments/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-300'>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                        <p>Available</p>
                </div>
                <p className='text-lg text-gray-900 font-medium'>{item.name}</p>
                <p className='text-sm text-gray-600 font-medium'>{item.speciality}</p>
            </div>
           </div>
            ))}
        </div>
        <div>
            <button onClick={()=>{navigate('/doctors'); window.scrollTo({top:0,behavior:'smooth'})}} className='bg-blue-100 text-gray-600 px-12 py-3 rounded-full mt-10 '>More</button>
        </div>
    </div>
    
    
    
    </>
  )
}

export default RelatedDoctors
// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets_frontend/assets';

// const Appointments = () => {

//   const {docId}= useParams();
//   const {doctors,currencySymbol}= useContext(AppContext)
//   const [docInfo, setDocInfo]=useState(null)

//   const [DocSlots, setDocSlots]=useState([])
//   const [SlotIndex, setSlotIndex]=useState(0)
//   const [slotTime, setSlotTime]=useState('');

//   const getAvailableSlots= async ()=>{
//     setDocSlots([])
//   }
//   let today=new Date()
//   for(let i=0; i< 7; i++){
//     //getting date with index
//     let currentdate= new Date(today);
//     currentdate.setDate(today.getDate()+1)

//     //setting end time of the date with index
//     let endTime= new Date();
//     endTime.setDate(today.getDate()+i)
//    endTime.setHours(21,0,0,0)

//    //settinf hours
//    if(today.getDate()=== currentdate.getDate()){
//     currentdate.setHours(currentdate.getHours() >10 ? currentdate.getHours()+1:10)
//     currentdate.setMinutes(currentdate.getMinutes()>30 ? 30:0)
//    }else{
//     currentdate.setHours(10)
//     currentdate.getMinutes(0)
//    }

//    let timeSlots=[]
//    while(currentdate < endTime){
//     let formattedTime= currentdate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})

//     // add slot to array
//     timeSlots.push({
//       datetime: new Date(currentdate),
//       time: formattedTime,
//     })
//    //increament current itme by 30 minutes
//    currentdate.setMinutes(currentdate.getMinutes()+30)
//    }
//     setDocSlots(prev =>([...prev, timeSlots]))
//   }

//   const fetchDocInfo=async ()=>{
//     const docInfo=doctors.find(doc=>doc._id === docId)
//     setDocInfo(docInfo)
//     console.log(docInfo)
//   } 

//   useEffect(()=>{
//     fetchDocInfo()
//   },[doctors, docId])

// useEffect(()=>{
//  if(docInfo){
//   getAvailableSlots();
//  }
// },[docInfo])

// useEffect(()=>{
// console.log(DocSlots)
// },[DocSlots])

//   return docInfo && (
//     <>
//     <div className=''>

//       {/* doctor details */}
//       <div className='flex flex-col sm:flex-row gap-4'>
//         <div>
//           <img className='bg-primary sm:max-w-72 rounded-lg'  src={docInfo.image} alt={docInfo.name} />
//         </div>

//         <div className='flex-1 border border-gray-400 p-8 py-7 rounded-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'> 
//           {/* ...................doc info............. */}
//           <p className='flex items-center gap-2 text-2xl text-gray-900 font-medium  '>{docInfo.name}
//           <img className='w-5' src={assets.verified_icon} alt="" />
//           </p>
//           <div className='flex  items-center gap-2 mt-1 text-sm text-gray-600'>
//           <p>{docInfo.degree} - {docInfo.speciality}</p>
//           <button className='py-0.5 px-2 border rounded-full'>{docInfo.experience}</button>
//         </div>

//         {/* ............. doctor about....................... */}
//         <div>
//           <p className='flex  items-center gap-1 text-sm mt-3 font-medium text-gray-900'>About <img src={assets.info_icon} alt="" /></p>
//           <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
//         </div>

//         <p className='text-gray-500 font-medium mt-4'>
//           Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
//         </p>
//         </div>
        



//       </div>
//     </div>
  
//     </>
//   )
// }

// export default Appointments

import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
 
  const weekofDays=['SUN','MON','TUE','WED','THUR','FRI','SAT']
  const getAvailableSlots = async () => {
    let today = new Date();
    const slots = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }
    setDocSlots(slots);
  };

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]); // Only run if docInfo is available

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <>
      <div className=''>
        {/* doctor details */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-primary sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
          </div>

          <div className='flex-1 border border-gray-400 p-8 py-7 rounded-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {/* ...................doc info............. */}
            <p className='flex items-center gap-2 text-2xl text-gray-900 font-medium'>
              {docInfo.name}
              <img className='w-5' src={assets.verified_icon} alt="Verified" />
            </p>
            <div className='flex items-center gap-2 mt-1 text-sm text-gray-600'>
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border rounded-full'>{docInfo.experience} years</button>
            </div>

            {/* ............. doctor about....................... */}
            <div>
              <p className='flex items-center gap-1 text-sm mt-3 font-medium text-gray-900'>
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>

            <p className='text-gray-500 font-medium mt-4'>
              Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

   {/* .......Booking slots........................ */}
   <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
    <p>Booking slots</p>
    <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
      {
        docSlots.length && docSlots.map((item,index)=>(
          <div key={index} onClick={()=>setSlotIndex(index)} className={`text-center min-w-16 rounded-full py-6 cursor-pointer ${slotIndex===index ? 'bg-primary text-white' : 'border border-gray-200'}`}>
            <p>{item[0] && weekofDays[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
          </div>
        ))
      }
    </div>

<div className='flex items-center gap-3  w-full mt-4 overflow-x-scroll'>
 {docSlots.length && docSlots[slotIndex].map((item, index)=>(
  <p onClick={()=> setSlotTime(item.time)} key={index} className={` text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time=== slotTime? 'bg-primary text-white ': 'text-gray-400 border border-gray-200'} `}>{item.time.toLowerCase()}</p>
 ))}
</div>

<button className='bg-primary text-white px-14 py-3 my-6 rounded-full text-sm font-light'> Book a appointment</button>

   </div>
   <RelatedDoctors docID={docId} speciality={docInfo.speciality} />
      </div>
    </>
  );
};

export default Appointments;

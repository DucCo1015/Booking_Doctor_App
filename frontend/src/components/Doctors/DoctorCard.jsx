import React from 'react'
import startIcon from '../../assets/images/Star.png'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const DoctorCard = ({doctor}) => {
  
  const { name,specialty,avgRating,totalRating,photo,totalPatients,hospital} = doctor;
  return (
    <div className='p-3 lg:p-5'>
      <div>
         <img src={photo} className='w-full' alt=''/>                
      </div>
      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9text-headingColor font-[700] mt-3 lg:mt-5'>
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
         <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text-[12px] leading-7 font-semibold rounded'>
           { specialty}             
         </span> 
          <div className='flex items-center gap-[6px]'>
             <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
               <img src={startIcon} alt="" /> {avgRating}             
             </span>

             <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[700] text-headingColor'>
               ({totalRating})          
             </span>               
          </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
         <div>
            <h2 className='text-[26px] leading-7 text-headingColor font-[700]  text-center'>Book Appointment</h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
            World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.            
            </p>

            <Link to ='/doctors' className ='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
            </Link>             
         </div>                
      </div>
    </div>
  )
}

export default DoctorCard
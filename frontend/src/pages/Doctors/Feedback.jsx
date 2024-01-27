import React,{useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formatDate } from '../../utils/formatDate'
import {AiFillStar} from 'react-icons/ai'
import FeedBackFrom from './FeedBackFrom'


const Feedback = () => {

  const [showFeedBackFrom, setShowFeedbackFrom] = useState(false)
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img  className= 'w-full' src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Ali ahmed
              </h5>
              <p className="text-[14px] leading-6 text-text-textColor">
                {formatDate('06-12-2023')}
              </p>
              <p className='text-para mt-3 font-semibold text-[15px]'>
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) =>(
              <AiFillStar  key = {index} color='#0067FF'/>
            ))}
          </div>
        </div>
      </div>

      {!showFeedBackFrom && <div className='text-center'>
        <button className='btn' onClick={() => setShowFeedbackFrom(true)}>Give FeedBack</button>
      </div>}
      {showFeedBackFrom && <FeedBackFrom/>}
    </div>
  )
}

export default Feedback
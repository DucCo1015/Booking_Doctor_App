import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'

const FeedBackFrom = () => {

  const [hover, setHover]  = useState(0)
  const [rating, setRating]  = useState(0)
  const [reviewText, setReviewText] = useState('')


  const handleSubmitFeedback = async e  =>{
    e.preventDefault();
  } 


  return (
    <div>
      <form action="">
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
              How would you late the overall experience
            </h3>

            <div>
            {[...Array(5).keys()].map((_, index) =>{
              index += 1;

              return (

                <button
                 key={index}
                 type='button'
                 className={`${index <= ((rating && hover) || hover)
                   ? "text-yellowColor":"text-gray-400"} 
                   bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                 onClick={() => setRating(index)}
                 onMouseLeave={() => setHover(index)}
                 onMouseEnter={() => {
                  setHover(0);
                  setRating(0);
                 }}
                >
                  <span> <AiFillStar/> </span>
                </button>
              )
          
            })}

            </div>

            <div className="mt-30px">
              <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                Share your feedback or suggestions
              </h3>
              <textarea className='border border-none border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md' rows='5' placeholder='Write your message'
              onChange={(e) => setReviewText(e.target.value)}>
              </textarea>
            </div>
        </div>
        <button type='submit' className='btn' onClick={handleSubmitFeedback}>Submit feedback</button>
      </form>
    </div>
  )
}

export default FeedBackFrom
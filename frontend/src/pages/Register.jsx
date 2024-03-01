import React, {useState} from 'react'
import singupImg from '../assets/images/signup.gif'
import { Link, useNavigate} from 'react-router-dom'
import uploadImageCloudinary from '../utils/uploadClouding.js'
import { toast } from 'react-toastify'
import HashLoader from 'react-spinners/HashLoader'
import { BASE_URL } from '../../config.js'

const Register = () => {

     const navigate = useNavigate();
     const [selectFile, setSelectFile] = useState('')
     const [previewURL, serPreviewURL] = useState('')
     const [loading, setLoading] = useState(false)
     const [fromData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectFile,
    gender: '',
    role: 'doctor'
  })

  
  const handleInputData = (e) => {
    setFormData({...fromData, [e.target.name]: e.target.value})
  } 
  
  const handleFileInputChange = async (e) => {
    const file  = e.target.files[0];
    const data = await uploadImageCloudinary(file)
    
    serPreviewURL(data.url)
    setSelectFile(data.url)
    setFormData({...fromData, photo: data.url})
    //later we will use cloudinary to upload images

  }

  const handleSubmit = async (e) => {
    e.preventDefault();   
    setLoading(true) 
    
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fromData)
      })

      const {message} = await res.json()

      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message)
      navigate('/login')


    } catch (err) {
     toast.error(err.message)
     setLoading(false)
    }
  }
  
  return (
    <section className='px-5 xl:px-0'>
       <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block bg-primaryColor rounded-1">
               <figure className='rounded-l-lg'>
                  <img src={singupImg} alt="" className='w-full rounded-l-lg'/>       
               </figure>        
            </div>
            <div className="rounded-l-lg lg:pl-16 py-10">
                  <h3 className="text-headingColor text-[22px] leading-9 font-semibold mb-10">Create an <span className='text-primaryColor'>account</span></h3>

                  <form onSubmit={handleSubmit}>
                         <div className="mb-5">
                         <input type="text" placeholder='Full name' name='name' 
                         value={fromData.name}
                         onChange={handleInputData}         
                         className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-text-Color rounded-md cursor-pointer'
                         required/>
                         </div> 

                         <div className="mb-5">
                           <input type="email" placeholder='Enter your email' name='email' 
                             value={fromData.email}
                             onChange={handleInputData}         
                            className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-text-Color rounded-md cursor-pointer'
                            required/>
                         </div>   

                         <div className="mb-5">
                           <input type="password" placeholder='Enter your password' name='password'  
                            value={fromData.password}
                            onChange={handleInputData}         
                            className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-text-Color rounded-md cursor-pointer'
                            required/>
                         </div> 
                         

                    <div className="mt-5 flex items-center justify-between">
                    <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                            Are you a: 
                            <select name="role" className='text-textColor font-semibold text-[15px] leading-7 py-3 focus:outline-none'>
                              <option value="patient">Patient</option>
                              <option value="doctor">Doctor</option>
                                             
                            </select>                      
                         </label>

                         <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
                            Are you a: 
                            <select name="gender"
                            value={fromData.gender}
                            onChange={handleInputData} 
                             className='text-textColor font-semibold text-[15px] leading-7 py-3 focus:outline-none'>
                              <option value="">Select</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>                   
                            </select>                      
                         </label>
                    </div>

                    <div className="mb-5 flex items-center gap-3 ">
                         { selectFile &&
                          <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-between'>
                            <img src={previewURL} alt="" className='w-full rounded-full'/>                      
                         </figure>}
                         <div className='relative w-[130px] h-[50px] '>
                         <input type="file" name='photo' id='customFile' accept='.jpg, .png' 
                         className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                         onChange={handleFileInputChange}
                         />
                         <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]  py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>  
                         </div>             
                    </div>

                    <div className="mt-7">
                         <button 
                         disabled = {loading && true}
                         className='w-full bg-primaryColor text-white text-[18px] leading[-30px] rounded-lg px-4 py-3' type='submit'>
                          { loading ? <HashLoader size={35} color='#fff'/> : 'Signup' }
                          </button>
                     </div>

                         <p className="mt-5 text-textColor text-center">
                         Already have a account? 
                         <Link to='/login' className='text-primaryColor font-medium ml-1'>Login</Link>
                          </p>
                  </form>      
            </div>               
         </div>               
       </div>                   
    </section>
  )
}

export default Register
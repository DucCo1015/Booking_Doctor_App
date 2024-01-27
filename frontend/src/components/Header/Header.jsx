import React, { useContext } from 'react'
import logo from '../../assets/images/logo.png'
import {NavLink, Link} from 'react-router-dom'
import userImg from '../../assets/images/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'
import { useEffect, useRef } from 'react'
import {authContext} from '../../context/AuthContext'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {

const headerRef = useRef(null);
const menuRef = useRef(null);
 
const {user, token, role} = useContext(authContext)

const stickyHeader = () =>{
  window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add('sticky__header');
    }
    else{
      headerRef.current.classList.remove('sticky__header');
    }
  })
};

useEffect (() =>{
  stickyHeader();
  return () => window.removeEventListener("scroll", stickyHeader)
})

const menuToggle = () =>{
  menuRef.current.classList.toggle('menu__active')
 }


  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=========== logo ==========*/}
          <div>
            <img src={logo} alt="" />
          </div>

          {/*=========== menu ==========*/}
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu flex items-center gap-[2.7rem]">
                 {
                   navLinks.map((links,index) => 
                    <li key ={index}>
                      <NavLink to = {links.path} className = {navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{links.display}</NavLink>
                    </li>
                   )
                 }
            </ul>
          </div>

           {/*=========== nav right ==========*/}
           <div className="flex items-center gap-4">
             {
              token && user ? (<div >
              <Link to={`${role === 'doctor' ? '/doctors/profile/me' : 'users/profile/me'}`}>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={user?.photo} alt="" className='w-full rounded-full' />
                </figure>
                
              </Link>
            </div>) : (
                <Link to='/login'>
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                </Link>)  
             }    
              
              <span className='md:hidden' onClick={menuToggle}>
                  <BiMenu className=' w-6 h-6 cursor-pointer'/>
              </span>
           </div>
        </div>
      </div>
    </header>
  )
}

export default Header
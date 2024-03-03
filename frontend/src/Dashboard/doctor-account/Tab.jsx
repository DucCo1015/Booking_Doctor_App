import React, { useContext } from 'react'
import {BiMenu} from 'react-icons/bi'
import {authContext} from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Tab = ({tab, setTab}) => {

 const navigate = useNavigate()
 const {dispatch} = useContext(authContext)

 const handleLogout = () => {
  dispatch({ type: "LOGOUT" });
  navigate('/')
};
 
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center rounded-md ">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          overview
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          appointments
        </button>

        <button
          onClick={() => setTab("setting")}
          className={`${
            tab === "setting"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          profile
        </button>

        <div className="mt-[50px] md:mt-[100px]">
          <button
            className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md mt-4">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tab
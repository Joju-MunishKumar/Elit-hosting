import React, { use, useState } from 'react'
import '../../Components/CSS/Style.css'
import { FaBars, FaServer } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'
import { RxButton } from 'react-icons/rx';
import { FaXmark } from 'react-icons/fa6';



function Nav() {
const activeStyle=({isActive})=> isActive ? "text-yellow-500" : "text-dark";
const [showmenu,setShowmenu]=useState(false);

// USE LOCATION HOOK USING 
 //GET PATH 

  return (
    <div className='w-full h-32 bg-white z-50 shadow'>

      {/* <h1 className='text-3xl'>This is {location.pathname.replace("/","")} Page</h1> */}



     <div className='flex items-center justify-between px-6 sm:px-12 md:px-24 py-8'>

    {showmenu && (
      <div className='md-hidden flex flex-col w-54 h-screen fixed right-0 top-0 z-50 bg-primary transition items-start pl-7 space-y-2 justify-center' >
         <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/"}>Home</NavLink>
      <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/hosting"}>Hosting</NavLink>
      <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/domain"}>Domain</NavLink>
      <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/about"}>About</NavLink>
      <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/contact"}>Contact</NavLink>
      <NavLink onClick={()=>{setShowmenu(!showmenu)}} className={activeStyle} to={"/Auth"}>Auth</NavLink>
      <NavLink className="rounded  bg-white  px-4 py-2 font-semibold  text-black border-1 transition" to={"/auth"}>Login</NavLink>
      <NavLink className=' bg-blue-300 text-white font-semibold  px-4 py-2 rounded  transition'>Sign Up</NavLink>
       
      </div>
    ) }


      {/* menu items */}
      <div className="flex items-center space-x-6">
        <div className='flex items-center gap-2'>
          <FaServer className="text-primary text-2xl" />
          <span className='text-2xl font-bold text-dark'>ViteHosting</span>
        </div>

    <div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
      <NavLink className={activeStyle} to={"/"}>Home</NavLink>
      <NavLink className={activeStyle} to={"/hosting"}>Hosting</NavLink>
      <NavLink className={activeStyle} to={"/domain"}>Domain</NavLink>
      <NavLink className={activeStyle} to={"/about"}>About</NavLink>
      <NavLink className={activeStyle} to={"/contact"}>Contact</NavLink>
      <NavLink className={activeStyle} to={"/auth"}>Auth</NavLink>
    </div>
      </div>


      {/* AUTH BUTTON  */}
      <div className=' hidden md:flex items-center'>
        <NavLink className="rounded  ml-4 px-4 py-2 font-semibold  text-black border-1 transition" to={"/auth"}>Login</NavLink>
        <NavLink className=' ml-4 bg-primary text-white font-semibold  px-4 py-2 rounded  transition'>Sign Up</NavLink>
      </div>

    {/* MOBILE VERSION  */}
    <div className="md:hidden z-10">
      {showmenu ? <FaXmark className='text-1xl' onClick={()=>
        {setShowmenu(!showmenu)}} /> : 
        <FaBars className='text-1xl' onClick={()=>
          {setShowmenu(!showmenu)}} />}


 

  

    </div>


     </div>
    </div>
  )
}

export default Nav

export const Logo = ()=>{
  return(
    <div className='flex items-center gap-2'>
          <FaServer className="text-primary text-2xl" />
          <span className='text-2xl font-bold text-white'>ViteHosting</span>
        </div>
  )
}
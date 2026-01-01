import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { FaServer } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Auth = () => {
  let [signup,Showsignup]=useState(true)
return (
  <>
    {!signup ? (
      <>

      {/* SIGNUP PAGE HERE  */}
        <div className='w-full h-screen grid place-items-center '>
          <div className="container shadow-2xl px-10 py-15 w-120 flex flex-col items-center">
            <div className='flex items-center gap-2'>
              <FaServer className="text-primary text-3xl " />
              <span className='text-3xl font-bold text-black'>ViteHosting</span>
            </div>
            <h1 className='mt-10 text-3xl font-semibold'>SignUp</h1>
            <div className='w-full mb-5'>
              <h3>Full Name</h3>
              <input type="Email" name="" id="" placeholder='Full Name' className='py-3 w-full px-4 mt-3 border-[0.001rem]'/>
            </div>
            <div className='w-full'>
              <h3>Email</h3>
              <input type="Email" name="" id="" placeholder='your Email' className='py-3 w-full px-4 mt-3 border-[0.001rem]'/>
            </div>
            <div className='w-full mt-5'>
              <h3>Password</h3>
              <input type="Password" name="" id="" placeholder='Password' className='py-3 w-full px-4  mt-3 block border-[0.001rem]'/>
            </div>
            <div className='w-full mt-5'>
              <h3>Confirm your Password</h3>
              <input type="Password" name="" id="" placeholder='enter your Password again' className='py-3 w-full px-4  mt-3 block border-[0.001rem]'/>
            </div>
            <div className='w-full flex justify-between gap-2 mt-5 '>
              <span className='flex items-center gap-2'><input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </span>
              <Link className='text-blue-400' to="#">Forgot Password</Link>
            </div>
            <button className='mt-5 bg-primary/90 w-full py-2 text-white'>Login</button>
            <div className='mt-5'>
              <h1>have no account yet? <Link className='text-blue-400' to="#" onClick={()=> Showsignup(true)}>Signup</Link></h1>
            </div>
          </div>
        </div>
      </>
    ) : (
      // Signin page here 
      <>
        <div className='w-full h-screen grid place-items-center '>
          <div className="container shadow-2xl px-10 h-120 w-120 flex flex-col items-center">
            <div className='flex items-center gap-2'>
              <FaServer className="text-primary text-3xl " />
              <span className='text-3xl font-bold text-black'>ViteHosting</span>
            </div>
            <h1 className='mt-10 text-3xl font-semibold'>SignIn</h1>
            <div className='w-full'>
              <h3>Email</h3>
              <input type="Email" name="" id="" placeholder='your Email' className='py-3 w-full px-4 mt-3 border-[0.001rem]'/>
            </div>
            <div className='w-full mt-5'>
              <h3>Password</h3>
              <input type="Password" name="" id="" placeholder='Password' className='py-3 w-full px-4  mt-3 block border-[0.001rem]'/>
            </div>
            <div className='w-full flex justify-between gap-2 mt-5 '>
              <span className='flex items-center gap-2'><input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </span>
              <Link className='text-blue-400' to="#">Forgot Password</Link>
            </div>
            <button className='mt-5 bg-primary/90 w-full py-2 text-white'>Login</button>
            <div className='mt-5'>
              <h1>have no account yet? <Link className='text-blue-400' to="#"  onClick={()=> Showsignup(false)}>Signup</Link></h1>
            </div>
          </div>
        </div>
      </>
    )}
  </>
)
}

export default Auth

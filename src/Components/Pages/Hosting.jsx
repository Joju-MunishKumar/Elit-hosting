import React from 'react'
import { assets } from '../../assets/assets'
import { FaCheckCircle, FaServer } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import Footer from './Footer'

const Hosting = () => {
  return (
    <div className='pt-20'>
      
      <div className='container mx-auto'>

      <div className='text-center '>
        <h1  className='text-5xl  font-bold'>Web Hosting Solution</h1>
      <p className='mt-6'>Find the perfect hosting plan for your website needs</p>
      </div>


{/* FIRST CARD START  */}
      <div className=' py-20 px-15 md:w-full md:flex md:justify-around md:flex-1 md:gap-5 '>

    {/* Left side  */}
    <div className='flex flex-col gap-5 w-1/2 justify-center'>
      <FaServer className="text-primary text-3xl"/>
      <h1 className='text-3xl font-extrabold text-black/80'>Shared Hosting</h1>
      <p className='text-[1.2rem]'>Perfect for beginners and small websites. Get started with our affordable shared hosting plans.</p>
      <ul className='flex flex-col gap-5 '>
        <li className='flex gap-2 items-center'><FaCheckCircle className='text-primary/100'/>Easy-to-use control panel</li>
        <li className='flex gap-2 items-center'> <FaCheckCircle className='text-primary/100'/>One-click WordPress install</li>
        <li className='flex gap-2 items-center' > <FaCheckCircle className='text-primary/100'/>Free website migration</li>
      </ul>
      <a className='flex items-center gap-3 font-bold' href="#">View Detail<FaArrowRightLong/></a>
    </div>
    


    {/* RIGHT SIDE */}
<div className='md:w-1/2` flex md:items-center' >
      <img className='w-260'  src={assets.sharedDomainImg} alt="" />
    </div>




      </div>


      {/* SECOND IMAGE  */}
       <div className=' py-20 px-15 md:flex md:justify-around md:flex-1 md:gap-5'>


 {/* RIGHT SIDE */}
<div className='md:w-1/2` flex md:items-center max-md:mb-20' >
      <img lassName='w-260'  src={assets.serverDomainImg} alt="" />
    </div>




    {/* Left side  */}
    <div className='flex flex-col gap-5 md:w-1/2 justify-center'>
      <FaServer className="text-primary text-3xl"/>
      <h1 className='text-5xl font-extrabold text-black/70'>Vps Hosting</h1>
      <p className='text-[1.2rem]'>Get more power and flexibility with our Virtual Private Server solutions.</p>
      <ul className='flex flex-col gap-5 '>
        <li className='flex gap-2 items-center'><FaCheckCircle className='text-primary/100'/>Dedicated Resources</li>
        <li className='flex gap-2 items-center'> <FaCheckCircle className='text-primary/100'/>Full root access</li>
        <li className='flex gap-2 items-center' > <FaCheckCircle className='text-primary/100'/>Scalable resources</li>
      </ul>
      <a className='flex items-center gap-3 font-bold' href="#">View Detail<FaArrowRightLong/></a>
    </div>
    


   



      </div>

      {/* tHIRD IMAGE  */}
       <div className=' py-20 px-15 md:w-full md:flex md:justify-around md:flex-1 md:gap-5 '>

    {/* Left side  */}
    <div className='flex flex-col gap-5 md:w-1/2 justify-center'>
      <FaServer className="text-primary text-3xl"/>
      <h1 className='text-3xl font-extrabold text-black/80'>Dedicated Server</h1>
      <p className='text-[1.2rem]'>Maximum performance and security with your own dedicated server.</p>
      <ul className='flex flex-col gap-5 '>
        <li className='flex gap-2 items-center'><FaCheckCircle className='text-primary/100'/>Entire server resources</li>
        <li className='flex gap-2 items-center'> <FaCheckCircle className='text-primary/100'/>Enhanced security</li>
        <li className='flex gap-2 items-center' > <FaCheckCircle className='text-primary/100'/>24/7 monitoring</li>
      </ul>
      <a className='flex items-center gap-3 font-bold' href="#">View Detail<FaArrowRightLong/></a>
    </div>
    


    {/* RIGHT SIDE */}
<div className='w-full md:w-1/2' >
      <img lassName='w-260 ' src={assets.vpsDomainImg} alt="" />
    </div>




      </div>
</div>

      



    </div>
    
  )
}

export default Hosting

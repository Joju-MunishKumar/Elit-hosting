import React from 'react'
import { assets, teamData } from '../../assets/assets'
import Footer from './Footer'
function About() {
  return (
    <div className='pt-20'>
      <div className='container mx-auto '>

    <div className='text-center mb-20'>
      <h1 className='text-3xl md:text-5xl mb-5 font-semibold'>About Elithosting</h1>
      <p className='text-[1.2rem] tracking-wider'>Learn about our story and mission to provide the best hosting experience</p>
    </div>
      
      {/* our story section starts  */}
      <div className='flex items-center  max-md:flex-col gap-10 px-5'>
        <div className='w-1/2' >

          <h1 className='text-3xl mb-6  md:text-4xl text-black/80 font-semibold'>Our Story</h1>

          <p className='text-[1.2em] text-black/50 mb-6'>Founded in 2010, Elithost started with a simple mission: to make web hosting accessible, reliable, and affordable for everyone.</p>

          <p className='text-[1.2em] mb-6 text-black/50'>What began as a small startup with a single server has grown into a global hosting provider with data centers around the world and thousands of satisfied customers.</p>

          <p className='text-[1.2em] mb-6 text-black/50'>Today, we continue to innovate and expand our services while maintaining the personal touch that sets us apart from larger corporations.</p>
        </div>

        {/* Right side Image Here  */}
        <div className='w-1/2'>
          <img className="object-cover" src={assets.aboutImg} alt="" />
        </div>
      </div>

    {/* PART OF THE TEAM SECTION  */}
    <div className='text-center  mt-10 mb-10'>
      <h1 className='text-3xl md:text-5xl font-semibold mb-5'>Part of our team</h1>
      <p className='max-w-md mx-auto'>Over the last 19 years, Site Ground has grown to more than A considerable number of our people started working</p>
    </div>

    <div className="container mx-auto mb-20">
      <div className="flex justify-center max-md:flex-col gap-10">
    {teamData.map((data)=>{
      return(
        <div className='text-center mb-10 md:mb-30 '>
          <img className='h-[10rem] md:h-[18rem] object-cover w-60 md:w-80  mx-auto' src={data.image} alt="" />
          <h3 className='mt-2 text-dark text-2xl font-semibold'>{data.name}</h3>
          <p>{data.designation}</p>
        </div>
      )
    })}
      </div>

    </div>

      </div>
      
    
    </div>
  )
}

export default About

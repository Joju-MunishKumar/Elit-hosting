import React from 'react'


import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'

function Footer() {

    const myStyles = {
      "margin-top" :"auto"
    };


  return (
    <div style={myStyles} className='py-10 bg-[#364153]'>
        <div className='container mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-6 align-middle '>
        {/* first section start  */}
        <div className='flex flex-col gap-6'>
            {/* <Logo /> */}
            <p className='text-1xl max-w-sm text-white/50'> Premium web hosting solutions with blazing fast speed and reliable performance.</p>
            <div className='flex gap-3 text-white/50'>
             <AiFillTwitterCircle className='text-2xl'/>
             <AiFillFacebook className='text-2xl'/> 
             <AiFillLinkedin className='text-2xl'/> 
             <AiFillInstagram className='text-2xl'/>
             </div>
        </div>

{/* 2nd Section Starts from here  */}

<div className='flex flex-col gap-6 py'>
    <h3 className='text-2xl text-white tex font-semibold'>Services</h3>
    <ul className='text-white/50 flex gap-4 flex-col mt-3'>
        <li>Web Hosting</li>
        <li>VPS Hosting</li>
        <li>Dedicated Server</li>
        <li>Domain Name</li>
    </ul>
</div>


{/* 3rd Section Starts from here  */}

<div className='flex flex-col gap-6'>
    <h3 className='text-2xl text-white tex font-semibold'>Support</h3>
    <ul className='text-white/50 flex gap-4 flex-col mt-3'>
       <li>About us</li>
       <li>Blog</li>
       <li>Careers</li>
       <li>Press</li>
    </ul>
</div>


{/* 4th Section Starts from here  */}

<div className='flex flex-col gap-6'>
    <h3 className='text-2xl text-white tex font-semibold'>Company</h3>
    <ul className='text-white/50 flex gap-4 flex-col mt-3'>
       <li>Help Center</li>
       <li>Contact</li>
       <li>Privacy Policy</li>
       <li>Term of Services</li>
    </ul>
</div>

        </div>
      
    </div>
  )
}

export default Footer

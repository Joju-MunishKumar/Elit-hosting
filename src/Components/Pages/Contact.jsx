import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot, FaLocationPin } from 'react-icons/fa6'
import { timingHours } from '../../assets/assets'

const Contact = () => {
  return (
    <div className='mt-10  '>
      <div className="container mx-auto">

        {/* HEADING PART  */}
    <div className='text-center'>
      <h1 className='md:text-5xl text-4xl text-black font-semibold tracking-tightest [word-spacing:-5px] mb-5'>Get In Touch</h1>
      <p className='text-xl'>Have questions? Our team is here to help you with any inquiries</p>
    </div>


{/* FORMS STARTS FROM HERE 
 */}

 <div className="flex flex-col md:flex-row items-start gap-6">
  <div className="w-full md:w-1/2 shadow p-12">
  
  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6"> 

    {/* First Name Block  */}
<div>
    <label className='block mb-2 font-semibold'>First Name</label> 
    <input className=' w-full px-3 py-2 rounded placeholder:text-sm outline-0 shadow border border-black/30' type="text" placeholder='Your First Name' />
    
    
  </div>

  {/* Last name block  */}
  <div>
    <label className='block mb-2 font-semibold'>Last Name</label> 
    <input className=' w-full px-3 py-2 rounded placeholder:text-sm outline-0 shadow border border-black/30' type="text" placeholder='Your Last Name' />
    
    
  </div>

  </div>

  {/* Email Address  */}
  <div className='mb-5'>
    <label className='block mb-2 font-semibold'>Email Address </label> 
    <input className=' w-full px-3 py-2 rounded placeholder:text-sm outline-0 shadow border border-black/30' type="Email" placeholder='Your Email' />
    
    
  </div>

  {/* Subject  */}
  <div className='mb-5'>
    <label className='block mb-2 font-semibold'>Subject </label> 
    <input className=' w-full px-3 py-2 rounded placeholder:text-sm outline-0 shadow border border-black/30' type="text" placeholder='Your Subject' />
    
    
  </div>

  {/* Message Textarea  */}
  <div className='mb-5'>
    <label className='block mb-2 font-semibold'>Message </label> 
    <textarea  className=' w-full h-30 px-3 py-2 rounded placeholder:text-sm outline-0 shadow border resize-none border-black/30' placeholder='Your Message'></textarea>
  </div>
<button className='bg-primary text-white  w-full px-4 py-2 rounded'>Send Message</button>

  </div>

 <div className="w-full md:w-1/2 shadow p-12">
  <div className='mb-6 p-12'>
  <h1 className='text-4xl font-semibold text-center'>contact Information </h1>
  </div>

{/* icons part start from here  */}
<div className='flex flex-col gap-5 shadow pb-10'>



<div className='flex gap-5'>
  <div className='h-12 w-12 rounded-full  bg-primary/30 flex items-center justify-center'>
  <div className="text-4xl text-primary">
  <FaLocationDot className='text-xl text-primary cursor-pointer'/>
  </div>
  </div>
  <div className='flex  flex-col gap-1 '>
    <h3 className='font-semibold text-1xl'>Address</h3>
    <p>123 Cloud Street, San Francisco, CA 94103</p>
  </div>
</div>

{/* 2ND  */}
<div className='flex gap-5'>
  <div className='h-12 w-12 rounded-full  bg-primary/30 flex items-center justify-center'>
  <div className="text-4xl text-primary">
  <FaPhone className='text-xl text-primary cursor-pointer'/>
  </div>
  </div>
  <div className='flex  flex-col gap-1 '>
    <h3 className='font-semibold text-1xl'>Phone</h3>
    <p>+5469875</p>
  </div>
</div>

{/* thirds  */}
<div className='flex gap-5'>
  <div className='h-12 w-12 rounded-full  bg-primary/30 flex items-center justify-center'>
  <div className="text-4xl text-primary">
  <FaMailBulk className='text-xl text-primary cursor-pointer'/>
  </div>
  </div>
  <div className='flex  flex-col gap-1 '>
    <h3 className='font-semibold text-1xl'>Mail</h3>
    <p>elithosting@gmail.com</p>
  </div>
</div>

</div>

{/* SUPPORT HOURS SECTION 

*/}

<div className='w-full shadow p-12 mt-10'>
    <h1 className='text-2xl font-semibold'>Support Hours</h1>
    <div className='mt-8 flex flex-col gap-5'>
      {timingHours.map((data)=>{
        return(
          <div className='flex justify-between'>
        <h1 className='text-1xl '>{data.day}</h1>
        <p className='font-semibold'>{data.time}</p>
      </div>
        )
      })}
    </div>
</div>

</div>


 </div>



      </div>
      
    </div>
  )
}

export default Contact

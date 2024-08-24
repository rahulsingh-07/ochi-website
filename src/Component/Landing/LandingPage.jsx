import { motion } from 'framer-motion'
import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import { useEffect, useState } from 'react';

export default function LandingPage() {

  const [imageWidth, setImageWidth] = useState("8vw");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setImageWidth("8vw"); // lg
      } else if (window.innerWidth >= 640) {
        setImageWidth("10vw"); // sm
      } else {
        setImageWidth("12vw"); // default for xs
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div data-scroll  data-scroll-speed="-.4"
     className='  w-full h-screen bg-[#F1F1F1]  pt-1 overflow-hidden'>
      <div className=' textstructure sm:mt-44 mt-20 sm:px-16 px-6'>
        {["we Create","Eye-Opening","Presentations"].map((item,index)=>{
            return <div key={index} className='masker xs:flex gap-1  items-center '>
                {index===1 && (<motion.div initial={{width:0,height:"100%"}}
                 animate={{width:imageWidth}}
                  transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                className='lg:w-[8vw] sm:w-[10vw] w-[12vw] h-full  relative top-1 rounded-md overflow-hidden'>
<img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
                <h1 className='font-serif uppercase flex lg:text-[6vw] sm:text-[8vw] text-[10vw] font-semibold lg:tracking-[-8px] tracking-tighter leading-none'>{item}</h1>
            </div>
        })}
      </div>
      <div>
        <div className='border-t-2 border-zinc-900 mt-32 text-lg
        sm:flex justify-between px-10
        '>
         {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p key={index} className=' pt-8'>
                {item}
            </p>
         ))}
         <div className='flex gap-2 items-end group'>
         <button className=' relative border-2 border-black px-2 rounded-full 
         group-hover:text-white z-10'>
          START THE PROJECT <span
         class="absolute w-full h-full  rounded-full -left-0 from-transparent to-black   bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-top"
       >START THE PROJECT</span></button>
         <button className='relative border-2 border-black p-2 rounded-full  group-hover:text-white
         '><TbArrowUpRight/>
         <span
         class="absolute flex justify-center items-center w-full h-full  rounded-full -left-0 top-0  bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-top "
       ><TbArrowUpRight/></span></button>
         
         </div>
        </div>
      </div>
    </div>
  )
}

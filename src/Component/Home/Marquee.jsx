import React from 'react'
import {motion} from "framer-motion"
export default function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2"
    className='w-full bg-[#004D43]  flex items-center rounded-t-3xl'>
      <div className='my-16 w-full border-b-2 border-t-2 border-white flex overflow-hidden   whitespace-nowrap'>
        <motion.h1 initial={{x:"100"}} animate={{x:"-100%"}}
            transition={{ease:"linear", repeat:Infinity,duration:5}} 
        className='  text-[40vw] md:text-[22vw] font-mono font-bold text-white tracking-tighter leading-none -my-8 px-16 '>
             WE ARE OCHI
        </motion.h1>
        <motion.h1 initial={{x:"100"}} animate={{x:"-100%"}}
            transition={{ease:"linear", repeat:Infinity,duration:5}} 
        className=' text-[40vw] md:text-[22vw] font-mono font-bold text-white tracking-tighter leading-none -my-8 px-16'>
             WE ARE OCHI
        </motion.h1>
       
        
      </div>
    </div>
  )
}

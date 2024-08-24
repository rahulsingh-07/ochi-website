import React, { useEffect, useState, useRef } from 'react'

export default function Eyes() {
  const [rotate, setRotate] = useState({ left: 0, right: 0 });
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      const calculateAngle = (eyeRef) => {
        if (!eyeRef.current) return 0;

        const rect = eyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        let deltaX = mouseX - eyeX;
        let deltaY = mouseY - eyeY;

        return Math.atan2(deltaY, deltaX) * (180 / Math.PI) - 180;
      };

      setRotate({
        left: calculateAngle(leftEyeRef),
        right: calculateAngle(rightEyeRef)
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='eye w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.9"  
        className='relative z-0 w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='flex gap-10 justify-center absolute top-[35vh] left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div ref={leftEyeRef} className='flex justify-center items-center w-[15vw] h-[15vw] bg-white rounded-full'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
              <div style={{transform:`translate(-50%, -50%) rotate(${rotate.left}deg)`}}
                className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-6 h-6 bg-white rounded-full border-2 border-black'></div>
              </div>
            </div>
          </div>
          <div ref={rightEyeRef} className='flex justify-center items-center w-[15vw] h-[15vw] bg-white rounded-full'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-black'>
              <div style={{transform:`translate(-50%, -50%) rotate(${rotate.right}deg)`}}
                className='line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-6 h-6 bg-white rounded-full border-2 border-black'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

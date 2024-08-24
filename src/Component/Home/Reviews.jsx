import React from 'react'
import  { useState } from 'react'
import { motion } from 'framer-motion';

const ClientData = [
  {
    id: 1,
    title: "Kaeman Ventures",
    user: "William Barnes",
    img: "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png",
    about: "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
  },
  {
    id: 2,
    title: "Planetly",
    user: "Nina Walloch",
    img: "https://ochi.design/wp-content/uploads/2022/05/Nina.jpg.png",
    about: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
  },
  {
    id: 3,
    title: "Woekiz Easy",
    user: "Tomer Levy",
    img: "https://ochi.design/wp-content/uploads/2022/05/Tomer.png",
    about: "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients."
  },
  {
    id: 4,
    title: "Premium Blend",
    user: "Brendan Goss",
    img: "https://ochi.design/wp-content/uploads/2022/12/image-677-300x298.png",
    about: "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations."
  },
];

export default function Reviews() {
  const [visibleReview, setVisibleReview] = useState(null);

  const toggleVisibility = (id) => {
    setVisibleReview(visibleReview === id ? null : id);
  };

  return (
    <div>
      <div className='pt-28 pb-10 px-8 border-b-2 border-zinc-500'>
        <h1 className='text-6xl tracking-tighter'>Clients' reviews</h1>
      </div>
      <div>
        {ClientData.map((item) => (
          <div key={item.id}
            className='py-4 border-b-2 px-9 grid lg:grid-cols-2 grid-cols-2 border-zinc-500'>
            <div>
              <p>
                <span className=' relative group
                '>{item.title} <span className='absolute rounded-full w-full h-[1.5px] bottom-0 left-0 transform
                scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-left bg-black '></span></span>
              </p>
            </div>
            <div className='flex justify-between'>
              <div>
                <p className='lg:inline'>{item.user}</p>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: visibleReview === item.id ? 'auto' : 0, opacity: visibleReview === item.id ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className='overflow-hidden'
                >
                  <div className='py-10'>
                    <img src={item.img}
                      className='w-28 my-8 rounded-2xl' alt="" />
                    <p>{item.about}</p>
                  </div>
                </motion.div>
              </div>
              <div>
                <span
                  onClick={() => toggleVisibility(item.id)}
                  className={`hover:cursor-pointer border-b-2 border-gray-800 hover-border-b-0 relative group ${visibleReview === item.id ? 'text-gray-300' : ''}`}
                >
                  READ<span className='absolute rounded-full w-full h-[1.5px] bottom-0 left-0 transform
 scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-500 origin-left bg-black '></span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react'

const Social = [
  {
    id: 1,
    title: "Instagram"
  },
  {
    id: 2,
    title: "Behance",
    link: "/#"
  },
  {
    id: 3,
    title: "Facebook",
    link: "/#"
  },
  {
    id: 4,
    title: "Linkedin",
    link: "/#"
  }
]
export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=""
     className='bg-[#CDEA68] rounded-3xl overflow-hidden relative z-10 '>

      <div className='font-serif text-5xl px-6 pt-20 pb-[10vw] 
      tracking-wider border-b-2 border-zinc-500 '>
        <p>Ochi is a strategic partner for fast-grow­ing tech</p>
        <p>businesses that need to <a href="/#">raise funds</a>, <a href="/#">sell prod­ucts</a>,</p>
        <p><a href="/#">ex­plain com­plex ideas</a>, <a href="/#"></a>and hire great peo­ple.</p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 pb-40 pl-6 pt-5 pr-[35vw] md:pr-6
      border-b-2 border-zinc-500'>
        <div className='pb-6'>What you can expect:</div>
        <div className='grid md:grid-cols-2 gap-[8vw]'>
          <div><p className='pb-6'>We create tailored presentations
            to help you persuade your colleagues,
            clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
            <p>We believe the mix of strategy
              and design (with a bit of coffee) is what makes your
              message clear, convincing, and captivating.</p>
          </div>
          <div>
            S:
            <ul>
              {Social.map((item) => (
                <li key={item.id}>
                  <a href='{item.link}' >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>




          </div>

        </div>

      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 px-6 pb-[4vw]'>
        {/* text */}
        <div>
          <h1 className='text-6xl tracking-tighter'>Our approach:</h1>
          <button className=' mt-4 px-6 py-3 bg-black text-white rounded-full'>
            READ MORE
          </button>
        </div>
        {/* image */}
        <div >
          <div className='pt-3 pr-[4vw] '>
            <img className='rounded-md bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

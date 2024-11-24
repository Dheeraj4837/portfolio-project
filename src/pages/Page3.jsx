import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-white'>
      <img className='absolute z-20 ' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1248,h_717,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video controls autoPlay loop muted  className=' z-10 h-[75vh] w-[60vw] relative object-cover' src="/src/assets/file.mp4"></video>
        <div className='h-[1px] w-3/4 top-[35%] absolute z-0 bg-black'></div>
        <div className='h-[1px] w-4/5 top-[55%] absolute z-0 bg-black'></div>
        <div className='h-[1px] w-full top-[75%] absolute z-0 bg-black'></div>

        </div>

    
  )
}

export default Page3
import React from 'react'

const TiltzText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-32'>
        <h1 className='text-[4vw] leading-[4vw] uppercase font-[Anim1]'>I am <span className='text-black font-[Anim1]'>DARK MODE</span>™ </h1>
        <h1 className='text-[8vw] leading-[7vw] font-[Anim1]'>DESIGNER</h1>
        <h1 className='text-[4vw] leading-[4vw] uppercase font-[Anim1]'>TO HIRE</h1>
    </div>
  )
}

export default TiltzText
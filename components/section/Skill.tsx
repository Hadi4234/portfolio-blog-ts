import React from 'react'
import MarqueeItem from '../marquee-item'

function Skill() {
  return (
    <div className='w-full h-[600px] flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Skills</h1>
      <MarqueeItem />
    </div>
  )
}

export default Skill
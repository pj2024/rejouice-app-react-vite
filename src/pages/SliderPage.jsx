import React from 'react'
import Slider from '../components/Slider'

const SliderPage = () => {
  return (
    <div className='w-full md:h-screen h-[50vh]  bg-[#faf8f3] flex justify-center flex-col'>
        <div className='mx-[3vw]  py-[2vw] border-b-[1px] border-b-[#7d7c79]  flex justify-between items-end'>
            <h2 className='font-[Rej] text-[10vw] leading-[8vw] '>Get in touch.</h2>
            <h4><span><i class="ri-corner-down-right-line"></i></span> Contact</h4>
        </div>
        <div className='md:h-[50vh] h-[20vh] w-full relative ' >
            <Slider/>
        </div>
    </div>
  )
}

export default SliderPage
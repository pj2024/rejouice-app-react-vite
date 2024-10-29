import React from 'react'

const TextEffect2 = () => {
  return (
    <div id='text-anim2-page' className='w-full md:h-screen h-[50vh] flex items-center justify-center flex-col '>
        <h4 className='md:text-[1.1vw] text-[3vw] flex items-center justify-center gap-1'>Agency & Venture <span className='px-2 py-1 bg-[#0e0e0e] rounded-full text-[#f1f1f1] md:text-[.6vw] text-[1.3vw]'>Models</span><span className='ml-1'><i class="ri-corner-right-down-line md:text-[.9vw] text-[2vw]"></i></span>
        </h4>

        <div className='mt-4  md:text-[4vw] md:leading-[3.8vw] text-[6vw] leading-[5.5vw] flex flex-col items-center justify-center gap-1 '>
            <div className='w-fit md:h-[4.2vw] h-[6vw] overflow-hidden'>
                <h2 id='text-anim2' className='underline  cursor-pointer'>Explore our services</h2>
            </div>
            <div className='w-fit md:h-[4.2vw] h-[6vw] overflow-hidden'>
                <h2 id='text-anim2' className='underline cursor-pointer'>and engagement models</h2>
            </div>
        </div>
    </div>
  )
}

export default TextEffect2
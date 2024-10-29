import React from 'react'


const Circle = () => {
  return (
    <div className='md:w-3/4 w-full md:h-full relative flex items-center justify-center '>
        <video src={'https://rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm'} className='w-full'></video>
        <div className='md:w-[55%]  w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <svg class="abs tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="o:0.3 $$2$$ $$3$$ $$4$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:616 (.in-view):dashoffset:431.20000000000005"></circle>
                <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="$$5$$ $$6$$ $$7$$ (.in-view):tween:all,2.8s,easeOutSlow dasharray:308 dashoffset:308 (.in-view):dashoffset:123.2"></circle>
            </svg>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white md:text-[1.6vw] text-[4vw] font-medium'>
            <p><span className='font-extrabold md:text-[4vw] md:leading-[4vw] text-[8vw] leading-[8vw]'>2</span><span className='font-extrabold md:text-[4vw] md:leading-[4vw] text-[8vw] leading-[8vw] ml-3'>Seats</span><br /> available for 2024</p>
        </div>
    </div>
  )
}

export default Circle
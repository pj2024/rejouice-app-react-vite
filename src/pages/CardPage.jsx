import React from 'react'
import CardCon from '../components/CardCon'

const CardPage = () => {
  return (
    <div id='card-page' className='w-full md:h-screen min-h-screen bg-[#faf8f3] md:px-[3vw] px-[5vw]'>
       <div className='flex items-center justify-between  w-full md:text-[1.6vw] text-[3vw]'>
            <h3>Transforming visions into brands.</h3>
            <h3><span><i class="ri-corner-down-right-line"></i></span>See the work</h3>
       </div>
       <div className='w-full md:h-[80vh] min-h-screen flex items-center justify-center md:flex-row flex-col gap-2 mt-2'>
            <CardCon/>
       </div>
    </div>
  )
}

export default CardPage
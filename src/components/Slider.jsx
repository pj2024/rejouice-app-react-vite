import React from 'react'
import card_sm_con from '../assets/sliderCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Slider = () => {

  
  useGSAP(()=>{
    gsap.to(".slide",{
      transform: 'translateX(-130%)',
      duration: 30,
      repeat: -1,
      ease: 'linear'
    })
  })


  return (
    <div  className='slider w-full flex items-end gap-4 absolute top-[-20%] overflow-x-auto ' >
        <div className='slide md:w-[130%] w-[180%] flex items-end gap-4 shrink-0'>
            {
                card_sm_con.map((card, index)=>{
                    return <img src={card.img} key={index} className='image w-[19%] cursor-pointer' alt="" />
                })
            }
        </div>
        <div className='slide md:w-[130%] w-[180%] flex items-end gap-4 shrink-0'>
            {
                card_sm_con.map((card, index)=>{
                    return <img src={card.img} key={index} className='image w-[19%] cursor-pointer' alt="" />
                })
            }
        </div>
        <div className='slide md:w-[130%] w-[180%] flex items-end gap-4 shrink-0'>
            {
                card_sm_con.map((card, index)=>{
                    return <img src={card.img} key={index} className='image w-[19%] cursor-pointer' alt="" />
                })
            }
        </div>
    </div>
  )
}

export default Slider
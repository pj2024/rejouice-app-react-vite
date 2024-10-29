import React from 'react'
import card_con from '../assets/card'

const CardCon = () => {
  return (
    <>
        {card_con.map((card, index)=>{
            return <div id='cards' className='group md:w-[33%] md:h-full w-full h-[80vh] cursor-pointer' key={index}>
                <img src={card.image} alt=""  className='w-full h-full object-cover group-hover:hidden duration-500'/>
                <video src={card.video} autoPlay muted loop className='w-full h-full object-cover hidden group-hover:flex duration-500'></video>
            </div>
        })}
    </>
  )
}

export default CardCon
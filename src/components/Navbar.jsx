import React, { useRef, useState } from 'react'
import Vid from '../assets/vid.mp4'
import MenuOpt from './MenuOpt';

const Navbar = () => {
 
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };


  return (
    <div id='Navbar' className='w-full h-[15vh] fixed top-0 left-0 z-10 flex items-center justify-between text-white md:text-[1.5vw] text-[5vw] font-normal md:px-[3vw] px-[5vw]'>
      <h3 className='cursor-pointer'>The Venture Agency.</h3>
      <button onClick={toggleMenu} className={`cursor-pointer relative z-30 md:border-none border-[1px] border-white px-3 py-1 rounded-full text-white ${isOpen && 'text-black border-black'}`}>{isOpen ? 'Close' : 'Menu'}</button>
      
      
      {isOpen && (<div  className='w-full h-[70vh] absolute top-0  left-0 bg-[#edece7] px-[3vw] pt-[4vw] text-[#0e0e0e]'>
        <div className='w-full h-[90%]  border-b-[1px] border-[#0e0e0e] flex justify-between duration-700'>
          <div className='w-[30%] h-full md:flex hidden flex-col items-start justify-start'>
              <h3 className='font-[Rej] text-[1.6vw]'>rejouice</h3>
              <div className='w-[80%] h-[70%]  rounded overflow-hidden'>
                <video src={Vid} muted autoPlay loop className='w-full h-full object-cover cursor-pointer'></video>
              </div>
          </div>
          <div className='md:w-[50%] w-full h-full flex flex-col gap-3 items-start p-[4vw] md:p-0'>
            <MenuOpt/>
            <button className='group px-4 py-2 border-[1px] border-black rounded-full md:text-[1.3vw] text-[4vw] cursor-pointer relative after:[] after:w-full after:h-full after:bg-black after:absolute after:left-[-100%] after:top-0 after:rounded-full overflow-hidden hover:after:left-0 after:duration-300'><a href="#" className='relative z-20 group-hover:text-white'>Take a Seat</a></button>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Navbar
import React from 'react'

const FooterUpper = () => {
  return (
    <div className='w-full md:flex hidden md:h-[60vh] h-[72vw]  md:px-[3vw] px-[5vw] pt-[2vw]  items-start justify-between md:flex-row flex-col text-[#faf8f3] bg-[#0e0e0e] relative z-10'>
        <div className='md:w-[30%] w-full md:h-full h-[50vh] flex items-start justify-between flex-col'>
            <div className="upper">
                <h3 className='md:text-[1.4vw] text-[4vw] font-medium'>Relax. We've got you.</h3>
                <button className='border-[1px] border-[#fffcf1] rounded-full px-4 md:py-3 py-2 mt-2 cursor-pointer '>Take a seat</button>
            </div>
            <div className="lower">
                <p className='text-[1.5vw] leading-[1.7vw]'>San Diego—California <br />
                Paris—France</p>
            </div>
        </div>
        <div className='w-[30%] h-full flex items-end justify-between flex-col'>
            <div className='w-full flex items-start justify-between'>
                <ul>
                    <li>Home</li>
                    <li>Work</li>
                    <li>About</li>
                    <li>Services & Models</li>
                    <li>Contact</li>
                </ul>

                <ul>
                    <li>X <span><i class="ri-arrow-right-up-line"></i></span></li>
                    <li>Instagram <span><i class="ri-arrow-right-up-line"></i></span></li>
                    <li>Linkedin <span><i class="ri-arrow-right-up-line"></i></span></li>
                </ul>
            </div>
            <div className='w-full flex items-center justify-between'>
                <p>biz@rejouice.com</p>
                <p>@2023 legal</p>
            </div>
        </div>
    </div>
  )
}

export default FooterUpper
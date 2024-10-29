import React from 'react'

const MobileFooter = () => {
  return (
    <div className='md:hidden block w-full h-screen bg-[#0e0e0e] text-[#f1f1f1]'>
        <div className='pt-[8vh]  w-full px-[5vw]'>
            <h3 className='text-[8vw]  leading-[6vw]'>Relax. We've got you.</h3>
            <button className='mt-[4vw] border-[1px] border-[#b3b1a9] rounded-full px-2 py-1'>Take a Seat</button>
        </div>
        <div className='flex w-full mt-[8vh] justify-between px-[4vw]'>
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
        <div className='flex w-full mt-[8vh] justify-between px-[4vw]'>
            <ul>
                <li>San Diego—California
                </li>
                <li>Paris—France</li>
                
            </ul>
            <ul>
                <li>Project inquiries:</li>
                <li>biz@rejouice.com</li>
            </ul>
        </div>
        <div className='px-[4vw] mt-[4vh]'>
            <p>@2024 legal</p>
        </div>
        <div id='mfooter' className='px-[3vw] mt-[3vw] overflow-hidden '>
            <h2 className='font-[Rej] text-white text-[26vw] leading-[23vw]'>
                <span className='mheadline inline-block'>r</span>
                <span className='mheadline inline-block'>e</span>
                <span className='mheadline inline-block'>j</span>
                <span className='mheadline inline-block'>o</span>
                <span className='mheadline inline-block'>u</span>
                <span className='mheadline inline-block'>i</span>
                <span className='mheadline inline-block'>c</span>
                <span className='mheadline inline-block'>e</span>
            </h2>
        </div>
    </div>
  )
}

export default MobileFooter
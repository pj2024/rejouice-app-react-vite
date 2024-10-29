import React from 'react'

const MenuOpt = () => {
    const menuOptions = [
        { name: 'Home', link: '#home' },
        { name: 'Work', link: '#about' },
        { name: 'Services & Models', link: '#Services & Models' },
        { name: 'About', link: '#About' },
        {name: 'Contact', link: '#Contact'}
    ];


  return (
    <div className='md:text-[4vw] md:leading-[4vw] text-[12vw] leading-[12vw]'>
        <ul>
            { menuOptions.map((opt, index)=>{
                return <li className='group cursor-pointer md:h-[4vw] h-[12vw] w-fit  overflow-hidden'>
                <h3 className='duration-300 group-hover:translate-y-[-100%]'>{opt.name}</h3>
                <h3 className='duration-300 group-hover:translate-y-[-100%]'>{opt.name}</h3>
                </li>
            })
                 
            }
        </ul>
    </div>
  )
}

export default MenuOpt
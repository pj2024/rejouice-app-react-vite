import React from 'react'
import Navbar from '../components/Navbar'
import Vid from '../assets/vid.mp4'
import HeadLine from '../components/HeadLine'
import _gsap from 'gsap/gsap-core'

const Home = () => {
  return (
    <div className='w-full h-screen relative'>   
        <video src={Vid} autoPlay muted loop className='w-full h-full object-cover'></video>
        <Navbar/>
        <HeadLine/>
    </div>
  )
}

export default Home
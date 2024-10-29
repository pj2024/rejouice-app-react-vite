import React, { useEffect } from 'react'
import Home from './pages/Home'
import TextPage from './pages/TextPage'
import CardPage from './pages/CardPage'
import TEffectNCard from './components/TEffectNCard'
import CirclePage from './pages/CirclePage'
import TEffectNCard2 from './components/TEffectNCard2'
import SliderPage from './pages/SliderPage'
import Pageupfooter from './pages/Pageupfooter'
import FooterUpper from './components/FooterUpper'
import FootLine from './components/FootLine'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loder from './components/Loder'
import MobileFooter from './pages/MobileFooter'
import Lenis from 'lenis'


gsap.registerPlugin(ScrollTrigger);

const App = () => {

  useGSAP(()=>{

    const tl1 = gsap.timeline()

    tl1.to('#h3-text',{
      transform: 'translateX(-100%)',
      duration:1,
      delay:1,
      ease:'linear'
    })

    tl1.to("#black-screen",{
      opacity: 0,
      display: 'none',
      duration: 1
    })

    
    tl1.from('#headline .headline',{
      transform: 'translateY(-100%)',
      duration: 1.3,
      stagger: .2
    })


    gsap.from('#text-anim',{
      transform: 'translateY(100%)',
      duration: 1.5,
      stagger: .3,
      scrollTrigger: {
        trigger: '#text-page1 #text-anim',
        scroller: 'body',
        markers: false,
        start: 'top 60%',
        end: 'top 30%',
        scrub: 0.2
      }
    })

    gsap.from('#text-anim2',{
      transform: 'translateY(100%)',
      duration: .5,
      stagger: .2,
      scrollTrigger: {
        trigger: '#text-anim2-page #text-anim2',
        scroller: 'body',
        markers: false,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.2
      }
    })

    gsap.from('#cards',{
      opacity:0,
      duration: 1,
      stagger: .3,
      scrollTrigger: {
        trigger: '#card-page #cards',
        scroller: 'body',
        markers: false,
        start: 'top 80%',
        end: 'top 60%',
        scrub: 0.2
      }
    })

    gsap.from('#text-anim-page4',{
      transform: 'translateY(100%)',
      duration: .5,
      stagger: .2,
      scrollTrigger: {
        trigger: '#page4-text-anim #text-anim-page4',
        scroller: 'body',
        markers: false,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.2
      }
    })

    gsap.from('#text-anim-page5',{
      transform: 'translateY(100%)',
      duration: .5,
      stagger: .2,
      scrollTrigger: {
        trigger: '#page5-text-anim #text-anim-page5',
        scroller: 'body',
        markers: false,
        start: 'top 70%',
        end: 'top 40%',
        scrub: 0.2
      }
    })

    gsap.from('#text-anim-page6',{
      transform: 'translateY(100%)',
      duration: .5,
      stagger: .2,
      scrollTrigger: {
        trigger: '#page6-text-anim #text-anim-page6',
        scroller: 'body',
        markers: false,
        start: 'top 70%',
        end: 'top 40%',
        scrub: 0.2
      }
    })

    gsap.from('.fheadline',{
      transform: 'translateY(-100%)',
      duration: 2,
      stagger: .3,
      scrollTrigger: {
        trigger: '#footer-line-con .fheadline',
        scroller: 'body',
        markers: false,
        start: 'top 50%',
        end: 'top 0%',
        scrub: .3
      }
    })

    gsap.from('.mheadline',{
      transform: 'translateY(-100%)',
      duration: 2,
      stagger: .3,
      scrollTrigger: {
        trigger: '#mfooter .mheadline',
        scroller: 'body',
        markers: false,
        start: 'top 90%',
        end: 'top 70%',
        scrub: .3
      }
    })
    
  })

  useEffect(()=>{
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      // console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  })

  return (
    <div>
      <Loder/>
      <Home/>
      <TextPage/>
      <CardPage/>
      <TEffectNCard/>
      <CirclePage/>
      <TEffectNCard2/>
      <SliderPage/>
      <Pageupfooter/>
      <FooterUpper/>
      <FootLine/>
      <MobileFooter/>
    </div>
  )
}

export default App
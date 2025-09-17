import React, { useState, useEffect } from 'react'
import HeroImg from '../assets/IMAGES/HeroSection.png'
import SunImg from '../assets/IMAGES/Sun.png'
import LeavesOverlay from '../assets/IMAGES/LeavesOverlay.png'
import Cloudes from '../assets/IMAGES/Cloude.png'
import { ArrowDown } from 'lucide-react'

const Theam = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <section className='min-h-screen bg-[#F5F5F5] max-h-screen flex items-center justify-center relative w-full overflow-hidden'>
        <div className='w-full absolute -bottom-3 z-20'>
            <img draggable="false" src={HeroImg} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
       
        <div className={`${isMobile ? 'w-[200px]' : 'w-[400px]'} absolute bottom-[0vh] z-10 md:-left-[10vw] lg:left-[5vw]`}>
            <img draggable="false" src={SunImg} alt="Sun" className='w-full h-full' />
        </div>
        <div className='w-full absolute top-[15vh] z-10 left-[0vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute top-[25vh] z-10 left-[10vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute md:top-[50vh] lg:top-[35vh] z-10 left-[0vw]'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute top-[50vh] z-10 left-[10vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute top-[60vh] z-10 left-[0vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute top-[70vh] z-10 left-[10vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>

       
     </section>
  )
}

export default Theam

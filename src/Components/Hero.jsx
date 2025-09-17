import React, { useEffect, useRef, useState } from 'react'
import HeroImg from '../assets/IMAGES/HeroSection.png'
import SunImg from '../assets/IMAGES/Sun.png'
import LeavesOverlay from '../assets/IMAGES/LeavesOverlay.png'
import Cloudes from '../assets/IMAGES/Cloude.png'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const leavesRef = useRef(null);
  const sunRef = useRef(null);
  const CloudeRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile || animationComplete) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      const newAccumulatedScroll = accumulatedScroll + e.deltaY;
      const clampedScroll = Math.max(0, Math.min(newAccumulatedScroll, window.innerHeight));
      setAccumulatedScroll(clampedScroll);
      
      const maxScroll = window.innerHeight;
      const scrollProgress = clampedScroll / maxScroll;

      if (leavesRef.current) {
        const opacity = 1 - scrollProgress * 1;
        const scale = 1 + scrollProgress * 0.3;
        
        leavesRef.current.style.opacity = opacity;
        leavesRef.current.style.transform = `scale(${scale})`;
      }

      if (CloudeRef.current) {
        const translateY = scrollProgress * 400;
        CloudeRef.current.style.transform = `translatex(-${translateY}px)`;
      }

      if (sunRef.current) {
        const translateY = -scrollProgress * 420;
        const size = 1 - scrollProgress * 0.4;
        sunRef.current.style.transform = `translateY(${translateY}px) scale(${size})`;
      }

      if (scrollProgress >= 1 && !animationComplete) {
        setAnimationComplete(true);
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
        return;
      }
      
      if (!animationComplete) {
        window.scrollTo(0, 0);
      }
    };

    const handleKeyDown = (e) => {
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp' || e.key === ' ')) {
        e.preventDefault();
        const delta = (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') ? 50 : -50;
        handleWheel({ preventDefault: () => {}, deltaY: delta });
      }
    };
    
    if (!animationComplete) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [accumulatedScroll, animationComplete, isMobile]);

  return (
     <section className='min-h-screen max-h-screen flex items-center justify-center relative w-full overflow-hidden'>
        <div className='w-full absolute -bottom-3 z-20'>
            <img draggable="false" src={HeroImg} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div ref={leavesRef} className='w-full h-full hidden md:block absolute -bottom-0 z-40 transition-all duration-100'>
            <img draggable="false" src={LeavesOverlay} alt="Leaves Overlay" className='w-full h-full object-cover' />
        </div>
        <div ref={sunRef} className={`${isMobile ? 'w-[200px]' : 'w-[400px]'} absolute bottom-[0vh] z-10 md:-left-[10vw] lg:left-[5vw] transition-transform duration-100`}>
            <img draggable="false" src={SunImg} alt="Sun" className='w-full h-full' />
        </div>
        <div className='w-full absolute top-[15vh] z-10 left-[0vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div className='w-full absolute top-[25vh] z-10 left-[10vw] md:hidden block'>
            <img draggable="false" src={Cloudes} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        <div ref={CloudeRef} className='w-full absolute md:top-[50vh] lg:top-[35vh] z-10 left-[0vw]'>
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

        <div className='max-w-6xl mx-4 -mt-24 text-center leading-tight relative z-30'>
            <h1 className={`grifter-font ${isMobile ? 'text-[2.5em]' : 'md:text-[3.5em] lg:text-[6em]'} mb-4`}>
              Empowering Progress, Nurturing Talent
            </h1>
            <h2 className={`inter-font-300 mb-2 ${isMobile ? 'text-[1em]' : 'text-[1.2em]'}`}>
              Where World-Class Innovation Knows No Boundaries
            </h2>
            <h2 className={`inter-font-300 gap-2 opacity-50 flex items-center justify-center ${isMobile ? 'text-[1em]' : 'text-[1em]'}`}>
              Explore <svg className='w-4 animate-bounce mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </h2>
        </div>
     </section>
  )
}

export default Hero
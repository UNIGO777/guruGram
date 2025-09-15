import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Branding1 from '../Components/Branding1'
import OurMission from '../Components/OurMission'
import AboutCourse from '../Components/AboutCourse'
import MeetOurInstructor from '../Components/MeetOurInstructor'
import Testimonials from '../Components/Testimonials'
import Faqs from '../Components/Faqs'
import StartYourJourney from '../Components/StartYourJourney'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Branding1/>
    <OurMission/>
    <AboutCourse/>
    <MeetOurInstructor/>
    <Testimonials/>
    <Faqs/>
    <StartYourJourney/>
    <Footer/>
    </>
  )
}

export default Main
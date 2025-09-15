import React from 'react'
import Instructor from '../assets/IMAGES/Instructor.png'
import Brands2 from '../assets/IMAGES/Brands2.png'

const MeetOurInstructor = () => {
  return (
    <section className='px-4 sm:px-8 lg:px-20 mb-12 sm:mb-16 lg:mb-20'>
        <div className='mb-12 sm:mb-16 lg:mb-24'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center mb-4 sm:mb-5'>Meet Our Instructor</h2>
            <p className='max-w-7xl text-sm sm:text-base text-center mx-auto px-4 sm:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='px-0 sm:px-4 lg:px-20'>
        <div className='min-h-[40vh] sm:min-h-[45vh] lg:min-h-[40vh] w-full flex flex-col lg:flex-row items-center bg-[#EBD05B] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-0'>
            <div className='min-w-full lg:min-w-[30%] h-[30vh] sm:h-[35vh] lg:h-[40vh] relative mb-4 lg:mb-0'>
                    <img className='absolute -top-16 sm:-top-20 lg:-top-32 left-1/2 lg:left-20 transform -translate-x-1/2 lg:translate-x-0 scale-[1.1] sm:scale-[1.2] lg:scale-[1.3]' src={Instructor} alt=''/>
            </div>
            <div className='text-center lg:text-left px-4 lg:px-0'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3'>Ritik Verma</h1>
                <h3 className='text-sm sm:text-md mb-6 sm:mb-8 lg:mb-10'>IT industry expert</h3>
                <p className='w-full lg:w-[95%] mb-4 sm:mb-5 text-sm sm:text-base'>
                    I bring over 15 years of experience working in the industry with renowned companies like HSBC, John Deere, TCS, and Infosys. This extensive experience has provided me with a deep understanding of real-world challenges and practical solutions.
                </p>
                <p className='w-full lg:w-[95%] mb-4 sm:mb-5 text-sm sm:text-base'>
                    My passion lies in equipping individuals with the skills they need to thrive in the dynamic world of technology. I am committed to sharing my knowledge and experience to help others achieve their learning goals.
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <img src={Brands2} alt="" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default MeetOurInstructor
import React, { useEffect, useState } from 'react'
import HandsGrip from '../assets/IMAGES/HandsGrip.png'

const StartYourJourney = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('October 1, 2025 00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });

            if (difference < 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

  return (
    <section className='px-4 sm:px-8 lg:px-32 w-full sm:w-[98%] lg:w-[95%] mx-auto mb-12 sm:mb-16 lg:mb-20'>
        <div className='min-h-[50vh] sm:min-h-[55vh] lg:min-h-[50vh] flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-10 bg-gradient-to-r from-[#DCFEF9] to-[#FEFEE6] rounded-xl sm:rounded-2xl'>
            <div className='text-black flex flex-col gap-4 sm:gap-5 mb-6 lg:mb-0 text-center lg:text-left'>
                <h1 className='text-xl sm:text-2xl font-semibold'>Start Your Journey</h1>
                <p className='max-w-full lg:max-w-md text-sm sm:text-base'>We have so many ideas for new features that can help our partners manage their units even more efficiently. We promise you that we wont mail bomb you, just once in a month. Get our monthly newspaper for new ideas - </p>
                <h4 className='text-sm sm:text-md font-bold mt-2 sm:mt-3 mb-2 sm:mb-3'>Only 7 Seats left</h4>
                <div className='max-w-full sm:max-w-[40vw] lg:max-w-[28vw] items-center grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-0'>
                    <div className='col-span-4 mb-4 sm:mb-0'>
                        <h1 className='text-sm sm:text-md font-bold'>1st October 25, Monday</h1>
                        <p className='text-xs sm:text-sm text-gray-400'>Batch starts in</p>
                    </div>
                    <div className='flex flex-col h-8 sm:h-10 p-2 sm:p-3 items-center border-r-0 sm:border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.days).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>days</p>
                    </div>
                    <div className='flex flex-col p-2 sm:p-3 h-8 sm:h-10 items-center border-r-0 sm:border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.hours).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>hrs</p>
                    </div>
                    <div className='flex flex-col p-2 sm:p-3 h-8 sm:h-10 items-center border-r-0 sm:border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.minutes).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>mins</p>  
                    </div>
                    <div className='flex flex-col items-center h-8 sm:h-10 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.seconds).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>secs</p>  
                    </div>
                </div>
                    <button className='bg-black w-fit font-bold text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base'>
                                Enroll Now
                            </button>
                            <p className='text-xs sm:text-sm text-gray-400'>Please read our <span className='underline'>privacy policy</span> before subscribing</p>
            </div>
            <div className='p-4 sm:p-6 lg:p-10'>
                <img src={HandsGrip} alt="" className='max-w-full h-auto' />
            </div>
        </div>
    </section>
  )
}

export default StartYourJourney
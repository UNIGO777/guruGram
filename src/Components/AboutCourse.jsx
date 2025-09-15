import { Play } from 'lucide-react';
import React, { useState, useEffect } from 'react'

const AboutCourse = () => {
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
        <section className='min-h-screen p-4 sm:p-8 lg:p-20 flex flex-col items-center'>
            <div className='text-center flex flex-col items-center justify-center text-black'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 px-4'>About the course</h1>
                <p className='max-w-6xl text-sm sm:text-base lg:text-lg px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='mt-8 sm:mt-10 w-full px-4 sm:px-6 lg:px-10'>
                <div className='min-h-[30vh] sm:min-h-[40vh] lg:min-h-[45vh] relative w-full bg-cover bg-center bg-no-repeat rounded-lg sm:rounded-xl' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
                   <div className='absolute bg-black inset-0 h-full w-full left-0 top-0 opacity-50 rounded-lg sm:rounded-xl'></div>
                   <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 sm:p-4 hover:p-4 sm:hover:p-5 transition-all rounded-full cursor-pointer'>
                        <Play className='w-4 h-4 sm:w-5 sm:h-5 text-black fill-black' />
                   </div>
                </div>
                <div className='text-white min-h-[12vh] sm:min-h-[15vh] bg-[#3A3138] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 p-4 sm:p-0'>
                    <div className='flex flex-col items-center justify-center py-4 sm:py-0'>
                        <h1 className='text-lg sm:text-xl mb-2'>Beginner level</h1>
                        <p className='text-center text-sm sm:text-base'>No prior experience required</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-4 sm:py-0'>
                        <h1 className='text-lg sm:text-xl mb-2'>25 Hours</h1>
                        <p className='text-center text-sm sm:text-base'>Topic base small videos</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-4 sm:py-0'>
                        <h1 className='text-lg sm:text-xl mb-2'>Flexible schedule</h1>
                        <p className='text-center text-sm sm:text-base'>Learn at your own pace</p>
                    </div>
                </div>
            </div>

            <div className='mt-8 sm:mt-10 px-4 sm:px-6 lg:px-10 w-full max-w-7xl'>
                <h1 className='text-2xl sm:text-3xl mb-4 sm:mb-5'>User Experience Design</h1>
                <p className='text-sm sm:text-base mb-6 sm:mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem, odio incidunt saepe molestias sapiente quasi accusantium. Blanditiis, eveniet quasi eaque ullam explicabo veniam cupiditate earum, non repudiandae quaerat minus cumque totam amet autem suscipit quod consectetur in esse dolorem qui. </p>
                <div className='w-full sm:max-w-[28vw] items-center grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-0 my-6 sm:my-10'>
                    <div className='col-span-4 mb-4 sm:mb-0'>
                        <h1 className='text-sm sm:text-md font-bold'>1st October 25, Monday</h1>
                        <p className='text-xs sm:text-sm text-gray-400'>Batch starts in</p>
                    </div>
                    <div className='flex flex-col h-8 sm:h-10 p-2 sm:p-3 items-center border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.days).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>days</p>
                    </div>
                    <div className='flex flex-col p-2 sm:p-3 h-8 sm:h-10 items-center border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.hours).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>hrs</p>
                    </div>
                    <div className='flex flex-col p-2 sm:p-3 h-8 sm:h-10 items-center border-r-2 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.minutes).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>mins</p>  
                    </div>
                    <div className='flex flex-col items-center h-8 sm:h-10 justify-center'>
                        <h1 className='text-xs sm:text-sm font-bold'>{String(timeLeft.seconds).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>secs</p>  
                    </div>
                </div>
                    <div>
                        <h4 className='text-sm sm:text-md font-bold mb-4 sm:mb-5'>Only 7 Seats left</h4>
                        <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 mb-4 sm:mb-5'>
                            <button className='bg-black font-bold text-white px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base'>
                                Learn Now
                            </button>
                            <button className='bg-gray-300 font-bold text-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-sm sm:text-base'>
                                Enroll Now
                            </button>
                        </div>
                        <p className='text-xs sm:text-sm text-gray-400'>Please read our <span className='underline'>privacy policy</span> before subscribing</p>
                    </div>
            </div>
        </section>
    )
}

export default AboutCourse
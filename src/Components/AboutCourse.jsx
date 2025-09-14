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
        <section className='min-h-screen p-20 flex flex-col items-center'>
            <div className='text-center flex flex-col items-center justify-center text-black'>
                <h1 className='text-5xl mb-8'>About the course</h1>
                <p className='max-w-6xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='mt-10 w-full px-10'>
                <div className='min-h-[45vh] relative w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1710799885122-428e63eff691?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}>
                   <div className='absolute bg-black inset-0 h-full w-full left-0 top-0 opacity-50'></div>
                </div>
                <div className='text-white min-h-[15vh] bg-[#3A3138] grid grid-cols-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-xl'>Beginner level</h1>
                        <p className='text-center'>No prior experience required</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-xl'>25 Hours</h1>
                        <p className='text-center'>Topic base small videos</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-xl'>Flexible schedule</h1>
                        <p className='text-center'>Learn at your own pace</p>
                    </div>
                </div>
            </div>

            <div className='mt-10 px-10'>
                <h1 className='text-3xl mb-5'>User Experience Design</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem, odio incidunt saepe molestias sapiente quasi accusantium. Blanditiis, eveniet quasi eaque ullam explicabo veniam cupiditate earum, non repudiandae quaerat minus cumque totam amet autem suscipit quod consectetur in esse dolorem qui. </p>
                <div className='max-w-[28vw] items-center grid grid-cols-8 my-10'>
                    <div className='col-span-4'>
                        <h1 className='text-md font-bold'>1st October 25, Monday</h1>
                        <p className='text-sm text-gray-400'>Batch starts in</p>
                    </div>
                    <div className='flex flex-col h-10 p-3 items-center border-r-2 justify-center'>
                        <h1 className='text-sm font-bold'>{String(timeLeft.days).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>days</p>
                    </div>
                    <div className='flex flex-col p-3 h-10 items-center border-r-2 justify-center'>
                        <h1 className='text-sm font-bold'>{String(timeLeft.hours).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>hrs</p>
                    </div>
                    <div className='flex flex-col p-3 h-10 items-center border-r-2 justify-center'>
                        <h1 className='text-sm font-bold'>{String(timeLeft.minutes).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>mins</p>  
                    </div>
                    <div className='flex flex-col items-center h-10 justify-center'>
                        <h1 className='text-sm font-bold'>{String(timeLeft.seconds).padStart(2, '0')}</h1>
                        <p className='text-xs text-gray-400'>secs</p>  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCourse
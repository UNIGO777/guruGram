import React, { useState, useEffect } from 'react'
import './InfiniteScroll.css'
import Student1 from '../assets/IMAGES/Students/Mask group4.png'
import Student2 from '../assets/IMAGES/Students/Mask group3.png'
import Student3 from '../assets/IMAGES/Students/Mask group2.png'
import Student4 from '../assets/IMAGES/Students/Mask group.png'


const testimonialData = [
    {
        name: "Rajesh Kumar",
        feedback: "The courses here completely transformed my understanding of agriculture. The practical knowledge gained has helped me improve my farm's productivity significantly.",
        location: "Bihar",
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Priya Patel",
        feedback: "As a woman farmer, I found the platform very empowering. The lessons are easy to understand and implement in real-world farming scenarios.",
        location: "Gujarat",
        profile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Amit Singh",
        feedback: "The organic farming techniques I learned here have helped me transition to sustainable agriculture. My crop quality has improved tremendously.",
        location: "Punjab",
        profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Lakshmi Devi",
        feedback: "The platform made learning modern farming techniques accessible. I've been able to increase my farm's yield while reducing costs.",
        location: "Tamil Nadu",
        profile: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Mohammed Ismail",
        feedback: "The pest management course was particularly helpful. I've seen a significant reduction in crop losses since implementing the strategies learned.",
        location: "Karnataka",
        profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Sunita Sharma",
        feedback: "The water conservation techniques taught here have been invaluable during drought seasons. My crops now survive better with less water.",
        location: "Rajasthan",
        profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Ravi Verma",
        feedback: "The soil health management course changed my perspective on farming. My soil quality has improved significantly over the past year.",
        location: "Madhya Pradesh",
        profile: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Anita Desai",
        feedback: "Learning about modern irrigation systems has helped me optimize water usage. The practical demonstrations were particularly useful.",
        location: "Maharashtra",
        profile: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Gopal Krishna",
        feedback: "The marketing strategies taught here helped me get better prices for my produce. I now understand market dynamics better.",
        location: "Uttar Pradesh",
        profile: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Meena Kumari",
        feedback: "The platform's focus on sustainable farming practices has helped me create a more environmentally friendly farm operation.",
        location: "Haryana",
        profile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Ramesh Yadav",
        feedback: "The crop rotation techniques I learned have improved my soil fertility and increased overall farm productivity.",
        location: "Jharkhand",
        profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Sita Devi",
        feedback: "The courses on organic certification helped me transition to organic farming and access premium markets.",
        location: "Uttarakhand",
        profile: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Kartik Reddy",
        feedback: "Learning about integrated farming has helped me diversify my income sources and reduce risks.",
        location: "Andhra Pradesh",
        profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-xl p-8  hover:shadow-xl transition-shadow duration-300 min-w-[400px] max-w-[400px] sm:min-w-[450px] sm:max-w-[450px] mx-4 flex-shrink-0">
            <div className="flex items-center mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mr-4 sm:mr-5 bg-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-600">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 text-lg sm:text-xl">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm sm:text-base">{testimonial.location}</p>
                </div>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {testimonial.feedback}
            </p>
        </div>
    );
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex >= testimonialData.length - getVisibleCards() ? 0 : prevIndex + 1
                );
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(interval);
        }
    }, [isHovered]);

    // Get number of visible cards based on screen size
    const getVisibleCards = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // Mobile: 1 card
            if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
            return 3; // Desktop: 3 cards
        }
        return 3;
    };

    // Get card width based on screen size
    const getCardWidth = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 336; // Mobile: 300px + 36px margin
            return 386; // Desktop: 350px + 36px margin
        }
        return 386;
    };

    // Create duplicated array for infinite scroll effect
    const extendedTestimonials = [...testimonialData, ...testimonialData.slice(0, 3)];

    return (
        <section className='bg-gradient-to-b min-h-screen from-[#FEFEE6] to-[#DBFEFA] py-20 '>
            <div className='w-full flex flex-col justify-center items-center text-center mx-auto mb-12 px-4'>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl mx-auto mb-4 w-full text-center text-gray-800'>
                    What Our Learners Are Saying
                </h1>
                <p className='w-full max-w-xl text-gray-600 text-base sm:text-lg px-4'>
                    Hear from students and professionals who've transformed their careers and lives through our courses.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full mx-auto mb-10 overflow-hidden">
                <div className="infinite-logo-container ">
                    {/* First row - scrolling left to right */}
                    <div className="logo-scroll mb-8">
                        {extendedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.name}-${index}`}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                    <div className="logo-scroll-reverse  mb-8">
                        {extendedTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${testimonial.name}-${index}`}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                </div>

            </div>

            <p className='w-full mb-10 max-w-7xl text-center text-sm sm:text-md mx-auto text-gray-600 px-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className='flex flex-col sm:flex-row px-4 sm:px-8 lg:px-32 gap-4 sm:gap-6 lg:gap-10'>
                {
                    [Student1, Student2, Student3, Student4].map((student, index) => (
                        <img 
                            key={index}
                            src={student} 
                            alt={`Student ${index + 1}`} 
                            className='w-full h-[30vh] sm:h-[35vh] lg:h-[45vh] object-cover rounded-2xl sm:rounded-3xl' 
                        />
                    ))
                }
            </div>



        </section>
    )
}

export default Testimonials
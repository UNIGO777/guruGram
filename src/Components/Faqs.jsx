import React, { useState } from 'react'

const faqData = [
  {
    question: "What is the duration of the UI/UX Design course?",
    answer: "The UI/UX Design course is typically 12 weeks long, with flexible learning options available to accommodate different schedules."
  },
  {
    question: "Do I need prior design experience to take this course?",
    answer: "No prior design experience is required. The course is structured to accommodate beginners while also being valuable for those with some design background."
  },
  {
    question: "What software tools will I learn in this course?",
    answer: "You'll learn industry-standard tools like Figma, Adobe XD, Sketch, and prototyping tools. All necessary software requirements will be provided at the start of the course."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Yes, upon successful completion of the course and all assignments, you will receive a professional certification in UI/UX Design."
  },
  {
    question: "Are there job placement opportunities after the course?",
    answer: "We provide career support, portfolio reviews, and connect students with our industry partners for potential job opportunities."
  },
  {
    question: "What is included in the course curriculum?",
    answer: "The curriculum covers UI principles, UX research, wireframing, prototyping, user testing, design systems, and real-world projects to build your portfolio."
  },
  {
    question: "Is there practical project work involved?",
    answer: "Yes, you'll work on multiple hands-on projects including a capstone project that simulates real-world design challenges."
  },
  {
    question: "What kind of support is available during the course?",
    answer: "You'll have access to mentor support, live Q&A sessions, community forums, and detailed feedback on your assignments and projects."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='p-4 sm:p-8 lg:p-20'>
        <div className='w-full max-w-7xl mx-auto mb-8 sm:mb-10'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 text-center'>Frequently Asked Questions</h2>
            <p className='max-w-6xl text-center mx-auto text-sm sm:text-base px-4 sm:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-0'>
            {
                faqData.map((item, index) => (
                    <div key={index} className=''>
                        <div 
                            className={`flex justify-between items-center ${activeIndex === index ? 'border-b-2' : ''} py-3 sm:py-4 border-t-2 border-gray-200 w-full cursor-pointer`}
                            onClick={() => toggleFaq(index)}
                        >
                            <h3 className='text-sm sm:text-md ml-2 font-bold pr-4'>{item.question}</h3>
                            <span className='float-right mr-2 transition-transform duration-300 text-lg sm:text-xl' style={{
                                transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                            }}>+</span>
                        </div>
                        <div 
                            className='overflow-hidden transition-all duration-300'
                            style={{
                                maxHeight: activeIndex === index ? '200px' : '0',
                                opacity: activeIndex === index ? 1 : 0
                            }}
                        >
                            <p className='text-xs sm:text-sm text-gray-400 p-3 sm:p-5'>{item.answer}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Faqs
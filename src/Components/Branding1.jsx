import React from 'react'
import BrandingBg from '../assets/IMAGES/BrandingBg.png'
import Brands from '../assets/IMAGES/Brands.png'


const Branding1 = () => {
  return (
    <div className='w-full min-h-[35vh] sm:min-h-[40vh] lg:min-h-[35vh] flex items-center justify-center px-4 sm:px-6 lg:px-0' style={{backgroundImage: `url(${BrandingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-full sm:w-[90%] lg:w-[80%] h-[80%] '>
          <div className='w-full h-[20%] flex flex-col items-center justify-center text-white'>
            <h1 className='text-sm sm:text-base lg:text-md text-center mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4 lg:px-0'>At GG, we envision a world where world-class products are not confined to metropolitan hubs but can be cultivated anywhere, fostering talent and supporting local communities. We strive to revolutionize the traditional flow of talent, creating opportunities, and empowering rural areas with technological expertise. </h1>
            
            <div className='w-[60px] sm:w-[80px] lg:w-[100px] bg-white h-[2px] my-2 mb-6 sm:mb-8 lg:mb-10'></div>

            <h2 className='text-sm sm:text-base lg:text-md text-center font-bold mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-4 lg:px-0'>We collaborate with leading companies and universities</h2>
            <img src={Brands} alt='brands' loading='lazy' className='w-full max-w-xs sm:max-w-md lg:max-w-full h-auto'/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Branding1
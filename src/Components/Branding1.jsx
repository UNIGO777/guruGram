import React from 'react'
import BrandingBg from '../Assets/IMAGES/BrandingBg.png'
import Brands from '../Assets/IMAGES/Brands.png'


const Branding1 = () => {
  return (
    <div className='w-full min-h-[35vh] flex items-center justify-center' style={{backgroundImage: `url(${BrandingBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[80%] h-[80%] '>
          <div className='w-full h-[20%] flex flex-col items-center justify-center text-white'>
            <h1 className='text-md text-center mb-10'>At GG, we envision a world where world-class products are not confined to metropolitan hubs but can be cultivated anywhere, fostering talent and supporting local communities. We strive to revolutionize the traditional flow of talent, creating opportunities, and empowering rural areas with technological expertise. </h1>
            
            <div className='w-[100px] bg-white h-[2px] my-2 mb-10'></div>

            <h2 className='text-md text-center font-bold mb-10'>We collaborate with leading companies and universities</h2>
            <img src={Brands} alt='brands' loading='lazy'/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Branding1
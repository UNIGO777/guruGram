import React from 'react'
import OurMissionBg from '../assets/IMAGES/OurMissionBg.png'

const data = [
    {
        id: 1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est '
    },
    {
        id: 2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est '
    },
    {
        id: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est '
    },
]

const OurMission = () => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #FFFEE6 0%, #DAFEFA 100%, #DAFEFA 0%)',
            
            color: 'white'
        }}
            className='w-full relative min-h-[110vh] sm:min-h-[120vh] lg:min-h-[110vh] text-black p-4 sm:p-6 lg:p-10 py-12 sm:py-16 lg:py-20 overflow-hidden'
        >
            <div className='text-black text-center px-4 sm:px-8 lg:px-20 mb-12 sm:mb-16 lg:mb-20'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-black mb-6 sm:mb-8'>Our Mission</h1>
                <p className='mb-4 sm:mb-5 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, iusto sint rem, libero sunt dolorem ut dolorum quas aliquam minus </p>
                <p className='mb-4 sm:mb-5 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, iusto sint rem, libero sunt dolorem ut dolorum quas aliquam minus inventore maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod neque et nam odit maxime minus, non quo temporibus voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam nobis non consequatur assumenda illo facere fuga quaerat, fugit saepe ea, expedita, laborum aperiam itaque excepturi neque quia dolorum amet officiis repellendus? </p>
                <p className='mb-4 sm:mb-5 text-sm sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-20 '>
                {
                    data.map((item) => (
                        <div key={item.id} className='border border-1 pt-16 sm:pt-18 lg:pt-20 relative text-center text-black p-4 sm:p-5 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]'>
                            <p className='text-lg sm:text-xl lg:text-2xl'>{item.description}</p>
                            <div className='absolute -top-[15%] sm:-top-[18%] lg:-top-[20%] left-6 sm:left-8 lg:left-10 bg-[#F3FEEC] text-3xl sm:text-4xl lg:text-5xl p-3 sm:p-4 lg:p-5'>0{item.id}</div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full absolute left-0 -bottom-0 z-20'>
            <img src={OurMissionBg} alt="Hero Section" className='w-full h-full object-cover' />
        </div>
        </div >
    )
}

export default OurMission
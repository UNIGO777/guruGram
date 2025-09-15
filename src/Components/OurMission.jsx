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
            className='w-full relative  min-h-[110vh] text-black p-10 py-20 overflow-hidden'
        >
            <div className='text-black text-center container px-20 mb-20'>
                <h1 className='text-5xl text-black mb-8'>Our Mission</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, iusto sint rem, libero sunt dolorem ut dolorum quas aliquam minus </p>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, iusto sint rem, libero sunt dolorem ut dolorum quas aliquam minus inventore maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod neque et nam odit maxime minus, non quo temporibus voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quam nobis non consequatur assumenda illo facere fuga quaerat, fugit saepe ea, expedita, laborum aperiam itaque excepturi neque quia dolorum amet officiis repellendus? </p>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque numquam ipsam vitae a iusto esse commodi deserunt suscipit est recusandae voluptates error distinctio repellat sed odit reprehenderit rem neque accusantium, corrupti rerum labore facere officia quod. Molestias quam est consequatur iure quasi voluptatem voluptate illum, </p>
            </div>
            <div className='grid grid-cols-3 gap-10 px-20 container'>
                {
                    data.map((item) => (
                        <div key={item.id} className='border border-1 pt-20 relative text-center text-black p-5 '>
                            <p className='text-2xl'>{item.description}</p>
                            <div className='absolute -top-[20%] left-10  bg-[#F3FEEC] text-5xl p-5'>0{item.id}</div>
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
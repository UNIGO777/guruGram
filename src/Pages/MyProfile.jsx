import React, { useState } from 'react'
import Theam from '../Components/Theam'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }
  return (
    <div className='relative '>
        <Navbar/>
        <Theam/>
            <div className=' absolute top-28 px-28  z-20 w-full '>
                <div className='w-full mb-10  bg-white px-10'>
                    <div className='w-full border-b-2 border-gray-100 flex gap-4  py-5 items-center'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" className='w-14 h-14' alt="" />
                        <div className=''>
                            <h1 className='text-2xl font-semibold'>My Profile</h1>
                            <h2 className='text-gray-400'>Namajain</h2>
                        </div>
                    </div>
                <div className='flex gap-10'>
                    <div className={`p-5 ${ activeTab === 'Profile' && 'border-b-2 border-black'} cursor-pointer font-semibold`} onClick={()=> handleTabClick('Profile')}>Profile</div>
                    <div className={`p-5 ${ activeTab === 'Settings' && 'border-b-2 border-black'} cursor-pointer font-semibold`} onClick={()=> handleTabClick('Settings')}>Settings</div>
                    <div className={`p-5 ${ activeTab === 'Payment History' && 'border-b-2 border-black'} cursor-pointer font-semibold`} onClick={()=> handleTabClick('Payment History')}>Payment History</div>
                </div>
                
                </div>
                {activeTab === 'Profile' && <div className='w-full  bg-white px-10'>
                    <div className='w-full border-b-2 border-gray-100 flex gap-4 justify-between py-5 items-center'>
                        <div>
                            <h2 className='text-sm'>Email Address</h2>
                            <p className='font-semibold text-sm'>namajain@gmail.com</p>
                        </div>
                        <div>
                            <h2 className='text-sm'>Phone No.</h2>
                            <p className='font-semibold text-sm'>+91 9876543210</p>
                        </div>
                    </div>
                </div>}

                {activeTab === 'Settings' && <div className='w-full  bg-white px-10'>
                    <div className='w-full border-b-2 border-gray-100 flex flex-col gap-4 py-5'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-sm'>Change Password</h2>
                            <button className='bg-black hover:scale-[1.1] transition-all text-white px-4 py-2  text-sm'>
                                Change Password
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='text-sm'>Edit Profile</h2>
                                <p className='text-xs text-gray-500'>Update your phone number and other details</p>
                            </div>
                            <button className='bg-black hover:scale-[1.1] transition-all text-white px-4 py-2  text-sm'>
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>}

                {activeTab === 'Payment History' && <div className='w-full bg-white px-10'>
                    <div className='w-full border-b-2 border-gray-100 flex flex-col gap-4 py-5'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <h2 className='text-sm font-semibold'>Recent Transactions</h2>
                                <p className='text-xs text-gray-500'>Your payment history for the last 30 days</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between items-center p-4 border rounded-lg'>
                                <div>
                                    <h3 className='text-sm font-semibold'>Course Purchase</h3>
                                    <p className='text-xs text-gray-500'>March 15, 2024</p>
                                </div>
                                <div className='text-sm font-semibold text-green-600'>₹999</div>
                            </div>
                            <div className='flex justify-between items-center p-4 border rounded-lg'>
                                <div>
                                    <h3 className='text-sm font-semibold'>Premium Subscription</h3>
                                    <p className='text-xs text-gray-500'>March 1, 2024</p>
                                </div>
                                <div className='text-sm font-semibold text-green-600'>₹1499</div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        <Footer/>
    </div>
  )
}

export default MyProfile
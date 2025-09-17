import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import useUserStore from '../store/userStore';
import Theam from '../Components/Theam'
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  // Zustand store
  const { 
    signIn, 
    signUp, 
    resetPassword, 
    isLoading, 
    error, 
    clearError,
    isAuthenticated,
    initializeUser
  } = useUserStore();

  // Initialize user on component mount
  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  // Clear error when switching between forms
  useEffect(() => {
    clearError();
  }, [isSignUp, isResetPassword, clearError]);

  // Redirect if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      // You can redirect to dashboard or home page here
      console.log('User is authenticated, redirect to dashboard');
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isResetPassword) {
      // Handle password reset
      const result = await resetPassword(formData.email);
      if (result.success) {
        alert('Password reset email sent! Check your inbox.');
        setIsResetPassword(false);
        setFormData({ ...formData, email: '', password: '' });
      }
    } else if (isSignUp) {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      // Handle sign up
      const result = await signUp({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone
      });
      
      if (result.success) {
        console.log('Sign up successful:', result.user);
        // Reset form
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          phone: ''
        });
      }
    } else {
      // Handle sign in
      const result = await signIn(formData.email, formData.password);
      if (result.success) {
        console.log('Sign in successful:', result.user);
        // Reset form
        setFormData({ ...formData, email: '', password: '' });
      }
    }
  };

  return (
    <>
      <section className='w-full min-h-screen relative'>
        <Theam />
        <div className='w-[90%] md:w-[500px] p-3 absolute top-[50%] left-[50%] z-20 translate-x-[-50%] translate-y-[-50%] bg-white py-5'>

          <div className='text-center'>
            {error && <div className='text-red-500 mb-4'>{error}</div>}
            
            <div className='flex gap-1 items-center mb-5 hover:opacity-50 cursor-pointer w-fit' onClick={() => {
              if(isResetPassword) {
                setIsResetPassword(false);
              } else {
                // Navigate back to home or previous page
                window.history.back();
              }
            }}>
              <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </div>

            {!isResetPassword && (
              <div className='min-w-full mt-2 px-5 min-h-[5vh]'>
                <div className='border-2 border-black  p-1  rounded-xl flex items-center justify-center'>
                  <button 
                    className={`w-full h-full p-2 rounded-xl ${!isSignUp ? 'bg-black text-white' : 'bg-white text-black'}`} 
                    onClick={() => setIsSignUp(false)}
                  >
                    Sign in
                  </button>
                  <button 
                    className={`w-full h-full  p-2 rounded-xl ${isSignUp ? 'bg-black text-white' : 'bg-white text-black'}`} 
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            )}

            {isResetPassword ? (
              <>
                <div className='min-w-full mt-5 px-5 min-h-[5vh]'>
                  <h1 className='text-center text-4xl grifter-font'>Reset Password</h1>
                  <h2>Enter your email to reset password</h2>
                </div>
                <form onSubmit={handleSubmit} className='min-w-full mt-5 px-5'>
                  <div className='flex flex-col text-left gap-2 mb-5'>
                    <label htmlFor="reset-email">Email</label>
                    <input 
                      type="email" 
                      id='reset-email' 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className='border-2 border-black p-2 px-3 rounded' 
                      required
                    />
                  </div>
                  <div className='flex mt-5'>
                    <button 
                      type='submit' 
                      disabled={isLoading}
                      className='bg-black w-full text-white p-2 px-3 rounded hover:bg-gray-800 disabled:opacity-50'
                    >
                      {isLoading ? 'Sending...' : 'Send Reset Email'}
                    </button>
                  </div>
                </form>
              </>
            ) : !isSignUp ? (
              <>
                <div className='min-w-full mt-5 px-5 min-h-[5vh]'>
                  <h1 className='text-center text-4xl grifter-font'>Welcome Back</h1>
                  <h2>Login into your account</h2>
                </div>
                <form onSubmit={handleSubmit} className='min-w-full mt-5 px-5'>
                  <div className='flex flex-col text-left gap-2 mb-5'>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id='email' 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className='border-2 border-black p-2 px-3 rounded' 
                      required
                    />
                  </div>
                  <div className='flex flex-col text-left gap-2'>
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id='password' 
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className='border-2 border-black p-2 px-3 w-full rounded' 
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <button 
                      type="button"
                      className="text-sm text-gray-600 hover:text-black"
                      onClick={() => setIsResetPassword(true)}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className='flex mt-5'>
                    <button 
                      type='submit' 
                      disabled={isLoading}
                      className='bg-black w-full text-white p-2 px-3 rounded hover:bg-gray-800 disabled:opacity-50'
                    >
                      {isLoading ? 'Signing in...' : 'Login'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className='min-w-full mt-5 px-5 min-h-[5vh]'>
                  <h1 className='text-center text-4xl grifter-font'>Create Account</h1>
                  <h2>Sign up for a new account</h2>
                </div>
                <form onSubmit={handleSubmit} className='min-w-full mt-5 px-5'>
                  <div className='flex flex-col md:flex-row gap-2 mb-5'>
                    <div className='flex flex-col text-left gap-2 flex-1'>
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id='firstName' 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className='border-2 border-black p-2 px-3 rounded' 
                        required
                      />
                    </div>
                    <div className='flex flex-col text-left gap-2 flex-1'>
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id='lastName' 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className='border-2 border-black p-2 px-3 rounded' 
                        required
                      />
                    </div>
                  </div>
                  <div className='flex flex-col text-left gap-2 mb-5'>
                    <label htmlFor="signup-email">Email</label>
                    <input 
                      type="email" 
                      id='signup-email' 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className='border-2 border-black p-2 px-3 rounded' 
                      required
                    />
                  </div>
                  <div className='flex flex-col text-left gap-2 mb-5'>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id='phone' 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='border-2 border-black p-2 px-3 rounded' 
                      required
                    />
                  </div>
                  <div className='flex flex-col text-left gap-2 mb-5'>
                    <label htmlFor="signup-password">Password</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id='signup-password' 
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className='border-2 border-black p-2 px-3 w-full rounded' 
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col text-left gap-2'>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <div className="relative">
                      <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        id='confirm-password' 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className='border-2 border-black p-2 px-3 w-full rounded' 
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div className='flex mt-5'>
                    <button 
                      type='submit' 
                      disabled={isLoading}
                      className='bg-black w-full text-white p-2 px-3 rounded hover:bg-gray-800 disabled:opacity-50'
                    >
                      {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login
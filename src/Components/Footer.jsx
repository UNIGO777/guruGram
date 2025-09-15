import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#3B3D2A] text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Contact Section */}
          <div className="lg:col-span-2 col-span-full">
            <h3 className="text-white text-lg font-medium mb-4">We love to hear from you</h3>
            <p className="text-gray-300 text-sm mb-2">Don't like the form? Drop us a line via email</p>
            <a href="mailto:connect@inefra.in" className="text-gray-300 text-sm hover:text-white transition-colors">
              connect@inefra.in ↗
            </a>
            
            <div className="mt-8">
              <p className="text-gray-300 text-sm mb-2">The Business Centre, 61 Wellfield Road</p>
              <p className="text-gray-300 text-sm mb-2">CF24 3DG</p>
              <p className="text-gray-300 text-sm">0208 068 2282, 01249 448142</p>
            </div>
            
            <div className="mt-8">
              <p className="text-gray-300 text-sm mb-4">Fill out our form to give us little bit idea!</p>
              <h2 className="text-white text-4xl sm:text-6xl lg:text-8xl mt-10 font-light">Let's Talk</h2>
            </div>
          </div>

          {/* UpSkill Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">UpSkill</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Vision</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Mission</a></li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-white text-sm font-medium mb-4">Follow Us :</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Legals Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Legals</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Terms of service</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-medium mb-6">Follow Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Behance</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Dribbble</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Dribbble</a></li>
              <li><a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#30321D] p-4">
        <p className="text-gray-400 text-sm text-center">
          Copyright Inefra Studio - All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
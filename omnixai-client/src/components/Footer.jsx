import React from 'react';
import { assets } from '../assets/assets';
import { Sparkles, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Background section above footer */}
      <div className="w-full bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-20 xl:px-32 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-green-500" />
            <span className="text-green-500 font-semibold text-sm uppercase tracking-wider">Ready to Get Started?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join <span className="gradient-text">OmnixAI</span> Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the power of AI-driven content creation. Start creating amazing content in minutes, not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-medium">
              <Sparkles className="w-4 h-4" />
              Start Creating Now
            </button>
            <button className="flex items-center gap-2 bg-white text-gray-700 px-8 py-3 rounded-full border border-green-200 hover:border-green-300 hover:shadow-md transition-all duration-300 font-medium">
              <Mail className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 md:px-16 lg:px-24 xl:px-32 pt-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-10 border-b border-gray-700">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <img src={assets.logo} alt="OmnixAI Logo" className="h-14" />
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400 font-medium">Powered by AI</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the power of AI with <strong className="text-white">OmnixAI</strong>. Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your productivity like never before.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">AI Article Writer</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Image Generation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Background Removal</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Resume Review</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">API Documentation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pb-8 text-gray-400 text-sm">
          <p>
            &copy; 2025 <span className="text-white font-medium">OmnixAI</span>. All rights reserved.
          </p>
          <p>Made By Aditya.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/aditya-cse-21" className="hover:text-white transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;

import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Sparkles, ArrowRight, Users, Zap } from "lucide-react";

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-20 xl:px-32 text-center pt-20 pb-8">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-green-200 shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
          <span className="text-gray-700 text-xs sm:text-sm font-medium">Powered by Advanced AI</span>
        </div>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="text-gray-900">Create Amazing Content</span>
          <br />
          <span className="gradient-text">with OmnixAI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 text-gray-600 leading-relaxed px-4">
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow with cutting-edge artificial intelligence.
        </p>

        {/* CTA Button */}
        <div className="mb-12 sm:mb-16">
          <button 
            onClick={() => navigate('/ai')} 
            className="flex items-center gap-2 sm:gap-3 gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-base sm:text-lg"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            Start Creating Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-gray-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            <span className="text-base sm:text-lg font-semibold">10K+</span>
            <span className="text-xs sm:text-sm">Trusted Users</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            <span className="text-base sm:text-lg font-semibold">1M+</span>
            <span className="text-xs sm:text-sm">AI Generations</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            <span className="text-base sm:text-lg font-semibold">99.9%</span>
            <span className="text-xs sm:text-sm">Uptime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 
import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-50 w-full bg-white/80 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 sm:px-20 xl:px-32">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="relative">
            <img
              src={assets.logo}
              alt="OmnixAI"
              className="w-40 sm:w-48 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-4 h-4 text-green-500 animate-pulse" />
            </div>
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Welcome back, {user.firstName || 'User'}
            </div>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-full ring-2 ring-green-200 hover:ring-green-400 transition-all duration-300"
                }
              }}
            />
          </div>
        ) : (
          <button 
            onClick={openSignIn} 
            className="flex items-center gap-2 rounded-full text-sm cursor-pointer gradient-bg text-white px-8 py-3 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 font-medium"
          >
            <Sparkles className="w-4 h-4" />
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

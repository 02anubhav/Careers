import React from "react";
import { ArrowRight } from "lucide-react";


const HeroSection2 = () => {
  return (
    <div className="min-h-full  bg-black text-white lg:p-4 xl:py-2 2xl:py-14">
      <div className="max-w-full min-h-screen lg: mx-auto px-4 lg:py-12 border border-amber-300 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center bg-purple-400">
          {/* Right Column - Content */}
          <div className="space-y-8 bg-amber-400">
            {/* Career Badge */}
            <div className="inline-block">
              <span className="bg-white/10 text-purple-500 font-semibold px-4 py-2 rounded-full">
                CAREERS
              </span>
            </div>

            {/* Main Text */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              It's time to build great Trading solutions for India
            </h1>

            {/* Stats */}
            <div className="flex gap-8 items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-lg text-gray-300">60+ open roles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500" />
                <span className="text-lg text-gray-300">Hiring fast!</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2">
              Explore All Roles
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="#/img/"
              alt="Trading Solutions"
              className="rounded-lg w-full h-full object-cover"
            />

            {/* Purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;

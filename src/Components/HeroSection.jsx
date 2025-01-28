import React from "react";
import { ArrowRight } from "lucide-react";
// import Collab from "../assets/Collab.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen ">
          {/* Left Column */}
          <div className="space-y-8 ">
            {/* Careers Badge */}
            <div className="inline-block">
              <span className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold">
                CAREERS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl text-white font-bold leading-tight">
              It's time to build
              <br />
              great Trading
              <br />
              solutions for
              <br />
              India
            </h1>

            {/* Stats Row */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">60+ open roles</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-400">Hiring fast!</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-colors">
              <span>Explore All Roles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-full min-h-[500px] ">
            <img
              src={Collab}
              alt="Trading Team Illustration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Collab from '../assets/Collab.png'

;

const Careers = () => {
  const style = {
    fontFamily: "Syne-Bold",
  };
  return (
    <div className="min-h-screen bg-black py-12 px-12">
      <div className="max-w-7xl  pt-4 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Hero Content */}
          <div>
            <div className="inline-block bg-emerald-50 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              CAREERS
            </div>

            <h1 className={`text-5xl md:text-[3rem] text-white font-${style} leading-tight mb-8`}>
              It's time to build great
              <br />
              Trading solutions for
              <br />
              India
            </h1>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
                <span className="text-[#a1a1aa] text-lg">60+ open roles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
                <span className="text-[#a1a1aa] text-lg">Hiring fast!</span>
              </div>
            </div>

            <button className="bg-[#ab20fd] px-8 font-semibold text-white py-4 rounded-xl flex items-center justify-center gap-4 transition-transform duration-300 group">
              Explore All Roles
              <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                <CgArrowLongRight size={28} />
              </span>
            </button>
          </div>

          {/* Right Side - Image and Design Elements */}
          <div className="relative  h-full ">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0  blur bg-[#ab20fd]  rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0  blur bg-amber-300 rounded-3xl transform -rotate-3"></div>

            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* Placeholder Image */}
              <img
                src={Collab}
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
{/*             
             <video
              src={Comp1}
              className="w-full h-full object-cover"
              autoPlay
              loop></video> */}

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="text-emerald-800 font-medium">
                  Join Our Team
                </div>
                <div className="text-emerald-600 text-sm">
                  Building the future of trading
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <div className="w-2 h-2 rounded-full bg-lime-400"></div>
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              </div>
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-lime-400 w-20 h-20 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-400 w-16 h-16 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
// import Collab from "../assets/Collab.png";

function Hero() {
  return (
    <section class="bg-gray-50 ">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-7   px-6 py-6 lg:px-20 lg:py-7 xl:py-9 bg-black">
        {/* <!-- Left Side --> */}
        <div className="text-center lg:text-left">
          {/* Badge */}
          <div className="inline-block bg-emerald-50 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            CAREERS
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-[3.5rem] 2xl:text-[5.3rem] text-white font-bold leading-tight mb-6">
            It's time to build great  Trading solutions for <br /> India
          </h1>

          {/* Job Status */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-lime-400 rounded-full"></span>
              <span className="text-[#a1a1aa] text-base sm:text-lg">
                60+ open roles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
              <span className="text-[#a1a1aa] text-base sm:text-lg">
                Hiring fast!
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#ab20fd] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white rounded-xl flex items-center justify-center gap-3 transition-transform duration-300 group mx-auto lg:mx-0">
            Explore All Roles
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              <CgArrowLongRight size={24} />
            </span>
          </button>
        </div>

        {/* <!-- Right Side --> */}
        <div class="flex justify-center ">
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 blur-xl bg-[#ab20fd] rounded-3xl transform rotate-3 opacity-30"></div>
            <div className="absolute inset-0 blur-xl bg-amber-300 rounded-3xl transform -rotate-3 opacity-30"></div>

            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
              {/* <img
                src={Collab}
                alt="Team collaboration"
                className="w-full h-full sm:h-72 md:h-96 lg:h-[400px] xl:h-[470px] 2xl:h-[550px] object-cover"
              /> */}

              {/* Floating Stats Card */}
              {/* <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg">
                <div className="text-emerald-800 font-medium text-sm sm:text-base">
                  Join Our Team
                </div>
                <div className="text-emerald-600 text-xs sm:text-sm">
                  Building the future of trading
                </div>
              </div> */}

              {/* Decorative Dots */}
              {/* <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-lime-400"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink-400"></div>
              </div> */}
            </div>

            {/* Additional Floating Elements */}
            {/* <div className="absolute -top-4 -right-4 bg-lime-400 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 bg-emerald-400 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full opacity-60"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-black max-h-screen relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#ab20fd]/20 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ab20fd]/10 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-8">
            <div className="inline-block">
              <span className="bg-white text-purple-600 px-8 py-2 rounded-full font-semibold">
                CAREERS
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              It's time to build
              <span className="text-[#ab20fd]">
                <br /> great Trading
              </span>
              solutions <br />
              for
              <span className="text-[#ab20fd]"> India</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-lg mb-12">
              Join us in revolutionizing the trading landscape of India with
              cutting-edge analytics and intelligent solutions.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#ab20fd] text-white px-6 py-3 rounded-lg hover:bg-[#ab20fd]/90 transition-all group">
              <span>Explore Careers</span>
              <ArrowRight className="w-10 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative z-10">
            <div className="relative">
              {/* Border Gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ab20fd] to-purple-600 rounded-lg opacity-30 blur" />

              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-black border border-white/10">
                <div className="aspect-[4/3]">
                  <img
                    src="/api/placeholder/800/600"
                    alt="Trading Analytics Dashboard"
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10">
                  <div className="grid grid-cols-3 divide-x divide-white/10">
                    <div className="p-4 text-center">
                      <div className="text-[#ab20fd] font-bold text-2xl">
                        50K+
                      </div>
                      <div className="text-gray-400 text-sm">
                        Active Traders
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-[#ab20fd] font-bold text-2xl">
                        ₹100Cr+
                      </div>
                      <div className="text-gray-400 text-sm">Daily Volume</div>
                    </div>
                    <div className="p-4 text-center">
                      <div className="text-[#ab20fd] font-bold text-2xl">
                        15+
                      </div>
                      <div className="text-gray-400 text-sm">Markets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

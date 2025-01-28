import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 px-6 py-4 lg:px-12 items-center">
        {/* Left Side */}
        <div>
          <span className="text-xl xl:text-2xl font-semibold text-white">
            TradyLytics
          </span>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex gap-6 justify-end items-center">
          <a
            href="#"
            className="text-white text-sm xl:text-xl hover:text-gray-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-sm xl:text-xl hover:text-gray-400 transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-white text-sm xl:text-xl hover:text-gray-400 transition"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-white text-sm xl:text-xl hover:text-gray-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 p-4 space-y-2">
          <a
            href="#"
            className="block text-white text-lg hover:text-gray-400 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-gray-400 transition"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-gray-400 transition"
          >
            Careers
          </a>
          <a
            href="#"
            className="block text-white text-lg hover:text-gray-400 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


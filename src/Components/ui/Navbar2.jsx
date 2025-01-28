import React, { useState } from "react";
import { Menu, X} from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md">
      {/* Main navbar container */}
      <div className="max-w-full mx-auto px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and company name */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">TradyLytics</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Careers", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-white hover:text-[#ab20fd] transition-colors group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ab20fd] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-[#ab20fd] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <a
                href="#"
                className="text-slate-700 hover:text-[ab20fd] transition-colors px-2 py-1 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-[ab20fd] transition-colors px-2 py-1 rounded-md"
              >
                Careers
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-[ab20fd] transition-colors px-2 py-1 rounded-md"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;

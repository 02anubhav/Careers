import React from 'react'

function Navbar() {
  
  return (
    <>
      <nav className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-semibold text-white">
                TradyLytics
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
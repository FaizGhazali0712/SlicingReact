import React from 'react';
import { NAV_ITEMS } from '../constants/navigation';

const Navbar = () => {

  return (
    <nav className="bg-white p-4 shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          {/* Logo Circle Gradient */}
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center overflow-hidden">
             {/* Jika punya gambar logo asli, uncomment baris bawah ini */}
              <img src="Logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
             {/* <div className="w-8 h-8 bg-white rounded-full"></div> */}
          </div>
             <div className="w-4 h-4 bg-white rounded-full opacity-50 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-gray-600 hover:text-purple-600 transition duration-150 text-base font-medium"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button 
          className="cursor-pointer bg-linear-to-r from-purple-700 to-indigo-700 text-white font-semibold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Contact us
        </button>
    </nav>
  );
};

export default Navbar;
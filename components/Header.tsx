import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg py-4 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}square logo.png`}
            alt="VIP Booking"
            className="h-24 w-auto"
          />

          <div className="ml-12 hidden lg:block">
            <span className="text-2xl font-bold text-blue-700 tracking-tight">
              Your Clients Stay Yours
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors duration-200">Services</a>
          <a href="#features" className="text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors duration-200">Features</a>
          <a href="#payment" className="text-sm font-semibold text-gray-600 hover:text-blue-700 transition-colors duration-200">Payment</a>
          <a href="#contact" className="bg-black text-white px-8 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="bg-white py-4 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/square logo.png"
            alt="VIP Booking"
            className="h-24 w-auto"
          />

          <div className="ml-12 hidden md:block">
            <span className="text-[28px] font-bold text-[#0066cc] tracking-tight">
              Your Clients Stay Yours
            </span>
          </div>
        </div>

        <div>
          <button className="bg-black text-white px-9 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-sm active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;


import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-white py-4 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo Section - Handcrafted to match PNG logo */}
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-1.5">
                <span className="text-3xl font-black text-amber-500 italic tracking-tighter leading-none" style={{ fontFamily: 'sans-serif' }}>VIP</span>
                <div className="text-[#0055ff]">
                  <i className="fas fa-calendar-check text-4xl"></i>
                </div>
             </div>
             <span className="text-[#003366] font-black text-[9px] tracking-[0.4em] mt-0.5 leading-none">BOOKING</span>
          </div>
          
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

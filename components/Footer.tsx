
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Powered by Link Cloud */}
        <div className="flex items-center gap-3">
          <span className="text-gray-300 text-base tracking-wide">Powered by</span>
          <div className="flex items-center gap-1">
            <span className="bg-cyan-500 text-white text-sm font-bold px-2.5 py-0.5 rounded">
              link
            </span>
            <span className="text-white text-xl font-light tracking-wide">Cloud</span>
          </div>
        </div>

        {/* Payment supported by ANZ Worldline */}
        <div className="flex items-center gap-3">
          <span className="text-gray-300 text-base tracking-wide">Payment supported by</span>
          <div className="flex flex-col items-center leading-tight">
            <div className="flex items-center gap-1">
              <span className="text-cyan-400 font-extrabold text-lg tracking-tight">ANZ</span>
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
              </svg>
              <span className="text-white font-extrabold text-lg tracking-wider ml-1">WORLD</span>
              <span className="text-cyan-400 font-extrabold text-lg tracking-wider">LINE</span>
              <svg className="w-6 h-4 text-cyan-400 ml-1" viewBox="0 0 30 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12 Q8 4 14 8 Q20 12 26 4" />
              </svg>
            </div>
            <span className="text-gray-400 text-[10px] tracking-widest uppercase">Payment Solutions</span>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 text-gray-200 text-base tracking-wider">
          <a href="tel:1800567899" className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-phone-alt text-sm"></i>
            <span>1800 567 899</span>
          </a>
          <a href="mailto:register@vipbooking.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-envelope text-sm"></i>
            <span>register@vipbooking.com.au</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Powered by</span>
            <div className="font-bold text-xl tracking-tighter">
              LINK <span className="text-blue-400">Cloud</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Payment supported by</span>
            <span className="font-bold italic text-blue-300">ANZ Worldline</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-300">
          <a href="tel:1800567899" className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-phone"></i>
            1 800 567 899
          </a>
          <a href="mailto:register@vipbooking.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
            <i className="fas fa-envelope"></i>
            register@vipbooking.com.au
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 w-full text-xs text-gray-500">
          &copy; {new Date().getFullYear()} VIP Booking. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

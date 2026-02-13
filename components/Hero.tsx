
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#003fb5] via-[#0055ff] to-[#0077ff] pt-12 pb-32 md:pb-48 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left pt-8 md:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold mb-4 tracking-tight leading-[1.1]">
              Online Booking,
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-[68px] font-bold leading-tight opacity-95">
              Simple & Powerful
            </h2>
          </div>

          {/* Right Assets Section */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl transform lg:translate-x-8">
               {/* Main Dashboard Asset - Using absolute path */}
               <div className="bg-white rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.3)] p-1.5 md:p-2 border-[8px] border-white/10 overflow-hidden transition-transform duration-500 hover:scale-[1.01]">
                  <img 
                    src={`${import.meta.env.BASE_URL}WebCalendar.png`}
                    alt="Multi-Staff Scheduling Dashboard" 
                    className="w-full h-auto rounded-[1.6rem] block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/white/0055ff?text=WebCalendar.png+Missing';
                    }}
                  />
               </div>
               
               {/* Overlapping Mobile Phone Asset - Using absolute path */}
               <div className="absolute -right-4 md:-right-8 -bottom-10 md:-bottom-16 w-[35%] max-w-[220px] bg-white rounded-[2.8rem] shadow-[0_35px_70px_rgba(0,0,0,0.4)] p-1.5 border-[6px] border-white overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px]">
                  
                  <img 
                    src={`${import.meta.env.BASE_URL}PhoneCalendar.png`}
                    alt="Mobile App Booking" 
                    className="w-full h-auto rounded-[2.3rem] block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x800/white/0055ff?text=Mobile.png+Missing';
                    }}
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation/Carousel Dots */}
      <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <span className="w-2.5 h-2.5 rounded-full bg-black/20 cursor-pointer"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-black cursor-pointer shadow-sm"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-black/20 cursor-pointer"></span>
      </div>

      {/* Smooth Wavy Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none transform translate-y-[1px]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] md:h-[140px]" 
          fill="#f9fafb"
        >
          <path d="M0,0 C150,90 400,120 600,60 C800,0 1050,30 1200,100 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

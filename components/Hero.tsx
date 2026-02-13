import React, { useEffect, useRef, useState } from "react";

type SlideVisual = "mobile" | "dashboard" | "growth";

type HeroSlide = {
  titleLineOne: string;
  titleLineTwo: string;
  subtitle: string;
  visual: SlideVisual;
};

const slides: HeroSlide[] = [
  {
    titleLineOne: "Your Own Platform.",
    titleLineTwo: "Your Own Client",
    subtitle:
      "Build under your brand and keep every booking relationship where it belongs: with your business.",
    visual: "mobile",
  },
  {
    titleLineOne: "Online Booking,",
    titleLineTwo: "Simple & Powerful",
    subtitle:
      "Manage appointments, staff schedules, and availability in one streamlined calendar view.",
    visual: "dashboard",
  },
  {
    titleLineOne: "Own Your Clients.",
    titleLineTwo: "Grow Your Business.",
    subtitle:
      "Reach customers directly with offers and bring them back without giving your database away.",
    visual: "growth",
  },
];

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const renderVisual = (visual: SlideVisual): React.ReactNode => {
    if (visual === "mobile") {
      return (
        <div className="relative w-full max-w-[320px]">
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-52 h-24 bg-white/85 rounded-full blur-[1px]"></div>
          <div className="relative bg-[#f9f9f9] border-[8px] border-white rounded-[2.8rem] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
            <img
              src={`${import.meta.env.BASE_URL}phone.png`}
              alt="Mobile booking screen"
              className="w-full h-auto rounded-[2.2rem] block"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/540x1080/ffffff/0055ff?text=PhoneCalendar";
              }}
            />
          </div>
        </div>
      );
    }

    if (visual === "dashboard") {
      return (
        <div className="relative w-full max-w-[620px] pb-6 md:pb-8">
          <div className="absolute -left-10 bottom-12 w-56 h-24 bg-white/85 rounded-full blur-[1px]"></div>
          <div className="relative bg-white rounded-[2rem] border-[6px] border-white/20 shadow-[0_20px_55px_rgba(0,0,0,0.3)] p-2">
            <img
              src={`${import.meta.env.BASE_URL}WebCalendar.png`}
              alt="Web calendar dashboard"
              className="w-full h-auto rounded-[1.6rem] block"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/1280x800/ffffff/0055ff?text=WebCalendar";
              }}
            />
          </div>
          <div className="absolute right-1 md:right-2 -bottom-6 md:-bottom-8 w-[28%] max-w-[190px] bg-white rounded-[2.2rem] border-[5px] border-white p-1.5 shadow-[0_28px_60px_rgba(0,0,0,0.35)]">
            <img
              src={`${import.meta.env.BASE_URL}PhoneCalendar.png`}
              alt="Mobile companion booking view"
              className="w-full h-auto rounded-[1.7rem] block"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full max-w-[590px] pb-6 md:pb-8">
        <div className="absolute -top-5 right-10 w-36 h-36 rounded-full bg-white/15 blur-2xl"></div>
        <div className="relative bg-white rounded-[1.8rem] p-2 border-[6px] border-white/20 shadow-[0_20px_55px_rgba(0,0,0,0.3)]">
          <img
            src={`${import.meta.env.BASE_URL}income_up.png`}
            alt="Marketing campaign tools"
            className="w-full h-auto rounded-[1.4rem] block"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/1200x700/ffffff/0055ff?text=Marketing";
            }}
          />
        </div>
        <div className="absolute -bottom-6 md:-bottom-8 right-1 md:right-2 w-[40%] max-w-[230px] bg-white rounded-[1.4rem] p-1.5 border-[5px] border-white shadow-[0_22px_44px_rgba(0,0,0,0.35)]">
          <img
            src={`${import.meta.env.BASE_URL}Database.png`}
            alt="Client database control"
            className="w-full h-auto rounded-[1rem] block"
          />
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f2f2f2]">
      <div
        className="relative w-full bg-gradient-to-r from-[#0d1d85] via-[#004fba] to-[#1770cf] pt-14 pb-28 md:pt-16 md:pb-32"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.15),transparent_46%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className="overflow-x-hidden overflow-y-visible"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => {
              touchStartX.current = null;
              touchStartY.current = null;
              setIsPaused(false);
            }}
          >
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <article
                  key={slide.titleLineOne}
                  className="w-full shrink-0"
                  aria-hidden={index !== activeSlide}
                >
                  <div className="grid lg:grid-cols-2 items-center gap-10 md:gap-14 min-h-[460px] md:min-h-[520px]">
                    <div className="text-white text-center lg:text-left">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15]">
                        {slide.titleLineOne}
                      </h1>
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] mt-3">
                        {slide.titleLineTwo}
                      </h2>
                      <p className="mt-7 text-base sm:text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </div>

                    <div className="flex justify-center lg:justify-end lg:pr-10 xl:pr-14">
                      {renderVisual(slide.visual)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute left-0 right-0 md:-left-8 md:-right-8 lg:-left-12 lg:-right-12 top-[46%] -translate-y-1/2 z-20 hidden md:flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous hero slide"
              className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/35 transition-all duration-200 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next hero slide"
              className="pointer-events-auto h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/35 transition-all duration-200 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2.5">
            {slides.map((slide, index) => (
              <button
                key={`${slide.titleLineTwo}-${index}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to hero slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/75"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-px left-0 w-full pointer-events-none leading-[0]">
          <svg
            viewBox="0 0 1200 130"
            preserveAspectRatio="none"
            className="w-full h-[70px] md:h-[90px]"
            fill="#d5dce8"
          >
            <path d="M0,67 C140,20 340,16 560,56 C800,100 1010,88 1200,36 L1200,130 L0,130 Z"></path>
          </svg>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute left-0 bottom-0 w-full h-[60px] md:h-[82px]"
            fill="#f2f2f2"
          >
            <path d="M0,34 C170,96 420,104 620,62 C840,18 1045,24 1200,62 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services", sectionId: "services" },
  { href: "#features", label: "Features", sectionId: "features" },
  { href: "#payment", label: "Payment", sectionId: "payment" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.filter((l) => l.sectionId !== "contact").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 border-b-2 pb-0.5 ${
                activeSection === link.sectionId
                  ? "text-blue-700 border-blue-700"
                  : "text-gray-600 border-transparent hover:text-blue-700"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all duration-200 shadow-sm active:scale-95 ${
              activeSection === "contact"
                ? "bg-blue-700 text-white hover:bg-blue-800 hover:shadow-md"
                : "bg-black text-white hover:bg-gray-800 hover:shadow-md"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-blue-700 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 border-t border-gray-100 mt-4">
          {navLinks.filter((l) => l.sectionId !== "contact").map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-semibold transition-colors duration-200 py-1 ${
                activeSection === link.sectionId
                  ? "text-blue-700"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white px-8 py-2.5 rounded-full font-bold text-sm text-center hover:bg-gray-800 transition-all duration-200 shadow-sm mt-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

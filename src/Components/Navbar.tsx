// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="w-full bg-[#1C2B4D] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4 opacity-90">
            <span>Call us: +251 91 150 8734</span>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:g.fikre2@gmail.com" className="hidden sm:inline hover:text-[#00A99D] transition">g.fikre2@gmail.com</a>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#services" className="hover:text-[#00A99D] transition">Services</a>
            <a href="#about" className="hover:text-[#00A99D] transition">About</a>
            <a href="#testimonials" className="hover:text-[#00A99D] transition">Reviews</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md navbar-accent">
        <div className="max-w-7xl mx-auto  flex justify-between items-center">
          {/* Logo + brand */}
          <a href="/" className="flex items-center">
            <img src="/agame.jpg" alt="Logo" className="h-12 md:h-14 w-auto rounded-sm shadow-md" />
            <span className="ml-3 text-2xl md:text-3xl font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#00A99D] to-[#1C2B4D]">
              Eventify
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex px-6 py-4 md:py-5 items-center space-x-8 text-gray-700 font-medium">
            <li><a href="#home" className="link-underline hover:text-[#1C2B4D]">Home</a></li>
            <li><a href="#services" className="link-underline hover:text-[#1C2B4D]">Solutions</a></li>
            <li><a href="#about" className="link-underline hover:text-[#1C2B4D]">Our Approach</a></li>
            <li><a href="#gallery" className="link-underline hover:text-[#1C2B4D]">Gallery</a></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-[#00A99D] px-4 py-2 text-white font-semibold shadow-sm hover:opacity-90 transition">
              Get a Quote
            </a>
          </div>

          {/* Mobile button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown - Professional Brand-Aligned Design */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-[#1C2B4D] via-[#1C2B4D] to-[#00A99D] shadow-2xl">
            <div className="relative">
              {/* Decorative top border */}
              <div className="h-1 bg-gradient-to-r from-[#00A99D] to-[#1C2B4D]"></div>
              
              {/* Contact info section */}
              <div className="px-6 py-4 bg-[#1C2B4D]/90 backdrop-blur border-b border-white/10">
                <div className="flex flex-col space-y-2 text-white/90 text-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#00A99D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>+251 91 150 8734</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[#00A99D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <a href="mailto:g.fikre2@gmail.com" className="hover:text-[#00A99D] transition">g.fikre2@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Navigation menu */}
              <div className="px-6 py-6">
                <ul className="space-y-1">
                  <li>
                    <a 
                      href="#home" 
                      className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#00A99D] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Home</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#services" 
                      className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#00A99D] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Solutions</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#about" 
                      className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#00A99D] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Our Approach</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#gallery" 
                      className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#00A99D] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#testimonials" 
                      className="flex items-center px-4 py-3 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-2 h-2 bg-[#00A99D] rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="font-medium">Reviews</span>
              </a>
            </li>
          </ul>

                {/* CTA Button */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a 
                    href="#contact" 
                    className="block w-full bg-gradient-to-r from-[#00A99D] to-[#00A99D]/80 hover:from-[#00A99D]/90 hover:to-[#00A99D] text-white text-center font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>

              {/* Decorative bottom element */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#00A99D] rounded-t-full"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

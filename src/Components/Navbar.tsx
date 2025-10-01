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
          <span className="opacity-90">Call us: +251 91 150 8734</span>
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#services" className="hover:text-[#00A99D] transition">Services</a>
            <a href="#about" className="hover:text-[#00A99D] transition">About</a>
            <a href="#contact" className="hover:text-[#00A99D] transition">Contact</a>
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
            <li><a href="#contact" className="link-underline hover:text-[#1C2B4D]">Contact</a></li>
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

        {/* Mobile dropdown */}
        {isOpen && (
          <ul className="md:hidden bg-white/95 backdrop-blur px-6 pb-4 space-y-4 text-gray-800 font-medium shadow">
            <li><a href="#home" className="block" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" className="block" onClick={() => setIsOpen(false)}>Solutions</a></li>
            <li><a href="#about" className="block" onClick={() => setIsOpen(false)}>Our Approach</a></li>
            <li><a href="#contact" className="block" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li>
              <a href="#contact" className="mt-2 inline-flex items-center rounded-full bg-[#00A99D] px-4 py-2 text-white font-semibold shadow-sm" onClick={() => setIsOpen(false)}>
                Get a Quote
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/agame.jpg" alt="Logo" className="h-10 w-auto" />
          <span className="ml-2 text-xl font-bold text-purple-700">Eventify</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#services" className="hover:text-purple-600">Services</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

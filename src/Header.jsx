import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import icon from './Assets/icon.png';

const Header = () => {
  // using useState hook for hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full p-6 md:p-8 flex justify-start items-center z-50 bg-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Logo */}
      <img src={icon} alt="logo" className='h-16' />

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-green-600 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white lg:pl-60 md:bg-transparent md:flex space-y-4 md:space-y-0 flex-col md:flex-row md:space-x-4 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${isOpen ? 'block' : 'hidden md:flex'}`}
      >
        <a href="#Parallax" className="text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300 bg-teal-50 ">Home</a>
        <a href="#Aboutsection" className="text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300 bg-teal-50">About</a>
        <a href="#Services" className="text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300 bg-teal-50">Services</a>
        <a href="#contactsection" className="text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-600 hover:text-white transition duration-300 bg-teal-50">Contact</a>
      </nav>
    </header>
  );
};

export default Header;

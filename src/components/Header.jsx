import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-blue-900 via-cyan-900 to-teal-900 shadow-2xl'
          : 'bg-gradient-to-r from-blue-800 via-cyan-800 to-teal-800 shadow-xl'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-wide">
            ParlerVue
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('introduction')}
              className="text-white hover:text-cyan-200 transition-colors duration-200 font-medium"
            >
              Introduction
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-cyan-200 transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('reports')}
              className="text-white hover:text-cyan-200 transition-colors duration-200 font-medium"
            >
              Reports
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 ">
      <div className="relative z-50 flex justify-between items-center h-14 mx-4 md:mx-6 mt-4 px-5 md:px-8 rounded-full border border-white/15 bg-[#0b2530]/80 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">💙</span>
          <h1 className="text-xs tracking-[0.3em] text-gray-300 font-medium uppercase">
            T.F
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="#contact"
            className="inline-block px-3 py-1.5 sm:px-5 sm:py-2 border border-cyan-700/50 rounded-lg text-[10px] sm:text-sm text-gray-200 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
          >
            Contact me
          </a>

          <button
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400 transition-colors flex items-center space-x-3 group"
          >
            <span className="text-sm font-medium tracking-widest uppercase hidden md:inline">
              {isOpen ? 'Close' : 'Menu'}
            </span>
            <div className="relative w-6 h-6 flex items-center justify-center">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop Dimmer */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Right-Side Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[400px] bg-[#061920] border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out z-40 flex flex-col justify-center px-12 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item} className="relative group w-fit">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-4xl md:text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300 block"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
              {/* The Line that "comes out" on hover */}
              <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Bottom Social Icons */}
        <div className="mt-20 ">
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-6">
            Socials
          </p>
          <div className="flex  space-x-10">
            <a
              href="https://www.linkedin.com/in/tsionfk30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FaLinkedin size={26} />
            </a>
            <a
              href="https://github.com/345ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="mailto:tsionfikre385@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all"
            >
              <FaEnvelope size={26} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

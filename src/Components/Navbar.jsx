import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Once the page has scrolled a little, show a soft fade behind the top bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  // At the very top the bar sits over the dark Home panel, so it is light there.
  // After scrolling (or with the white menu open) it is charcoal.
  const onDark = !scrolled && !isOpen;

  return (
    <nav className="fixed w-full z-50">
      {/* Fade: hides text that scrolls under the top bar. It starts to the
          RIGHT of the Home panel, so it never covers the panel. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-[90px] min-[1100px]:left-[var(--pw)] bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_50%,transparent_100%)] transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-50 flex justify-end items-center">
        {/* TOP BAR */}
        <div className="w-1/2 min-h-[80px] flex items-center justify-end space-x-6 px-6 md:px-10">
          {/* Contact me is hidden while the menu is open */}
          <a
            href="#contact"
            className={`${
              isOpen ? 'hidden' : 'inline-block'
            } px-3 py-1.5 sm:px-5 sm:py-2 border rounded-lg text-[10px] sm:text-sm transition-all duration-300 ${
              onDark
                ? 'border-[#b0b0b0] text-white hover:bg-white/10 hover:border-white'
                : 'border-[#b0b0b0] text-[#333333] hover:bg-[#f0f0f0] hover:border-[#333333]'
            }`}
          >
            Contact me
          </a>

          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className={`transition-colors ${
              onDark
                ? 'text-white hover:text-[#b0b0b0]'
                : 'text-[#333333] hover:text-[#707070]'
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#333333]/50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Right-Side Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[400px] bg-white border-l border-[#b0b0b0] shadow-2xl transform transition-transform duration-500 ease-in-out z-40 flex flex-col justify-center px-12 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item} className="relative group w-fit">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-4xl md:text-4xl font-bold text-[#707070] group-hover:text-[#333333] transition-colors duration-300 block"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>

              <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-[#333333] transition-all duration-300 ease-in-out group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Socials */}
        <div className="mt-20">
          <p className="text-[#707070] text-xs tracking-widest uppercase mb-6">
            Socials
          </p>

          <div className="flex space-x-10">
            <a
              href="https://www.linkedin.com/in/tsion-fikre-3a5180327"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#333333] hover:scale-110 transition-all"
            >
              <FaLinkedin size={26} />
            </a>

            <a
              href="https://github.com/345ts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#707070] hover:text-[#333333] hover:scale-110 transition-all"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="mailto:tsionfikre385@gmail.com"
              className="text-[#707070] hover:text-[#333333] hover:scale-110 transition-all"
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
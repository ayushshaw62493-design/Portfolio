'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string, name: string) => {
    setActiveSection(name);
    const section = document.querySelector(href);
    if (section) {
      // smooth scroll with offset for fixed navbar
      const yOffset = -80; // adjust based on navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-3 px-2 sm:px-4 backdrop-blur-md glass-card border-b border-white/10">
      <div className="flex gap-2 sm:gap-4 overflow-x-auto px-2 sm:px-4">
        {sections.map((sec) => (
          <motion.button
            key={sec.name}
            onClick={() => scrollToSection(sec.href, sec.name)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-shrink-0 px-4 py-2 rounded-xl font-semibold text-sm transition-all border whitespace-nowrap ${
              activeSection === sec.name
                ? 'bg-cyan-400/20 border-cyan-400 text-white'
                : 'bg-white/5 border-white/20 text-gray-300'
            }`}
          >
            {sec.name}
          </motion.button>
        ))}
      </div>
    </nav>
  );
}
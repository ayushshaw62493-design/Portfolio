

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
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-4 backdrop-blur-md p-2 rounded-full glass-card border border-white/10">
      {sections.map((sec) => (
        <motion.button
          key={sec.name}
          onClick={() => scrollToSection(sec.href, sec.name)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all border ${
            activeSection === sec.name
              ? 'bg-cyan-400/20 border-cyan-400 text-white'
              : 'bg-white/5 border-white/20 text-gray-300'
          }`}
        >
          {sec.name}
        </motion.button>
      ))}
    </nav>
  );
}
'use client';

import { useState, useEffect } from 'react';

export function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const [active, setActive] = useState('About');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActive(link.name);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 flex justify-center py-4 glass-card">
      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`nav-link font-semibold text-lg transition-all ${
                active === link.name ? 'gradient-text' : 'text-gray-300'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
'use client';

import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ayushshaw62493-design', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ayush-kumar-shaw-414848333/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/itz_ayush__7?igsh=MWt4NGU0cGhxZTJ5eg==', label: 'Instagram' },
  { icon: Mail, href: 'mailto:ayushshaw62493@gmail.com', label: 'Email' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-cyan-400/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-3">
              Ayush Kumar Shaw
            </h3>
            <p className="text-gray-400 text-sm">
              Electronics & Communication Engineering Student | Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
           <ul className="space-y-2 text-sm">
  <li>
    <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
      About
    </a>
  </li>
  <li>
    <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
      Projects
    </a>
  </li>
  <li>
    <a href="#skill" className="text-gray-400 hover:text-cyan-400 transition-colors">
      Skills
    </a>
  </li>
  <li>
    <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
      Contact
    </a>
  </li>
</ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-400/10 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Ayush Kumar Shaw. Built with React, Three.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

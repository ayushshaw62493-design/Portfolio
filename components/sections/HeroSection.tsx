'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Terminal, Atom, GitBranch, Globe } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const lines = [
    "Ayush Kumar Shaw",
    "Electronics & Communication Engineer",
    "Full-stack developer specializing in innovative 3D web experiences, IoT solutions, and cutting-edge technology. Crafting immersive digital universes with code."
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    if (currentLine >= lines.length) return;

    let charIndex = 0;
    const line = lines[currentLine];
    const interval = setInterval(() => {
      setCurrentText(line.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === line.length) {
        clearInterval(interval);
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentText("");
        setCurrentLine((prev) => prev + 1);
      }
    }, currentLine === 2 ? 20 : currentLine === 1 ? 80 : 100);
    return () => clearInterval(interval);
  }, [currentLine, mounted]);

  // ⭐ Smooth scroll function
  const scrollToSection = (href: string, name: string) => {
    setActiveSection(name);
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skill' },
    { name: 'Contact', href: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <section id="about" className="scroll-section flex flex-col items-center relative px-6 pt-28 pb-12 overflow-hidden min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 flex justify-center py-4 glass-card">
        <ul className="flex gap-8">
          {sections.map((sec) => (
            <li key={sec.name}>
              <button
                onClick={() => scrollToSection(sec.href, sec.name)}
                className={`nav-link font-semibold text-lg transition-all ${
                  activeSection === sec.name ? 'gradient-text' : 'text-gray-300'
                }`}
              >
                {sec.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Floating tech icons */}
      <div className="floating-tech-icons">
        <div className="tech-icon" style={{ top: '10%', left: '5%' }} title="JavaScript"><Code2 size={32} /></div>
        <div className="tech-icon" style={{ top: '15%', right: '8%' }} title="Python"><Terminal size={32} /></div>
        <div className="tech-icon" style={{ top: '50%', right: '3%' }} title="React"><Atom size={32} /></div>
        <div className="tech-icon" style={{ bottom: '15%', left: '6%' }} title="Git"><GitBranch size={32} /></div>
        <div className="tech-icon" style={{ bottom: '20%', right: '5%' }} title="Web Dev"><Globe size={32} /></div>
      </div>

      {/* Main Hero */}
      <div className="max-w-5xl w-full relative z-10">
        <motion.div className="anim-up delay-1 text-center mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider backdrop-blur-sm border" style={{ background: 'rgba(0,217,255,0.15)', color: 'var(--primary)', borderColor: 'rgba(0,217,255,0.3)', boxShadow: '0 0 20px rgba(0,217,255,0.1)' }}>
            🚀 WELCOME TO MY DIGITAL UNIVERSE
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Sphere */}
          <motion.div className="anim-3d delay-1 flex justify-center relative h-80" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="neon-sphere-container relative" style={{ width: '280px', height: '280px' }}>
              <div className="sphere-ring ring-1" style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid var(--primary)', borderRadius: '50%', top: 0, left: 0, opacity: 0.4 }}></div>
              <div className="sphere-ring ring-2" style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid var(--secondary)', borderRadius: '50%', top: 0, left: 0, opacity: 0.3, transform: 'rotateX(60deg)' }}></div>
              <div className="sphere-ring ring-3" style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid var(--accent)', borderRadius: '50%', top: 0, left: 0, opacity: 0.2, transform: 'rotateY(60deg)' }}></div>
              <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, rgba(0,217,255,0.3), rgba(124,58,237,0.1))', boxShadow: '0 0 60px rgba(0,217,255,0.3), inset -20px -20px 60px rgba(0,217,255,0.1), 0 0 100px rgba(124,58,237,0.2)', animation: 'sphereGlow 4s ease-in-out infinite', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', zIndex: 2 }}>
                <Image src="/ayush.jpg" alt="Ayush Kumar Shaw" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
          </motion.div>

          {/* Hero content */}
          <motion.div className="space-y-6 text-center lg:text-left" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl lg:text-6xl font-bold gradient-text">
              {displayedLines[0] || currentText}
              {currentLine === 0 && <span className="blinking-cursor">|</span>}
            </h1>
            <p className="text-xl text-gray-300">
              {displayedLines[1] || (currentLine === 1 && currentText)}
              {currentLine === 1 && <span className="blinking-cursor">|</span>}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {displayedLines[2] || (currentLine === 2 && currentText)}
            </p>

            <div className="flex gap-4 justify-center lg:justify-start pt-4 flex-wrap">
              <motion.a href="#contact" className="neon-button px-8 py-3 rounded-lg font-semibold text-sm inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get in Touch</motion.a>
              <motion.a href="#projects" className="px-8 py-3 rounded-lg font-semibold border transition-all text-sm inline-block" style={{ borderColor: 'rgba(179,102,255,0.5)', color: 'var(--secondary)' }} whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(179,102,255,0.3)' }}>View Work</motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
        <ChevronDown size={24} className="text-cyan-400" />
      </motion.div>

      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1px;
          background-color: #00d9ff;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%,50%,100% {opacity:1;}
          25%,75% {opacity:0;}
        }
      `}</style>
    </section>
  );
}
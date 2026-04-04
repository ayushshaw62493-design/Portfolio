'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AboutSection() {
  const [mounted, setMounted] = useState(false);

  const cards = [
    {
      title: 'Full-Stack Development',
      content:
        'I build robust web applications using modern technologies with focus on scalability and performance. My stack includes Next.js, Tailwind CSS, Node.js, and more.',
    },
    {
      title: 'IoT & Web3',
      content:
        'I create interactive IoT systems with web interfaces and explore decentralized applications, bridging hardware with blockchain technology.',
    },
    {
      title: '3D Web & Animations',
      content:
        'Creating immersive 3D experiences on the web using Three.js, React Three Fiber, and Framer Motion for seamless animations and user engagement.',
    },
    {
      title: 'Design & UI/UX',
      content:
        'Passionate about crafting visually appealing interfaces with attention to user experience, accessibility, and interactive micro-animations.',
    },
  ];

  const [typedBoxText, setTypedBoxText] = useState('');
  const [typedCards, setTypedCards] = useState(cards.map(() => ({ title: '', content: '' })));

  const typeString = async (text: string, speed: number, setter: (val: string) => void) => {
    let current = '';
    for (let i = 0; i < text.length; i++) {
      current += text[i];
      setter(current);
      await new Promise(res => setTimeout(res, speed));
    }
  };

  const startTyping = async () => {
    // Box text slightly faster
    await typeString('Explore my professional journey and stay connected.', 50, setTypedBoxText);

    // Cards sequentially
    for (let idx = 0; idx < cards.length; idx++) {
      // Title
      await typeString(cards[idx].title, 50, val => {
        setTypedCards(prev => {
          const updated = [...prev];
          updated[idx] = { ...updated[idx], title: val };
          return updated;
        });
      });

      // Content
      await typeString(cards[idx].content, 35, val => {
        setTypedCards(prev => {
          const updated = [...prev];
          updated[idx] = { ...updated[idx], content: val };
          return updated;
        });
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    startTyping();
  }, []);

  return (
    <section
    id="about"
    className="grid-bg min-h-screen w-full bg-background py-20 px-4 perspective-[1200px]">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1 bg-white/10"></div>
<div className="floating-orb orb-2 bg-white/10"></div>
<div className="floating-orb orb-3 bg-white/10"></div>

      {/* Glass Card */}
      <div className="card-3d glass-card p-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
  About Me
</h2>

        {/* Professional Box */}
        <div className="mt-4 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 rounded-xl blur-3xl opacity-20 animate-pulse"></div>
          <motion.div
            className="relative bg-black/70 backdrop-blur-md border border-white/20 rounded-xl p-8 max-w-md mx-auto flex flex-col items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-cyan-300/70 text-lg font-medium mb-6">{typedBoxText}</p>

            <div className="flex gap-4 mt-2">
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-lg bg-cyan-400/80 hover:bg-cyan-500/80 transition-all duration-300 text-black font-semibold shadow-lg glow-btn"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-shaw-414848333/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600/80 hover:bg-blue-700/80 transition-all duration-300 text-white font-semibold shadow-lg glow-btn"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {typedCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="card-layered p-6 glass-card anim-up"
              initial={{ opacity: 0 }}
              animate={card.title.length > 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-3 gradient-text">{card.title}</h3>
              <p className="text-md text-muted-foreground">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="floating-tech-icons">
  <span className="tech-icon top-10 left-20 text-cyan-400 text-3xl">💻</span>
  <span className="tech-icon top-40 right-32 text-purple-400 text-4xl">⚡</span>
  <span className="tech-icon bottom-20 left-10 text-blue-400 text-3xl">🌐</span>
  <span className="tech-icon bottom-32 right-20 text-cyan-400 text-5xl">🛠️</span>
  <span className="tech-icon top-16 right-16 text-green-400 text-3xl">🖥️</span>
  <span className="tech-icon top-56 left-32 text-yellow-400 text-4xl">📡</span>
  <span className="tech-icon bottom-10 right-40 text-pink-400 text-3xl">🔧</span>
  <span className="tech-icon bottom-40 left-24 text-purple-400 text-5xl">📱</span>
  <span className="tech-icon top-24 left-48 text-orange-400 text-4xl">☁️</span>
  <span className="tech-icon bottom-16 right-8 text-red-400 text-3xl">🛡️</span>
</div>
    </section>
  );
}
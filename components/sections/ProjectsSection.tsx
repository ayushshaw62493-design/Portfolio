'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart Carbon Footprint Tracking',
    description:
      'Web3-based system for tracking and reducing carbon emissions with real-time analytics.',
    tags: ['Web3', 'Blockchain', 'Smart Contracts', 'Sustainability'],
    live: '#',
    github: '#'
  },
  {
    title: 'AI Image Generator',
    description:
      'Full-stack web application for generating and manipulating images using advanced AI models.',
    tags: ['React', 'Python', 'TensorFlow', 'Cloud'],
    live: '#',
    github: '#'
  },
  {
    title: 'Smart Home Dashboard',
    description:
      'Real-time IoT monitoring dashboard for home automation and energy management.',
    tags: ['Next.js', 'MQTT', 'Arduino'],
    live: '#',
    github: '#'
  },
  {
    title: 'Spam Detection Using Machine Learning',
    description:
      'System that identifies and filters spam messages using machine learning algorithms.',
    tags: ['NumPy', 'Pandas', 'Scikit-learn'],
    live: 'https://sms-detector-12.onrender.com',
    github: '#'
  },
  {
    title: 'E-Commerce Website',
    description:
      'Online cake ordering platform where users can browse cakes, customize designs, and place orders.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    live: 'https://bakemeacake.netlify.app',
    github: 'https://github.com/ayushshaw62493-design/codesoft'
  },
  {
    title: 'Portfolio UI Design',
    description:
      '3D interactive portfolio showcasing modern web design and animation.',
    tags: ['Three.js', 'React', 'Framer Motion'],
    live: '#',
    github: '#'
  },
  {
    title: 'AI Chat Application',
    description:
      'Chatbot application with natural language processing and context awareness.',
    tags: ['Node.js', 'React', 'PostgreSQL'],
    live: '#',
    github: '#'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="grid-bg min-h-screen w-full bg-background py-20 px-4 perspective-[1200px]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-card p-6 group transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transform hover:-translate-y-3 hover:scale-[1.03]"
            >

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/30 transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-400/30 hover:bg-purple-500/30 transition"
                >
                  <Github size={16} />
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Floating Icons */}
      <div className="floating-tech-icons">
        <span className="tech-icon top-10 left-20 text-cyan-400 text-3xl">💻</span>
        <span className="tech-icon top-40 right-32 text-purple-400 text-4xl">⚡</span>
        <span className="tech-icon bottom-20 left-10 text-blue-400 text-3xl">🌐</span>
        <span className="tech-icon bottom-32 right-20 text-cyan-400 text-5xl">🛠️</span>
        <span className="tech-icon top-16 right-16 text-green-400 text-3xl">🖥️</span>
        <span className="tech-icon top-56 left-32 text-yellow-400 text-4xl">📡</span>
        <span className="tech-icon bottom-10 right-40 text-pink-400 text-3xl">🔧</span>
        <span className="tech-icon bottom-40 left-24 text-purple-400 text-5xl">📱</span>
      </div>

    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Download } from 'lucide-react';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'CodSoft',
    period: 'Sep 2025 - Oct 2025',
    description:
      'Developed a full-stack Cake Shop website where users can register, login, browse cakes, add to cart, and place orders. Integrated MongoDB for dynamic cake data and built interactive cart functionality.',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'React'],
    live: 'https://bakemeacake.netlify.app',
    github: 'https://github.com/ayushshaw62493-design/codesoft',
    certificate: 'codesoft internship.pdf'
  },

  {
    title: 'Machine Learning Intern',
    company: 'Navodita Infotech',
    period: 'Jul 2025 - Aug 2025',
    description:
      'Worked on supervised and unsupervised ML models with real-world datasets. Performed preprocessing, feature engineering, and model evaluation using Python ML libraries.',
    tags: ['Machine Learning', 'NumPy', 'Pandas', 'Data Analysis'],
    live: 'https://sms-detector-12.onrender.com',
    github: '#',
    certificate: 'Internship.pdf'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
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
            Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-card p-6 group transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transform hover:-translate-y-3 hover:scale-[1.03]"
            >

              <div className="mb-3">
                <h3 className="text-xl font-bold text-cyan-400">
                  {exp.title}
                </h3>

                <p className="text-purple-400 text-sm">
                  {exp.company}
                </p>

                <p className="text-gray-400 text-xs">
                  {exp.period}
                </p>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="flex gap-3 flex-wrap">

                <a
                  href={exp.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/30 transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>

                <a
                  href={exp.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-400/30 hover:bg-purple-500/30 transition"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href={exp.certificate}
                  download
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-green-500/20 text-green-400 border border-green-400/30 hover:bg-green-500/30 transition"
                >
                  <Download size={16} />
                  Certificate
                </a>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}
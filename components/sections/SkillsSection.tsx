'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'PostgreSQL'] },
  { category: 'IoT & Hardware', items: ['Arduino', 'Raspberry Pi', 'Embedded Systems', 'MQTT'] },
  { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'Machine Learning', 'Data Analysis'] },
  { category: '3D Web', items: ['Three.js', 'WebGL', 'Babylon.js', 'Canvas API'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function SkillsSection() {
  return (
    <section
      id="skill"
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
            Skills & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 group transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transform hover:-translate-y-3 hover:scale-[1.03] hover:rotate-x-3 hover:rotate-y-3"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {skillGroup.category}
              </h3>

              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-center transition-all group-hover:text-white"
                  >
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </motion.div>

      </div>
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
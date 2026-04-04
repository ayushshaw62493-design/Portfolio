'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid-bg min-h-screen w-full bg-background py-20 px-4 perspective-[1200px]"
    >
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you" // optional, submit ke baad thank-you page dikhana hai
          variants={formVariants}
          initial="hidden"
          animate="visible"
          style={{ transformStyle: "preserve-3d" }}
          className="glass-card p-8 md:p-12 space-y-6 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] hover:scale-[1.01]"
        >
          {/* Netlify Hidden Input */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 bg-background border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-background border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-2">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message here..."
              className="w-full px-4 py-3 bg-background border border-cyan-400/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full neon-button flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>

        </motion.form>

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
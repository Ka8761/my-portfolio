"use client";

import { motion } from "framer-motion";
import { Globe, Code } from "lucide-react";

export default function StatsCards() {
  return (
    <section className="pt-10 pb-10 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Total Projects */}
        <motion.a
          href="#portfolio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top row: Icon left + Number right */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12">
              <Code className="w-full h-full text-purple-400 opacity-90" />
            </div>
            <span className="text-6xl md:text-7xl font-bold text-purple-400">4</span>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-3">Total Projects</h3>
          <p className="text-gray-300 text-lg">
            Innovative web solutions that solve real problems and delight users.
          </p>
        </motion.a>

        {/* Card 2: Years of Experience */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/30 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Top row: Icon left + Number right */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12">
              <Globe className="w-full h-full text-purple-400 opacity-90" />
            </div>
            <span className="text-6xl md:text-7xl font-bold text-purple-400">4+</span>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-3">Years of Experience</h3>
          <p className="text-gray-300 text-lg">
            Continued learning journey, evolving skills and embracing new challenges.
          </p>
        </motion.a>
      </div>
    </section>
  );
}
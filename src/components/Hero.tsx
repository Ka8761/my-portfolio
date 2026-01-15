"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const roles = ["Computer Engineer", "UI/UX Developer"];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setDelta(80 - Math.random() * 40);
      }, delta);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 40);
    } else if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, delta]);

  const email = 'dikachinwankwo575@gmail.com';
  const subject = 'Hire Me - Project Discussion';
  const body = 'Hello Dikachi,\n\nI\'d like to discuss a project with you.\n\nBest regards';

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-white pt-20 pb-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Full Stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-white">
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-2xl mb-4 text-gray-300"
        >
          <span className="inline-flex items-center justify-center md:justify-start gap-1 min-w-[280px] text-center md:text-left">
            <span className="font-semibold text-white">
              Tech enthusiast |
            </span>
            <span className="font-semibold text-purple-400">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-1 h-8 bg-purple-400 ml-1 translate-y-1"
              >
                &nbsp;
              </motion.span>
            </span>
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Enhancing digital experiences that are smooth, scalable, and made to
          impress.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["React", "JavaScript", "Node.js", "MongoDB", "Python"].map(
            (tech) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </motion.span>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex justify-center gap-6 mb-8"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-black text-white font-semibold rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Projects
          </a>
          
          <a
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer select-none"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="flex justify-center gap-8"
        >
          <a
            href="https://www.linkedin.com/in/onyedikachin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Ka8761"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/dikachidev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-3xl"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaReact,
  FaFigma,
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiExpress,
  SiPython,
  SiJavascript,
  SiJsonwebtokens,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"fullstack" | "uiux">("fullstack");

  const fullStackTech = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React JS", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
    { name: "Express JS", icon: SiExpress, color: "text-gray-300" },
    { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
    { name: "NEXT JS", icon: SiNextdotjs, color: "text-black bg-white" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-pink-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-500" },
  ];

  const uiuxTools = [
    { name: "Figma", icon: FaFigma, color: "text-pink-400" },
    { name: "Adobe XD", icon: SiAdobexd, color: "text-purple-500" },
    { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-600" },
    { name: "Illustrator", icon: SiAdobeillustrator, color: "text-orange-600" },
  ];

  return (
    <section id="portfolio" className="pt-2 pb-10 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          My Portfolio
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg md:text-xl">
          Here are some of my recent projects and tools I have worked with.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              activeTab === "fullstack"
                ? "bg-purple-600 scale-105"
                : "bg-white/10 hover:bg-purple-500/20"
            }`}
          >
            Full Stack
          </button>
          <button
            onClick={() => setActiveTab("uiux")}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              activeTab === "uiux"
                ? "bg-purple-600 scale-105"
                : "bg-white/10 hover:bg-purple-500/20"
            }`}
          >
            UI / UX
          </button>
        </div>

        <div className="backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <AnimatePresence mode="wait">

            {/* ================= FULL STACK ================= */}
            {activeTab === "fullstack" && (
              <motion.div
                key="fullstack"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {/* E-commerce Video - RESPONSIVE VERSION */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-purple-300">
                      E-commerce Website Demo
                    </h3>
                    <motion.a
                      href="https://e-commerce-app-frontend-chi.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </motion.a>
                  </div>
                  <p className="text-gray-300 max-w-3xl mx-auto mb-6 text-lg">
                    A modern e-commerce platform where users can browse products, view prices, add items to their cart, and securely complete payments. Designed for a smooth shopping experience with fast checkout and order management.
                  </p>
                  <a
                    href="https://e-commerce-app-frontend-chi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl cursor-pointer"
                  >
                    {/* RESPONSIVE VIDEO SOURCE */}
                    <video 
                      autoPlay loop muted playsInline preload="metadata"
                      poster="/images/vidpic1.png" 
                      className="w-full"
                    >
                      {/* Mobile first - show mobile1.mp4 on screens smaller than laptop */}
                      <source src="/videos/mobile1.mp4" type="video/mp4" media="(max-width: 1024px)" />
                      {/* Desktop - show original video1.mp4 */}
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Click to View Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="bg-purple-600 px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl transform translate-x-0 group-hover:scale-110 transition-transform duration-300">
                        Click to View Live Site →
                      </div>
                    </div>
                  </a>
                </div>

                {/* Logistics Video */}
                <div className="text-center pt-12">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">
                    Logistics Website Demo
                  </h3>
                  <p className="text-gray-300 max-w-3xl mx-auto mb-6 text-lg">
                    A logistics service platform that allows users to fill out shipment details, upload goods for weighing, and choose delivery either to their home address or a designated logistics drop-off point. Built to simplify and track the shipping process from start to finish.
                  </p>
                  <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl">
                    <video autoPlay loop muted playsInline preload="metadata" 
                      poster="/images/vidpic2.png"
                      className="w-full"
                    >
                      <source src="/videos/video2.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-3xl font-bold text-center mb-10 text-purple-300 bg-transparent  ">
                    Tech Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {fullStackTech.map(({ name, icon: Icon, color }) => (
                      <div key={name} className="bg-white/10 p-6 rounded-xl text-center">
                        <Icon className={`text-4xl mx-auto mb-2 ${color}`} />
                        <p>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ================= UI / UX ================= */}
            {activeTab === "uiux" && (
              <motion.div
                key="uiux"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-20"
              >
                {/* CRYPTO PORTFOLIO (RESTORED) */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-300">
                    Crypto Portfolio Tracker
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                      <Image src="/images/AriseHero.png" alt="" priority width={800} height={600} />
                    </motion.div>
                    <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                      <Image src="/images/Homecrytpo.png" alt="" priority width={800} height={600} />
                    </motion.div>
                  </div>

                  <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    <Image src="/images/Register(Dark).png" alt="" priority width={1200} height={700} />
                  </motion.div>
                </div>

                {/* AI MUSIC APP (BIG, 3 PER ROW) */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-300">
                    AI Music App
                  </h3>

                  <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.05 }}
                        className="rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl"
                      >
                        <Image
                          src={`/images/ai-music-${String(i + 1).padStart(2, "0")}.png`}
                          alt=""
                          priority
                          width={420}
                          height={840}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* DESIGN TOOLS */}
                <div>
                  <h3 className="text-3xl font-bold text-center mb-10 text-purple-300">
                    Design Tools
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {uiuxTools.map(({ name, icon: Icon, color }) => (
                      <div key={name} className="bg-white/10 p-6 rounded-xl text-center">
                        <Icon className={`text-4xl mx-auto mb-2 ${color}`} />
                        <p>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

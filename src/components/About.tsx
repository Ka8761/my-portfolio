"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiFileText, FiCode } from "react-icons/fi";

export default function About() {
  const [cvStatus, setCvStatus] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <section
      id="about"
      className="pt-5 pb-20 px-6 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Smaller centered circular photo */}
        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-xl -z-10 opacity-70" />
            <Image
              src="/images/profile.jpg" // Upload your photo to public/images/profile.jpg
              alt="Dikachi Nwankwo"
              width={70}
              height={40}
              className="rounded-full shadow-xl shadow-purple-700/20 object-cover"
              priority
            />
          </div>
        </motion.div> */}

        {/* Centered heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Centered bio text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-6 max-w-3xl mx-auto"
        >
          <p>Hi, I'm Dikachi Nwankwo, a front-end & full-stack web developer.
            I'll spend a major part of my lifetime bridging the gap between humanity and tech.
            Always growing, always building.
            <span className="font-medium text-purple-300"> Let's create something dope together! 🚀</span></p>
        </motion.div>

        {/* Centered buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <a
            href="/files/Onyedikachi_Nwankwo_CV.pdf" 
            download
            onClick={(e) => {
              setIsDownloading(true);
              setCvStatus("downloading");
              setTimeout(() => {
                setCvStatus("downloaded");
                setTimeout(() => setIsDownloading(false), 1000);
              }, 4000);
            }}
            className={`group flex items-center justify-center gap-3 px-10 py-5 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 ${isDownloading 
              ? 'bg-gradient-to-r from-purple-700 to-blue-700 shadow-purple-600/50 scale-105' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg'}`}
          >
            <FiFileText className={`text-2xl transition-all ${isDownloading ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
            Download CV
          </a>

          <Link
            href="#portfolio"
            className="group flex items-center justify-center gap-3 px-10 py-5 bg-transparent text-purple-400 border-2 border-purple-500 rounded-xl font-semibold hover:bg-purple-600/20 hover:border-purple-400 hover:text-white hover:scale-105 transition-all duration-300"
          >
            <FiCode className="text-2xl group-hover:rotate-12 transition-transform" />
            View Projects
          </Link>
        </motion.div>

        {/* CV Status Message */}
        {cvStatus === "downloading" && (
          <p className="mt-4 text-sm text-yellow-400 animate-fade-in">
            downloading...
          </p>
        )}
        {cvStatus === "downloaded" && (
          <p className="mt-4 text-sm text-green-400 animate-fade-in">
            CV downloaded.
          </p>
        )}
      </div>
    </section>
  );
}

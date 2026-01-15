"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          setMessage("Thanks! The form was submitted successfully.");
          if (formRef.current) formRef.current.reset();
        },
        (err) => {
          console.error(err);
          setStatus("error");
          setMessage("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="pt-5 px-6 text-white bg-transparent ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Purple Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Have something to discuss? Send me a message and let's talk.
        </p>

        {/* Narrower form container with double faded white rectangles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Layer 1: Slightly larger, more opaque white rectangle */}         <div className="absolute inset-0 bg-white/12 backdrop-blur-lg" />
          <div className="absolute inset-4 backdrop-blur-md rounded-xl" />

          {/* Actual form content on top */}
          {status !== "success" ? (
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="relative bg-transparent p-8 md:p-10 space-y-6 text-left backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  className="w-full px-5 py-3 bg-white/5 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 px-6 text-white font-semibold rounded-xl transition-all duration-300 ${
                  status === "loading"
                    ? "bg-blue-600/50 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500 hover:scale-105 shadow-lg shadow-blue-500/30"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="relative p-10 text-center backdrop-blur-sm">
              <p className="text-2xl font-semibold text-green-400 mb-4">{message}</p>
              <p className="text-gray-300 mb-6">
                Return to{" "}
                <Link href="/" className="text-purple-400 hover:underline">
                  original site
                </Link>
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition"
              >
                Send Another Message
              </button>
            </div>
          )}
        </motion.div>

        {/* Connect With Me - Rectangular cards, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div className="flex flex-col gap-5 max-w-lg mx-auto">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/onyedikachin/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/8 backdrop-blur-md border border-purple-500/20 rounded-xl p-5 hover:bg-purple-600/10 hover:border-purple-400 transition-all duration-300 group"
            >
              <FaLinkedin className="text-3xl text-[#0A66C2]" />
              <span className="text-lg font-medium text-white group-hover:text-purple-300">LinkedIn</span>
            </a>

            {/* X Card */}
            <a
              href="https://x.com/dikachidev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/8 backdrop-blur-md border border-purple-500/20 rounded-xl p-5 hover:bg-purple-600/10 hover:border-purple-400 transition-all duration-300 group"
            >
              <FaXTwitter className="text-3xl text-white" />
              <span className="text-lg font-medium text-white group-hover:text-purple-300">X</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Ka8761"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/8 backdrop-blur-md border border-purple-500/20 rounded-xl p-5 hover:bg-purple-600/10 hover:border-purple-400 transition-all duration-300 group"
            >
              <FaGithub className="text-3xl text-white" />
              <span className="text-lg font-medium text-white group-hover:text-purple-300">GitHub</span>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/2348035581475"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/8 backdrop-blur-md border border-purple-500/20 rounded-xl p-5 hover:bg-purple-600/10 hover:border-purple-400 transition-all duration-300 group"
            >
              <FaWhatsapp className="text-3xl text-[#25D366]" />
              <span className="text-lg font-medium text-white group-hover:text-purple-300">WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pb-7 text-gray-500 text-sm">
          © 2026 Dikachi Nwankwo - All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
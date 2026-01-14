"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StatsCards from "@/components/StatsCards";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0); // Changed to state
  const timeRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.02;
      setTime(timeRef.current); // Update state instead
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const viewportCenter = scrollY + (typeof window !== 'undefined' ? window.innerHeight / 2 : 400);

  return (
    <main className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Gradient Circles - CONTINUOUS & CENTERED */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Purple Circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: "800px",
            height: "800px",
            background: "radial-gradient(circle, #a855f7 0%, #7c3aed 30%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.6,
            top: `${viewportCenter - 400 + Math.sin(time * 0.8) * 150}px`,
            left: `${-200 + Math.sin(time * 0.5) * 250 + Math.cos(time * 0.3) * 180}px`,
            transition: "top 0.3s ease-out",
          }}
        />

        {/* Green Circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: "900px",
            height: "900px",
            background: "radial-gradient(circle, #22c55e 0%, #16a34a 30%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.5,
            top: `${viewportCenter - 450 + Math.cos(time * 0.6) * 180}px`,
            right: `${-250 + Math.cos(time * 0.7) * 300 + Math.sin(time * 0.4) * 200}px`,
            transition: "top 0.3s ease-out",
          }}
        />

        {/* Blue Circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: "850px",
            height: "850px",
            background: "radial-gradient(circle, #3b82f6 0%, #2563eb 30%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.6,
            top: `${viewportCenter - 425 + Math.sin(time * 0.9) * 160}px`,
            left: `calc(50% - 425px + ${Math.sin(time * 0.6) * 350 + Math.cos(time * 0.5) * 220}px)`,
            transition: "top 0.3s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <section id="home" className="min-h-screen pt-20 bg-transparent">
          <Hero />
        </section>
        <section id="about" className="min-h-screen pt-20 bg-transparent">
          <About />
          <StatsCards />
        </section>
        <section id="portfolio" className="min-h-screen pt-20 bg-transparent">
          <Portfolio />
        </section>
        <section id="contact" className="min-h-screen pt-20 bg-transparent">
          <Contact />
        </section>
      </div>
    </main>
  );
}

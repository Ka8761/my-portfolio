"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

 useEffect(() => {
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    // Sort entries to find the one most visible or highest on the screen
    const visibleEntry = entries.find((entry) => entry.isIntersecting);
    if (visibleEntry) {
      setActiveSection(visibleEntry.target.id);
    }
  };

  const options = {
    root: null,
    // This margin creates a thin horizontal strip at the top of the screen
    // When a section enters this strip, it becomes active.
    rootMargin: "-25% 0px -70% 0px", 
    threshold: 0, // Trigger as soon as the first pixel enters the zone
  };

  const observer = new IntersectionObserver(handleObserver, options);

  navItems.forEach((item) => {
    const el = document.getElementById(item.id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#home" className="text-xl font-bold text-white tracking-tighter">
            Dikachi Nwankwo
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300
                    ${isActive ? "text-purple-400" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-purple-500 transition-transform duration-300 ease-out origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 text-base font-medium ${
                activeSection === item.id ? "text-purple-400 bg-purple-500/10" : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
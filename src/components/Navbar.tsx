"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Anthony Devito
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#about"
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

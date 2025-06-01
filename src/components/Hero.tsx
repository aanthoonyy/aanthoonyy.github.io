"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            Hi, I'm <span className="text-primary-600">Anthony Devito</span>
          </h1>
          <p className="text-xl sm:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            Software Engineer & Developer passionate about building impactful
            web and networked applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700 shadow-md transition-all"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary-300 text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 hover:border-secondary-400 shadow-md transition-all"
            >
              View My Work
            </Link>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-70" />
        </div>
      </div>
    </section>
  );
}

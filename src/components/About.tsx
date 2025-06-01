"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <p className="text-lg text-secondary-600">
            I'm Anthony Devito, a Computer Science student at Washington State
            University and a passionate software engineer. I love building web
            and networked applications that solve real-world problems and
            improve user experiences. My interests include full-stack
            development, real-time systems, and DevOps.
          </p>
          <p className="text-lg text-secondary-600">
            I have experience with TypeScript, JavaScript, Python, C#, C++, and
            C, and enjoy working with frameworks like React, Node.js, and
            Three.js. I'm also skilled in testing, CI/CD, and cloud deployments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              C#
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              C++
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Three.js
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              MongoDB
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Docker
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Jenkins
            </span>
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              DevOps
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

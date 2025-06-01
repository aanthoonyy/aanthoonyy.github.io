"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Miatafitment.com",
    description:
      "Launched a React web app serving 1,600+ users with a 3D visualization model service for customizing early-model Mazda Miatas wheel, tire, and alignment setups. Completed 12 iterations based on feedback from 100+ car enthusiasts, using data-driven insights to improve accuracy and reliability achieving a Net Promoter Score of 97%. Integrated PostgreSQL to manage a gallery of hundreds of images for the gallery without performance issues. Pitched at WSU's Business Plan Competition and placed 5th of 50 teams, securing $2,000 in prize money.",
    tags: ["React", "TypeScript", "ThreeJS", "PostgreSQL"],
    link: "https://miatafitment.com",
    github: "https://github.com/aanthoonyy/MiataFitment",
  },
  {
    title: "LED Network Controller",
    description:
      "Engineered a React/TypeScript app with real-time network topology visualization for RGB LED control, leveraging WebSockets to achieve sub-150 ms end-to-end latency from UI input to physical light activation. Implemented a concurrent Go backend with a WebSocket hub, JSON messaging, and goroutine-based client management, supporting both simulated and physical Arduino nodes. Programmed Arduino microcontrollers in C++ to implement a serial protocol for distributed RGB LED control, including state and color management.",
    tags: ["Golang", "C++", "TypeScript", "React", "Arduino"],
    link: "https://github.com/aanthoonyy/LEDNetworkController",
    github: "https://github.com/aanthoonyy/LEDNetworkController",
  },
  {
    title: "Finding Cougs",
    description:
      "Created a React/TypeScript/Express full-stack social network with MongoDB/Mongoose and 15 other dependencies, featuring authentication, profiles, job postings, and real-time notifications. Built a containerized Azure CI/CD pipeline with Docker and Jenkins, achieving zero-downtime deployments across dev, staging, and production.",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Node"],
    link: "https://github.com/aanthoonyy/FindingCougs",
    github: "https://github.com/aanthoonyy/FindingCougs",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full min-h-[400px]"
            >
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex-1" />
                <div className="mt-auto pt-4">
                  <Link
                    href={project.github}
                    className="inline-flex items-center justify-center w-full px-4 py-2 border border-secondary-300 text-sm font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 transition-colors shadow"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

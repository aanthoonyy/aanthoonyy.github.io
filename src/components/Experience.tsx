"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Schweitzer Engineering Laboratories – Pullman, WA",
    period: "Oct 2023 – Present",
    description: [
      "I've been building both front- and back-end features for SEL's Software Defined Network Flow Controller (SEL-5056) using React, TypeScript, .NET, and C#, which has noticeably improved UI responsiveness and simplified our network configuration workflows. Over the past several sprints, I've knocked out over 40 feature implementations and fixed more than 20 bugs, totaling around 150 story points, all while ensuring we hit our SEL-5056 milestones on time. Partnering closely with the Functional Test team, I made sure we had 100% Jest unit-test coverage and helped implement Behave BDD end-to-end tests so our app remains rock solid. On the performance side, I dug into memoization strategies and tweaked our CSS to slash topology load times by 85%, bringing our INP down from 2200 ms to just 200 ms. I also lead code reviews to keep our codebase clean, maintainable, and efficient. Outside of development work, I manage the Intern Pen Pal program—pairing over 320 interns across 12 offices—to help foster inclusivity and keep everyone connected.",
    ],
  },
  {
    title: "VCEA Teaching Assistant",
    company: "Washington State University – Pullman, WA",
    period: "Jan 2025 – May 2025",
    description: [
      "I hosted labs for 116 students covering OOP, design patterns, DevOps (Docker, Jenkins, Kubernetes), and software architecture. I strived to make the labs as engaging as possible, and grade assignments within a 48-hour turnaround.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </motion.div>
        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-primary-200"
            style={{ zIndex: 0 }}
          />
          <div className="space-y-12 w-full">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center"
                style={{ zIndex: 1 }}
              >
                {/* Content */}
                <div className="w-full md:w-3/4 lg:w-2/3">
                  <div className="p-6 rounded-lg bg-white shadow-lg text-center">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {experience.company}
                    </p>
                    <p className="text-secondary-500 text-sm mb-4">
                      {experience.period}
                    </p>
                    <div className="space-y-4">
                      {experience.description.map((item, i) => (
                        <p key={i} className="text-secondary-600">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

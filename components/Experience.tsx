"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
    role: "Senior Fullstack Engineer",
    company: "Quik Nation",
    period: "2023 - Present",
    description: "Leading frontend architecture and shipping platforms like Quik Huddle and FMO Fine Grooming. Building scalable solutions serving 4,000+ businesses with a 99.5% uptime record.",
    highlights: ["React", "Node.js", "AWS", "Team Leadership"],
    current: true,
  },
  {
    id: 2,
    role: "Senior Frontend Engineer",
    company: "QuikInfluence Inc, Atlanta",
    period: "2022 - 2023",
    description: "Designed and developed advanced frontend systems for influencer marketing platforms. Led architecture decisions and mentored junior developers.",
    highlights: ["React", "Next.js", "TypeScript", "GraphQL"],
    current: false,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Tradefada Nigeria Limited",
    period: "2021 - 2022",
    description: "Built e-commerce platforms and digital solutions. Implemented responsive designs and improved user experience across web applications.",
    highlights: ["React", "JavaScript", "Redux", "REST APIs"],
    current: false,
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "Optisoft Technology Company Ltd",
    period: "2020 - 2021",
    description: "Developed user interfaces for enterprise applications. Collaborated with backend teams to integrate APIs and optimize performance.",
    highlights: ["React", "HTML/CSS", "jQuery", "Bootstrap"],
    current: false,
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "Andela Nigeria X Andela Fellow Stack-Up",
    period: "2019 - 2020",
    description: "Participated in intensive full-stack development program. Built multiple projects using modern web technologies and best practices.",
    highlights: ["JavaScript", "Node.js", "React", "PostgreSQL"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 md:left-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8",
                  index % 2 === 0 ? "md:text-right" : "md:direction-rtl"
                )}
              >
                {/* Content */}
                <div className={cn(
                  "md:col-span-1",
                  index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12 md:text-left"
                )}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div className={index % 2 === 0 ? "" : "md:order-2"}>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                      </div>
                      <span className={cn(
                        "text-sm px-3 py-1 rounded-full",
                        exp.current 
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                        index % 2 === 0 ? "" : "md:order-1"
                      )}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className={cn(
                      "flex flex-wrap gap-2",
                      index % 2 === 0 ? "md:justify-end" : ""
                    )}>
                      {exp.highlights.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10">
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
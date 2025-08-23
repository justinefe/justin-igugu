"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = {
  frontend: {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap", "Storybook", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS/SASS"],
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500",
  },
  backend: {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "NestJS", "Python", "Django", "Flask", "REST APIs", "GraphQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Socket.io"],
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500",
  },
  devops: {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Google Cloud", "Vercel", "Netlify", "CI/CD", "GitHub Actions", "Jest", "Cypress", "Git", "SEO Optimization", "Firebase", "Supabase"],
    icon: (
      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            I work across the stack with a focus on developer experience, performance, and reliability.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(skillCategories).map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="group relative h-full">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl",
                    category.color
                  )}
                />
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2 rounded-lg bg-gradient-to-r text-white", category.color)}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "4K+", label: "Businesses Served" },
  { number: "99.5%", label: "Uptime Record" },
  { number: "60%", label: "Engagement Increase" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p>
            I'm Justin Igugu, a Senior Fullstack Engineer based in Plot 1, Greenpark Estate, Abijo, Lagos State, Nigeria.
            With over 5 years of experience, I specialize in building web and mobile products across e-commerce, logistics, and health sectors.
            I lead frontend architecture at Quik Nation where I've shipped platforms like <strong className="text-blue-600 dark:text-blue-400">Quik Huddle</strong> and <strong className="text-blue-600 dark:text-blue-400">FMO Fine Grooming</strong>.
            My expertise spans Next.js, React, and Node.js, delivering clean, performant code and leading teams to measurable outcomes.
          </p>
          
          <p>Over the years I've:</p>
          
          <ul className="space-y-3 ml-4">
            {[
              "Delivered a browser‑based video platform serving 4,000+ businesses with 99.5% uptime.",
              "Built a luxury grooming platform that improved engagement by 60%.",
              "Led SEO and performance work that increased organic traffic by 45% across client sites.",
            ].map((achievement, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: achievement
                    .replace(/(\d+[,+]?\d*%?)/g, '<strong class="text-blue-600 dark:text-blue-400">$1</strong>')
                }} />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-base text-gray-600 dark:text-gray-400 text-center italic mb-6">
            Senior Fullstack Engineer with 5+ years experience building web and mobile products across e‑commerce, logistics, and health. 
            I specialize in Next.js, React, and Node.js—shipping clean, performant code and leading teams to measurable outcomes.
          </p>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
              <strong>Education:</strong> B.Eng in Electrical and Electronics Engineering
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Federal University of Petroleum Resources, Effurun
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
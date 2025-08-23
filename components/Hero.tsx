"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/justin-igugu-4bb465171/" },
  { label: "GitHub", href: "https://github.com/justinefe" },
  { label: "Email", href: "mailto:efejustin3@gmail.com" },
  { label: "Phone", href: "tel:+2347035688050" },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 via-transparent to-purple-100/20 dark:from-blue-900/20 dark:to-purple-900/20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                I build fast, scalable products
              </span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                that users love.
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Senior Fullstack Engineer • Next.js • React • Node.js • Plot 1, Greenpark Estate, Abijo, Lagos State, Nigeria
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="mailto:efejustin3@gmail.com"
              className={cn(
                "inline-flex items-center justify-center px-8 py-3",
                "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
                "font-medium rounded-lg shadow-lg shadow-blue-500/25",
                "hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105",
                "transition-all duration-300"
              )}
            >
              Hire Me
            </Link>
            <Link
              href="#projects"
              className={cn(
                "inline-flex items-center justify-center px-8 py-3",
                "border border-gray-300 dark:border-gray-700",
                "font-medium rounded-lg",
                "hover:bg-gray-50 dark:hover:bg-gray-800",
                "hover:scale-105 transition-all duration-300"
              )}
            >
              View Projects
            </Link>
          </motion.div>
          
          <motion.div
            className="flex gap-6 justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
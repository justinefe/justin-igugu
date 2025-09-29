"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const projects = [
  {
    name: "FMO Fine Grooming",
    url: "https://fmogrooming.com/",
    role: "Lead Fullstack Engineer",
    period: "2023",
    category: "E-commerce Platform",
    summary: "A complete digital platform for a luxury men's grooming salon featuring e‑commerce, appointment booking, and customer management systems.",
    highlights: [
      "Increased customer engagement by 60% with streamlined booking flow",
      "Integrated secure payment processing with Stripe API",
      "Built reusable component library reducing development time by 30%",
      "Implemented SEO optimizations boosting organic traffic by 45%",
    ],
    metrics: [
      { label: "Engagement Increase", value: "60%" },
      { label: "Development Time Saved", value: "30%" },
      { label: "Organic Traffic Boost", value: "45%" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    gradient: "from-purple-600 to-pink-600",
    image: "/images/fmo-grooming.jpg",
    features: ["E-commerce", "Booking System", "Payment Gateway", "Admin Dashboard"],
  },
  {
    name: "Quik Huddle",
    url: "https://www.quikhuddle.com/",
    role: "Senior Frontend Engineer",
    period: "2023",
    category: "Video Platform",
    summary: "Lightweight browser-based video conferencing platform designed for SMEs, eliminating the need for downloads while delivering enterprise-grade performance.",
    highlights: [
      "Serves 4,000+ businesses with 99.5% uptime reliability",
      "Zero-download experience with WebRTC integration",
      "Mobile-first responsive design for cross-device compatibility",
      "Instant meeting creation with shareable join links",
    ],
    metrics: [
      { label: "Businesses Served", value: "4,000+" },
      { label: "Uptime Record", value: "99.5%" },
      { label: "Load Time", value: "<2s" },
    ],
    techStack: ["React", "WebRTC", "Socket.io", "Node.js", "AWS"],
    gradient: "from-blue-600 to-cyan-600",
    image: "/images/quik-huddle.jpg",
    features: ["Video Conferencing", "Screen Sharing", "Chat", "Recording"],
  },
  {
    name: "Quick Carry",
    url: "https://quikcarry.com/",
    role: "Frontend Engineer",
    period: "2022",
    category: "Logistics Platform",
    summary: "Comprehensive logistics web application built with React and TypeScript, featuring real-time tracking and route optimization.",
    highlights: [
      "Developed reusable components documented in Storybook",
      "Achieved 95+ Lighthouse performance scores",
      "Implemented real-time tracking with Socket.io",
      "Built comprehensive test suite with 85% coverage",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "95+" },
      { label: "Test Coverage", value: "85%" },
      { label: "Component Library", value: "50+" },
    ],
    techStack: ["React", "TypeScript", "Storybook", "Redux", "Jest"],
    gradient: "from-green-600 to-teal-600",
    image: "/images/quick-carry.jpg",
    features: ["Real-time Tracking", "Route Planning", "Driver App", "Analytics"],
  },
  {
    name: "Properties Home",
    url: "https://properties-home.com/",
    role: "Fullstack Engineer",
    period: "2021",
    category: "Real Estate Platform",
    summary: "Modern real estate platform for property discovery and lead capture with advanced search capabilities and interactive maps.",
    highlights: [
      "Implemented advanced property search with filters",
      "Integrated Mapbox for interactive property locations",
      "Optimized for SEO with server-side rendering",
      "Built responsive grid layouts for property listings",
    ],
    metrics: [
      { label: "Search Filters", value: "20+" },
      { label: "SEO Score", value: "95+" },
      { label: "Mobile Users", value: "70%" },
    ],
    techStack: ["Next.js", "MongoDB", "Mapbox", "Vercel", "SEO"],
    gradient: "from-orange-600 to-red-600",
    image: "/images/properties-home.jpg",
    features: ["Property Search", "Interactive Maps", "Lead Management", "Virtual Tours"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
        {/* Project Image/Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", project.gradient)} />
          
          {/* Project Icon/Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className={cn("w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center mb-3 mx-auto", project.gradient)}>
                {project.category === "E-commerce Platform" && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                )}
                {project.category === "Video Platform" && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                )}
                {project.category === "Logistics Platform" && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707L15 7z" />
                  </svg>
                )}
                {project.category === "Real Estate Platform" && (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm opacity-80">{project.category}</p>
            </div>
          </div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-4 right-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/20 backdrop-blur-sm text-white text-sm rounded-full">
              {project.category}
            </span>
          </div>
          
          {/* External Link */}
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition-colors"
            aria-label={`View ${project.name}`}
          >
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>{project.role}</span>
                <span>•</span>
                <span>{project.period}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {project.summary}
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className={cn("text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent", project.gradient)}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, idx) => (
              <span
                key={tech}
                className={cn(
                  "px-2 py-1 text-xs rounded-md transition-colors",
                  idx < 3 
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" 
                    : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-md"
              >
                {feature}
              </span>
            ))}
          </div>
          
          {/* Expandable Highlights */}
          <div className="space-y-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>{isExpanded ? 'Hide' : 'Show'} Key Achievements</span>
              <svg
                className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 mt-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className={cn("mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r flex-shrink-0", project.gradient)} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing impactful projects that demonstrate technical expertise, user-centric design, and measurable business results across various industries.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together on your next project?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Let&apos;s Collaborate</span>
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

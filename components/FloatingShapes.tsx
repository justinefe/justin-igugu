"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const shapes = [
    { size: 300, left: "10%", top: "20%", delay: 0, color: "from-blue-400/10 to-purple-400/10" },
    { size: 200, right: "15%", top: "60%", delay: 2, color: "from-purple-400/10 to-pink-400/10" },
    { size: 250, left: "5%", bottom: "30%", delay: 4, color: "from-green-400/10 to-blue-400/10" },
    { size: 180, right: "10%", bottom: "20%", delay: 1, color: "from-orange-400/10 to-red-400/10" },
    { size: 220, left: "50%", top: "50%", delay: 3, color: "from-cyan-400/10 to-blue-400/10" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            right: shape.right,
            top: shape.top,
            bottom: shape.bottom,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
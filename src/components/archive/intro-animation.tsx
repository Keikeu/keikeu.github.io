"use client";
import { motion } from "framer-motion";

export default function IntroAnimation() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { left: "-100vw" },
    visible: {
      left: "100vw",
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-1 inset-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={{
          hidden: { left: "-100vw" },
          visible: { left: "100vw", transition: { duration: 0.8 } },
        }}
        className="absolute w-[200vw] left-0 top-0 bottom-0 bg-background"
      />
      <motion.div
        variants={childVariants}
        className="absolute w-[100vw] top-0 bottom-0 bg-accent-foreground"
      />
      <motion.div
        variants={childVariants}
        className="absolute w-[100vw] top-0 bottom-0 bg-accent"
      />
    </motion.div>
  );
}

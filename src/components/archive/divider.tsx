"use client";

// import { motion } from "motion/react";

export const Divider = ({
  variant = "horizontal",
  className = "",
  delay = 0,
}: {
  variant?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
}) => {
  if (variant === "horizontal") {
    return (
      <div
        // initial={{ transform: "translateX(-100%)" }}
        // whileInView={{ transform: "translateX(0)" }}
        // transition={{ ease: [0.83, 0, 0.17, 1], duration: 2, delay }}
        // viewport={{ once: true }}
        className={`${className} absolute w-[100vw] left-0 right-0 h-px bg-accent-border`}
      />
    );
  }
  if (variant === "vertical") {
    return (
      <div
        // initial={{ transform: "translateY(-100%)" }}
        // whileInView={{ transform: "translateY(0)" }}
        // transition={{ ease: [0.83, 0, 0.17, 1], duration: 2, delay }}
        // viewport={{ once: true }}
        className={`${className} absolute top-0 bottom-0 w-px bg-accent-border z-[-1]`}
      />
    );
  }
};

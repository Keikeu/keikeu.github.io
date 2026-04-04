"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const NameWithPronunciation = () => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const [hovered, setHovered] = useState(false);
  const name = "Karolina Placek";
  const pronunciation = "kah-ro-LEE-nah \u00A0 PLAH-tsek";

  const item = {
    default: { y: 0 },
    hovered: { y: isSmallScreen ? -28 : -48 },
  };

  return (
    <div
      className="relative overflow-hidden mb-3 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-[32px] md:text-[48px] font-black text-accent-foreground tracking-tight leading-none font-serif">
        {name.split("").map((letter, i) => (
          <motion.span
            key={i}
            animate={hovered ? "hovered" : "default"}
            variants={item}
            transition={{
              duration: 0.2,
              delay: hovered ? i * 0.01 : (pronunciation.length - i) * 0.01,
            }}
            className="inline-block cursor-default"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h1>
      <div className="absolute text-[20px] md:text-[40px] font-black text-accent-foreground tracking-tight leading-none">
        {pronunciation.split("").map((letter, i) => (
          <motion.span
            key={i}
            animate={hovered ? "hovered" : "default"}
            variants={item}
            transition={{
              duration: 0.3,
              delay: hovered ? i * 0.01 : (pronunciation.length - i) * 0.01,
            }}
            className="inline-block cursor-default"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

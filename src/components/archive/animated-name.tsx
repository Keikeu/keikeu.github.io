"use client";

import { motion, stagger } from "motion/react";
import { useState } from "react";

const list = {
  default: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
  hovered: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.01),
    },
  },
};

const item = {
  default: { opacity: 1, y: 0 },
  hovered: { opacity: 1, y: -48 },
};

export const AnimatedName = ({ name }: { name: string }) => {
  const [hovered, setHovered] = useState(false);
  const chars = name.split("");
  const total = chars.length;

  return (
    <h1
      className="w-fit text-[32px] md:text-[48px] font-black text-accent-foreground tracking-tight"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        cursor: "default",
        alignItems: "baseline",
      }}
    >
      {chars.map((char, wi) => (
        <motion.span
          key={wi}
          animate={
            hovered
              ? { skewX: -8, opacity: 0.8, letterSpacing: "0.05em" }
              : { skewX: 0, opacity: 1, letterSpacing: "0em" }
          }
          transition={{
            duration: 0.32,
            delay: wi * 0.02,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="origin-bottom-left"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );

  // return (
  //   //overflow-hidden
  //   <div className="relative overflow-hidden w-fit text-[32px] md:text-[48px] leading-none font-black text-accent-foreground tracking-tight">
  //     <motion.div initial="default" whileHover="hovered" variants={list}>
  //       <h1>
  //         {name.split("").map((letter, i) => (
  //           <motion.span
  //             key={i}
  //             variants={item}
  //             className="inline-block cursor-default"
  //           >
  //             {letter === " " ? "\u00A0" : letter}
  //           </motion.span>
  //         ))}
  //       </h1>
  //       <div className="absolute">
  //         {name.split("").map((letter, i) => (
  //           <motion.span
  //             key={i}
  //             variants={item}
  //             className="inline-block cursor-default"
  //           >
  //             {letter === " " ? "\u00A0" : letter}
  //           </motion.span>
  //         ))}
  //       </div>
  //     </motion.div>
  //   </div>
  // );

  // return (
  //   <div
  //     onMouseEnter={() => setHovered(true)}
  //     onMouseLeave={() => setHovered(false)}
  //     style={{ display: "flex", cursor: "default" }}
  //   >
  //     {chars.map((char, i) => {
  //       if (char === " ")
  //         return (
  //           <span key={i} style={{ display: "inline-block", width: "0.4em" }} />
  //         );
  //       return (
  //         <motion.span
  //           key={i}
  //           initial={{ opacity: 0.3, filter: "blur(3px)", y: 4 }}
  //           animate={
  //             hovered
  //               ? { opacity: 1, filter: "blur(0px)", y: 0 }
  //               : { opacity: 0.3, filter: "blur(3px)", y: 4 }
  //           }
  //           transition={{
  //             duration: 0.28,
  //             delay: hovered ? i * 0.028 : (total - i) * 0.018,
  //             ease: [0.23, 1, 0.32, 1],
  //           }}
  //           style={{
  //             fontFamily: "Georgia, serif",
  //             fontSize: "2.5rem",
  //             fontWeight: 400,
  //             display: "inline-block",
  //           }}
  //         >
  //           {char}
  //         </motion.span>
  //       );
  //     })}
  //   </div>
  // );

  // Not good, change it to something better, lol, how descriptive. Maybe like the link icon, another text appears on hover
  // return (
  //   <>
  //     {name.split("").map((letter, i) => (
  //       <motion.span
  //         className="inline-block cursor-default"
  //         key={i}
  //         initial={{ translateY: 0 }}
  //         transition={{ ease: "easeOut" }}
  //         whileHover={{ translateY: -8 }}
  //       >
  //         {letter === " " ? "\u00A0" : letter}
  //       </motion.span>
  //     ))}
  //   </>
  // );
};

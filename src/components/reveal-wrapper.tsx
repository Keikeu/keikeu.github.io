"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode } from "react";

export const RevealWrapper = ({
  children,
  delay = 0,
}: {
  children: string | ReactNode;
  delay?: number;
}) => {
  const { scrollYProgress } = useScroll();

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  return (
    // <motion.div
    // initial={{ opacity: 0, y: 16 }}
    // whileInView={{ opacity: 1, y: 0 }}
    // transition={{ ease: "easeOut", duration: 0.4, delay }}
    // viewport={{ once: true }}
    //   style={{ filter }}
    // >
    <>{children}</>
    // </motion.div>
  );
};

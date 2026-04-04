"use client";

import { useTheme } from "next-themes";
// import { motion } from "motion/react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark");
      return;
    }

    document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    });
  };

  return (
    <div
      // initial={{ opacity: 0, y: 4 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ ease: "easeOut", duration: 1, delay: 2 }}
      // viewport={{ once: true }}
      className="group absolute top-0 left-full z-1 md:left-[calc(50%+320px)] lg:left-[calc(50%+320px+64px)] translate-x-[-50%] translate-y-[-70%] cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="absolute size-38 group-hover:size-44 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-50 rounded-full bg-accent dark:bg-accent-border transition-all duration-400" />
      <div className="relative size-38 dark:size-37 rounded-full cursor-pointer bg-accent dark:bg-background transition-colors duration-400" />
    </div>
  );
};

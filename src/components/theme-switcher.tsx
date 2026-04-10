"use client";

import { useTheme } from "next-themes";

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
      className="absolute top-0 left-full z-1 md:left-[calc(50%+320px)] lg:left-[calc(50%+320px+64px)] translate-x-[-50%] translate-y-[-70%]"
      onClick={toggleTheme}
    >
      <div className="absolute size-38 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-accent dark:bg-accent-border [animation:ping-subtle_2.5s_ease-in-out_infinite]" />
      <div className="relative size-38 rounded-full cursor-pointer bg-accent dark:bg-background dark:border-1 border-accent-border hover:size-42 transition-all duration-400" />
    </div>
  );
};

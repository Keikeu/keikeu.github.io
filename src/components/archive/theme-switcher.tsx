"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const hourInit = new Date().getHours();

  const [hour, setHour] = useState(hourInit);

  const theme = hour >= 7 && hour < 19 ? "light" : "dark";

  const { theme: themePreference, setTheme: setThemePreference } = useTheme();

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    const element = document.getElementById("theme-switcher");
    const rect = element?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left;
    const width = rect.width;

    const fraction = x / width;

    let newHour;

    if (fraction < 0.25) {
      newHour = 1;
    } else if (fraction < 0.8) {
      newHour = 12;
    } else {
      newHour = 23;
    }

    setHour(newHour);
    const newTheme = newHour >= 7 && newHour < 19 ? "light" : "dark";
    setThemePreference(newTheme);
  }

  return (
    <div
      id="theme-switcher"
      className="relative mt-20 py-8 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`absolute top-8 left-0 size-6 rounded-full ${theme === "dark" ? "bg-[#D9D9D9]" : "bg-accent"} flex items-center justify-center transition-colors duration-1000`}
        style={{
          offsetPath:
            'path("M-1.49009e-06 55.5439C52.443 55.5439 85.4912 54.3805 140.887 37.4014C236.773 3.95988 264.854 0.203372 301.902 1.11646C339.573 -0.0898975 375.711 10.8445 449.309 37.4014C505.531 53.688 537.936 57.0821 597 55.5438")',
          offsetDistance: `${(hour * 100) / 24}%`,
          transition: "offset-distance 1s ease-in-out, background-color 1s",
        }}
      >
        {/* <Image
          src={theme === "light" ? "light.svg" : "dark.svg"}
          width={16}
          height={16}
          alt={`${theme} theme`}
        /> */}
      </div>

      <svg
        width="598"
        height="57"
        viewBox="0 0 598 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4037_714"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="598"
          height="57"
        >
          <path
            d="M597.026 55.5439C544.583 55.5439 511.535 54.3805 456.139 37.4014C360.253 3.95988 332.172 0.203372 295.125 1.11646C257.453 -0.0898975 221.315 10.8445 147.717 37.4014C91.4954 53.688 59.0899 57.0821 0.0263624 55.5438"
            stroke="#FFBE98"
            strokeWidth="2"
          />
        </mask>
        <g mask="url(#mask0_4037_714)">
          <rect
            x="-1.95801"
            y="36.2668"
            width="598.701"
            height="68.0342"
            fill="#D9D9D9"
          />
          <rect
            x="-1.95801"
            y="-31.7673"
            width="598.701"
            height="68.0342"
            fill="#FFBE98"
          />
        </g>
      </svg>
    </div>
  );
};

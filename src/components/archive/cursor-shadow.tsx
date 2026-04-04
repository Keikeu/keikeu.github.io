"use client";

import { useEffect, useState } from "react";

export function CursorShadow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <svg width="0" height="0" className="fixed">
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="overlay" />
          </filter>
        </defs>
      </svg>
      <div
        className="fixed w-[960px] h-[960px] bg-glow-gradient pointer-events-none -z-1 rounded-full blur-[30px] translate-x-[-50%] translate-y-[-50%]"
        style={{
          left: pos.x,
          top: pos.y,
        }}
      />
    </>
  );
}

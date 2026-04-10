"use client";

import { AnimatePresence, motion } from "motion/react";
import { Badge } from "@/components/badge";
import LinkIcon from "@/components/link-icon";
import { Project as ProjectType } from "@/data/projects";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { ArrowButton } from "./arrow-button";

export const Project = ({
  index,
  title,
  blurb,
  skills,
  link,
  slides,
  backgroundColor,
}: ProjectType & {
  index: number;
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const [showSlideshowControls, setShowSlideshowControls] = useState(
    isSmallScreen ? true : false,
  );
  const [slideIndex, setSlideIndex] = useState(0);

  const go = useCallback(
    (diff: number) => {
      setSlideIndex((i) => (i + diff + slides.length) % slides.length);
    },
    [slides.length],
  );

  return (
    <li className="flex flex-col gap-3">
      <span className="text-foreground-muted font-mono">0{index + 1}</span>

      <a
        href={link}
        target="_blank"
        className="group w-fit inline-block relative"
      >
        <h4 className="text-accent-foreground font-bold text-xl tracking-tight inline">
          {title}
        </h4>
        <span className="absolute ml-0.5">
          <LinkIcon size={22} />
        </span>
      </a>

      <p>{blurb}</p>

      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>

      <div
        className="relative w-full rounded-lg dark:brightness-85 overflow-hidden"
        style={{ backgroundColor: backgroundColor }}
        onMouseEnter={() => setShowSlideshowControls(true)}
        onMouseLeave={() => {
          if (!isSmallScreen) setShowSlideshowControls(false);
        }}
      >
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === slideIndex ? title + " screenshot" : ""}
            width={1116}
            height={710}
            priority={i === 0}
            className={`w-full rounded-md transition-opacity duration-300 ${
              i === slideIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          />
        ))}

        <AnimatePresence>
          {showSlideshowControls && (
            <motion.div
              className="absolute bottom-2 left-[50%] translate-x-[-50%] flex items-center gap-1 rounded-full bg-glass p-1 backdrop-blur-xs drop-shadow-sm"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <ArrowButton direction="left" onClick={() => go(-1)} />
              <span className="w-8 text-sm text-center text-foreground dark:text-background">
                {slideIndex + 1} / {slides.length}
              </span>
              <ArrowButton direction="right" onClick={() => go(1)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

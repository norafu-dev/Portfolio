// Menu.tsx
"use client";

import { motion } from "motion/react";

export default function Button({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: (value: boolean | ((prevState: boolean) => boolean)) => void;
}) {
  return (
    <div className="absolute z-10 overflow-hidden text-sm rounded-md cursor-pointer top-2 right-2 duration-400 h-7 w-15">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full group"
          onClick={() => setIsActive(!isActive)}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="w-full h-full group bg-foreground text-background"
          onClick={() => setIsActive(!isActive)}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

interface PerspectiveTextProps {
  label: string;
  textColor?: string;
}

function PerspectiveText({ label, textColor = "" }: PerspectiveTextProps) {
  return (
    <div
      className={`
      flex flex-col justify-center items-center h-full w-full
      [transform-style:preserve-3d]
      transition-transform duration-[750ms]
      [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
      group-hover:rotate-x-90
    `}
    >
      <p
        className={`
        m-0
        transition-all duration-[750ms]
        [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
        pointer-events-none uppercase
        group-hover:-translate-y-full group-hover:opacity-0
        ${textColor}
      `}
      >
        {label}
      </p>
      <p
        className={`
        m-0
        absolute
        [transform-origin:bottom_center]
        [transform:rotateX(-90deg)_translateY(9px)]
        transition-all duration-[750ms]
        [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
        pointer-events-none uppercase
        opacity-0
        group-hover:opacity-100
        ${textColor}
      `}
      >
        {label}
      </p>
    </div>
  );
}

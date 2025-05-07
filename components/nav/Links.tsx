"use client";

import Link from "next/link";
import { motion } from "motion/react";

const LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];

const FOOTER_LINKS = [
  {
    label: "norafudev@gmail.com",
    path: "mailto:norafudev@gmail.com",
  },
  {
    label: "Osaka 10:30 AM",
    path: "https://www.linkedin.com/in/norafudev/",
  },
];

const perspective = {
  initial: { opacity: 0, rotateX: 90 },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    transition: { delay: 0.4 + i * 0.1, ease: "easeInOut" },
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

const slideIn = {
  initial: { opacity: 0, y: 5 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.75 + i * 0.06 },
  }),
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.2 } },
};

const Links = ({
  setIsActive,
}: {
  setIsActive: (value: boolean | ((prevState: boolean) => boolean)) => void;
}) => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <ul className="flex flex-col gap-2 pt-12 text-xl">
        {LINKS.map((item, index) => {
          const { label, path } = item;
          return (
            <motion.li
              key={label}
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={path} onClick={() => setIsActive(false)}>
                {label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-1">
        {FOOTER_LINKS.map((item, index) => {
          const { label, path } = item;
          return (
            <motion.li
              key={label}
              custom={index}
              variants={slideIn}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-xs"
            >
              <Link href={path} onClick={() => setIsActive(false)}>
                {label}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;

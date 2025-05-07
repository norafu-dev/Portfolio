"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Button from "./Button";
import Links from "./Links";

const variants = {
  open: {
    width: 220,
    height: 268,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    y: 0,
    x: 0,
  },
  closed: {
    width: 60,
    height: 28,
    transition: { duration: 0.75, delay: 0.15, ease: [0.76, 0, 0.24, 1] },
    y: 8,
    x: -8,
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative">
      <Button isActive={isActive} setIsActive={setIsActive} />

      <motion.div
        className="rounded-md bg-secondary"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Links setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;

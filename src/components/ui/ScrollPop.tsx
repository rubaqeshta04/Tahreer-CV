import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollPopProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollPop({ children, className, delay = 0 }: ScrollPopProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.9, rotateX: 5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 95, damping: 20, delay }
      }
      style={{ transformPerspective: 900, transformOrigin: "center bottom" }}
    >
      {children}
    </motion.div>
  );
}

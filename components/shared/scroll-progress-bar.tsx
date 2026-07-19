"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * components/shared/scroll-progress-bar.tsx
 * Fine barre dorée en haut de l'écran indiquant la progression de lecture.
 * Détail premium visible sur les pages longues (blog, soins).
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-accent"
      aria-hidden="true"
    />
  );
}

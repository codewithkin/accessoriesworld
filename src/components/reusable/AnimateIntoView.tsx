"use client";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const AnimateIntoView = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only triggers once when the element enters the viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIntoView;

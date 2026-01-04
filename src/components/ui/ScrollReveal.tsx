import { motion, useInView, UseInViewOptions, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  mode?: "fade-up" | "fade-in" | "scale-up" | "slide-left";
  viewport?: UseInViewOptions;
}

export const ScrollReveal = ({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
  duration = 0.6,
  mode = "fade-up",
  viewport = { once: true, margin: "0px 0px -50px 0px" },
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    switch (mode) {
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-up":
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

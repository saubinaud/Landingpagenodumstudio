import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    glowColor?: string;
}

export function AnimatedCard({
    children,
    className = "",
    delay = 0,
    glowColor = "#FFD700",
}: AnimatedCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.16, 1, 0.3, 1], // Custom bezier for premium feel
            }}
            whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
            }}
            className={`
        relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        border border-white/10
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.5)]
        group
        ${className}
      `}
            style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 20px 50px -20px rgba(0,0,0,0.5)`,
            }}
        >
            {/* Glow effect on hover */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${glowColor}20, transparent 50%)`,
                }}
            />

            {/* Top border glow */}
            <div
                className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `linear-gradient(90deg, transparent, ${glowColor}60, transparent)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

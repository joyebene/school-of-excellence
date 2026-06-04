'use client';

import { motion, useMotionTemplate, useMotionValue, MotionProps } from 'framer-motion';
import { MouseEvent } from 'react';

interface SpotlightCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className, ...rest }: SpotlightCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl border border-white/30 group ${className}`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.25),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 p-4 sm:p-8 md:p-10">
        {children}
      </div>
    </motion.div>
  );
}
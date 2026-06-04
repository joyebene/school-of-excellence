'use client';

import { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';

type AnimatedCounterProps = {
  end: number;
  start?: number;
  duration?: number;
};

const AnimatedCounter = ({ end, start = 0, duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(start, end, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [start, end, duration]);

  return <motion.span ref={ref} />;
};

export default AnimatedCounter;
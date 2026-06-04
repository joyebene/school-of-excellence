'use client';

import { motion, TargetAndTransition, Transition } from 'framer-motion';
import { CSSProperties } from 'react';

type Shape = {
  style: CSSProperties;
  animate: TargetAndTransition;
  transition: Transition;
};

const FloatingShapes = () => {
  const shapes: Shape[] = [
    // Shape 1: Large Circle
    {
      style: {
        width: '80px',
        height: '80px',
        top: '15%',
        left: '10%',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
      },
      animate: {
        y: [0, -20, 0, 10, 0],
        x: [0, 10, 0, -15, 0],
      },
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    // Shape 2: Small Square
    {
      style: {
        width: '50px',
        height: '50px',
        top: '30%',
        right: '15%',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
      },
      animate: {
        y: [0, 25, 0, -10, 0],
        x: [0, -15, 0, 20, 0],
        rotate: [0, 90, 180, 270, 360],
      },
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    // Shape 3: Medium Circle
    {
      style: {
        width: '60px',
        height: '60px',
        bottom: '20%',
        left: '25%',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.06)',
      },
      animate: {
        y: [0, -15, 0, 20, 0],
        x: [0, 20, 0, -10, 0],
      },
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
    // Shape 4: Rectangle
    {
        style: {
          width: '100px',
          height: '40px',
          bottom: '10%',
          right: '20%',
          background: 'rgba(255, 255, 255, 0.07)',
          borderRadius: '20px',
        },
        animate: {
          y: [0, 15, 0, -20, 0],
          x: [0, -25, 0, 10, 0],
        },
        transition: {
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
  ] as const;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={shape.style}
          animate={shape.animate}
          transition={shape.transition}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
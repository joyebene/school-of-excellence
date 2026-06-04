"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const items = [
  "Academic Excellence",
  "First Class Pharmacology Graduate",
  "Leadership Development",
  "Technology & Innovation",
  "Blockchain Certification",
  "Founder of School of Excellence",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function JourneyTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-20">
          Journey of Impact
        </h2>

        <div ref={ref} className="relative">
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 sm:left-5 top-0 bottom-0 w-1 bg-blue-600 origin-top"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex gap-6 mb-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 shrink-0"
                />

                <div className="bg-white rounded-2xl p-6 shadow">
                  <h3 className="font-semibold text-lg sm:text-xl">{item}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
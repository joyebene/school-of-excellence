"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderStory() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="text-blue-600 uppercase tracking-widest text-sm sm:text-base font-semibold"
          >
            His Story
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mt-4"
          >
            Building Excellence Through Purpose
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 sm:text-lg leading-relaxed text-zinc-600"
        >
          <motion.p variants={itemVariants}>
            John Godwin is a visionary leader, educator, and innovator committed
            to raising a generation of excellent students and purpose-driven
            young professionals.
          </motion.p>

          <motion.p variants={itemVariants}>
            A First Class graduate of Pharmacology, John has consistently
            demonstrated a passion for academic excellence, leadership, and
            transformative learning.
          </motion.p>

          <motion.p variants={itemVariants}>
            Over the years, he has built leadership capacity across various
            spheres and cultivated a strong reputation for empowering others
            through knowledge, mentorship, and innovation.
          </motion.p>

          <motion.p variants={itemVariants}>
            As Founder of School of Excellence, he has trained and mentored
            numerous students in academics, technology, and innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
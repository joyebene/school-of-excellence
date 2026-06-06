"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import FloatingLogos from "../FloatingLogos";
import FloatingShapes from "../FloatingShapes";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderHero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden pt-10 md:pt-auto grid-pattern">
        <FloatingLogos />
        <FloatingShapes />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb30,transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-amber-400 text-sm sm:text-base font-semibold"
          >
            Meet The Founder
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 md:mt-6"
          >
            John Godwin
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/70 mt-8 max-w-xl"
          >
            Visionary Leader • Educator • Innovator
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-8 sm:text-lg text-white/70 leading-relaxed"
          >
            Committed to raising a generation of excellent students and
            purpose-driven young professionals through learning, innovation, and
            mentorship.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px]" />

          <Image
            src="/founder2-img.jpeg"
            alt="John Godwin"
            width={200}
            height={100}
            className="relative z-10 rounded-full w-full h-80 sm:w-fit md:w-full sm:mx-auto sm:h-100 md:h-150 object-cover shadow-2xl mb-10 md:mb-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
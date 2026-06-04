"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const quote =
  "Excellence is not a destination. It is a daily commitment to learning, growth, innovation, and purposeful leadership.";
const words = quote.split(" ");

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    title: "Excellence",
    description:
      "Excellence is a habit developed through discipline, consistency, and intentional growth.",
  },
  {
    title: "Innovation",
    description:
      "The future belongs to those who can think creatively, solve problems, and embrace emerging opportunities.",
  },
  {
    title: "Purpose",
    description:
      "True success comes from aligning talents, values, and actions toward meaningful impact.",
  },
];

const pillarContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const pillarItemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Philosophy() {
  return (
    <section className="relative py-32 overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb10,transparent_40%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 uppercase tracking-[0.3em] font-semibold text-sm sm:text-base">
            Philosophy & Vision
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            The Belief Behind The Mission
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative bg-linear-to-br from-slate-900 via-slate-950 to-black rounded-[30px] sm:rounded-[40px] p-5 py-8 sm:p-10 md:p-16 text-white shadow-2xl"
        >
          <Quote className="absolute top-8 left-8 w-10 h-10 sm:w-16 sm:h-16 text-blue-500/40" />

          <motion.blockquote
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-xl md:text-3xl font-semibold leading-relaxed text-center max-w-4xl mx-auto"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.blockquote>

          <div className="mt-12 w-24 h-1 bg-linear-to-r from-blue-500 to-amber-400 mx-auto rounded-full" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed"
          >
            John believes that every student possesses untapped potential.
            Through the right environment, mentorship, discipline, and exposure
            to innovation, young people can become leaders, creators, and
            problem-solvers who positively transform society.
          </motion.p>
        </motion.div>

        <motion.div
          variants={pillarContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={pillarItemVariants}
              className="rounded-3xl border border-zinc-200 p-8 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-zinc-600">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Brain,
  Lightbulb,
  Crown,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Build strong academic foundations and intellectual discipline.",
  },
  {
    icon: Brain,
    title: "Think",
    desc: "Develop critical thinking and problem-solving abilities.",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    desc: "Transform ideas into meaningful solutions and opportunities.",
  },
  {
    icon: Crown,
    title: "Lead",
    desc: "Cultivate confidence, influence, and purposeful leadership.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    desc: "Create positive change in communities and the world.",
  },
];

export default function ExcellenceFramework() {
  const variantsLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const variantsRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-32 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm sm:text-base">
            Excellence Framework
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            How We Transform Potential Into Excellence
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-600 via-purple-500 to-amber-500 hidden md:block" />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={i % 2 === 0 ? variantsLeft : variantsRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-300">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">{step.title}</h3>

                    <p className="text-zinc-600">{step.desc}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-20 h-20 rounded-full bg-white shadow-xl border border-gray-300 items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
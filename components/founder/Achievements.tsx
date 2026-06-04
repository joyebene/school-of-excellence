"use client";

import {
  Award,
  GraduationCap,
  Rocket,
  BadgeCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const achievements = [
  {
    icon: GraduationCap,
    title: "First Class Graduate",
  },
  {
    icon: Award,
    title: "Educator & Mentor",
  },
  {
    icon: BadgeCheck,
    title: "Certified Blockchain Professional",
  },
  {
    icon: Rocket,
    title: "Innovation Advocate",
  },
];

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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <section className="py-32 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Achievements & Credentials
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="rounded-3xl border border-gray-200 p-8 text-center hover:-translate-y-2 transition-all"
            >
              <item.icon className="w-14 h-14 text-blue-600 mx-auto mb-5" />

              <h3 className="font-semibold text-xl">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
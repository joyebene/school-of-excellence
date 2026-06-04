"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const impactAreas = [
  {
    title: "Academics",
    description: "Helping students develop excellence and learning mastery.",
  },
  {
    title: "Technology",
    description:
      "Introducing young minds to innovation and emerging technologies.",
  },
  {
    title: "Leadership",
    description: "Building purpose-driven leaders for future generations.",
  },
];

const ImpactCard = ({ title, description }: { title: string; description: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass rounded-3xl p-10 relative h-52"
    >
      <div
        style={{
          transform: "translateZ(85px)",
        }}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

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

export default function AreasOfImpact() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-20"
        >
          Areas of Impact
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {impactAreas.map((area) => (
            <motion.div key={area.title} variants={itemVariants}>
              <ImpactCard
                title={area.title}
                description={area.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
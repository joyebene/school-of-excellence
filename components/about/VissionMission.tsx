"use client";

import { Target, Rocket } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import { Variants } from "framer-motion";

export default function VisionMission() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-amber-500 text-transparent bg-clip-text"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-pan 3s ease infinite",
            }}
          >
            Guiding Principles
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <SpotlightCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="absolute -top-6 -right-6">
                <Target className="w-28 h-28 text-blue-600/10" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">Our Vision</h3>
            <p className="sm:text-lg text-zinc-600 leading-relaxed">
              To nurture excellence in students and young professionals through
              learning, innovation, and intentional personal development.
            </p>
          </SpotlightCard>

          <SpotlightCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
           <div className="absolute -top-6 -right-6">
                <Rocket className="w-28 h-28 text-purple-500/10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8">Our Mission</h3>
              <p className="sm:text-lg text-zinc-600 leading-relaxed">
                To equip students with transformative learning, practical skills, and mentorship
                to excel, innovate, and lead with purpose.
              </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
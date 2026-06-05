"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingShapes from "../FloatingShapes";
import FloatingLogos from "../FloatingLogos";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f640,transparent_35%)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        <FloatingLogos />
        <FloatingShapes />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <h1 className="mt-6 text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Building Future Leaders Through
            <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Learning & Innovation
            </span>
          </h1>

          <p className="mt-8 sm:text-lg md:text-xl text-white/70 max-w-xl">
            We are more than a learning platform. We are a movement committed
            to raising students and young professionals who lead with
            excellence, purpose, and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          <div className="relative h-60 sm:h-70 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
              alt="Team working"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-48 sm:h-56 mt-20 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
              alt="Laptop and coffee"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
              alt="Conference room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-60 sm:h-70 rounded-3xl overflow-hidden mb-5">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop"
              alt="Office workspace"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}